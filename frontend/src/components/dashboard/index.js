import React, { useState, useContext, useEffect } from "react";
import { userContext } from "../../App";
import axios from "axios";

const Dashboard = () => {
	const state = useContext(userContext);
	const token = state.token;
	const [book, setBook] = useState([]);
	const [image, setImage] = useState();
	const [name, setName] = useState();
	const [type, setType] = useState();
	const [author, setAuthor] = useState();
	const [language, setLanguage] = useState();
	const [price, setPrice] = useState();
	const [description, setDescription] = useState();
	const [success, setSuccsess] = useState(null);
	const getAll = ()=>{
		axios
		.get(
		  "http://localhost:5000/books/myBook",
	
		  {
			headers: {
			  Authorization: `Bearer ${token}`,
			},
		  }
		)
		.then((res) => {
		   setBook([...res.data.book]);
		  
		});
	  }
	  useEffect(() => {
		axios
		  .get(
			"http://localhost:5000/books/myBook",
	
			{
			  headers: {
				Authorization: `Bearer ${token}`,
			  },
			}
		  )
		  .then((res) => {
			 setBook([...res.data.book]);
			
		  });
	  }, []);
	return <div className="App">Dashboard component</div>;
};

export default Dashboard;
