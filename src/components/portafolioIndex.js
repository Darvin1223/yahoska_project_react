import React from "react";
import work1 from "../assets/img/work1.jpg";
import work2 from "../assets/img/work2.jpg";
import work3 from "../assets/img/work3.jpg";

const imgs = [work1,work2,work3];

function PortafolioIndex(){

   return(
   
     <div className="portafolio_index-cards">
        {imgs.map(img =>(
            <img  loading="lazy"  src={img} className="portafolio_index-cards--img" alt="Imagenes yahoska" />
        ))};
        </div>
       
   )

}


export {PortafolioIndex}