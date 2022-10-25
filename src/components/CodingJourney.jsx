import React from "react";
import "../css/App.css"
import "../css/CodingJourney.css"
import { DiCss3 } from "react-icons/di"
import { AiFillHtml5 } from "react-icons/ai"
import { FaCode, FaPython, FaReact} from "react-icons/fa"
import { VscGithubInverted } from "react-icons/vsc"
import { SiCplusplus, SiScratch, SiJavascript, SiExpo, SiTensorflow, SiPytorch, SiSololearn } from "react-icons/si"
import { BiNetworkChart, BiTimeFive } from "react-icons/bi"
import { BsArrowRightCircle } from "react-icons/bs"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export const CodingJourney = () => {
    return (
        <div className="About" id="CodingJourney">
            <div className="a-headings">
                <p className="p-text1">My Coding Journey</p>
                <p className="p-text2">Where i started and where i am now</p>
            </div>
            <Swiper 
                pagination={true} 
                modules={[Pagination]} 
                className="mySwiper"
                spaceBetween={100}
            >
                <div className="a-heading-div">
                    <p className="a-heading1">My Coding Journey</p>
                </div>
                <SwiperSlide>
                    <div className="a-journey-element">
                        <div className="a-top-bar">
                                <p className="a-heading-journey"><FaCode className="a-icon" /> My coding journey</p>
                        </div>         
                        <p className="a-text-journey">
                            In the following slides you can see my coding journey - how everything started and whre i am now <BsArrowRightCircle className="a-icon2" />
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="a-journey-element">
                        <div className="a-top-bar">
                            <p className="a-heading-journey"><SiScratch className="a-icon" /> Scratch</p>
                        </div>
                        <p className="a-text-journey">
                            I started programming by making little games in a graphical game programming engine
                            callled <a href="https://scratch.mit.edu/" className="a-text3-link">Scratch</a>.
                            I borrowed a
                            <a href="https://www.amazon.de/-/en/Carol-Vorderman/dp/3831040125/ref=sr_1_16?crid=2HPYLEWNGE04A&keywords=python+lernen+kinder&s=books&sprefix=pyhon+lernen+kinde%2Cstripbooks%2C129&sr=1-16" className="a-link-book"> book </a>
                            from a libary (an actual real life libary not a programming libary)
                            about the <a href="https://scratch.mit.edu/" className="a-text3-link">Scratch</a> game
                            engine, i copied many games from this book but learned by coding them how to making
                            such games. It was really fun also because of the reason that you werent even able to
                            get syntax errors or errors in general (except for error like missing out a
                            importand element). I made many games with this engine and had a lot of fun alongside.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="a-journey-element">
                        <div className="a-top-bar">
                            <p className="a-heading-journey"><AiFillHtml5 className="a-icon" /> <DiCss3 className="a-icon" /> html  & css </p>
                        </div>
                        <p className="a-text-journey">
                            Then a friend of my mother thought me some javascript basics. But i didnt started
                            learning javascript, started instead i learned html because he also thought me some
                            html basics. I'm happy afterwards that i didn't started learning at this point because
                            javascript is in my opinion a pretty confusing, not beginner-friendly programming-language.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="a-journey-element">
                        <div className="a-top-bar">
                            <p className="a-heading-journey"><FaPython className="a-icon" /> python</p>
                        </div>
                        <p className="a-text-journey">
                            I started learning python from a <a href="https://www.amazon.de/-/en/dp/3831034575/ref=sr_1_3?crid=2C9CPJH9LAHVH&keywords=python+supereasy&s=books&sprefix=pyhon+supereasy%2Cstripbooks%2C151&sr=1-3" className="a-book-link">book</a>.
                            Then after i got the basics i learned more on python from youtube tutorials.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="a-journey-element">
                    <div className="a-top-bar">
                        <p className="a-heading-journey"><SiCplusplus className="a-icon" /> c++ </p>
                    </div>
                    <p className="a-text-journey">
                        In a computer magazine was a c++ basics tutorial. From there i made one little program
                        (about 300 lines) for my minecraft server that does backups for me
                        (the program is called arky-mc-tool you can find it in the
                        <a href="google.com" className="a-link-to-project-section"> project section</a>), but after this i didnt
                        continued working with c++ because i didnt understand how to link libarys to the compiler.
                    </p>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="a-journey-element">
                        <div className="a-top-bar">
                            <p className="a-heading-journey"><VscGithubInverted className="a-icon" /> git</p>
                        </div>
                        <p className="a-text-journey">
                            I dont remember why i wanted to learn how git works, but i remember that i already knew
                            that github-repositories are a very popular way, to publish open-source projects.
                            So i went on <a href="https://youtube.com" className="a-link-yt">youtube</a> and searched
                            for a git tutorial. After this most of my projects were on github and i used git to 
                            manage my projects for some time.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="a-journey-element">
                        <div className="a-top-bar">
                            <p className="a-heading-journey"><FaPython className="a-icon" /> python pt. 2</p>
                        </div>
                        <p className="a-text-journey">
                            I started learning more on python how python with a app called <a href="https://www.sololearn.com/home" className="a-link">sololearn <SiSololearn/></a>.
                            I learned concepts like <b>O</b>ject <b>O</b>riented <b>P</b>rogramming, Lambdas, Exceptions, mapping, filtering, tuples, sets and list comprehension 
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="a-journey-element">
                        <div className="a-top-bar">
                            <p className="a-heading-journey"><SiTensorflow className="a-icon" /> <SiPytorch className="a-icon"/> <BiNetworkChart className="a-icon" /> Tensorflow & Pytorch & neural networks  and mashine learning in generell</p>
                        </div>
                        <p className="a-text-journey">
                            I watched a <a href="https://www.youtube.com/watch?v=tPYj3fFJGjk">7 hour TensorFlow tutorial</a>, copy-pasted the code, 
                            learned basics about neural networks and mashine learning and made some projects from tutorials, but after all, 
                            i werent able to make my own ai's and neural networks. After some time i stopped learning about stuff like that because
                            other things were more fun for me and there also were some pretty complicated errors with no solutions on stackoverflow.  
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="a-journey-element">
                        <div className="a-top-bar">
                            <p className="a-heading-journey"><FaReact className="a-icon" /> ReactJS</p>
                        </div>
                        <p className="a-text-journey">
                            I started learning ReactJS because i mistook it with react native. I learned ReactJS from a Course from a really good
                            website for learning programming called <a href="https://scrimba.com">Scrimba</a>. But i didnt completed the course.
                        </p>
                    </div>  
                </SwiperSlide>
                <SwiperSlide>
                    <div className="a-journey-element">
                        <div className="a-top-bar">
                            <p className="a-heading-journey"><SiJavascript className="a-icon" /> javascript</p>
                        </div>
                        <p className="a-text-journey">
                            While learning ReactJS i also learned more about javascript. Before i already knew some basics but by doing the ReactJS 
                            Course i also learned more complex concepts like mapping in javascript.
                        </p>
                    </div>   
                </SwiperSlide>
                <SwiperSlide>
                    <div className="a-journey-element">
                        <div className="a-top-bar">
                            <p className="a-heading-journey"><FaReact className="a-icon" /><SiExpo className="a-icon" /> react-native & expo</p>
                        </div>
                        <p className="a-text-journey">
                            After some time realized that i mistook ReactJS with react native and started learning react native. I made some Apps with tutorials
                            and had some fun with that. But because my laptop was to bad for running react native i stopped. 
                        </p>
                    </div>
                </SwiperSlide>   
                <SwiperSlide>
                    <div className="a-journey-element">
                        <div className="a-top-bar">
                            <p className="a-heading-journey"><BiTimeFive className="a-icon" />What im doing now and what i may do in the future</p>
                        </div>
                        <p className="a-text-journey">
                            Im back to ReactJS because i choose to make this website with ReactJS. Making websites with ReactJS is really fun and 
                            for that reason i'll propably continue making websites with ReactJS. Also i think that maybe i will go back to ai,
                            mashine learning etc because i think it has great potential and you can do many great thinks with it. Maybe i will go
                            back to react native and expo someday because i also liked making Apps like that and now getting more and more familiar 
                            with React which helps of course. 
                        </p>
                    </div>
                </SwiperSlide>   
            </Swiper>
        </div>
    );
}