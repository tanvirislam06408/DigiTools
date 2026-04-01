import React from 'react';
import PricingOne from './PricingOne';
import Pro from './Pro';
import EnterPrice from './EnterPrice';

const Pricing = () => {
    return (
        <div className='my-32 container mx-auto'>
            <div className="text-center">
                <h1 className='text-5xl font-extrabold'>Simple, Transparent Pricing</h1>
                <p className='text-[16px] text-gray-500 mt-3.5 mb-10'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch px-4'>
                <PricingOne />
                <Pro />
                <EnterPrice />
            </div>
        </div>
    );
};

export default Pricing;