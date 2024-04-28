import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GiftExpertApp = () => {
    const [ categorias, setCategorias ] = useState([]);

    const onAddCateg = ( newCateg ) => {
        if ( categorias.includes(newCateg) ) return;
        setCategorias([ newCateg, ...categorias ]);
    };

    const onMinCateg = () => {
        setCategorias([]);
    }
 
    return (
        <>
            <h1>GiftExpertApp</h1>            
            <AddCategory onNewValue={ (e) => onAddCateg(e) } /> 
            {/* <button className="bgBusca" onClick={ (e) => onAddCateg(e)}>Enviar</button>  */}
            <button className="bgClear" onClick={ (e) => onMinCateg(e) }>Limpiar</button> 
            { categorias.map( ( cat ) => ( <GifGrid key={ cat } categoria={ cat }/> ) ) }                                    
        </>
    )
}