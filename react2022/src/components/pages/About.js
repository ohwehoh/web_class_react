//js, jsx라고 써도됨
import React from 'react';
import Header from "../includes/Header";
import Contents from "../includes/Contents";
import ContTitle from '../includes/ContTitle';
import AboutCont from '../includes/AboutCont';
import Contact from '../pages/Contact';

function About(){
    return (
        <>
            <Header color="light"/>
            <Contents color="light">
                <ContTitle title={["about","me"]}color="light"/>
                <AboutCont />
            </Contents>
            <Contact/>
        </>
    )
}
export default About;