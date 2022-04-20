import React from 'react';
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import ContTitle from "../layout/ContTitle";
import ScriptCont from "../includes/ScriptCont";
import Contact from '../layout/Contact';
import Loading from "../basics/Loading";
import { gsap } from "gsap";


// function Script(){
//     return (
//         <>
//             <Header color="light"/>
//             <Contents color="light">
//                 <ContTitle title={["script","javascript"]} color="light"/>
//                 <ScriptCont />
//             </Contents>
//             <Contact />
//             <Footer color="light"/>
//         </>
//     )
// }

class Script extends React.Component{
    state = {
        isLoading: true
    }

    mainAnimation = () => {
        gsap.set(".main__inner", {opacity: 0})
    }

    getSite = () => {
        setTimeout(()=>{
            gsap.to("#header", {
                duration: 0.8,
                top: 0,
            });
            gsap.to("#footer", {
                duration: 0.8,
                bottom: 0,
                delay: 0.4
            });
            gsap.to(".cont__title strong", {
                duration: 0.5,
                x: 0,
                y: 0,
                opacity: 1,
                delay: 1,
                ease: "sine.out"
            });
            gsap.to(".cont__title em", {
                duration: 0.5,
                x: 0,
                y: 0,
                opacity: 1,
                delay: 1.3,
                ease: "sine.out"
            });
            gsap.to(".script__inner", {
                duration: 0.6,
                opacity: 1,
                y: 0,
                delay: 1.6,
                ease: "slow(0.7, 0.7, false)"
            });
        }, 500)
    }

    componentDidMount(){
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active");
            document.querySelector("body").style.background = "#f0eeeb";
        }, 1000)
        
        setTimeout(() => {
            this.setState({isLoading:false});
            // this.mainAnimation();...로딩이 다 안돼서 .main__inner를 불러오지 못한다.
            this.getSite();
        }, 3000)
    }

    render(){
        const {isLoading} = this.state;
        return (
            <>
                {isLoading ? (
                    <Loading color="light"/>
                ) : (
                    <>
                        <Header color="light"/>
                        <Contents color="light">
                            <ContTitle title={["script","javascript"]} color="light"/>
                            <ScriptCont />
                        </Contents>
                        <Contact />
                        <Footer color="light"/>
                    </>
                )}
            </>
        )
    }

}
export default Script;