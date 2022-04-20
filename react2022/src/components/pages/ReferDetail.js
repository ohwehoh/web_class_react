import React from 'react'
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import { gsap } from "gsap";

class ReferDetail extends React.Component {
    componentDidMount(){
        this.mainAnimation();
    }

    mainAnimation = () => {
        setTimeout(() => {
            gsap.to("#header", {
                duration: 0.8,
                top: 0,
            });
            gsap.to("#footer", {
                duration: 0.8,
                bottom: 0,
                delay: 0.2,
            });
        }, 10)
    }

    render(){
        return (
            <>
                <Header color="light"/>
                <Contents color="light">
                </Contents>
                <Footer color="light"/>
            </>
        )
    }
}

export default ReferDetail