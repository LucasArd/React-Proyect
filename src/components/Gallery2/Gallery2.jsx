import React from "react";
import './Gallery2.css';
import useFetch from "../../utils/useFetch";

const BASE_URL = "https://my-json-server.typicode.com/LucasArd/Api_sntgtrg2/products2";

const Gallery2 = () => {
    const [data2] = useFetch(BASE_URL);
    
    console.log(data2);

    return (
        <>
        <div className="gallery-container">
            <div className="gallery">
                {data2.map((item, index) => {
                    return (
                        <div className="pics" key={index}>
                            <img src={item.img} alt="" className="imgs"/>
                        </div>
                    )
                })};
            </div>
        </div> 
        
        </>
    )
}

export default Gallery2;

