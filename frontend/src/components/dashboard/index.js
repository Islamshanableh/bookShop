import React, { useState, useContext, useEffect } from "react";
import { userContext } from "../../App";
import axios from "axios";

const Dashboard = () => {
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
