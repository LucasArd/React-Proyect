import React from "react";
import Gallery2 from "../components/Gallery2/Gallery2";
import 'bootstrap/dist/css/bootstrap.min.css';
import SecItemListContainer from "../components/ItemListContainer/SecItemListContainer";

const CalleView = () =>{
    return (
        <>
            <Gallery2/>
            <SecItemListContainer greeting={"BIENVENIDOS"}/>
        </>
    )
}

export default CalleView;