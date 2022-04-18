import React from 'react';
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import ContTitle from '../layout/ContTitle';
import ReferenceCont from '../includes/ReferenceCont';
import Contact from '../layout/Contact';
import Footer from "../layout/Footer";

function Reference(){
    return (
        <>
            <Header color="light"/>
            <Contents color="light">
                <ContTitle title={["reference","book"]} color="light"/>
                <ReferenceCont />
            </Contents>
            <Contact/>
            <Footer color="light"/>
        </>
    )
}
export default Reference;