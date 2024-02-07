import React, { useEffect, useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifList } from "./components/GifList";
import useScroll from "./hooks/useScroll";
import { Button } from'bootstrap-4-react';

export const GifExpertApp = () => {

    const [categories,setCategories] = useState(['One Piece','Dragon Ball']);
    const {scrollTo }=useScroll();
    
    function addCategory(newCategory){
        setCategories([...categories,newCategory]);
    }

    return (
        <>
            <h1 id="top">Gif Expert App.</h1>
            
             
                <div className="navbar navbar-expand-md navbar-dark fixed-top bg-dark"> 
                <Button primary className="m-1"onClick={()=>{scrollTo("top")}}>Top</Button>
                    { 
                     categories.map((cat)=>(             
                        <Button primary key={cat} className="m-1"onClick={()=>{scrollTo(cat.replace(/\s+/g, '-').toLowerCase())}}>{cat}</Button>
                    ))}
                </div>
               
            
           
            <AddCategory newCategory ={(value)=>addCategory(value)} />
            { 
                categories.map( ( category ) => (
                    <GifList 
                    
                        key={ category } 
                        category={ category } 
                        />
                ))
            }
        
           
           
        </>
    );
}