import React from "react";

//함수형 컨퍼넌트 ++클래스 컨퍼넌트-->리액트 훅

function PortInfo({image, title, category}){
    return (
        <article className="port__item">
            <figure className="img">
                <a href="/"><img src={image} alt="port1" /></a>
            </figure>
            <div className="text">
                <h3>{title}</h3>
                <p>{category}</p>
            </div>
        </article>
    )
}

// const portText = [
//     {
//         image : "/img/port01@2x.jpg",
//         alt : "port1",
//         title : "Portfolio Title",
//         desc : "Portfolio"
//     },
//     {
//         image : "/img/port01@2x.jpg",
//         alt : "port1",
//         title : "Portfolio Title",
//         desc : "Portfolio"
//     },
//     {
//         image : "/img/port01@2x.jpg",
//         alt : "port1",
//         title : "Portfolio Title",
//         desc : "Portfolio"
//     },
// ]

function PortCont({port}){
    return(
        <section className="port__cont">
            <div className="container">
                <div className="port__inner">
                    {port.map((txt) => (
                        <PortInfo
                            key = {txt.title}
                            image = {txt.image}
                            title = {txt.title}
                            category = {txt.category}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PortCont;
