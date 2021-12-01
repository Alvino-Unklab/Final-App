import React from 'react';
import Navigation from '../components/navigation';
import Header from '../components/header';
import Comics from '../components/comics';
import Footer from '../components/footer';

const Home = () => {
    return(
        <>
        <Navigation />
        <Header />
        <Comics />
        <Footer />
        </>
    );
}

export default Home;