import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter, Route, Router, Routes } from "react-router-dom";



// import Header from "./Header";
import Layout from "./Layout";
import GetAllMatch from "./GetAllMatch";
import DetailMatch from "./DetailMatch";
import AddMatch from "./AddMatch";
import EditMatch from "./EditMatch";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<>
    {/* <Header /> */}
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/getAll" element={<GetAllMatch />}></Route>
                <Route path="/getAlldetail/:id" element={<DetailMatch />}></Route>
                <Route path="/getAll/add" element={<AddMatch />}></Route>
                <Route path = "/getAll/edit/:id" element={<EditMatch />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
</>)