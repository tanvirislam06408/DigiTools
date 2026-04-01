import React, { useState } from 'react';
import ModelProducts from '../ModelProducts/ModelProducts';
import CartItems from '../CartItems/CartItems';

const ProductModels = ({ setCartCount }) => {
    const [btnActive, setBtnActive] = useState('tab1');
    const [cart, setCart] = useState([]);
    
    setCartCount(cart.length);

    return (
        <div>
            <div className="flex justify-center flex-col items-center mt-20 space-y-4 px-4" >
                <h1 className='font-extrabold text-4xl'>Premium Digital Tools</h1>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>

                {/* tabs */}
                <div role="tablist" className="tabs tabs-box gap-2.5 rounded-4xl px-3 space-x-2.5">
                    <a role="tab" className={`tab tab-active text-[16px] rounded-4xl px-6 ${btnActive === 'tab1' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-bold text-white ' : ''}`} onClick={() => { setBtnActive('tab1') }}>Products </a>

                    <a onClick={() => { setBtnActive('tab2') }} role="tab" className={`tab tab-active text-[16px] rounded-4xl px-6 ${btnActive === 'tab2' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-bold text-white ' : ''}`}>Cart {cart.length > 0 && <span>({cart.length})</span>}</a>
                </div>
            </div>


            {/* product cards */}

            {btnActive === 'tab1' && <ModelProducts cart={cart} setCart={setCart} />}
            {btnActive === 'tab2' && <CartItems cart={cart} setCart={setCart} />}


        </div>
    );
};

export default ProductModels;