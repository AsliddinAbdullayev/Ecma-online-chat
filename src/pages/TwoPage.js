import React, {Component} from 'react';
import {ProgressBar} from "react-bootstrap";

class TwoPage extends Component {
    render() {
        return (
            <div className="p-5">
                <div>
                    <div className="col-lg-12 d-flex mt-5 offecet-1">
                        <div className="col-lg-2 border">
                            <div className="d-flex">
                                <p className="oquv-text">O’quvchi reytingi:</p>
                                <p className="oquv-text ml-4">53%</p>
                            </div>
                            <div className="d-flex">
                                <img src="./images/yellowlogo.svg" alt=""/>
                                <div className="progress-bar mt-4">
                                    <ProgressBar className="progress-bar-big" striped
                                                 now={53}/>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-message-3">
                                <div className="d-flex">
                                    <img src="./images/dowlondlogo.svg" alt=""/>
                                    <div className="">
                                        <h6>2-topshiriq.zip</h6>
                                        <h6 className="text-black-50">3.1MB</h6>
                                    </div>
                                </div>
                                <h6 className="">Men shu vazifani qildim.
                                    tekshitrib bera olasizmi?
                                    Rahmat ustoz</h6>
                            </div>
                            <i className="text-back-50 i-clock">13.08.20 | 13:50</i>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-message-y-3">
                                <div className="d-flex">
                                    <div className="yellow-card-div">
                                        <img className="bg-yellow " src="./images/yellocard.svg"
                                             alt=""/>
                                    </div>
                                    <div className="text-javob">
                                        <h6>2-topshiriq javobi.zip</h6>
                                        <h6 className="text-black-50">5.0 MB</h6>
                                    </div>
                                </div>
                                <h6>Mana bu faylda to’liq javob berilgan shuni ko’rishni sizga
                                    maslaxat beraman</h6>
                            </div>
                            <i className="text-back-50 i-clock-3">Mentor 13.08.20 | 14:20</i>
                        </div>
                    </div>
                    <div className="col-lg-12 d-flex mt-3">
                        <div className="col-lg-2 border">
                            <div className="d-flex">
                                <p className="oquv-text">O’quvchi reytingi:</p>
                                <p className="oquv-text ml-4">53%</p>
                            </div>
                            <div className="d-flex">
                                <img src="./images/yellowlogo.svg" alt=""/>
                                <div className="progress-bar mt-4">
                                    <ProgressBar className="progress-bar-big" striped
                                                 now={53}/>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-message-3">
                                <div className="d-flex">
                                    <img src="./images/dowlondlogo.svg" alt=""/>
                                    <div className="">
                                        <h6>2-topshiriq.zip</h6>
                                        <h6 className="text-black-50">3.1MB</h6>
                                    </div>
                                </div>
                                <h6 className="">Men shu vazifani qildim.
                                    tekshitrib bera olasizmi?
                                    Rahmat ustoz</h6>
                            </div>
                            <i className="text-back-50 i-clock">13.08.20 | 13:50</i>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-message-y-3">
                                <div className="d-flex">
                                    <div className="yellow-card-div">
                                        <img className="bg-yellow " src="./images/yellocard.svg"
                                             alt=""/>
                                    </div>
                                    <div className="text-javob">
                                        <h6>2-topshiriq javobi.zip</h6>
                                        <h6 className="text-black-50">5.0 MB</h6>
                                    </div>
                                </div>
                                <h6>Mana bu faylda to’liq javob berilgan shuni ko’rishni sizga
                                    maslaxat beraman</h6>
                            </div>
                            <i className="text-back-50 i-clock-3">Mentor 13.08.20 | 14:20</i>
                        </div>
                    </div>
                    <div className="col-lg-12 d-flex mt-3">
                        <div className="col-lg-2 border">
                            <div className="d-flex">
                                <p className="oquv-text">O’quvchi reytingi:</p>
                                <p className="oquv-text ml-4">53%</p>
                            </div>
                            <div className="d-flex">
                                <img src="./images/yellowlogo.svg" alt=""/>
                                <div className="progress-bar mt-4">
                                    <ProgressBar classnpm startName="progress-bar-big" striped
                                                 now={53}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-message-3">
                                <div className="d-flex">
                                    <img src="./images/dowlondlogo.svg" alt=""/>
                                    <div className="">
                                        <h6>2-topshiriq.zip</h6>
                                        <h6 className="text-black-50">3.1MB</h6>
                                    </div>
                                </div>
                                <h6 className="">Men shu vazifani qildim.
                                    tekshitrib bera olasizmi?
                                    Rahmat ustoz</h6>
                            </div>
                            <i className="text-back-50 i-clock">13.08.20 | 13:50</i>
                        </div>

                    </div>


                </div>

            </div>
        );
    }
}

export default TwoPage;