import React from "react";
import BestWork1 from '../assets/img/Best-work1.jpg';
import BestWork2 from '../assets/img/Best-work2.jpg';
import BestWork3 from '../assets/img/Best-work3.jpg';

const imgs = [BestWork1,BestWork2,BestWork3];


function BestWorkIndex(){
    return(
        <React.Fragment>
        {imgs.map( img => (
            <img  loading="lazy" src={img} className="best-work-cards--img" alt="best work" />
        ))};
        </React.Fragment>
       
   
);
    
}

export {BestWorkIndex}