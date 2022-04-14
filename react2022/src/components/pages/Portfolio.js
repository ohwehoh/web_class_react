import React from 'react';
import Header from "../includes/Header";
import Contents from "../includes/Contents";
import PortCont from "../includes/PortCont";
import Footer from "../includes/Footer"
import ContactCont from '../includes/ContactCont';
import ContTitle from '../includes/ContTitle';

function Portfolio(){
    return (
        <>
        <Header />
        <Contents>
            <ContTitle title={["portfolio","site"]}/>
            <PortCont />
            <ContactCont/> 
        </Contents>
        <Footer />
    </>
    )
}
export default Portfolio;