<!DOCTYPE html>
<!--
  Notepad এ এডিট করার নিয়ম:
  - ট্যাবের নাম:        <title> লাইন খুঁজুন (Ctrl+F > title)
  - লোগোর নাম:         class="logo" খুঁজুন
  - ডেমো পপআপের লেখা:  "DEMO POPUP" কমেন্ট খুঁজুন, তার নিচের লেখা বদলান
  - সেভ করার সময় Encoding: UTF-8 দিন, তারপর ব্রাউজারে F5 চাপুন
-->
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>M i Creation</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #0a1628 0%, #1a3a52 50%, #0f2438 100%);
            color: #ffffff;
            line-height: 1.6;
            min-height: 100vh;
        }

/* Navigation */
        nav {
            background: rgba(10, 22, 40, 0.95);
            padding: 1rem 5%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: sticky;
            top: 0;
            z-index: 1000;
            border-bottom: 1px solid rgba(26, 188, 156, 0.2);
        }

.logo {
            font-size: 1.5rem;
            font-weight: bold;
            color: #1abc9c;
        }

.nav-links {
            display: flex;
            gap: 2rem;
            list-style: none;
            align-items: center;
        }

.nav-links a {
            color: #ffffff;
            text-decoration: none;
            transition: color 0.3s;
            font-weight: 500;
        }

.nav-links a:hover,
        .nav-links a.active {
            color: #1abc9c;
        }

.cart-icon {
            position: relative;
        }

.cart-badge {
            position: absolute;
            top: -8px;
            right: -8px;
            background: #e74c3c;
            color: white;
            border-radius: 50%;
            width: 18px;
            height: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.7rem;
        }

.sign-in-btn {
            background: transparent;
            border: 1px solid #1abc9c;
            color: #1abc9c;
            padding: 0.5rem 1.5rem;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.3s;
        }

.sign-in-btn:hover {
            background: #1abc9c;
            color: #0a1628;
        }

/* Hero Section */
        .hero {
            display: flex;
            align-items: center;
            justify-content: space-around;
            padding: 4rem 5%;
            max-width: 1400px;
            margin: 0 auto;
            gap: 3rem;
            flex-wrap: wrap;
        }

.hero-image {
            flex: 1;
            min-width: 300px;
            max-width: 500px;
        }

.profile-card {
            background: linear-gradient(135deg, rgba(26, 188, 156, 0.1) 0%, rgba(52, 152, 219, 0.1) 100%);
            border-radius: 20px;
            padding: 2rem;
            border: 2px solid rgba(26, 188, 156, 0.3);
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        }

.profile-card img {
            width: 100%;
            border-radius: 15px;
        }

.hero-content {
            flex: 1;
            min-width: 300px;
            max-width: 600px;
        }

.label {
            color: #1abc9c;
            text-transform: uppercase;
            font-size: 0.9rem;
            letter-spacing: 2px;
            margin-bottom: 1rem;
        }

.hero-title {
            font-size: 3rem;
            margin-bottom: 1rem;
            font-weight: 700;
        }

.hero-title .highlight {
            color: #1abc9c;
        }

.hero-description {
            color: #b0c4de;
            margin-bottom: 2rem;
            font-size: 1.1rem;
        }

.search-box {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(26, 188, 156, 0.3);
            border-radius: 10px;
            padding: 1rem;
            display: flex;
            align-items: center;
            margin-bottom: 2rem;
        }

.search-box input {
            background: transparent;
            border: none;
            color: white;
            flex: 1;
            outline: none;
            font-size: 1rem;
        }

.search-box input::placeholder {
            color: rgba(255, 255, 255, 0.5);
        }

.cta-buttons {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
        }

.btn {
            padding: 0.8rem 2rem;
            border-radius: 8px;
            border: none;
            cursor: pointer;
            font-size: 1rem;
            transition: all 0.3s;
            text-decoration: none;
            display: inline-block;
            text-align: center;
        }

.btn-primary {
            background: #1abc9c;
            color: #0a1628;
            font-weight: 600;
        }

.btn-primary:hover {
            background: #16a085;
            transform: translateY(-2px);
            box-shadow: 0 5px 20px rgba(26, 188, 156, 0.4);
        }

.btn-secondary {
            background: transparent;
            color: #ffffff;
            border: 1px solid #ffffff;
        }

.btn-secondary:hover {
            background: rgba(255, 255, 255, 0.1);
            transform: translateY(-2px);
        }

/* About Section */
        .about-section {
            padding: 4rem 5%;
            background: rgba(0, 0, 0, 0.2);
        }

.section-title {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }

.section-title .highlight {
            color: #1abc9c;
        }

.section-description {
            text-align: center;
            color: #b0c4de;
            margin-bottom: 3rem;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
        }

.cards-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            max-width: 1400px;
            margin: 0 auto;
        }

.card {
            background: linear-gradient(135deg, rgba(26, 188, 156, 0.1) 0%, rgba(52, 152, 219, 0.05) 100%);
            border: 1px solid rgba(26, 188, 156, 0.3);
            border-radius: 15px;
            padding: 2rem;
            transition: all 0.3s;
        }

.card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(26, 188, 156, 0.2);
            border-color: #1abc9c;
        }

.card-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: #1abc9c;
        }

.card-title {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: #ffffff;
        }

.card-text {
            color: #b0c4de;
            line-height: 1.8;
        }

/* Courses Section */
        .courses-section {
            padding: 4rem 5%;
        }

.course-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            max-width: 1400px;
            margin: 0 auto;
        }

.course-card {
            background: rgba(0, 0, 0, 0.3);
            border-radius: 15px;
            overflow: hidden;
            transition: all 0.3s;
            border: 1px solid rgba(26, 188, 156, 0.2);
        }

.course-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(26, 188, 156, 0.3);
        }

.course-image {
            width: 100%;
            height: 200px;
            background: linear-gradient(135deg, #1abc9c 0%, #3498db 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: bold;
        }

.course-content {
            padding: 1.5rem;
        }

.course-title {
            font-size: 1.3rem;
            margin-bottom: 0.5rem;
        }

.course-price {
            color: #1abc9c;
            font-size: 1.5rem;
            font-weight: 600;
            margin: 1rem 0;
        }

/* Theme Toggle */
        .theme-toggle {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            background: rgba(26, 188, 156, 0.2);
            border: 1px solid #1abc9c;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s;
            font-size: 1.5rem;
        }

.theme-toggle:hover {
            background: #1abc9c;
            transform: rotate(180deg);
        }

.scroll-top {
            position: fixed;
            bottom: 5rem;
            right: 2rem;
            background: rgba(26, 188, 156, 0.2);
            border: 1px solid #1abc9c;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s;
            font-size: 1.5rem;
        }

.scroll-top:hover {
            background: #1abc9c;
        }

/* Responsive */
        @media (max-width: 768px) {
            .hero-title {
                font-size: 2rem;
            }
            
            .nav-links {
                gap: 1rem;
            }
            
            .hero {
                padding: 2rem 5%;
            }
        }

        /* ===== Responsive fixes (added: mobile + desktop view only) ===== */
        html { -webkit-text-size-adjust: 100%; }
        body { overflow-x: hidden; font-family: 'Segoe UI', 'Nirmala UI', 'Noto Sans Bengali', Tahoma, Geneva, Verdana, sans-serif; }
        img { max-width: 100%; height: auto; }
        section[id] { scroll-margin-top: 64px; }

        /* nav aligns with page content on wide screens */
        nav { padding-left: max(5%, calc((100% - 1400px) / 2)); padding-right: max(5%, calc((100% - 1400px) / 2)); }
        .nav-links li { white-space: nowrap; }

        .profile-card img { display: block; }

        /* hero */
        .hero { justify-content: center; gap: 3rem 4rem; }
        .hero-image { flex: 0 1 420px; min-width: min(300px, 100%); }
        .hero-content { flex: 1 1 420px; min-width: min(300px, 100%); }
        .hero-title { font-size: clamp(2rem, 5vw, 3.2rem); line-height: 1.2; overflow-wrap: anywhere; }
        .hero-description { font-size: clamp(1rem, 2.2vw, 1.1rem); }
        .search-box input { min-width: 0; width: 100%; }

        /* sections */
        .section-title { font-size: clamp(1.7rem, 4.5vw, 2.5rem); line-height: 1.3; }
        .section-description { padding-left: .5rem; padding-right: .5rem; }
        .cards-container,
        .course-grid { grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr)); }
        .course-card { display: flex; flex-direction: column; }
        .course-content { display: flex; flex-direction: column; flex: 1; }
        .course-content .btn { margin-top: auto; align-self: flex-start; }

        /* floating buttons never overlap */
        .scroll-top { bottom: 5.5rem; }

        /* tablet / mobile */
        @media (max-width: 768px) {
            section[id] { scroll-margin-top: 115px; }
            nav { flex-direction: column; gap: .6rem; padding-top: .7rem; padding-bottom: .7rem; }
            .nav-links { flex-wrap: wrap; justify-content: center; gap: .5rem 1rem; font-size: .95rem; }
            .sign-in-btn { padding: .4rem 1rem; }
            .hero { padding: 2rem 5%; gap: 2rem; }
            .about-section, .courses-section { padding: 3rem 5%; }
        }

        /* small phones */
        @media (max-width: 480px) {
            .nav-links { gap: .5rem .8rem; font-size: .88rem; }
            .logo { font-size: 1.3rem; }
            .profile-card { padding: 1rem; border-radius: 16px; }
            .label { font-size: .8rem; letter-spacing: 1.5px; }
            .search-box { padding: .8rem; }
            .cta-buttons .btn { flex: 1 1 calc(50% - .5rem); padding: .8rem 1rem; }
            .cta-buttons .btn-primary { flex-basis: 100%; }
            .card { padding: 1.3rem; }
            .card-title { font-size: 1.25rem; }
            .course-image { height: 170px; }
            .course-content { padding: 1.2rem; }
            .course-content .btn { align-self: stretch; }
            .theme-toggle, .scroll-top { width: 44px; height: 44px; right: 1rem; font-size: 1.2rem; }
            .theme-toggle { bottom: 1rem; }
            .scroll-top { bottom: 4.3rem; }
        }

        /* ===== Custom icons + light mode (added) ===== */
        .card-icon { line-height: 0; }
        .ui-icon { width: 56px; height: 56px; display: block; }
        .ui-icon .tile { fill: rgba(26, 188, 156, 0.12); stroke: rgba(26, 188, 156, 0.35); stroke-width: 1.5; }
        .ui-icon .acc, .tg-ico .acc { stroke: #3498db; }
        .nav-ico { display: block; }
        .nav-ico .accf { fill: #1abc9c; stroke: none; }
        .theme-toggle, .scroll-top { color: #1abc9c; }
        .theme-toggle:hover, .scroll-top:hover { color: #0a1628; }
        .theme-toggle:hover .acc, .scroll-top:hover .acc { stroke: #0a1628; }

        body.light { color: #1b2a3a; }
        body.light nav { background: rgba(255, 255, 255, 0.92); border-bottom-color: rgba(14, 138, 112, 0.35); }
        body.light .nav-links a { color: #1b2a3a; }
        body.light .nav-links a:hover, body.light .nav-links a.active { color: #0e8a70; }
        body.light .logo, body.light .label, body.light .highlight, body.light .course-price, body.light .card-icon { color: #0e8a70; }
        body.light .card-title span { color: #0e8a70 !important; }
        body.light .sign-in-btn { color: #0e8a70; border-color: #0e8a70; }
        body.light .sign-in-btn:hover { background: #0e8a70; color: #ffffff; }
        body.light .hero-description, body.light .section-description, body.light .card-text { color: #46607a; }
        body.light .search-box { background: rgba(255, 255, 255, 0.75); border-color: rgba(14, 138, 112, 0.4); }
        body.light .search-box input { color: #1b2a3a; }
        body.light .search-box input::placeholder { color: rgba(27, 42, 58, 0.5); }
        body.light .btn-secondary { color: #1b2a3a; border-color: #1b2a3a; }
        body.light .btn-secondary:hover { background: rgba(27, 42, 58, 0.08); }
        body.light .about-section { background: rgba(255, 255, 255, 0.45); }
        body.light .card { background: rgba(255, 255, 255, 0.75); }
        body.light .card-title, body.light .course-title { color: #1b2a3a; }
        body.light .course-image { color: #ffffff; }
        body.light .course-card { background: #ffffff; border-color: rgba(14, 138, 112, 0.25); }
        body.light .theme-toggle, body.light .scroll-top { color: #0e8a70; background: rgba(255, 255, 255, 0.8); border-color: #0e8a70; }
        body.light .theme-toggle:hover, body.light .scroll-top:hover { background: #0e8a70; color: #ffffff; }
        body.light .theme-toggle:hover .acc, body.light .scroll-top:hover .acc { stroke: #ffffff; }

        /* ===== Demo popup (added) ===== */
        .demo-overlay { position: fixed; inset: 0; z-index: 3000; background: rgba(4, 10, 20, 0.78); display: flex; align-items: center; justify-content: center; padding: 1rem; }
        .demo-box { width: min(460px, 100%); background: linear-gradient(135deg, #0f2438 0%, #12344a 100%); border: 1px solid rgba(26, 188, 156, 0.45); border-radius: 18px; padding: 2rem 1.6rem 1.6rem; text-align: center; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.55); color: #ffffff; max-height: 90vh; overflow-y: auto; }
        .demo-ico { width: 60px; height: 60px; margin: 0 auto 1rem; display: block; color: #f5b041; }
        .demo-ico .tile { fill: rgba(245, 176, 65, 0.12); stroke: rgba(245, 176, 65, 0.4); stroke-width: 1.5; }
        .demo-ico .acc { stroke: #1abc9c; }
        .demo-box h2 { font-size: 1.4rem; margin-bottom: .7rem; color: #ffffff; }
        .demo-box p { color: #b0c4de; line-height: 1.8; margin-bottom: 1.4rem; font-size: 1rem; }
        .demo-box .btn { width: 100%; }
    </style>
</head>
<body>
    <!-- ===== DEMO POPUP: নিচের লেখাগুলো বদলান ===== -->
    <div class="demo-overlay" id="demoPopup" role="alertdialog" aria-modal="true" aria-labelledby="demoTitle">
        <div class="demo-box">
            <svg class="demo-ico" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect class="tile" x="3" y="3" width="42" height="42" rx="12"/><path d="M24 12L38 36H10z"/><path class="acc" d="M24 21v7"/><circle class="acc" cx="24" cy="32" r="1"/></svg>
            <h2 id="demoTitle">সতর্কতা: এটি একটি ডেমো ফাইল</h2>
            <p>এটি শুধুমাত্র নমুনা (ডেমো) ওয়েবসাইট। এখানকার নাম, ছবি, কোর্স ও দাম প্রদর্শনের জন্য দেওয়া হয়েছে। এখানে কোনো আসল লেনদেন বা এনরোলমেন্ট হবে না।</p>
            <button class="btn btn-primary" type="button" onclick="document.getElementById('demoPopup').style.display='none'">ঠিক আছে, বুঝেছি</button>
        </div>
    </div>
    <!-- ===== DEMO POPUP শেষ ===== -->
    <!-- Navigation -->
    <nav>
        <div class="logo"> M i Creation</div>
        <ul class="nav-links">
            <li><a href="#home" class="active">Home</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li class="cart-icon">
                <a href="#cart" aria-label="Cart"><svg class="nav-ico" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3.5h2.5l2 10.5h9.5l2-7.5H7"/><circle class="accf" cx="9.5" cy="19" r="1.5"/><circle class="accf" cx="16.5" cy="19" r="1.5"/></svg></a>
                <span class="cart-badge">0</span>
            </li>
            <li><button class="sign-in-btn" onclick="handleSignIn()">Sign In</button></li>
        </ul>
    </nav>

<!-- Hero Section -->
    <section class="hero" id="home">
        <div class="hero-image">
            <div class="profile-card">
                <img src="https://i.ibb.co.com/Swy9bcW2/muminul.png" alt="Muminul islam">
            </div>
        </div>
        <div class="hero-content">
            <p class="label">Typography & Graphic Design Mentor</p>
            <h1 class="hero-title">Muminul <span class="highlight">Islam</span></h1>
            <p class="hero-description">
                Master the Art of Bengali Letterforms — from analog sketches to production-ready variable fonts.
            </p>
            <div class="search-box">
                <span></span>
                <input type="text" placeholder="Browse courses..." id="searchInput">
            </div>
            <div class="cta-buttons">
                <button class="btn btn-primary" onclick="window.location.href='#courses'">View Courses</button>
                <button class="btn btn-secondary" onclick="window.open('https://www.facebook.com/themuminulislam', '_blank')">Facebook</button>
                <button class="btn btn-secondary" onclick="window.open('https://potrodip.github.io/', '_blank')">Webzine</button>
            </div>
        </div>
    </section>

<!-- About Section -->
    <section class="about-section" id="about">
        <h2 class="section-title"><span class="highlight">মুমিনুল ইসলাম</span> কে?</h2>
        <p class="section-description">
মুমিনুল ইসলাম বাংলাদেশের একজন নামকরা গ্রাফিক আর্টিস্ট, টাইপোগ্রাফার এবং ফন্ট ডিজাইনার। বাংলা ক্যালিগ্রাফি, লেটারিং আর টাইপফেস তৈরির মতো দারুণ সব কাজের জন্য এদেশের ক্রিয়েটিভ কমিউনিটিতে তিনি বেশ পরিচিত।
        </p>
        <div class="cards-container">
            <div class="card">
                <div class="card-icon"><svg class="ui-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect class="tile" x="3" y="3" width="42" height="42" rx="12"/><path class="acc" d="M14 11h20"/><path d="M24 38c-6-6.5-9-11-9-15a9 9 0 0 1 18 0c0 4-3 8.5-9 15z"/><circle class="acc" cx="24" cy="23" r="3"/></svg></div>
                <h3 class="card-title">প্রতিষ্ঠাতা <span style="color: #1abc9c;">(CEO)</span></h3>
                <p class="card-text">
 
                </p>
            </div>
            <div class="card">
                <div class="card-icon"><svg class="ui-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect class="tile" x="3" y="3" width="42" height="42" rx="12"/><path d="M24 36l-7-9 3-12 4-3 4 3 3 12z"/><path d="M24 24v8"/><circle class="acc" cx="24" cy="21" r="1.6"/><path class="acc" d="M14 40h20"/></svg></div>
                <h3 class="card-title"><span style="color: #1abc9c;">ফন্ট</span> নির্মাতা</h3>
                <p class="card-text">
                </p>
            </div>
            <div class="card">
                <div class="card-icon"><svg class="ui-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect class="tile" x="3" y="3" width="42" height="42" rx="12"/><path d="M24 14l14 7-14 7-14-7z"/><path d="M17 25v6c0 2 3.5 4 7 4s7-2 7-4v-6"/><path class="acc" d="M38 21v9"/></svg></div>
                <h3 class="card-title">প্রশিক্ষক</h3>
                <p class="card-text">
                </p>
            </div>
        </div>
    </section>

<!-- Courses Section -->
    <section class="courses-section" id="courses">
        <h2 class="section-title">My <span class="highlight">Courses</span></h2>
        <p class="section-description">
            Choose from our collection of hands-on courses designed for real-world skills.
        </p>
        <div class="course-grid">
            <div class="course-card">
                <div class="course-image">Photoshop</div>
                <div class="course-content">
                    <h3 class="course-title">Professional Photoshop Course</h3>
                    <p class="card-text">Complete graphics design course from beginner to advanced level.</p>
                    <p class="course-price">300 tk</p>
                    <button class="btn btn-primary" onclick="enrollCourse('Graphics Design')">Enroll Now</button>
                </div>
            </div>
            <div class="course-card">
                <div class="course-image" style="background: linear-gradient(135deg, #3498db 0%, #9b59b6 100%);">Typography</div>
                <div class="course-content">
                    <h3 class="course-title">Typography PRO 2</h3>
                    <p class="card-text">Advanced typography and Bengali letterform design.</p>
                    <p class="course-price">500 tk</p>
                    <button class="btn btn-primary" onclick="enrollCourse('Typography PRO')">Enroll Now</button>
                </div>
            </div>
            <div class="course-card">
                <div class="course-image" style="background: linear-gradient(135deg, #e74c3c 0%, #f39c12 100%);">Illustrator</div>
                <div class="course-content">
                    <h3 class="course-title">Professional Illustrator Course</h3>
                    <p class="card-text">Master Adobe Illustrator for professional design work.</p>
                    <p class="course-price">300 tk</p>
                    <button class="btn btn-primary" onclick="enrollCourse('Illustrator')">Enroll Now</button>
                </div>
            </div>
        </div>
    </section>

<!-- Theme Toggle -->
    <div class="theme-toggle" onclick="toggleTheme()"><svg class="tg-ico" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/><path class="acc" d="M17 4v3M15.5 5.5h3"/></svg></div>
    <div class="scroll-top" onclick="scrollToTop()"><svg class="tg-ico" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path class="acc" d="M7 3.5h10"/><path d="M12 20V8"/><path d="M6.5 13.5L12 8l5.5 5.5"/></svg></div>

<script>
        // Sign In Function
        function handleSignIn() {
            alert('Sign In functionality will redirect to login page');
            // window.location.href = '/login';
        }

// Enroll Course Function
        function enrollCourse(courseName) {
            alert(`You are enrolling in: ${courseName}\n\nThis will redirect to the course enrollment page.`);
            // window.location.href = `/enroll?course=${courseName}`;
        }

// Search Functionality
        document.getElementById('searchInput').addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            console.log('Searching for:', searchTerm);
            // Add your search logic here
        });

// Theme Toggle
        let isDark = true;
        const ICON_MOON = '<svg class="tg-ico" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/><path class="acc" d="M17 4v3M15.5 5.5h3"/></svg>';
        const ICON_SUN = '<svg class="tg-ico" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path class="acc" d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/></svg>';
        function toggleTheme() {
            isDark = !isDark;
            document.body.classList.toggle('light', !isDark);
            if (isDark) {
                document.body.style.background = 'linear-gradient(135deg, #0a1628 0%, #1a3a52 50%, #0f2438 100%)';
                document.querySelector('.theme-toggle').innerHTML = ICON_MOON;
            } else {
                document.body.style.background = 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)';
                document.querySelector('.theme-toggle').innerHTML = ICON_SUN;
            }
        }

// Scroll to Top
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

// Smooth Scroll for Navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

// Cart Functionality
        let cartCount = 0;
        function updateCart() {
            cartCount++;
            document.querySelector('.cart-badge').textContent = cartCount;
        }

// Show/Hide Scroll to Top Button
        window.addEventListener('scroll', function() {
            const scrollTop = document.querySelector('.scroll-top');
            if (window.pageYOffset > 300) {
                scrollTop.style.display = 'flex';
            } else {
                scrollTop.style.display = 'none';
            }
        });
    </script>
</body>
</html>
