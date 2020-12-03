import React from 'react'

export default function UserActivity() {
    return (
        <section className="user-activity">
            <div className="card">
                <h3>Summary: main Land</h3>
                <div className="container">
                    <div className="row">
                        <div className="act"></div>
                        <div className="col">
                            <h3>planted land</h3>
                            <div className="progress-out">
                                <div className="progress-in"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="act" style={{ backgroundColor: "#E91E63" }}></div>
                        <div className="col">
                            <h3>planted land</h3>
                            <div className="progress-out">
                                <div className="progress-in" style={{ backgroundColor: "#E91E63" }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="act" style={{ backgroundColor: "#f44336" }}></div>
                        <div className="col">
                            <h3>planted land</h3>
                            <div className="progress-out">
                                <div className="progress-in" style={{ backgroundColor: "#f44336" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <h3>Summary: Family Land</h3>
                <div className="container">
                    <div className="row">
                        <div className="act"></div>
                        <div className="col">
                            <h3>planted land</h3>
                            <div className="progress-out">
                                <div className="progress-in"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="act" style={{ backgroundColor: "#E91E63" }}></div>
                        <div className="col">
                            <h3>planted land</h3>
                            <div className="progress-out">
                                <div className="progress-in" style={{ backgroundColor: "#E91E63" }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="act" style={{ backgroundColor: "#f44336" }}></div>
                        <div className="col">
                            <h3>planted land</h3>
                            <div className="progress-out">
                                <div className="progress-in" style={{ backgroundColor: "#f44336" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
