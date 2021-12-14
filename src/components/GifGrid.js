import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
    
    const { data:img, loading } = useFetchGifs(category);
    
    //getGifs();

    return (
        <>
            <h3 className='animate__animated animate__bounce'>{ category }</h3>

            { loading && <p className='animate__animated animate__flash'>Loading</p> }

            <div className='card-grid'>

                {
                    img.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            {...img}
                        />
                    ))
                }
                

            </div>
        </>
    )
}
