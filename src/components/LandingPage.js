import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/bootstrap-5.0.0-alpha-2.min.css';
import '../assets/css/LineIcons.2.0.css';
import '../assets/css/animate.css';
import '../assets/css/main.css';
import sideimg from '../assets/img/Delivery-man.png';
import homedelivery from '../assets/img/Home_delivery.png';
import icon1 from '../assets/img/service/service-icon-1.svg';
import icon2 from '../assets/img/service/service-icon-2.svg';
import icon3 from '../assets/img/service/service-icon-3.svg';
import icon4 from '../assets/img/service/service-icon-4.svg';
import icon5 from '../assets/img/service/service-icon-5.svg';
import icon6 from '../assets/img/service/service-icon-6.svg';
import aboutImg from '../assets/img/about/about_img.png'
import deliver_img from '../assets/img/about/aboutImg.png'

// // Import scripts
//import '../assets/js/bootstrap.5.0.0.alpha-2-min.js';
// import '../assets/js/wow.min.js';
// import '../assets/js/main.js';

const LandingPage = () => {
    return (
      <div className="App">
       {/* <div class="preloader">
        <div class="loader">
        <div class="ytp-spinner">
        <div class="ytp-spinner-container">
        <div class="ytp-spinner-rotator">
        <div class="ytp-spinner-left">
        <div class="ytp-spinner-circle"></div>
        </div>
        <div class="ytp-spinner-right">
        <div class="ytp-spinner-circle"></div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
   */}
  
        <header class="header">
        <div class="navbar-area">
        <div class="container">
        <div class="row align-items-center">
        <div class="col-lg-12">
        <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="#">
        {/* <img src="../assets/img/logo/logo.svg" alt="Logo" /> */}
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="toggler-icon"></span>
        <span class="toggler-icon"></span>
        <span class="toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
        <ul id="nav" class="navbar-nav ml-auto">
        <li class="nav-item">
        <a class="page-scroll" href="#home">Home</a>
        </li>
        <li class="nav-item">
        <a class="page-scroll" href="#services">Services</a>
        </li>
        <li class="nav-item">
        <a class="page-scroll" href="#about">About</a>
        </li>
        <li class="nav-item">
        <a class="page-scroll" href="#how">How It Works</a>
        </li>
        <li class="nav-item">
        <a class="page-scroll" href="#testimonial">Testimonials</a>
        </li>
        </ul>
        </div>
  
        </nav>
  
        </div>
        </div>
  
        </div>
  
        </div>
  
        </header>
  
  
        <section id="home" class="hero-section">
        <div class="hero-shape">
        <img src="assets/img/hero/hero-shape.svg" alt="" class="shape" />
        </div>
        <div class="container">
        <div class="row align-items-center">
        <div class="col-lg-6">
        <div class="hero-content">
        <h1 class="wow fadeInUp" data-wow-delay=".2s">Home Delivery <span>From Stores Near You</span> </h1>
        <p class="wow fadeInUp" data-wow-delay=".4s">
        Experience the future of shopping with Home Delivery Hub – where your favorite products are just a click away! <br/>
        Enjoy convenience and quality as we bring stores near you right to your doorstep.
        </p>
        <a href="javascript:void(0)" class="main-btn btn-hover wow fadeInUp" data-wow-delay=".6s">Get Started</a>
        </div>
        </div>
        <div class="col-lg-6">
        <div class="hero-img wow fadeInUp" data-wow-delay=".5s">
        <img src={homedelivery} alt="" />
        </div>
        </div>
        </div>
        </div>
        </section>
  
  
        <section id="services" class="service-section pt-150">
        <div class="container">
        <div class="row justify-content-center">
        <div class="col-xl-6 col-lg-8">
        <div class="section-title text-center mb-70">
        <span class="wow fadeInUp" data-wow-delay=".2s">Delivery Services</span>
        <h1 class="wow fadeInUp" data-wow-delay=".4s">All Essentials You Need</h1>
        </div>
        </div>
        </div>
        <div class="row">
        <div class="col-lg-4 col-md-6">
        <div class="single-service wow fadeInUp" data-wow-delay=".2s">
        <div class="icon">
        <img src={icon1} alt="" />
        </div>
        <div class="content">
        <h3>Food</h3>
        <p>Savor the extraordinary – a symphony of flavors awaits to elevate your dining experience and create unforgettable moments.</p>
        </div>
        </div>
        </div>
        <div class="col-lg-4 col-md-6">
        <div class="single-service wow fadeInUp" data-wow-delay=".4s">
        <div class="icon">
        <img src={icon2} alt="" />
        </div>
        <div class="content">
        <h3>Grocery</h3>
        <p>Discover convenience and quality in every aisle – explore a curated selection of premium groceries to simplify your shopping and elevate your kitchen essentials.</p>
        </div>
        </div>
        </div>
        <div class="col-lg-4 col-md-6">
        <div class="single-service wow fadeInUp" data-wow-delay=".6s">
        <div class="icon">
        <img src={icon3} alt="" />
        </div>
        <div class="content">
        <h3>Furniture</h3>
        <p>Transform your living space with style and comfort – explore our collection of elegant and functional furniture pieces that redefine your home's aesthetic.</p>
        </div>
        </div>
        </div>
        <div class="col-lg-4 col-md-6">
        <div class="single-service wow fadeInUp" data-wow-delay=".2s">
        <div class="icon">
        <img src={icon4} alt="" />
        </div>
        <div class="content">
        <h3>Medicine</h3>
        <p>"Prioritize your well-being with our comprehensive selection of high-quality medicines, ensuring you have access to essential healthcare solutions for a healthier and happier life.</p>
        </div>
        </div>
        </div>
        <div class="col-lg-4 col-md-6">
        <div class="single-service wow fadeInUp" data-wow-delay=".4s">
        <div class="icon">
        <img src={icon5} alt="" />
        </div>
        <div class="content">
        <h3>Electronics</h3>
        <p>Explore cutting-edge technology and elevate your lifestyle with our range of innovative electronics, designed to bring convenience and excitement to your daily experiences.</p>
        </div>
        </div>
        </div>
        <div class="col-lg-4 col-md-6">
        <div class="single-service wow fadeInUp" data-wow-delay=".6s">
        <div class="icon">
        <img src={icon6} alt="" />
        </div>
        <div class="content">
        <h3>Clothes</h3>
        <p>Discover style that suits your personality with our diverse collection of fashion-forward clothing, blending comfort and trendsetting designs to elevate your wardrobe.</p>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
  
  
        <section id="about" class="about-section pt-150">
        <div class="container">
        <div class="row">
        <div class="col-lg-6">
        <div class="about-img wow fadeInUp" data-wow-delay=".5s">
        <img src={aboutImg} alt="" />
        </div>
        </div>
        <div class="col-lg-6">
        <div class="about-content">
        <div class="section-title">
        <span class="wow fadeInUp" data-wow-delay=".2s">About Us</span>
        <h1 class="wow fadeInUp" data-wow-delay=".4s">On-time Delivery and Customer Satisfaction</h1>
        <p class="wow fadeInUp" data-wow-delay=".6s">We take pride in our commitment to on-time delivery and unwavering dedication to customer satisfaction. Our mission is to provide you with exceptional service, ensuring a seamless experience from order to delivery.</p>
        </div>
        <div class="rating-meta d-flex align-items-center wow fadeInUp" data-wow-delay=".65s">
        <h5>Rating 4.8</h5>
        <div class="rating">
        <i class="lni lni-star-filled"></i>
        <i class="lni lni-star-filled"></i>
        <i class="lni lni-star-filled"></i>
        <i class="lni lni-star-filled"></i>
        <i class="lni lni-star-filled"></i>
        </div>
        </div>
        <div class="counter-up wow fadeInUp" data-wow-delay=".8s">
        <div class="single-counter">
        <h3 id="secondo1" class="countup" >1M</h3>
        <h5>Download</h5>
        </div>
        <div class="single-counter position-relative">
        <h3 id="secondo2" class="countup">234k </h3>
        <h5>Happy User</h5>
        </div>
        <div class="single-counter">
        <h3 id="secondo3" class="countup" >34k </h3>
        <h5>Reviews</h5>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
  
  
        <section id="how" class="delivery-section pt-150">
        <div class="container">
        <div class="row align-items-center">
        <div class="col-lg-5">
        <div class="delivery-content">
        <div class="section-title">
        <span class="wow fadeInUp" data-wow-delay=".2s">Fast Delivery</span>
        <h1 class="mb-35 wow fadeInUp" data-wow-delay=".4s">Order Now, Recieve Within 30mins</h1>
        <p class="mb-35 wow fadeInUp" data-wow-delay=".6s">Experience lightning-fast delivery! Place your order now and receive it within 30 minutes. We prioritize efficiency to ensure you get your items quickly and conveniently</p>
        <a href="javscript:void(0)" class="main-btn btn-hover wow fadeInUp" data-wow-delay=".8s">Get Started</a>
        </div>
        </div>
        </div>
        <div class="col-lg-7 order-first order-lg-last">
        <div class="delivery-img wow fadeInUp" data-wow-delay=".5s">
        <img src={sideimg} alt="" />
        </div>
        </div>
        </div>
        </div>
        </section>
  
  
        <section id="received" class="about-section received-section pt-150">
        <div class="container">
        <div class="row align-items-center">
        <div class="col-lg-6">
        <div class="about-img received-img wow fadeInUp" data-wow-delay=".5s">
        <img src={deliver_img} alt="" />
        </div>
        </div>
        <div class="col-lg-6">
        <div class="about-content received-content">
        <div class="section-title">
        <span class="wow fadeInUp" data-wow-delay=".2s">Contactless Delivery</span>
        <h1 class="mb-25 wow fadeInUp" data-wow-delay=".4s">On-time Delivery to Your Doorstep</h1>
        <p class="wow fadeInUp" data-wow-delay=".6s">Swift and reliable, our fast delivery ensures you receive your orders within 30 minutes of placing them. Trust us for efficient service and a quick turnaround, making your shopping experience as convenient as possible.</p>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
  
  
        <section id="testimonial" class="testimonial-section img-bg pt-150 pb-40">
        <div class="container">
        <div class="row justify-content-center">
        <div class="col-lg-6">
        <div class="section-title mb-60 text-center">
        <span class="wow fadeInUp" data-wow-delay=".2s">Testimonials</span>
        <h1 class="wow fadeInUp" data-wow-delay=".4s">What Our Users Says</h1>
        </div>
        </div>
        </div>
        <div class="row testimonial-wrapper">
        <div class="col-lg-4 col-md-6 -mt-30">
        <div class="single-testimonial wow fadeInUp" data-wow-delay=".2s">
        <div class="rating">
        <i class="lni lni-star-filled"></i>
        <i class="lni lni-star-filled"></i>
        <i class="lni lni-star-filled"></i>
        <i class="lni lni-star-filled"></i>
        <i class="lni lni-star-filled"></i>
        </div>
        <div class="content">
        <p>Incredible service! The fast delivery exceeded my expectations, and the products were exactly as described. Will definitely be a repeat customer!</p>
        </div>
        <div class="info">
        <div class="image">
        <img src="assets/img/testimonial/testimonial-1.png" alt="" />
        </div>
        <div class="text">
        <h5>Ena Shah</h5>
        <p>Teacher at Peter's College</p>
        </div>
        </div>
        </div>
        </div>
        <div class="col-lg-4 col-md-6 -mt-60">
        <div class="single-testimonial wow fadeInUp" data-wow-delay=".4s">
        <div class="rating">
        <i class="lni lni-star-filled"></i>
        <i class="lni lni-star-filled"></i>
        <i class="lni lni-star-filled"></i>
        <i class="lni lni-star-filled"></i>
        <i class="lni lni-star-filled"></i>
        </div>
        <div class="content">
        <p>I'm thoroughly impressed with the seamless shopping experience provided. The contactless delivery was a game-changer for me. Excellent service!</p>
        </div>
        <div class="info">
        <div class="image">
        <img src="assets/img/testimonial/testimonial-2.png" alt="" />
        </div>
        <div class="text">
        <h5>Mrs. Gosh</h5>
        <p>Actor</p>
        </div>
        </div>
        </div>
        </div>
        <div class="col-lg-4 col-md-6">
        <div class="single-testimonial wow fadeInUp" data-wow-delay=".6s">
        <div class="rating">
        <i class="lni lni-star-filled"></i>
        <i class="lni lni-star-filled"></i>
        <i class="lni lni-star-filled"></i>
        <i class="lni lni-star-filled"></i>
        <i class="lni lni-star-filled"></i>
        </div>
        <div class="content">
        <p>Top-notch customer service! From placing my order to doorstep delivery, everything was smooth and efficient. The attention to detail and on-time service make my go-to for online shopping.</p>
        </div>
        <div class="info">
        <div class="image">
        <img src="assets/img/testimonial/testimonial-3.png" alt="" />
        </div>
        <div class="text">
        <h5>John Doe</h5>
        <p>Model</p>
        </div>
        </div>
        </div>
        </div>
        <div class="col-lg-4 col-md-6 -mt-30">
        <div class="single-testimonial wow fadeInUp" data-wow-delay=".2s">
        <div class="rating">
        <i class="lni lni-star-filled"></i>
        <i class="lni lni-star-filled"></i>
        <i class="lni lni-star-filled"></i>
        <i class="lni lni-star-filled"></i>
        <i class="lni lni-star-filled"></i>
        </div>
        <div class="content">
        <p>Reliable and trustworthy. I've been consistently impressed with the quality of products and the speed of delivery. A five-star experience every time!</p>
        </div>
        <div class="info">
        <div class="image">
        <img src="assets/img/testimonial/testimonial-4.png" alt="" />
        </div>
        <div class="text">
        <h5>Jonathan Smith</h5>
        <p>Creative Designer</p>
        </div>
        </div>
        </div>
        </div>
        <div class="col-lg-4 col-md-6 -mt-60">
        <div class="single-testimonial wow fadeInUp" data-wow-delay=".4s">
        <div class="rating">
        <i class="lni lni-star-filled"></i>
        <i class="lni lni-star-filled"></i>
        <i class="lni lni-star-filled"></i>
        <i class="lni lni-star-filled"></i>
        <i class="lni lni-star-filled"></i>
        </div>
        <div class="content">
        <p>Exceptional! You set the standard for online shopping. The contactless delivery is a fantastic feature, ensuring a safe and convenient experience. Highly recommended!</p>
        </div>
        <div class="info">
        <div class="image">
        <img src="assets/img/testimonial/testimonial-5.png" alt="" />
        </div>
        <div class="text">
        <h5>Sara A. K.</h5>
        <p>Heroine</p>
        </div>
        </div>
        </div>
        </div>
        <div class="col-lg-4 col-md-6">
        <div class="single-testimonial wow fadeInUp" data-wow-delay=".6s">
        <div class="rating">
        <i class="lni lni-star-filled"></i>
        <i class="lni lni-star-filled"></i>
        <i class="lni lni-star-filled"></i>
        <i class="lni lni-star-filled"></i>
        <i class="lni lni-star-filled"></i>
        </div>
        <div class="content">
        <p>I can't express how satisfied I am. From the diverse product range to the lightning-fast delivery, they've earned every bit of this five-star rating. Kudos to the team!</p>
        </div>
        <div class="info">
        <div class="image">
        <img src="assets/img/testimonial/testimonial-6.png" alt="" />
        </div>
        <div class="text">
        <h5>David Smith</h5>
        <p>Businessman</p>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
  
  
        
  
  
        <footer id="footer" class="footer pt-100 pb-70">
        <div class="footer-shape">
        <img src="assets/img/footer/footer-left.svg" alt="" class="shape shape-1" />
        <img src="assets/img/footer/footer-right.svg" alt="" class="shape shape-2" />
        </div>
        <div class="container">
        <div class="row">
        <div class="col-lg-3 col-md-6">
        <div class="footer-widget wow fadeInUp" data-wow-delay=".2s">
        <div class="logo">
        {/* <a href="#"><img src="assets/img/logo/logo-2.svg" alt="logo" /></a> */}
        </div>
        <div class="download-btns">
        <a href="javascript:void(0)">
        <span class="icon"><i class="lni lni-apple"></i></span>
        <span class="text">Download on the <b>App Store</b> </span>
        </a>
        <a href="javascript:void(0)">
        <span class="icon"><i class="lni lni-play-store"></i></span>
        <span class="text">GET IT ON <b>Play Store</b> </span>
        </a>
        </div>
        </div>
        </div>
        <div class="col-lg-3 col-md-6">
        <div class="footer-widget wow fadeInUp" data-wow-delay=".4s">
        <h3>About Us</h3>
        <ul class="links">
        <li>
        <a href="javascript:void(0)">Home</a>
        </li>
        <li>
        <a href="javascript:void(0)">Services</a>
        </li>
        <li>
        <a href="javascript:void(0)">About Us</a>
        </li>
        <li>
        <a href="javascript:void(0)">Contact</a>
        </li>
        </ul>
        </div>
        </div>
        <div class="col-lg-3 col-md-6">
        <div class="footer-widget wow fadeInUp" data-wow-delay=".6s">
        <h3>About</h3>
        <ul class="links">
        <li>
        <a href="javascript:void(0)">Partners</a>
        </li>
        <li>
        <a href="javascript:void(0)">Terms of Service</a>
        </li>
        <li>
        <a href="javascript:void(0)">Privacy Policy</a>
        </li>
        <li>
        <a href="javascript:void(0)">Refund Policy</a>
        </li>
        </ul>
        </div>
        </div>
        <div class="col-lg-3 col-md-6">
        <div class="footer-widget wow fadeInUp" data-wow-delay=".8s">
        <h3>Support</h3>
        <ul class="links">
        <li>
        <a href="javascript:void(0)">Open Ticket</a>
        </li>
        <li>
        <a href="javascript:void(0)">Community</a>
        </li>
        <li>
        <a href="javascript:void(0)">Return Policy</a>
        </li>
        <li>
        <a href="javascript:void(0)">Accessibility</a>
        </li>
        </ul>
        </div>
        </div>
        </div>
        </div>
        </footer>
  
  
        <a href="#" class="scroll-top btn-hover">
        <i class="lni lni-chevron-up"></i>
        </a>
  
      </div>
    );
  
};

export default LandingPage;
