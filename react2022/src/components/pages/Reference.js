import React from 'react';
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import ContTitle from '../layout/ContTitle';
import ReferenceCont from '../includes/ReferenceCont';
import Contact from '../layout/Contact';
import Footer from "../layout/Footer";
import Loading from "../basics/Loading";
import { gsap } from "gsap";
import axios from 'axios';


// function Reference(){
//     return (
//         <>
//             <Header color="light"/>
//             <Contents color="light">
//                 <ContTitle title={["reference","book"]} color="light"/>
//                 <ReferenceCont />
//             </Contents>
//             <Contact/>
//             <Footer color="light"/>
//         </>
//     )
// }

class Reference extends React.Component{
    state = {
        isLoading: true,
        refers: []
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
            gsap.to(".cont__title strong", {
                duration: 0.7,
                y: 0,
                opacity: 1,
                delay: 1.0,
                ease: "power4.out"
            });
            gsap.to(".cont__title em", {
                duration: 0.7,
                y: 0,
                opacity: 1,
                delay: 1.3,
                ease: "power4.out"
            });
            gsap.to(".refer__cont", {
                duration: 0.7,
                y: 0,
                opacity: 1,
                delay: 1.5,
                ease: "power4.out"
            });
        }, 10)
    }

    getSite = async () => {
        const {
            data: {
                data: {refer},
            },
        } = await axios.get("https://ohwehoh.github.io/web_class_react/react2022/src/assets/json/reference.json");

        setTimeout(() => {
            this.setState({refers:refer, isLoading:false});
            this.mainAnimation();
        }, 1600)
        console.log(refer);
    }

    // componentDidMount(){
    //     setTimeout(() => {
    //         document.getElementById("loading").classList.remove("loading__active");
    //         document.querySelector("body").style.background = "#f0eeeb";
    //     }, 1000)
        
    //     setTimeout(() => {
    //         // this.mainAnimation();...로딩이 다 안돼서 .main__inner를 불러오지 못한다.
    //         this.getSite();
    //     }, 3000)
    // }

    componentDidMount(){
        document.querySelector("body").style.background = "#F0EEEB";
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active");
            this.getSite();
        }, 2000);
    }

    render(){
        const {isLoading, refers} = this.state;
        console.log("1" + isLoading);
        console.log(refers);
        return (
            <>
                {isLoading ? (
                    <Loading color="light"/>
                ) : (
                    <>
                        <Header color="light"/>
                        <Contents color="light">
                            <ContTitle title={["reference","book"]} color="light"/>
                            <ReferenceCont refer={refers} />
                            <Contact/>
                        </Contents>
                        <Footer color="light"/>
                    </>
                )}
            </>
        )
    }
}
export default Reference;