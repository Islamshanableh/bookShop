import React, { useState, useContext  } from "react";
import "./search.css";
import { Route, useHistory } from "react-router-dom";
import { Result } from "./result";
import { resultContext,resultS } from "../../App";


export const Search = () => {
  
 
  const setSearch=useContext(resultContext)
  const valueOfSearch=useContext(resultS) 


  const history = useHistory();
  const handleChange = (e) => {
    setSearch.setValue(e.target.value);
    
    
    
  };

  

  return (
    <div className="">
      <div className="searchBox">
        <select onChange={handleChange}>
          <option value="Select">Select</option>
          <option value="type">Type</option>
          <option value="name">Name</option>
          <option value="author">Author</option>
        </select>

        <input
          className="searchInput"
          type="text"
          name=""
          placeholder="Search"
          onChange={(e)=>{
            valueOfSearch.setSearchVal(e.target.value)
          }}
        />
        <button
          className="searchButton"
          onClick={() => {
            history.push("/result");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </div>
     
     
    </div>
  );
};
