import React, {Component} from 'react';
import {ProgressBar} from "react-bootstrap";

class Onepage extends Component {
    render() {
        return (
            <div className="mt-5 mx-5">
                <div className="col-lg-12 d-flex">
                    <div className="col-lg-2 ">
                        <a href=""><img src="./images/pdplogo.svg" alt=""/></a>
                    </div>
                    <div className="d-flex col-lg-3 offset-7">
                        <h6 className="mt-2">Dilshod Mirsaotov</h6>
                        <div className="icon-div">

                            <img src="./images/Vector2.svg" alt=""/>
                        </div>
                        <div className="icon-div">
                            <img src="./images/Vector1.svg" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 d-flex mt-5">
                    <div className="col-lg-2 mt-5 ">
                        <div className="border-left"></div>
                        <div>

                            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                                 aria-orientation="vertical">

                                <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill"
                                   href="#dashport-id"
                                   role="tab" aria-controls="v-pills-home" aria-selected="true">
                                    <div className="d-flex">
                                        <img src="./images/barcha.svg" alt=""/>
                                        <p>Dashboart</p>
                                    </div>
                                </a>
                                <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill"
                                   href="#barcha-kurlar-id" role="tab" aria-controls="v-pills-profile"
                                   aria-selected="false">
                                    <div className="d-flex">
                                        <img src="./images/barcha.svg" alt=""/>
                                        <p>Barcha kurslar</p>

                                    </div>
                                </a>

                                <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill"
                                   href="#vazifalar-va-chat-id" role="tab" aria-controls="v-pills-messages"
                                   aria-selected="false">

                                    <div className="d-flex">
                                        <img src="./images/dashbordlogo.svg" alt=""/>
                                        <p>Vazifalar va chat</p>

                                    </div>
                                </a>
                                <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill"
                                   href="#qurilmalar-id" role="tab" aria-controls="v-pills-settings"
                                   aria-selected="false">
                                    <div className="d-flex">
                                        <img src="./images/qurilmalar.svg" alt=""/>
                                        <p>Qurilmalar</p>

                                    </div>
                                </a>

                                <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill"
                                   href="#zoom-chat-id" role="tab" aria-controls="v-pills-settings"
                                   aria-selected="false">
                                    <div className="d-flex">
                                        <img src="./images/zoom.svg" alt=""/>
                                        <p> Zoom chat</p>

                                    </div>
                                </a>

                                <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill"
                                   href="#sozlamalar-id" role="tab" aria-controls="v-pills-settings"
                                   aria-selected="false">
                                    <div className="d-flex">
                                        <img className="icon-drop" src="./images/sozlamalar.svg" alt=""/>
                                        <p className="icon-drop-text">Sozlamalar</p>

                                    </div>
                                </a>
                            </div>
                        </div>


                    </div>
                    <div className="col-lg-7 center-card">
                        <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade brno show active" id="dashport-id" role="tabpanel"
                                 aria-labelledby="v-pills-home-tab"><h3 className="center-text">DASHBAORD</h3>
                            </div>
                            <div className="tab-pane fade brno" id="barcha-kurlar-id" role="tabpanel"
                                 aria-labelledby="v-pills-profile-tab"><h3 className="center-text">BARCHA KURLAR</h3>
                            </div>
                            <div className="tab-pane fade brno" id="vazifalar-va-chat-id" role="tabpanel"
                                 aria-labelledby="v-pills-messages-tab"><h3 className="center-text">VAZIFALAR VA
                                CHAT</h3>
                                <div className="col-lg-12 d-flex mt-3 border-card">
                                    <div className="col-lg-4">
                                        <ul className="nav nav-pills  gurup d-flex" id="pills-tab" role="tablist">
                                            <li className="nav-item">
                                                <p className="center-tab" id="pills-home-tab" data-toggle="pill"
                                                   href="#pills-home" role="tab" aria-controls="pills-home"
                                                   aria-selected="true">
                                                    <div className="d-flex">
                                                        <p>Vazifalar</p>
                                                        <div className="messege-red">
                                                            5
                                                        </div>
                                                    </div>
                                                </p>
                                            </li>
                                            <li className="nav-item">
                                                <p className="center-tab active" id="pills-profile-tab"
                                                   data-toggle="pill"
                                                   href="#pills-profile" role="tab" aria-controls="pills-profile"
                                                   aria-selected="false">
                                                    <div className="d-flex">
                                                        <p>Chat</p>
                                                        <div className="messege-red">
                                                            3
                                                        </div>
                                                    </div>

                                                </p>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="pills-tabContent">
                                            <div className="tab-pane brno tab-center fade show active"
                                                 id="pills-home">
                                                <div className="d-flex gurup">
                                                    <img className="mb-3 " src="./images/search.svg" alt=""/>
                                                    <input className="search-tab mb-3" type="text"
                                                           placeholder="Search"/>
                                                    <img className="mb-3 ml-5" src="./images/serchleft.svg" alt=""/>
                                                </div>
                                                <div className="nav flex-column nav-pills border-card" id="v-pills-tab"
                                                     role="tablist" aria-orientation="vertical">
                                                    <div className="brno p-2 border-card big-card" id="v-pills-home-tab"
                                                         data-toggle="pill" href="#messege-id-1" role="tab"
                                                         aria-controls="v-pills-home" aria-selected="true">
                                                        <div className="d-flex">
                                                            <img src="./images/hola1.svg" alt=""/>
                                                            <div className="d-block">
                                                                <h6 className="card-name">Bessie Cooper</h6>
                                                                <i className="salom">Salom mening vazifamlarimni
                                                                    tekshirdizmi ustoz.</i>
                                                            </div>
                                                            <div>
                                                                <b className="b">21:43</b>
                                                                <span className="messege-red-2">
                                                                    1
                                                                </span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="brno p-2 border-card big-card" id="v-pills-home-tab"
                                                         data-toggle="pill" href="#messege-id-2" role="tab"
                                                         aria-controls="v-pills-home" aria-selected="true">
                                                        <div className="d-flex">
                                                            <img src="./images/hola2.svg" alt=""/>
                                                            <div className="d-block">
                                                                <h6 className="card-name">Bessie Cooper</h6>
                                                                <i className="salom">Salom mening vazifamlarimni
                                                                    tekshirdizmi ustoz.</i>
                                                            </div>
                                                            <div>
                                                                <b className="b">21:43</b>
                                                                <span className="messege-red-2">
                                                                    1
                                                                </span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="brno p-2 border-card big-card" id="v-pills-home-tab"
                                                         data-toggle="pill" href="#messege-id-3" role="tab"
                                                         aria-controls="v-pills-home" aria-selected="true">
                                                        <div className="d-flex">
                                                            <img src="./images/hola3.svg" alt=""/>
                                                            <div className="d-block">
                                                                <h6 className="card-name">Bessie Cooper</h6>
                                                                <i className="salom">Salom mening vazifamlarimni
                                                                    tekshirdizmi ustoz.</i>
                                                            </div>
                                                            <div>
                                                                <b className="b">21:43</b>
                                                                <span className="messege-red-2">
                                                                    1
                                                                </span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="brno p-2 border-card big-card" id="v-pills-home-tab"
                                                         data-toggle="pill" href="#messege-id-4" role="tab"
                                                         aria-controls="v-pills-home" aria-selected="true">
                                                        <div className="d-flex">
                                                            <img src="./images/hola4.svg" alt=""/>
                                                            <div className="d-block">
                                                                <h6 className="card-name">Bessie Cooper</h6>
                                                                <i className="salom">Salom mening vazifamlarimni
                                                                    tekshirdizmi ustoz.</i>
                                                            </div>
                                                            <div>
                                                                <b className="b">21:43</b>
                                                                <span className="messege-red-2">
                                                                    1
                                                                </span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="brno p-2 border-card big-card" id="v-pills-home-tab"
                                                         data-toggle="pill" href="#messege-id-5" role="tab"
                                                         aria-controls="v-pills-home" aria-selected="true">
                                                        <div className="d-flex">
                                                            <img src="./images/hola4.svg" alt=""/>
                                                            <div className="d-block">
                                                                <h6 className="card-name">Bessie Cooper</h6>
                                                                <i className="salom">Salom mening vazifamlarimni
                                                                    tekshirdizmi ustoz.</i>
                                                            </div>
                                                            <div>
                                                                <b className="b">21:43</b>
                                                                <span className="messege-red-2">
                                                                    1
                                                                </span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="brno p-2 border-card big-card" id="v-pills-home-tab"
                                                         data-toggle="pill" href="#messege-id-6" role="tab"
                                                         aria-controls="v-pills-home" aria-selected="true">
                                                        <div className="d-flex">
                                                            <img src="./images/hola4.svg" alt=""/>
                                                            <div className="d-block">
                                                                <h6 className="card-name">Bessie Cooper</h6>
                                                                <i className="salom">Salom mening vazifamlarimni
                                                                    tekshirdizmi ustoz.</i>
                                                            </div>
                                                            <div>
                                                                <b className="b">21:43</b>

                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="brno p-2 border-card big-card" id="v-pills-home-tab"
                                                         data-toggle="pill" href="#messege-id-6" role="tab"
                                                         aria-controls="v-pills-home" aria-selected="true">
                                                        <div className="d-flex">
                                                            <img src="./images/hola4.svg" alt=""/>
                                                            <div className="d-block">
                                                                <h6 className="card-name">Bessie Cooper</h6>
                                                                <i className="salom">Salom mening vazifamlarimni
                                                                    tekshirdizmi ustoz.</i>
                                                            </div>
                                                            <div>
                                                                <b className="b">21:43</b>

                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="tab-pane brno fade" id="pills-profile" role="tabpanel"
                                                 aria-labelledby="pills-profile-tab"><h1>CHAT</h1>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="tab-content" id="v-pills-tabContent">
                                            <div className="tab-pane brno fade show active" id="messege-id-1"
                                                 role="tabpanel" aria-labelledby="v-pills-home-tab">
                                                <div className="col-lg-12 d-flex">
                                                    <div className="col-lg-2">
                                                        <div className="card start-div">
                                                            <div className="text-center">
                                                                <h4>1</h4>
                                                                <div className="d-flex">
                                                                    <img src="./images/starts.svg" alt=""/>
                                                                    <h2 className="start-footer-number">5</h2>

                                                                </div>
                                                                <p className="start-footer-text">QIYIN</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <div className="card start-div-w">
                                                            <div className="text-center">
                                                                <h4>2</h4>
                                                                <div className="d-flex">
                                                                    <img src="./images/starts.svg" alt=""/>
                                                                    <h2 className="start-footer-number">3</h2>

                                                                </div>
                                                                <p className="start-footer-text">OSON</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <div className="card start-div">
                                                            <div className="text-center">
                                                                <h4>3</h4>
                                                                <div className="d-flex">
                                                                    <img src="./images/starts.svg" alt=""/>
                                                                    <h2 className="start-footer-number">0</h2>

                                                                </div>
                                                                <p className="start-footer-text">OSON</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <div className="card start-div">
                                                            <div className="text-center">
                                                                <h4>4</h4>
                                                                <div className="d-flex">
                                                                    <img src="./images/starts.svg" alt=""/>
                                                                    <h2 className="start-footer-number">0</h2>

                                                                </div>
                                                                <p className="start-footer-text">QIYIN</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <div className="card start-div">
                                                            <div className="text-center">
                                                                <h4>5</h4>
                                                                <div className="d-flex">
                                                                    <img src="./images/starts.svg" alt=""/>
                                                                    <h2 className="start-footer-number">0</h2>

                                                                </div>
                                                                <p className="start-footer-text">QIYIN</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <div className="start-div ">
                                                            <div className="mt-3 ml-4">
                                                                <img src="./images/leftlogo.svg" alt=""/>
                                                                <img src="./images/Line.svg" alt=""/>
                                                                <img src="./images/rightlogo.svg" alt=""/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="col-lg-12 d-flex border-card">
                                                    <div className="col-lg-6">
                                                        <h4 className="mur-text">Murakkab
                                                            animatsiya yaratish</h4>
                                                    </div>
                                                    <img src="./images/Line.svg" alt=""/>
                                                    <div className="col-lg-6">
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
                                                </div>

                                                <div className="col-lg-12">
                                                    <div className="card-message">
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
                                                <div className="col-lg-12">
                                                    <div className="card-message-y">
                                                        <div className="d-flex ">
                                                            <div className="yellow-card-div">
                                                                <img className="bg-yellow " src="./images/yellocard.svg"
                                                                     alt=""/>
                                                            </div>
                                                            <div className="">
                                                                <h6>2-topshiriq javobi.zip</h6>
                                                                <h6 className="text-black-50">5.0 MB</h6>
                                                            </div>
                                                        </div>
                                                        <h6>Mana bu faylda to’liq javob berilgan shuni ko’rishni sizga
                                                            maslaxat beraman</h6>
                                                    </div>
                                                    <i className="text-back-50 i-clock-y">Mentor 13.08.20 | 14:20</i>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="line-2">
                                                        <hr className="p-0"/>
                                                    </div>
                                                    <img src="./images/skrip.svg" alt=""/>
                                                    <input className="input-messega" type="text"
                                                           placeholder="Vazifa haqida nimadir yozing. . . "/>
                                                    <img src="./images/enter.svg" alt=""/>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade brno" id="messege-id-2" role="tabpanel"
                                                 aria-labelledby="v-pills-profile-tab"><h1>2...</h1>
                                            </div>
                                            <div className="tab-pane fade brno" id="messege-id-3" role="tabpanel"
                                                 aria-labelledby="v-pills-messages-tab"><h1>3...</h1>
                                            </div>
                                            <div className="tab-pane fade brno" id="messege-id-4" role="tabpanel"
                                                 aria-labelledby="v-pills-settings-tab"><h1>4...</h1>
                                            </div>
                                            <div className="tab-pane fade brno" id="messege-id-5" role="tabpanel"
                                                 aria-labelledby="v-pills-settings-tab"><h1>5...</h1>
                                            </div>
                                            <div className="tab-pane fade brno" id="messege-id-6" role="tabpanel"
                                                 aria-labelledby="v-pills-settings-tab"><h1>6...</h1>
                                            </div>
                                            <div className="tab-pane fade brno" id="messege-id-7" role="tabpanel"
                                                 aria-labelledby="v-pills-settings-tab"><h1>7...</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade brno" id="qurilmalar-id" role="tabpanel"
                                 aria-labelledby="v-pills-settings-tab"><h3 className="center-text">QURILMALAR</h3>
                            </div>
                            <div className="tab-pane fade brno" id="zoom-chat-id" role="tabpanel"
                                 aria-labelledby="v-pills-settings-tab"><h3 className="center-text">ZOOM CHAT</h3>
                            </div>
                            <div className="tab-pane fade brno" id="sozlamalar-id" role="tabpanel"
                                 aria-labelledby="v-pills-settings-tab"><h3 className="center-text">SOZLAMALAR</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 fig-border">
                        <div className="text-center">
                            <img className="mt-4 kom-img" src="./images/hola1.svg" alt=""/>
                            <h5>Nurmatova Kamola</h5>
                        </div>
                        <div className="p-4">
                            <div className="d-flex">
                                <div className="text-center card-div">
                                    <div className="otish-div">

                                        <img src="./images/otish.svg" alt=""/>
                                    </div>
                                    <p className="otish-text">Chatga o'tish</p>
                                </div>
                                <div className="text-center card-div">
                                    <div className="otish-div"><img src="./images/kurs.svg" alt=""/></div>
                                    <p className="otish-text">Kurs info</p>
                                </div>
                                <div className="text-center card-div">
                                    <div className="otish-div"><img src="./images/task.svg" alt=""/></div>
                                    <p className="otish-text">Task history</p>
                                </div>

                            </div>
                            <div className="offset-2">
                                <div className="mt-5 d-flex">
                                    <img className="starts-big" src="./images/starts-big.svg" alt=""/>
                                    <img className="starts-big" src="./images/starts-big.svg" alt=""/>
                                    <img className="starts-big" src="./images/starts-big.svg" alt=""/>
                                    <img className="starts-big" src="./images/starts-big-2.svg" alt=""/>
                                    <img className="starts-big" src="./images/starts-big-2.svg" alt=""/>
                                </div>
                                <div className="d-flex">
                                    <button className="btn btn-success mt-3 col-lg-4 right-button"><img
                                        src="./images/pitichka.svg" alt=""/></button>
                                    <button className="btn btn-danger mt-3 col-lg-4 offset-1 right-button"><img
                                        src="./images/stop.svg"
                                        alt=""/></button>
                                </div>

                            </div>
                            <div className="p-3">
                                <hr className="mt-4 hr-top "/>
                            </div>

                            <div className="p-4">
                                <h6>2. Fill yordamida berilgan
                                    animatsiyani yarating</h6>
                                <div className="d-flex">
                                    <div className="footer-div-hr"></div>
                                    <h6 className="text-black-50">
                                        Kiritilgan stringning berilgan indexdan boshlab qolgan qismini chop qiluvchi
                                        dastur
                                        yozing. Masalan: String: android,index=2 Natija: “droid”;
                                    </h6>
                                </div>

                            </div>
                            <div className="offset-2">
                                <button className=" btn btn-outline-secondary btn-lg">
                                <span className="d-flex">
                                    <img src="./images/dowlond-2.svg" alt=""/>
                                    <p className="ml-4 savol-text"> 2-topshiriq savol.jpg</p>
                                </span>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default Onepage;