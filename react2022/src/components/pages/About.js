//js, jsx라고 써도됨
import React from 'react';
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import ContTitle from '../layout/ContTitle';
import AboutCont from '../includes/AboutCont';
import Contact from '../layout/Contact';

function About(){
    return (
        <>
            <Header color="light"/>
            <Contents color="light">
                <ContTitle title={["about","me"]} color="light"/>
                <AboutCont />
            </Contents>
            <Contact/>
            <Footer color="light"/>
        </>
    )
}
export default About;