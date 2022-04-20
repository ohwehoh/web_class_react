import React, { Children } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import MainCont from "../includes/MainCont";
import Loading from "../basics/Loading";
import { gsap } from "gsap";
import { checkPropTypes } from "prop-types";

// function Main(){
//     return (
//         <>
//             <Header />
//             <Contents>
//                 <MainCont />
//             </Contents>
//             <Footer/>
//         </>
//     )
// }

class Main extends React.Component {
    state = {
        isLoading: true
    }

    // mainAnimation = () => {
    //     gsap.set(".main__inner", {opacity: 0})
    // }

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
            gsap.to(".main__inner > div:nth-child(1)", {
                duration: 0.6,
                opacity: 1,
                y: 0,
                delay: 1.2,
                ease: "slow(0.7, 0.7, false)"
            });
            gsap.to(".main__inner > div:nth-child(2)", {
                duration: 0.6,
                opacity: 1,
                y: 0,
                delay: 1.6,
                ease: "slow(0.7, 0.7, false)"
            });
            gsap.to(".main__inner > div:nth-child(3)", {
                duration: 0.6,
                opacity: 1,
                y: 0,
                delay: 2.0,
                ease: "slow(0.7, 0.7, false)"
            });
            gsap.to(".main__inner > div:nth-child(4)", {
                duration: 0.6,
                opacity: 1,
                y: 0,
                delay: 2.4,
                ease: "slow(0.7, 0.7, false)"
            });
        }, 500)
    }

    componentDidMount(){
        document.querySelector("body").style.background = "#000";
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active");
            // this.setState({isLoading:false});
            // this.mainAnimation();...로딩이 다 안돼서 .main__inner를 불러오지 못한다.
        }, 3000)
        setTimeout(() => {
            this.setState({isLoading:false});
            this.getSite();
        }, 4000)
    }

    render(){
        const {isLoading} = this.state;

        return (
            <>
                {isLoading ? (
                    <Loading color="black"/>
                ) : (
                    <>
                        <Header />
                        <Contents>
                            <MainCont />
                        </Contents>
                        <Footer/>
                    </>
                )}
            </>
        )
    }
}

export default Main;