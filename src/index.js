import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import './App.css';

import Layout from "./Layout";



import GetAllStudent from "./GetAllStudent";
import DetailStudent from "./DetailStudent";
import AddStudent from "./AddStudent";
import EditDetail from "./EditDetail";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/students" element={<GetAllStudent/>}></Route>
          <Route path="/studentDetail/:id" element={<DetailStudent />}></Route>
          <Route path="/students/add" element={<AddStudent />}></Route>
          <Route path="/students/edit/:id" element={<EditDetail />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>);