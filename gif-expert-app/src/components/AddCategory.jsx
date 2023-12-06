import { useState } from "react"

export const AddCategory = ( {newCategory}) => {

    function onInputChange(event){
            setInputValue(event.target.value)
    }
    function onSubmit(event){
        event.preventDefault();
        if(inputValue.trim().length >= 1 ){
           // setCategories(categories => [...categories,inputValue]);
        //Disparo evento al padre con el valor
           newCategory(inputValue);
            setInputValue('');
        }

}
    
const [inputValue, setInputValue] = useState('')
  return (
         <form onSubmit={ onSubmit} >
            <input
            type="text"
            placeholder="Buscar Gifs"
            value={inputValue}
            onChange={(event)=>{onInputChange(event)}}
            />
        </form>
  )
}
