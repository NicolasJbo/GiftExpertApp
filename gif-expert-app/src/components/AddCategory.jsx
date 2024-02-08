import { useState } from 'react';
import { Button } from'bootstrap-4-react';


export const AddCategory = ({ newCategory,remCategory }) => {

    const [ inputValue, setInputValue ] = useState('one piece');

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
 
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) {
            log();
        }else {// setCategories( categories => [ inputValue, ...categories ]);
        setInputValue('');
        newCategory( inputValue.trim() );
        }

        
    }
    function handleRemove(value) {
        remCategory(value);
        setInputValue('');
    }

    return (
        <><form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange} />

        </form><Button primary className="m-1"  onClick={() => { handleRemove(inputValue); } }>remove</Button></>
    )
}