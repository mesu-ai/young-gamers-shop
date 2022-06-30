import React from 'react';
import FlashSales from './flashSales/FlashSales';
import Categories from './categories/Categories';
import CameraZone from './cameraZone/CameraZone';
import HomeViewPort from './homeViewPort/HomeViewPort';
import AllProducts from './allproducts/AllProducts';
import Footer from '../../components/shared/footer/Footer';


const Home = () => {


    return (
        <>
        <HomeViewPort></HomeViewPort>
        <FlashSales></FlashSales>
        <Categories></Categories>
        <CameraZone></CameraZone>
        <AllProducts></AllProducts>

        <Footer></Footer>
        </>

    );
};

export default Home;