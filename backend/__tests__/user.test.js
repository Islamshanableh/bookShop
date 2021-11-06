const mongoose = require("mongoose");
const app = require("./main");
const request = require("supertest");

const User = require("./db/models/users");
afterAll(async () => {
  await Posts.remove();
  mongoose.connection.close();
});
afterAll(async () => {
mongoose.connection.close();
});
​
describe("Testing User Model", () => {
    it("check if the model defined", () => {
      expect(User).toBeDefined();
    });

    it(" should save a user", async () => {
        const userInfo = {
          firstName:"kulthum",
          lastName:"radi",
country:"jordan",
phoneNumber:"1234567",
BirthDate:"423415",
email:"kokkj",
password:"123"
}

const user = new User(userInfo);
await user.save();
const checker = await User.findOne({ firstName:"kulthum"})
expect(checker.firstName).toEqual(userInfo.firstName);
});
});


describe("testing User API", () => {
    const userInfo = {
        firstName:"kulthum",
        lastName:"radi",
country:"jordan",
phoneNumber:"1234567",
BirthDate:"423415",
email:"kokkj.com",
password:"123"
}



const userLogin = {
  email: "kokkj.com",
  password: "123",
};
let theUser
let logedInUser
let wantedUser
it("able to create a user ", async () => {

     theUser = await request(app).post("/").send(userInfo);
     logedInUser =await request(app).post("/").send(userLogin)
    // const token =logedInUser.body.token
    expect(typeof theUser.body).toEqual(typeof userInfo )
    expect(theUser.statusCode).toBe(201);
    expect(theUser.body).toHaveProperty("_id")
    expect(theUser.body.firstName).toBe(userInfo.firstName)

  });


  it ("able to get a user " , async () => {

    const token =logedInUser.body.token
    wantedUser=await request(app).post("/").set("Authorization", `Bearer ${token}`);
    expect(typeof wantedUser.body.user ).toEqual(typeof  userInfo )
    expect(wantedUser.statusCode).toBe(200);
    expect( wantedUser.body.user ).toBe(  userInfo )
  })


  it("able to update a user ", async () => {

    const token =logedInUser.body.token
    updatedUserInfo = {
      country:"irbid"
    }
    wantedUser= await request(app)
    .put("/update").send(updatedUserInfo).set("Authorization", `Bearer ${token}`);
    expect(typeof wantedUser.country ).toEqual(typeof updatedUserInfo.country  )
    expect(wantedUser.statusCode).toBe(200);
    expect( wantedUser.country  ).toBe( updatedUserInfo.country  )

  }
    )
});



