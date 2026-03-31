import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Count from '../components/Count/Count';
import ProductModels from '../components/ProductModels/ProductModels';
import Banner from '../components/Banner/Banner';

const MainLayout = () => {
    const [cartCount, setCartCount] = useState(0);
    return (
        <div>
            <Navbar cartCount={cartCount} />
            <Banner />
            <Count />
            <ProductModels setCartCount={setCartCount} />
        </div>
    );
};

export default MainLayout;