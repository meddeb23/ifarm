import React from 'react'

export default function CurrentPlant() {
    return (
        <section className="current-plants">
            <div className="header">
                <h1>Plants</h1>
                <button className="action">
                    more details
            </button>
            </div>
            <div className="body">
                <div className="col">
                    <h1>45<sub>days</sub></h1>
                    <p>potatos</p>
                </div>
                <div className="col">
                    <h1>10<sub>days</sub></h1>
                    <p>potatos</p>
                </div>
                <div className="col">
                    <h1>65<sub>days</sub></h1>
                    <p>potatos</p>
                </div>
                <div className="col">
                    <h1>26<sub>days</sub></h1>
                    <p>potatos</p>
                </div>
            </div>
        </section>
    )
}
