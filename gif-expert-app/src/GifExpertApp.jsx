import React, { useEffect, useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifList } from "./components/GifList";
import useScroll from "./hooks/useScroll";
import { Button } from'bootstrap-4-react';

export const GifExpertApp = () => {

    const [categories,setCategories] = useState([]);
    const {scrollTo }=useScroll();
    const [notFound,setnotFound] = useState(false);
    
    
    function addCategory(newCategory){
        setCategories([...categories,newCategory]);
    }
    function removeCategory(removeCategory){
        if(categories.includes(removeCategory)) {
            const categoriUpdate =categories.filter(cat => cat!==removeCategory);
            setCategories(categoriUpdate);
        }else{
            setnotFound(true);
            setTimeout(()=>{setnotFound(false)},3000)
        }
       
        
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
                {notFound &&
                    <p>No se encontro el gifs para eliminarlo.</p>
                }

               
            
           
            <AddCategory newCategory ={(value)=>addCategory(value)} remCategory ={(remove) =>removeCategory(remove)} />
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