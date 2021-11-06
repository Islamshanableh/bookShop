const mongoose = require("mongoose");
const app = require("../main");
const request = require("supertest");
mongoose.connect("mongodb://localhost:27017/testBookShop");
const Book = require("../db/models/book");
const User = require("../db/models/user")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config()
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTg2NDcyZmI2NmVmNTEyZjBmMjQ4OTciLCJmaXJzdE5hbWUiOiJvZGF1IiwiZW1haWwiOiJvZGFpQGdtYWlsLmNvbSIsImRhdGVPZkJpcnRoZGF5IjoiMjAyMC0wOC0xMlQwMDowMDowMC4wMDBaIiwiY2FydCI6W10sImlhdCI6MTYzNjE5MDA5MywiZXhwIjozNzYzNjE5MDA5M30.ELT8p8eE65FVN-Szs9ZN-1Uix_9l8u236pLghSC6YSI
beforeAll(async () => {
    await Book.remove();
  });

  afterAll(async () => {
    await Book.remove();
    mongoose.connection.close();
  });

  describe("Testing Book Model", () => {
    let token = ""
    let userId 
    let bookId
    it("check if the model defined", () => {
      expect(Book).toBeDefined();
    });

    it("Creat New User",async()=>{
      const newUser = {
        firstName:"odai",
        lastName:"taha" , 
        country:"amman",
        phoneNumber:"7878787",
        BirthDate:"2020-08-12",
        email:"odaigmail@gmail.com",
        password:"123"
      }
      const odai =  new User(newUser)
      await odai.save()
      .then(async(result)=>{
       
        userId = result._id
        expect(result.firstName).toEqual(newUser.firstName);
        expect(result.email).toEqual(newUser.email.toLowerCase());
        const valid = await bcrypt.compare(newUser.password, result.password);
        expect(valid).toBe(true);
        expect(result).toHaveProperty("_id");
      })
      
    })

    it("login",async()=>{
    const user = 
      {
        email:"odaigmail@gmail.com",
        password: "123"
      }
    await request(app).post("/login").send(user)
    .then ((result)=>{
      token = result.body.token
      
    })
   
    })
    test(" user add new Book ", async () => {
      const newBook = {
        image:"ddddddddddddddd",
        name:"good days" ,
        type:"Action" ,
        author:"odai" ,
        description:"great Book" , 
        language: "Arabic" ,
        price: 22 ,
        userId: userId
      }
      const newBookTest = new Book(newBook)
      await newBookTest.save()
      .then((result)=>{
        bookId = result._id
        expect(result.image).toEqual(newBook.image);
        expect(result.description).toEqual(newBook.description);
        expect(result).toHaveProperty("_id");
      })
      
    });

    it("my book",async ()=>{
     await request(app).get("/books/myBook")
       .set("Authorization", `Bearer ${token}`)
       .then((result)=>{
         console.log(result.book);
       })
    })
  });