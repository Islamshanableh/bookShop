import React, { useState, useContext  } from "react";
import "./search.css";
import { Route, useHistory } from "react-router-dom";
import { Result } from "./result";
import { resultContext,resultS } from "../../App";
import { Dropdown, InputGroup, SplitButton, FormControl, Nav } from "react-bootstrap";
import {BsSearch} from 'react-icons/bs'

export const Search = () => {
  
 
  const setSearch=useContext(resultContext)
  const valueOfSearch=useContext(resultS) 


  const history = useHistory();
  const handleChange = (e) => {
    
    setSearch.setValue(e.target.id);
    
    
    
  };

  

  return (
    <div className="allsearch">
      <>
 

  <InputGroup className="mb-3" onChange={(e)=> valueOfSearch.setSearchVal(e.target.value)}   >
    <FormControl aria-label="Text input with dropdown button" placeholder="search" />
    <SplitButton
      variant="outline-secondary"
      title={<BsSearch/>}
      id="segmented-button-dropdown-2"
      alignRight
      onClick={() => {
        history.push("/result");
      }}
      onChange={(e)=> console.log(e.target.value)}
    >
      
      <Dropdown.Item  onClick={handleChange} id="type">Type</Dropdown.Item>
      <Dropdown.Item  onClick={handleChange} id="name">Name</Dropdown.Item>
      <Dropdown.Item  onClick={handleChange} id="author">Author</Dropdown.Item>
      
    </SplitButton>
  </InputGroup>
</>
     
     
     
    </div>
  );
};
