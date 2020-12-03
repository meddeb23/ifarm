import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaArrowCircleDown, FaArrowDown } from "react-icons/fa"
export default function Home() {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <p className="animate__animated animate__fadeInDown ">our mission</p>
                    <h1 className="animate__animated animate__fadeInDown animate__delay-1s">we transform the agriculture world</h1>
                    <p className=" desc animate__animated animate__fadeInDown animate__delay-2s">Effect if in up no depend seemed.
                    Ecstatic elegance gay but disposed. We me rent been part what.
                    An concluded sportsman offending so provision mr education.
                     Bed uncommonly his discovered for estimating far</p>
                    <NavLink to="/clientSpace"><button >start farming</button></NavLink>
                    <a href="#services" className="animate__animated animate__infinite  see-more animate__shakeY">
                        <FaArrowDown />
                    </a>
                </div>
            </section>
        </>
    )
}
