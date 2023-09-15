import React from 'react';
import './App.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import Home from "./Compo/Home"
import Contact from "./Compo/Contact"
import ContextData from './Compo/ContextData';
import AddData from './Compo/AddData';
import Data from "./Compo/StudentInfo";
import AddNew from './Compo/AddNew';
import Edit from './Compo/Edit';
import { useState } from 'react';


function App() {
  let [data, SetData] = useState(Data);
  return (

<div className='App'>
      <div className='Navbar'>
        <NavLink to="/" style={({ isActive }) => {
          return (isActive) ? { color: "green" } : { color: "white" }
        }} className='links'>Home</NavLink>
        <NavLink to="/students" style={({ isActive }) => {
          return (isActive) ? { color: "green" } : { color: "white" }
        }} className='links'>Students</NavLink>
        <NavLink to="/contact" style={({ isActive }) => {
          return (isActive) ? { color: "green" } : { color: "white" }
        }} className='links'>Contact US</NavLink>
      </div>


      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/students" element={
            <ContextData.Provider value={{entries : data , UpdateFun : SetData}}>
             <AddData/>
           </ContextData.Provider>
          } />


            <Route path="/addNew" element={
            <ContextData.Provider value={{entries:data ,UpdateFun :SetData}}>
             <AddNew/>
           </ContextData.Provider>
          } />


          <Route path="/students/editStudent" element={
            <ContextData.Provider value={{entries:data ,UpdateFun :SetData}}>
            <Edit/>
           </ContextData.Provider>
          } />


          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>


    </div>
  );
}

export default App;