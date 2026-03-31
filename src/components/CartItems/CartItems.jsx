import React from 'react';

const CartItems = ({cart,setCart}) => {

    const filteredCardData=(id)=>{
        const filteredCart=cart.filter(card=>card.id !== id);
        setCart(filteredCart);
        
        
    }
    return (
        <div className='container mx-auto mb-5 border-gray-200 border-2 rounded-2xl p-5 mt-6'>
            <h1 className='text-2xl font-bold'>Your Cart</h1>
            

            <div className="space-y-3">
                {
                cart.map(c=>{
                    return  <div className='flex justify-between rounded-lg items-center bg-[#F9FAFC] shadow-xl py-3 px-5'>
                <div className='flex items-center gap-7'>
                    <span className='text-xl'>{c.icon}</span>
                    <div>
                        <h1 className='font-semibold text-2xl'>{c.name}</h1>
                        <p className='text-gray-500 font-medium mt-1.5'>$26</p>
                    </div>
                </div>
                <div>
                    <p className='text-xl text-red-500 font-medium' onClick={()=>{filteredCardData(c.id)}}>Remove</p>
                </div>
            </div>
                })
            }
            </div>
        </div>
    );
};

export default CartItems;