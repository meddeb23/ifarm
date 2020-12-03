import React from 'react'
import { MdAdd, MdCheck, MdNotificationsNone } from 'react-icons/md';
import NavBar from '../components/navBar/NavBar';
import History from "../components/History"
import CurrentPlant from '../components/CurrentPlant';
import UserActivity from '../components/UserActivity';

export default function ClientSpace() {
    return (<>
        <NavBar />
        <main className="client">
            <h1 className="logo">AGRIvironment</h1>
            <section className="land-info">
                <div className="header">
                    <div className="warpper">
                        <h1>Your land</h1>
                        <button className="action">new land <span><MdAdd /></span></button>

                    </div>
                    <div className="warpper">
                        <div className="notification">
                            <MdNotificationsNone />
                        </div>
                    </div>

                </div>
                <section className="lands">
                    <div className="card">
                        <h2>Main Land</h2>
                        <div className="container">
                            <div className="row">
                                <p><span><MdCheck /></span>Size</p>
                                <p>250m²</p>
                            </div>
                            <div className="row">
                                <p><span><MdCheck /></span>pack</p>
                                <p>physalis</p>
                            </div>
                            <div className="row">
                                <p><span><MdCheck /></span>expiry Date</p>
                                <p>22-9-2021</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <h2>Family Land</h2>
                        <div className="container">
                            <div className="row">
                                <p><span><MdCheck /></span>Size</p>
                                <p>150m²</p>
                            </div>
                            <div className="row">
                                <p><span><MdCheck /></span>pack</p>
                                <p>physalis</p>
                            </div>
                            <div className="row">
                                <p><span><MdCheck /></span>expiry Date</p>
                                <p>22-11-2021</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <div className="col-2">
                <div className="colo">
                    <CurrentPlant />
                    <UserActivity />
                </div>
                <div className="colo"><History /></div>

            </div>
        </main>
    </>
    )
}
