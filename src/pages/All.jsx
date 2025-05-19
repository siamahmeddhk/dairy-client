import React from 'react';
import { useLoaderData } from 'react-router';
import Singlepage from '../com/Singlepage';

const All = () => {
    const pages = useLoaderData();
 
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 space-y-3'>
                {
                    pages.map(page=><Singlepage page={page}></Singlepage>)
                }
            </div>
        </div>
    );
};

export default All;