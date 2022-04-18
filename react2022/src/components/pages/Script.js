import React from 'react';
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import ContTitle from "../layout/ContTitle";
import ScriptCont from "../includes/ScriptCont";
import Contact from '../layout/Contact';

function Script(){
    return (
        <>
            <Header color="light"/>
            <Contents color="light">
                <ContTitle title={["script","javascript"]} color="light"/>
                <ScriptCont />
            </Contents>
            <Contact />
            <Footer color="light"/>
        </>
    )
}
export default Script;