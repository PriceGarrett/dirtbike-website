import React from "react";

export default function ImageCard({image}){
    return (
        <div className="image-card">
            <img className="image-card-content" src={image}/>
        </div>
    );
}