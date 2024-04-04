import React from 'react';
import Header from '../components/header/Header';
import Carousel from '../components/Slider/Carousel';
import IPhone from '../components/HotSale/components/Iphone'
import Samsung from '../components/HotSale/components/Samsung'
import Xiaomi from '../components/HotSale/components/Xiaomi';
import Footer from '../components/footer/Footer'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import { useSelector } from 'react-redux';

function HomePage(props) {
    
    return (
        <div style={{position: 'relative'}}>
            <Header></Header>
            <Carousel></Carousel>
            <IPhone></IPhone>
            <Samsung></Samsung>
            <Xiaomi></Xiaomi>
            <Footer></Footer>
            <ScrollToTop></ScrollToTop>
        </div>
    );
}

export default HomePage;