import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ categoria }) => {  
    const { images, isLoading } = useFetchGifs( categoria ); 
    
    return (
        <>
            { isLoading && ( <h2>Cargando...</h2> ) } 
            <h3>{ categoria }</h3>            
            <div className='card-grid'>
                { images.map( ( img ) => ( <GifItem key={ img.id } { ...img } /> ))}
            </div>
        </>
    )
}