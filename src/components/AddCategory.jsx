import { useState } from 'react';

export const AddCategory = ({ onNewValue }) => {
    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {        
        setInputValue( target.value );        
    }

    const onInputSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;

        //setCategorias( cat => [ inputValue, ...cat ]);
        setInputValue('');
        onNewValue( inputValue.trim() );        
    }

    return (
        <form onSubmit={ onInputSubmit }>
            <input
                type="text" 
                placeholder="Buscar Gif"
                value={ inputValue }
                onChange={ onInputChange }
            />            
        </form>        
    )
}