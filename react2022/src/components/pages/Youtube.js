import React from 'react';
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import ContTitle from "../layout/ContTitle";
import YoutubeCont from "../includes/YoutubeCont";
import Contact from '../layout/Contact';

function Youtube(){
    return (
        <>
            <Header />
            <Contents>
                <ContTitle title={["coding","youtuber"]}/>
                <YoutubeCont />
            </Contents>
            <Contact />
            <Footer />

        </>
    )
}
export default Youtube;