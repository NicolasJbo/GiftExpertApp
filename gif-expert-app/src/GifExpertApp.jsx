import React, { useEffect, useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories,setCategories] = useState(['One Piece','Dragon Ball']);
    
    function addCategory(newCategory){
        setCategories([...categories,newCategory]);
    }


    return (
        <>
            <h1>Gif Expert App.</h1>
            <AddCategory newCategory ={addCategory}/>
            
            <ol>
                <p> {
                        categories.map( category => {
                            return <li key={category}> {category}</li>
                        })

            }</p>
            </ol>
        </>
    );
}