import React from "react";
import './gallery.css';

import Img1 from '../../img/gallery1.jpg';
import Img2 from '../../img/gallery2.jpg';
import Img3 from '../../img/gallery3.jpg';
import Img4 from '../../img/gallery4.jpg';
import Img5 from '../../img/gallery5.jpg';
import Img6 from '../../img/gallery6.jpg';

const Gallery = () => {

    let data = [
        {
            id: 1,
            imgSrc: Img1,
    
        },
        {   id: 2,
            imgSrc: Img2,
        },

        {   id: 3,
            imgSrc: Img3,
        },

        {
            id: 4,
            imgSrc: Img4,
    
        },
        {   id: 5,
            imgSrc: Img5,
        },

        {   id: 6,
            imgSrc: Img6,
        },
    ]

    return(
        <>
        <div className="gallery-container">
            <div className="gallery">
                {data.map((item, index) => {
                    return (
                        <div className="pics" key={index}>
                            <img src={item.imgSrc} alt="" className="imgs"/>
                        </div>
                    )
                })};
            </div>
        </div> 
        </>

    );
};

export default Gallery;