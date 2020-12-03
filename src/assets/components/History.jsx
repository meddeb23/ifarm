import React from 'react'

export default function History() {
    return (
        <section className="history">
            <div className="header">
                <h1>Recent activity</h1>
                <button className="action">
                    view a report
                    </button>
            </div>
            <div className="body">
                <h5>Today</h5>
                <ul>
                    <div className="row">
                        <div className="activity">
                            <h3>Tomato seeds</h3>
                            <p>buy</p>
                        </div>
                        <p>-45.000<strong>DT</strong></p>
                    </div>
                    <div className="row">
                        <div className="activity">
                            <h3>potasum</h3>
                            <p>buy</p>
                        </div>
                        <p>-25.000<strong>DT</strong></p>
                    </div>
                    <div className="row">
                        <div className="activity">
                            <h3>30<strong>Kg </strong>potato</h3>
                            <p>transport</p>
                        </div>
                        <p>-10.000<strong>DT</strong></p>
                    </div>
                </ul>
            </div>
        </section>
    )
}
