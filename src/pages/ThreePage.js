import React, {Component} from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


class ThreePage extends Component {
    render() {
        return (
            <div>
                <section className="bg-white">

                    <div className="container col-lg-12 p-3 d-flex flex-wrap">
                        <div className="col-lg-2">
                            <img src="./images/pdplogo.svg" alt=""/>
                        </div>
                        <div className="col-lg-3 mt-2 d-flex offset-1">
                            <div>
                                <img src="./img/navbar-img.svg" alt=""/>
                            </div>
                            <h6 className="nav-text cur-po">Barcha kurslar</h6>
                        </div>
                        <div className="col-lg-2 offset-4">
                            <div className="d-flex">
                                <img className="nav-img" src="./img/pirizlogo.svg" alt=""/>
                                <img className="nav-img" src="./img/qongiroq.svg" alt=""/>
                                <img className="nav-img" src="./img/nav-puplie.svg" alt=""/>
                            </div>


                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="col-lg-12 d-flex flex-wrap">
                            <div className="col-lg-6 ">
                                <h1 className="navbar-text">Full-Stack <br/>
                                    Python Development</h1>

                                <h3 className="navbar-text-2">
                                    Java dasturlash tili hozirgi kunda dunyoning gigant dasturlash
                                    tillaridan biri hisoblanadi.
                                </h3>
                                <div className="d-flex flex-wrap">
                                    <button className="btn btn-dark dja navbar-button">
                                        Hoziroq boshlang
                                    </button>
                                    <h6 className="dja mt-5 ml-3 dars-span">Birinchi dars </h6>
                                    <p className="bepul">bepul</p>
                                    <img className="bepul-img dja" src="./img/undov.svg" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-4 offset-2">
                                <img className="navbarimg" src="./img/navbarimg.svg" alt=""/>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <img className="section-3" src="./img/section-3.png" alt=""/>
                    <div className="col-lg-12 d-flex justify-content-center">
                        <div className="video-div dja col-lg-3">
                            <img className="" src="./img/videologo.svg" alt=""/>
                        </div>
                    </div>

                    <div className="container">
                        <div className="col-lg-12 d-flex video-card">
                            <div className="col-lg-3">
                                <p className="talim-text">Davomiyligi</p>
                                <p className="modul-text">11 ta modul</p>
                            </div>
                            <div className="col-lg-3">
                                <p className="talim-text">Ta’lim turi</p>
                                <p className="modul-text">Online va Onsite</p>
                            </div>
                            <div className="col-lg-2">

                                <p className="talim-text">Muddati</p>
                                <p className="modul-text">∞ Bir umr</p>
                            </div>
                            <div className="col-lg-4">
                                <p className="talim-text">Ish bilan ta’minlash</p>
                                <p className="modul-text">PDP Career a’zosi bo’lasiz</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container">
                    <div className="col-lg-12">
                        <div className="col-lg-5">
                            <h1 className="header-big">Full-Stack Python <br/>
                                Roadmap Yo’nalishlari</h1>

                        </div>
                        <div className="col-lg-8">
                            <h3 className="header-small">Dasturlashni endi o‘rganayotganlar uchun istalgan bir sohada
                                o‘zlashtirilishi <br/> kerak
                                bo‘lgan
                                bilimlar ketma-ketligi hamda bu sohaning istiqboli aniq
                                dalillar bilan ko‘rsatib beradi.</h3>
                        </div>
                    </div>
                    {/***************justify-content-between***************/}
                    <div className=" d-flex flex-wrap justify-content-center">
                        <div className="body-card border bg-white ">
                            <div className="d-flex">
                                <div className="mt-5">
                                    <p className="body-card-p">1 - yo‘nalish</p>
                                    <h4 className="body-card-h4">Fontend <br/>
                                        Development</h4>
                                </div>
                                <div className="offset-3">
                                    <img src="./img/body-red.svg" alt=""/>
                                </div>
                            </div>
                            <div className="body-card-hr"></div>

                            <div className="d-flex">
                                <div className="">
                                    <h6 className="body-c-da">Davomiyligi</h6>
                                    <b className="body-c-mod">4 ta modul</b>
                                </div>
                                <div className="offset-1">
                                    <h6 className="body-c-da">Kurs tayyorladi</h6>
                                    <b className="body-c-mod">ECMA inc.</b>
                                </div>
                                <div className="">
                                    <button className="btn btn-dark body-c-button dja">
                                        <p>Ba’tafsil</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="body-card-1 border bg-white ">
                            <div className="d-flex">
                                <div className="mt-5">
                                    <p className="body-card-p">1 - yo‘nalish</p>
                                    <h4 className="body-card-h4">Fontend <br/>
                                        Development</h4>
                                </div>
                                <div className="offset-3">
                                    <img src="./img/body-blue.svg" alt=""/>
                                </div>
                            </div>
                            <div className="body-card-hr"></div>

                            <div className="d-flex">
                                <div className="">
                                    <h6 className="body-c-da">Davomiyligi</h6>
                                    <b className="body-c-mod">4 ta modul</b>
                                </div>
                                <div className="offset-1">
                                    <h6 className="body-c-da">Kurs tayyorladi</h6>
                                    <b className="body-c-mod">ECMA inc.</b>
                                </div>
                                <div className="">
                                    <button className="btn btn-dark body-c-button dja">
                                        <p>Ba’tafsil</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" d-flex flex-wrap justify-content-center">
                        <div className="body-card-2 border bg-white ">
                            <div className="d-flex">
                                <div className="mt-5">
                                    <p className="body-card-p">1 - yo‘nalish</p>
                                    <h4 className="body-card-h4">Fontend <br/>
                                        Development</h4>
                                </div>
                                <div className="offset-3">
                                    <img src="./img/body-blue.svg" alt=""/>
                                </div>
                            </div>
                            <div className="body-card-hr"></div>

                            <div className="d-flex">
                                <div className="">
                                    <h6 className="body-c-da">Davomiyligi</h6>
                                    <b className="body-c-mod">4 ta modul</b>
                                </div>
                                <div className="offset-1">
                                    <h6 className="body-c-da">Kurs tayyorladi</h6>
                                    <b className="body-c-mod">ECMA inc.</b>
                                </div>
                                <div className="">
                                    <button className="btn btn-dark body-c-button dja">
                                        <p>Ba’tafsil</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="body-card-3 border bg-white ">
                            <div className="d-flex">
                                <div className="mt-5">
                                    <p className="body-card-p">1 - yo‘nalish</p>
                                    <h4 className="body-card-h4">Fontend <br/>
                                        Development</h4>
                                </div>
                                <div className="offset-3">
                                    <img src="./img/body-red.svg" alt=""/>
                                </div>
                            </div>
                            <div className="body-card-hr"></div>

                            <div className="d-flex">
                                <div className="">
                                    <h6 className="body-c-da">Davomiyligi</h6>
                                    <b className="body-c-mod">4 ta modul</b>
                                </div>
                                <div className="offset-1">
                                    <h6 className="body-c-da">Kurs tayyorladi</h6>
                                    <b className="body-c-mod">ECMA inc.</b>
                                </div>
                                <div className="">
                                    <button className="btn btn-dark body-c-button dja">
                                        <p>Ba’tafsil</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <div className="container">
                    <div className="col-lg-12">
                        <div className="col-lg-4">
                            <h1 className="header-big">Ta‘lim jarayoni</h1>

                        </div>
                        <div className="col-lg-8">
                            <h3 className="header-small">Dasturlashni endi o‘rganayotganlar uchun istalgan bir sohada
                                o‘zlashtirilishi <br/> kerak bo‘lgan bilimlar ketma-ketligi hamda bu sohaning istiqboli
                                aniq <br/>
                                dalillar bilan ko‘rsatib beradi.</h3>
                        </div>
                    </div>
                    <Carousel>
                        <div>
                            <img className="corusel-img" src="./img/corusel-img.svg"/>

                            <h6 className="carousel-text-2">
                                <h6 className="carousel-text">
                                    O‘zingizga mos kursni tanlsh
                                </h6>
                                Biz nafaqat yurtimizdagi balki butun dunyoda eng <br/> rivojlangan sohalar bo'yicha
                                kurslarni taqdim <br/> etamiz va tanlash imkonini beramiz.

                            </h6>
                        </div>
                        <div>
                            <img className="corusel-img" src="./img/corusel-img.svg"/>
                            <h6 className="carousel-text-2">
                                <h6 className="carousel-text">
                                    O‘quv jarayoni
                                </h6>
                                Biz nafaqat yurtimizdagi balki butun dunyoda eng <br/> rivojlangan sohalar bo'yicha
                                kurslarni taqdim <br/> etamiz va tanlash imkonini beramiz.

                            </h6>
                        </div>
                        <div>
                            <img className="corusel-img" src="./img/corusel-img.svg"/>
                            <h6 className="carousel-text-2">
                                <h6 className="carousel-text">
                                    O‘zingizga mos kursni tanlsh
                                </h6>
                                Biz nafaqat yurtimizdagi balki butun dunyoda eng <br/> rivojlangan sohalar bo'yicha
                                kurslarni taqdim <br/> etamiz va tanlash imkonini beramiz.

                            </h6>
                        </div>
                    </Carousel>
                </div>

                <section>
                    <div className="container">
                        <div className="col-lg-12">
                            <div className="col-lg-3">
                                <h1 className="header-big">Mentorlar</h1>

                            </div>
                            <div className="col-lg-8">
                                <h3 className="header-small">Dasturlashni endi o‘rganayotganlar uchun istalgan bir
                                    sohada o‘zlashtirilishi kerak bo‘lgan bilimlar ketma-ketligi hamda bu sohaning
                                    istiqboli aniq
                                    dalillar bilan ko‘rsatib beradi.</h3>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between flex-wrap mt-5">

                            <div className="men-card-1 mt-5">
                                <div className="card-header dja border-0 bg-transparent mt-4">
                                    <img src="./img/men-1.svg" alt=""/>
                                </div>
                                <div className="card-body text-center border-0 bg-transparent p-0 mt-2">

                                    <h6 className="men-name">Khurshidbek Kurbanov</h6>
                                    <h6 className="men-dev">Senior Mobile Developer</h6>
                                </div>
                                <div className="card-footer dja border-0 bg-transparent">
                                    <img src="./img/men-work.svg" alt=""/>
                                </div>
                            </div>
                            <div className="men-card-2 mt-5">
                                <div className="card-header dja border-0 bg-transparent mt-4">
                                    <img src="./img/men-2.svg" alt=""/>
                                </div>
                                <div className="card-body text-center border-0 bg-transparent p-0 mt-2">

                                    <h6 className="men-name">Khurshidbek Kurbanov</h6>
                                    <h6 className="men-dev">Senior Mobile Developer</h6>
                                </div>
                                <div className="card-footer dja border-0 bg-transparent">
                                    <img src="./img/men-work.svg" alt=""/>
                                </div>
                            </div>
                            <div className="men-card-3 mt-5">
                                <div className="card-header dja border-0 bg-transparent mt-4">
                                    <img src="./img/men-3.svg" alt=""/>
                                </div>
                                <div className="card-body text-center border-0 bg-transparent p-0 mt-2">

                                    <h6 className="men-name">Khurshidbek Kurbanov</h6>
                                    <h6 className="men-dev">Senior Mobile Developer</h6>
                                </div>
                                <div className="card-footer dja border-0 bg-transparent">
                                    <img src="./img/men-work.svg" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between flex-wrap">

                            <div className="men-card-1">
                                <div className="card-header dja border-0 bg-transparent mt-4">
                                    <img src="./img/men-4.svg" alt=""/>
                                </div>
                                <div className="card-body text-center border-0 bg-transparent p-0 mt-2">

                                    <h6 className="men-name">Khurshidbek Kurbanov</h6>
                                    <h6 className="men-dev">Senior Mobile Developer</h6>
                                </div>
                                <div className="card-footer dja border-0 bg-transparent">
                                    <img src="./img/men-work.svg" alt=""/>
                                </div>
                            </div>
                            <div className="men-card-2">
                                <div className="card-header dja border-0 bg-transparent mt-4">
                                    <img src="./img/men-5.svg" alt=""/>
                                </div>
                                <div className="card-body text-center border-0 bg-transparent p-0 mt-2">

                                    <h6 className="men-name">Khurshidbek Kurbanov</h6>
                                    <h6 className="men-dev">Senior Mobile Developer</h6>
                                </div>
                                <div className="card-footer dja border-0 bg-transparent">
                                    <img src="./img/men-work.svg" alt=""/>
                                </div>
                            </div>
                            <div className="men-card-3">
                                <div className="card-header dja border-0 bg-transparent mt-4">
                                    <img src="./img/men-6.svg" alt=""/>
                                </div>
                                <div className="card-body text-center border-0 bg-transparent p-0 mt-2">

                                    <h6 className="men-name">Khurshidbek Kurbanov</h6>
                                    <h6 className="men-dev">Senior Mobile Developer</h6>
                                </div>
                                <div className="card-footer dja border-0 bg-transparent">
                                    <img src="./img/men-work.svg" alt=""/>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-12 d-flex justify-content-between flex-wrap">
                            <div className="men-card-4 ">
                                <div className="card-header dja border-0 bg-transparent mt-4">
                                    <img src="./img/men-7.svg" alt=""/>
                                </div>
                                <div className="card-body text-center border-0 bg-transparent p-0 mt-2">

                                    <h6 className="men-name">Khurshidbek Kurbanov</h6>
                                    <h6 className="men-dev">Senior Mobile Developer</h6>
                                </div>
                                <div className="card-footer dja border-0 bg-transparent">
                                    <img src="./img/men-work.svg" alt=""/>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="col-lg-12">
                            <div className="col-lg-5">
                                <h1 className="header-big">Kursimiz <br/>
                                    bitiruvchilari rezyumesi</h1>

                            </div>
                            <div className="col-lg-8">
                                <h3 className="header-small">Dasturlashni endi o‘rganayotganlar uchun istalgan bir
                                    sohada o‘zlashtirilishi kerak bo‘lgan bilimlar ketma-ketligi hamda bu sohaning
                                    istiqboli aniq
                                    dalillar bilan ko‘rsatib beradi.</h3>
                            </div>
                        </div>
                        <div className="body-big-card">
                            <div className="col-lg-12 d-flex flex-wrap">
                                <div className="col-lg-1  cur-po">
                                    <img src="./img/yapon-img.svg" alt=""/>
                                </div>
                                <div className="col-lg-10 full-card">
                                    <div className="d-flex justify-content-between">
                                        <div className="">
                                            <h6 className="card-big-1">Lavozimi</h6>
                                            <h5 className="card-big-2">Full Stack Web Developer</h5>
                                        </div>
                                        <div className=" cur-po">
                                            <img src="./img/sertifikat-img.svg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="big-card-hr"></div>
                                    <div className="mt-4">
                                        <h6 className="card-big-1">Oylik ish maosh</h6>
                                        <h5 className="card-big-2">7 000 000 so’mdan</h5>
                                    </div>
                                    <div className="card-prof">
                                        <h4 className="prof-text">
                                            Profesional ko’nikmalar
                                        </h4>
                                        <div className="col-lg-12 mt-4 d-flex flex-wrap">
                                            <div className="col-lg-3 d-flex">
                                                <div className="pail-div"></div>
                                                <h5 className="sayt-text">Saytlarni verstka <br/>
                                                    qilish</h5>
                                            </div>
                                            <div className="col-lg-3 offset-1">
                                                <div className="pail-div"></div>
                                                <h5 className="sayt-text">HTML, CSS va JavaScript
                                                    bilan ishlash</h5></div>
                                            <div className="col-lg-3 offset-1">
                                                <div className="pail-div"></div>
                                                <h5 className="sayt-text">Moslashuvchanlik va
                                                    brauzerlararo muvofiqligi</h5></div>
                                        </div>
                                        <div className="col-lg-12 mt-5 d-flex flex-wrap">
                                            <div className="col-lg-3 d-flex">
                                                <div className="pail-div"></div>
                                                <h5 className="sayt-text">Git versiyasini boshqarish tizimi bilan
                                                    ishlash</h5>
                                            </div>
                                            <div className="col-lg-3 offset-1">
                                                <div className="pail-div"></div>
                                                <h5 className="sayt-text">Vue va React freymvorklaridan foydalanish</h5>
                                            </div>
                                            <div className="col-lg-3 offset-1">
                                                <div className="pail-div"></div>
                                                <h5 className="sayt-text">Vue.js-da saytlar <br/>
                                                    va ilovalarni yarating</h5></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="col-lg-12">
                            <div className="col-lg-5">
                                <h1 className="header-big">Kursni xarid qilish
                                </h1>

                            </div>
                            <div className="col-lg-8">
                                <h3 className="header-small">Dasturlashni endi o‘rganayotganlar uchun istalgan bir
                                    sohada o‘zlashtirilishi kerak bo‘lgan bilimlar ketma-ketligi hamda bu sohaning
                                    istiqboli aniq
                                    dalillar bilan ko‘rsatib beradi.</h3>
                            </div>
                        </div>
                        <div className="col-lg-12 d-flex mt-5 flex-wrap">
                            <div className="col-lg-6 border">
                                <div>
                                    <div className="footer-card-hr"></div>
                                    <div className="narx-card d-flex justify-content-between">
                                        <div className="d-flex">
                                            <div className="border dja">
                                                {/*<input type="checkbox" className="form-check-input" id="exampleCheck1"/>*/}
                                                <img src="./img/chek.svg" alt=""/>
                                            </div>
                                            <div className="text-front-card">
                                                <h6 className="front-text">Frontend Development kursi</h6>
                                                <h6 className="number-text">1 550 000 so‘m</h6>
                                            </div>
                                            <div className="del-card dja">
                                                <del>2 000 000 so‘m</del>
                                            </div>
                                        </div>

                                        <div className="border dja">
                                            <img src="./img/plusicon.svg" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <div className="footer-card-hr"></div>
                                    <div className="narx-card d-flex justify-content-between">
                                        <div className="d-flex">
                                            <div className="border dja">
                                                {/*<input type="checkbox" className="form-check-input" id="exampleCheck1"/>*/}
                                                <img src="./img/chek.svg" alt=""/>
                                            </div>
                                            <div className="text-front-card">
                                                <h6 className="front-text">Frontend Development kursi</h6>
                                                <h6 className="number-text">1 550 000 so‘m</h6>
                                            </div>
                                            <div className="del-card dja">
                                                <del>2 000 000 so‘m</del>
                                            </div>
                                        </div>

                                        <div className="border dja">
                                            <img src="./img/plusicon.svg" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <div className="footer-card-hr"></div>
                                    <div className="narx-card d-flex justify-content-between">
                                        <div className="d-flex">
                                            <div className="border dja">
                                                {/*<input type="checkbox" className="form-check-input" id="exampleCheck1"/>*/}
                                                <img src="./img/dumaloicon.svg" alt=""/>
                                            </div>
                                            <div className="text-front-card">
                                                <h6 className="front-text">Frontend Development kursi</h6>
                                                <h6 className="number-text">1 550 000 so‘m</h6>
                                            </div>

                                        </div>

                                        <div className="border dja">
                                            <img src="./img/plusicon.svg" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <div className="footer-card-hr"></div>
                                    <div className="narx-card d-flex justify-content-between">
                                        <div className="d-flex">
                                            <div className="border dja">
                                                {/*<input type="checkbox" className="form-check-input" id="exampleCheck1"/>*/}
                                                <img src="./img/dumaloicon.svg" alt=""/>
                                            </div>
                                            <div className="text-front-card">
                                                <h6 className="front-text">Frontend Development kursi</h6>
                                                <h6 className="number-text">1 550 000 so‘m</h6>
                                            </div>

                                        </div>

                                        <div className="border dja">
                                            <img src="./img/plusicon.svg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="footer-card-hr mt-3"></div>
                                </div>

                            </div>
                            <div className="col-lg-5 offset-1">
                                <div className="footer-card  mt-2">
                                    <div className="d-flex ">
                                        <div className="p-4 mt-2">
                                            <img src="./img/pirizicon.svg" alt=""/>
                                        </div>
                                        <div className="dja mt-3">
                                            <h6 className="mart-text">
                                                23-mart da <br/>
                                                chegirmalar tugaydi
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex footer-card-1 mt-2">
                                    <div className="dja">
                                        <div className="img-icon-div dja">
                                            <img src="./img/clock.svg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="mt-3 ml-1">
                                        <h5 className="clock-text">Pulni qaytarib olish
                                        </h5>
                                        <p> 7 kun ichida pulni qaytarib olish
                                            kafolatlanadi</p>
                                    </div>
                                </div>
                                <div className="footer-card-2 d-flex mt-2">
                                    <div className="mt-3">
                                        <div className="img-icon-div dja">
                                            <img src="./img/clock.svg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="mt-3 ml-1">
                                        <h5 className="clock-text">12% Kashback

                                        </h5>
                                        <p>Har bir sotib olingan kursingiz uchun sizga
                                            kashback beriladi. Kashbacklaringizni tizimdan <br/>
                                            kurs yoki support kunlari sotib olish uchun
                                            ishlatishingiz mumkin</p>
                                    </div>

                                </div>
                                <div className="footer-card-3 mt-2 d-flex">
                                    <div className="mt-3">
                                        <div className="img-icon-div dja">
                                            <img src="./img/clock.svg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="mt-3 ml-1">
                                        <h5 className="clock-text">Savolingiz bormi ?
                                        </h5>
                                        <p> Qo‘ng‘iroq qiling: <b>(+99878) 777-47-47</b> <br/>
                                            Savolingizni yozing: <b>www.t.me/supportbot</b></p>
                                    </div>
                                </div>
                                <div className="footer-card-4 mt-2">
                                    <h5 className="promo-cod-text">Menda promo kod mavjud</h5>
                                    ----------------------------------

                                    <div className="footer-c-pro">
                                        <p>Promokod</p>
                                        <h4 className="text-danger">-1 000 000 so‘m</h4>
                                    </div>
                                    <div className="mt-4">
                                        <p>Kurs uchun chegirma</p>
                                        <h4 className="text-danger">-900 000 so‘m</h4>
                                    </div>
                                    <div className="mt-4">
                                        <p>Kursning chegirmasiz narxi <b>5 000 000 so‘m </b></p>
                                    </div>

                                    <div className="mt-3">
                                        <div className="footer-hr"></div>
                                        <div className="footer-hr mt-1"></div>
                                    </div>
                                    <div className="mt-4">
                                        <p>Tanlangan kurslaringiz narxi</p>
                                        <h4>3 100 000 so‘m</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white mt-4">
                    <div className="container ">
                        <div className="col-lg-12 d-flex flex-wrap justify-content-between">
                            <div className="col-lg-5 mt-3 mb-3">
                                <h5 className="footer-card-h5">Tanlangan kurslar:</h5>
                                <h2 className="footer-card-text">
                                    Frontend Development, Python Development
                                </h2>
                            </div>
                            <div className="col-lg-5 mt-3 mb-3 d-flex flex-wrap">
                                <div className="ml-1">
                                    <h5 className="footer-card-h5">Tanlangan kurslaringiz narxi</h5>
                                    <h2 className="footer-card-text">
                                        3 100 000 so‘m
                                    </h2>
                                </div>
                                <div className="">
                                    <button className="btn btn-dark footer-button ml-4">
                                        <p> Xarid qilish</p>
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="footer-hr-card"></div>


                <footer className="bg-white">
                    <div className="container">

                        <div className="col-lg-12  d-flex flex-wrap">

                            <div className="col-lg-3 mt-5">
                                <h4 className="pdp-number">(78) 777-47-47</h4>
                                <p className="text-black-50"> Yagona xizmat raqami</p>
                                <div className="mt-5 mb-1">
                                    <img src="./img/Frame.svg" alt=""/>
                                </div>

                                <p>Toshkent shahar. Shayxontohur tum.,
                                    Zarqaynar ko'ch., 3b-uy. </p>

                                <div className="d-flex mt-4">
                                    <img src="./img/Bitmap.svg" alt=""/>
                                    <div className="ml-1">
                                        <img src="./img/Bitmap Copy.svg" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 mt-5 offset-3">
                                <h5 className="asos-h5">Asosiy</h5>


                                <h6 className="kom-h5 mt-4">Kompaniya haqida</h6>
                                <h6 className="kom-h5">Hamkorlik</h6>
                                <h6 className="kom-h5"> Huquqiy hujjatlar</h6>
                                <h6 className="kom-h5"> Bog’lanish</h6>
                            </div>
                            <div className="col-lg-1 mt-5">
                                <h5 className="asos-h5">Ta’lim</h5>


                                <h6 className="kom-h5 mt-4">Onside</h6>
                                <h6 className="kom-h5">Online</h6>
                                <h6 className="kom-h5">Imtiyoz</h6>
                                <h6 className="kom-h5">Code Skill</h6>
                            </div>
                            <div className="col-lg-2 mt-5 offset-1">
                                <h5 className="asos-h5">
                                    Loyihalar
                                </h5>


                                <h6 className="kom-h5 mt-4"> PDP Live</h6>
                                <h6 className="kom-h5">PDP Meetup</h6>
                                <h6 className="kom-h5">PDP Generation</h6>
                                <h6 className="kom-h5">Sertifikat</h6>
                            </div>
                        </div>
                        <div className="footer-2-hr"></div>
                        <div className="col-lg-12 justify-content-between flex-wrap d-flex">
                            <div className="col-lg-3 mb-4">
                                <p>Inflex, Inc. 2017 – 2020</p>
                            </div>
                            <div className="col-lg-2 mb-4">
                                <img className="ml-4" src="./img/facebook.svg" alt=""/>
                                <img className="ml-1" src="./img/telegram.svg" alt=""/>
                                <img className="ml-1" src="./img/isn.svg" alt=""/>

                            </div>
                        </div>
                    </div>
                </footer>


            </div>


        );
    }
}

export default ThreePage;