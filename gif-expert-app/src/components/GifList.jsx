import { useFetchGifs } from '../hooks/useFetchGif';
import { Gif } from './Gif';

export const GifList = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );
    
    return (
        <>
            <h3 id={category.replace(/\s+/g, '-').toLowerCase()}>{ category }</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }
            

            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <Gif 
                            key={ image.id } 
                            { ...image }
                        />
                    ))
                }
                
            </div>

        </>
    )
}