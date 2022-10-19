import React from 'react'
import copy from './images/copy1.jpg';
import copy2 from './images/copy2.jpg';
import copy3 from './images/copy3.jpeg';
import copy5 from './images/copy5.jpg';
import logo from './images/logo.png';
import fresh from './images/fresh.png';

function Index() {
    return (

        <div>
            <header>
                <div className='nav-bar'>
                    <div className="logo">
                        <a href="/">
                            <img src={logo} className="logosvg" alt="" />
                        </a>
                    </div>
                    <div className="nav-menu">
                        <ul>
                            <li><a href=""> Courses</a></li>
                            <li><a href=""> Career</a></li>
                            <li><a href=""> Organization</a></li>
                            <li><a href=""> Blog</a></li>
                            <li><a href=""> Community</a></li>
                            <button id='btn1' type="submit">Sign up</button>
                            <button id='btn2' type="submit">Sign in</button>
                        </ul>

                    </div>
                </div>
            </header>
            <div className='Blog'>
                <h3>BLOG</h3>
                <p id='content'>We supply you with informative and educative posts, read till your heart is content!!!.
                </p>
            </div>
            <div className='box'>
                <img src={copy} className="images" alt="" />
                <h1>Data Science vs. Data Analysis: What’s the Difference?</h1>
                <h2>Triumph Ogeh</h2>
                <p>a lot of difference in opinion when it comes to clearly differentiating between data science and data analysis , to be honest the difference is very slight as they are</p>
                <button className='button'>Read More</button>
            </div>
            <div className='box'>
                <img src={copy2} className="images" alt="" />
                <h1>Embracing Structured and supervised learning</h1>
                <h2>Kolawole Oluwasegun</h2>
                <p>There are only two types of learning that constitute a full learning curve. It serves as the road plan for a successful career. These types of learning are Structured and Supervised</p>
                <button className='button'>Read More</button>
            </div>
            <div className='box'>
                <img src={copy3} className="images" alt="" />
                <h1>"Tech Hangout with Miriam (december edition)</h1>
                <h2>Arijeniwa Adetomiwa</h2>
                <p>Tech Hangout with Miriam is a monthly program powered by Cholatrek. It exposes a tech enthusiast to the realities and the emerging issues in the tech space.This is the last edition of</p>
                <button className='button'>Read More</button>
            </div>
            <section className='section'>
                <div className='boxes'>
                    <div>
                        <h5 id='headline'>Data Science vs. Data Analysis: What’s the Difference?</h5>
                        <h2 id='name'>Triumph Ogeh</h2>
                        <p id='page'>a lot of difference in opinion when it comes to clearly differentiating between data science and data analysis , to be honest the difference is very slight as they are</p>
                        <button id='buttonx'>Read More</button>
                    </div>
                    <div className='boxes'>
                        <img src={copy} id="image" alt="" />
                    </div>
                </div>
            </section>
            <section>
                <div className='box3'>
                    <img src={copy5} id="copy5" alt="" />
                    <h1 id='headline2'>
                        Cholatrek launched an e-learning platform from akure metropolis
                    </h1>
                    <h2 id='name2'>
                        Arijeniwa Adetomiwa
                    </h2>
                    <p id='page2'>
                        The tech sector of the Nigerian economy is one of the fastest-growing sectors in the economy. Over the years, the sector has contributed immensely ...
                    </p>
                    <button className='button'>Read More</button>
                </div>
            </section>
            <section>
                <div className='subscribe-form'>
                    <div className='form'>
                        <h1 id='subscribe'>
                            Subscribe to our newsletter
                        </h1>
                        <p id='pagex'>
                            Get exclusive discounts and latest news deliverd to your inox for free!
                        </p>

                    </div>
                    <div className='email'>
                        <form>

                            <input type="email" placeholder="email" value=""></input>
                            <button id='submit'>submit</button>
                        </form>

                    </div>
                </div>

            </section>
            <section>
                <div className='background'>
                    <div id='back1'>
                        <img src={fresh} className="fresh" alt="" />
                    </div>
                    <div id='back2'>
                        <h1 id='tee'>
                            Let’s Build Something Great Together
                        </h1>
                        <p id='p1'>
                            We are on this journey together with you, our structured learning curriculum is coupled with a supervised feature. As much as we are sure that our courses are simplified and easy for any kind of student to learn. We don’t dispute the fact that mentorship and direction given by experienced tutors can fast track the process you can make in your career journey
                        </p>
                        <button className='button0'>Talk to mentor</button>

                    </div>
                </div>
            </section>
            <footer>
                <div className='container'>
                    <div className='div1'>
                        <img src={logo} className="footer-logo" alt="" />
                        <p>
                            We make structured and supervised learning possible. Our students have 100% career leap when they jump on a High Rewarding Skill
                        </p>
                    </div>
                    <div className='div2' id='div3'>
                        <h4>
                            Quick Links
                        </h4>
                        <li><a href=""> Courses</a></li>
                        <li><a href=""> Career</a></li>
                        <li><a href=""> Organization</a></li>
                        <li><a href=""> Blog</a></li>
                        <li><a href=""> Community</a></li>
                            
                    </div>
                    <div className='div2'>
                        <h4>
                            Contact Us
                        </h4>
                        <li> +234 816 050 4976</li>
                        <li>info@cholatrek.io</li>
                        <li>House 5 Green Garage,</li>
                        <li>Stateline RD FUTA south gate</li>
                        <li>Akure, Ondo state Nigeria</li>
                            
                    </div>
                    <div className='div2' id='div4'>
                        <li><a href=""> Get Started</a></li>
                        <li><a href=""> Road Map</a></li>
                        <li><a href=""> Scholarship</a></li>
                        <li><a href=""> Terms and Condition</a></li>
                        <li><a href=""> FAQ</a></li>
                            
                    </div>
                </div>
                <div className='footer-footer'>
                    <b>
                    All rights reserved | Cholatrek 2021
                    </b>
                    <b id='float'>
                    privacy policy
                    </b>
                </div>
            </footer>

        </div>
    )
}

export default Index