import React from 'react';
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import PortCont from "../includes/PortCont";
import Footer from "../layout/Footer"
import ContactCont from '../includes/ContactCont';
import ContTitle from '../layout/ContTitle';

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