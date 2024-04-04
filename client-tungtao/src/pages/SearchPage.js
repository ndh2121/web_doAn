import React from 'react';
import Search from '../components/Search/Search';
import Header from '../components/header/Header';
import Footer from "../components/footer/Footer";

function SearchPage(props) {
    return (
        <div>
            <Header></Header>
            <Search></Search>
            <Footer></Footer>
        </div>
    );
}

export default SearchPage;