import React from 'react';
import Create from './Create';
import Choice from './Choice';
import Start from './Start';

const Guide = () => {
    return (
        <div className='bg-gray-50 pb-28'>
            <div className='min-h-[30vh] container mx-auto mt-20 pt-28'>
            <div className="text-center">
                <h1 className='text-5xl font-extrabold'>Get Started in 3 Steps</h1>
                <p className='text-[16px] text-gray-500 mt-3.5 mb-10'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-2.5 px-4'>
                <Create />
                <Choice />
                <Start />
            </div>
        </div>
        </div>
    );
};

export default Guide;