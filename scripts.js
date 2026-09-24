/* =========================================================
   VIGNESH VELMURUGAN
   PREMIUM CINEMATIC PORTFOLIO ENGINE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* =====================================================
       1. PREMIUM STYLE ENGINE
       ===================================================== */

    const style = document.createElement("style");

    style.textContent = `

    /* ==============================
       GLOBAL
    ============================== */

    html {
        scroll-behavior: smooth;
    }

    body {
        overflow-x: hidden;
    }

    /* ==============================
       CINEMATIC BACKGROUND
    ============================== */

    #premium-bg {
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: -2;
        overflow: hidden;
        background:
            radial-gradient(
                circle at 15% 20%,
                rgba(37,99,235,0.08),
                transparent 28%
            ),
            radial-gradient(
                circle at 85% 70%,
                rgba(96,165,250,0.07),
                transparent 30%
            );
    }

    .bg-orb {
        position: absolute;
        border-radius: 50%;
        filter: blur(70px);
        opacity: 0.28;
        animation: orbFloat 12s ease-in-out infinite alternate;
    }

    .orb-one {
        width: 320px;
        height: 320px;
        background: rgba(37,99,235,0.15);
        top: 5%;
        left: -100px;
    }

    .orb-two {
        width: 280px;
        height: 280px;
        background: rgba(96,165,250,0.12);
        right: -80px;
        top: 40%;
        animation-delay: -4s;
    }

    .orb-three {
        width: 240px;
        height: 240px;
        background: rgba(29,78,216,0.10);
        left: 40%;
        bottom: -100px;
        animation-delay: -7s;
    }

    @keyframes orbFloat {
        from {
            transform: translate3d(0,0,0) scale(1);
        }

        to {
            transform: translate3d(35px,-25px,0) scale(1.12);
        }
    }

    /* ==============================
       MOUSE SPOTLIGHT
    ============================== */

    #mouse-spotlight {
        position: fixed;
        width: 420px;
        height: 420px;
        border-radius: 50%;
        pointer-events: none;
        z-index: -1;
        transform: translate(-50%,-50%);
        background:
            radial-gradient(
                circle,
                rgba(37,99,235,0.10),
                transparent 68%
            );
        opacity: 0;
        transition: opacity 0.35s ease;
    }

    /* ==============================
       HERO
    ============================== */

    #home {
        position: relative;
        isolation: isolate;
    }

    #home::before {
        content: "";
        position: absolute;
        width: 420px;
        height: 420px;
        border-radius: 50%;
        background: rgba(37,99,235,0.06);
        filter: blur(90px);
        top: 10%;
        left: 50%;
        transform: translateX(-50%);
        z-index: -1;
        animation: heroGlow 6s ease-in-out infinite alternate;
    }

    @keyframes heroGlow {
        from {
            transform: translateX(-50%) scale(0.9);
            opacity: 0.45;
        }

        to {
            transform: translateX(-50%) scale(1.15);
            opacity: 0.85;
        }
    }

    #home h1 {
        position: relative;
        text-shadow:
            0 0 0 transparent;
        transition:
            text-shadow 0.5s ease,
            transform 0.4s ease;
    }

    #home h1:hover {
        text-shadow:
            0 0 25px rgba(37,99,235,0.18);
        transform: translateY(-2px);
    }

    #home h2 {
        background:
            linear-gradient(
                90deg,
                #1d4ed8,
                #60a5fa,
                #1d4ed8
            );
        background-size: 200% auto;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        animation: titleShine 5s linear infinite;
    }

    @keyframes titleShine {
        to {
            background-position: 200% center;
        }
    }

    /* ==============================
       PREMIUM REVEAL
    ============================== */

    .cinematic-reveal {
        opacity: 0;
        transform:
            translateY(45px)
            scale(0.97);
        filter: blur(4px);
        transition:
            opacity 0.9s ease,
            transform 0.9s cubic-bezier(.16,1,.3,1),
            filter 0.9s ease;
    }

    .cinematic-reveal.visible {
        opacity: 1;
        transform:
            translateY(0)
            scale(1);
        filter: blur(0);
    }

    /* ==============================
       CARD LIGHTING
    ============================== */

    .premium-3d {
        position: relative;
        transform-style: preserve-3d;
        will-change: transform;
        overflow: hidden;
    }

    .premium-3d::before {
        content: "";
        position: absolute;
        inset: 0;
        pointer-events: none;
        background:
            radial-gradient(
                circle at var(--light-x,50%) var(--light-y,50%),
                rgba(96,165,250,0.22),
                transparent 38%
            );
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 5;
    }

    .premium-3d:hover::before {
        opacity: 1;
    }

    /* ==============================
       SKILL CARD ICON-LIKE GLOW
    ============================== */

    .skill-card:hover h3 {
        color: #2563eb;
        transition: color 0.3s ease;
    }

    /* ==============================
       PROJECT CARD
    ============================== */

    .project-card {
        transition:
            transform 0.45s cubic-bezier(.16,1,.3,1),
            box-shadow 0.45s ease,
            border-color 0.45s ease;
    }

    /* ==============================
       NAVIGATION
    ============================== */

    nav {
        transition:
            background 0.35s ease,
            box-shadow 0.35s ease,
            padding 0.35s ease;
    }

    nav.scrolled {
        box-shadow:
            0 10px 30px rgba(15,23,42,0.08);
    }

    nav a {
        transition:
            color 0.25s ease,
            transform 0.25s ease;
    }

    nav a:hover {
        transform: translateY(-1px);
    }

    nav a.active {
        color: #2563eb !important;
    }

    /* ==============================
       SCROLL PROGRESS
    ============================== */

    #premium-progress {
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        width: 0%;
        z-index: 999999;
        background:
            linear-gradient(
                90deg,
                #1d4ed8,
                #60a5fa,
                #2563eb
            );
        box-shadow:
            0 0 12px rgba(37,99,235,0.55);
    }

    /* ==============================
       BACK TO TOP
    ============================== */

    #premium-top {
        position: fixed;
        right: 25px;
        bottom: 25px;
        width: 48px;
        height: 48px;
        border: 0;
        border-radius: 50%;
        background: #0f172a;
        color: white;
        cursor: pointer;
        font-size: 20px;
        z-index: 9999;
        opacity: 0;
        visibility: hidden;
        transform: translateY(20px) scale(0.85);
        transition:
            opacity 0.35s ease,
            transform 0.35s ease,
            background 0.25s ease;
        box-shadow:
            0 12px 30px rgba(15,23,42,0.22);
    }

    #premium-top.visible {
        opacity: 1;
        visibility: visible;
        transform: translateY(0) scale(1);
    }

    #premium-top:hover {
        background: #2563eb;
        transform: translateY(-5px) scale(1.05);
    }

    /* ==============================
       RIPPLE
    ============================== */

    .premium-ripple {
        position: absolute;
        border-radius: 50%;
        pointer-events: none;
        background: rgba(255,255,255,0.38);
        transform: scale(0);
        animation: premiumRipple 0.65s ease-out;
    }

    @keyframes premiumRipple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    /* ==============================
       REDUCED MOTION
    ============================== */

    @media (prefers-reduced-motion: reduce) {

        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }

        .cinematic-reveal {
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
        }
    }

    /* ==============================
       MOBILE
    ============================== */

    @media (max-width:700px) {

        #mouse-spotlight {
            display: none;
        }

        .bg-orb {
            filter: blur(55px);
            opacity: 0.18;
        }

        #premium-top {
            width: 44px;
            height: 44px;
            right: 18px;
            bottom: 18px;
        }
    }

    `;

    document.head.appendChild(style);


    /* =====================================================
       2. CINEMATIC BACKGROUND
       ===================================================== */

    const background = document.createElement("div");

    background.id = "premium-bg";

    background.innerHTML = `
        <div class="bg-orb orb-one"></div>
        <div class="bg-orb orb-two"></div>
        <div class="bg-orb orb-three"></div>
    `;

    document.body.prepend(background);


    /* =====================================================
       3. MOUSE SPOTLIGHT
       ===================================================== */

    const spotlight =
        document.createElement("div");

    spotlight.id = "mouse-spotlight";

    document.body.appendChild(spotlight);

    if (
        window.matchMedia("(pointer:fine)").matches &&
        window.innerWidth > 700
    ) {

        window.addEventListener("mousemove", (event) => {

            spotlight.style.left =
                `${event.clientX}px`;

            spotlight.style.top =
                `${event.clientY}px`;

            spotlight.style.opacity = "1";
        });

        document.addEventListener("mouseleave", () => {
            spotlight.style.opacity = "0";
        });
    }


    /* =====================================================
       4. HERO CINEMATIC ENTRANCE
       ===================================================== */

    const heroElements = document.querySelectorAll(
        "#home .welcome, " +
        "#home h1, " +
        "#home h2, " +
        "#home .degree, " +
        "#home .tagline, " +
        "#home .home-buttons"
    );

    heroElements.forEach((element, index) => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(35px)";

        element.style.filter =
            "blur(4px)";

        element.style.transition =
            `
            opacity 0.9s ease ${index * 0.12}s,
            transform 0.9s cubic-bezier(.16,1,.3,1) ${index * 0.12}s,
            filter 0.9s ease ${index * 0.12}s
            `;
    });

    requestAnimationFrame(() => {

        setTimeout(() => {

            heroElements.forEach(element => {

                element.style.opacity = "1";

                element.style.transform =
                    "translateY(0)";

                element.style.filter =
                    "blur(0)";
            });

        }, 150);
    });


    /* =====================================================
       5. CINEMATIC SCROLL REVEAL
       ===================================================== */

    const revealTargets = document.querySelectorAll(
        ".skill-card, " +
        ".project-card, " +
        ".career-card, " +
        ".contact-card, " +
        ".about-text, " +
        ".about-highlights, " +
        "#resume"
    );

    revealTargets.forEach((element, index) => {

        element.classList.add(
            "cinematic-reveal"
        );

        element.style.transitionDelay =
            `${(index % 6) * 0.08}s`;
    });


    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );
                    }
                });

            },
            {
                threshold: 0.12
            }
        );


    revealTargets.forEach(element => {
        revealObserver.observe(element);
    });


    /* =====================================================
       6. PREMIUM 3D CARD TILT
       ===================================================== */

    const cards = document.querySelectorAll(
        ".skill-card, " +
        ".project-card, " +
        ".career-card, " +
        ".contact-card"
    );


    cards.forEach(card => {

        card.classList.add("premium-3d");

        card.addEventListener(
            "mousemove",
            (event) => {

                if (window.innerWidth <= 700) {
                    return;
                }

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateX =
                    ((y - centerY) / centerY) * -3.5;

                const rotateY =
                    ((x - centerX) / centerX) * 3.5;

                card.style.transform =
                    `
                    perspective(1000px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-7px)
                    scale(1.01)
                    `;

                card.style.setProperty(
                    "--light-x",
                    `${(x / rect.width) * 100}%`
                );

                card.style.setProperty(
                    "--light-y",
                    `${(y / rect.height) * 100}%`
                );
            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    `
                    perspective(1000px)
                    rotateX(0)
                    rotateY(0)
                    translateY(0)
                    scale(1)
                    `;
            }
        );

    });


    /* =====================================================
       7. SCROLL PROGRESS
       ===================================================== */

    const progress =
        document.createElement("div");

    progress.id =
        "premium-progress";

    document.body.appendChild(progress);


    const updateProgress = () => {

        const scrollTop =
            window.scrollY;

        const maxScroll =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const percentage =
            maxScroll > 0
                ? (scrollTop / maxScroll) * 100
                : 0;

        progress.style.width =
            `${percentage}%`;
    };


    window.addEventListener(
        "scroll",
        updateProgress,
        { passive: true }
    );

    updateProgress();


    /* =====================================================
       8. NAVBAR SCROLL EFFECT
       ===================================================== */

    const nav =
        document.querySelector("nav");

    const handleNavScroll = () => {

        if (!nav) return;

        if (window.scrollY > 40) {

            nav.classList.add("scrolled");

        } else {

            nav.classList.remove("scrolled");
        }
    };


    window.addEventListener(
        "scroll",
        handleNavScroll,
        { passive: true }
    );

    handleNavScroll();


    /* =====================================================
       9. ACTIVE NAV SECTION
       ===================================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );

    const navLinks =
        document.querySelectorAll(
            'nav a[href^="#"]'
        );


    const sectionObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    navLinks.forEach(link => {
                        link.classList.remove(
                            "active"
                        );
                    });


                    const active =
                        document.querySelector(
                            `nav a[href="#${entry.target.id}"]`
                        );


                    if (active) {
                        active.classList.add(
                            "active"
                        );
                    }

                });

            },
            {
                threshold: 0.35
            }
        );


    sections.forEach(section => {
        sectionObserver.observe(section);
    });


    /* =====================================================
       10. PREMIUM BUTTON RIPPLE
       ===================================================== */

    const buttons =
        document.querySelectorAll(
            ".btn, " +
            ".resume-btn, " +
            ".project-card button"
        );


    buttons.forEach(button => {

        button.style.position =
            "relative";

        button.style.overflow =
            "hidden";


        button.addEventListener(
            "click",
            function(event) {

                const ripple =
                    document.createElement(
                        "span"
                    );

                ripple.className =
                    "premium-ripple";


                const rect =
                    button.getBoundingClientRect();


                const size =
                    Math.max(
                        rect.width,
                        rect.height
                    );


                ripple.style.width =
                    `${size}px`;

                ripple.style.height =
                    `${size}px`;

                ripple.style.left =
                    `${event.clientX -
                      rect.left -
                      size / 2}px`;

                ripple.style.top =
                    `${event.clientY -
                      rect.top -
                      size / 2}px`;


                button.appendChild(
                    ripple
                );


                setTimeout(() => {
                    ripple.remove();
                }, 700);

            }
        );
    });


    /* =====================================================
       11. MAGNETIC PRIMARY BUTTON
       ===================================================== */

    const magneticButtons =
        document.querySelectorAll(
            ".primary-btn, " +
            ".primary-resume"
        );


    magneticButtons.forEach(button => {

        button.addEventListener(
            "mousemove",
            (event) => {

                if (window.innerWidth <= 700) {
                    return;
                }

                const rect =
                    button.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left -
                    rect.width / 2;

                const y =
                    event.clientY -
                    rect.top -
                    rect.height / 2;


                button.style.transform =
                    `
                    translate(
                        ${x * 0.08}px,
                        ${y * 0.08}px
                    )
                    scale(1.03)
                    `;
            }
        );


        button.addEventListener(
            "mouseleave",
            () => {

                button.style.transform =
                    "translate(0,0) scale(1)";
            }
        );

    });


    /* =====================================================
       12. BACK TO TOP
       ===================================================== */

    const topButton =
        document.createElement("button");

    topButton.id =
        "premium-top";

    topButton.innerHTML =
        "↑";

    topButton.setAttribute(
        "aria-label",
        "Back to top"
    );

    document.body.appendChild(
        topButton
    );


    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 600) {

                topButton.classList.add(
                    "visible"
                );

            } else {

                topButton.classList.remove(
                    "visible"
                );
            }

        },
        { passive: true }
    );


    topButton.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


    /* =====================================================
       13. ABOUT COUNTER
    ===================================================== */

    const counters =
        document.querySelectorAll(
            ".about-highlights h3"
        );


    const animateCounter = (element) => {

        const text =
            element.textContent.trim();

        const match =
            text.match(/^(\d+)(.*)$/);

        if (!match) {
            return;
        }


        const target =
            parseInt(match[1]);

        const suffix =
            match[2];


        const duration =
            1000;

        const start =
            performance.now();


        const animate = (time) => {

            const progress =
                Math.min(
                    (time - start) /
                    duration,
                    1
                );


            const eased =
                1 -
                Math.pow(
                    1 - progress,
                    3
                );


            const value =
                Math.floor(
                    target * eased
                );


            element.textContent =
                value + suffix;


            if (progress < 1) {

                requestAnimationFrame(
                    animate
                );

            } else {

                element.textContent =
                    target + suffix;
            }
        };


        requestAnimationFrame(
            animate
        );
    };


    const counterObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        animateCounter(
                            entry.target
                        );

                        observer.unobserve(
                            entry.target
                        );
                    }

                });

            },
            {
                threshold: 0.8
            }
        );


    counters.forEach(counter => {
        counterObserver.observe(counter);
    });


    /* =====================================================
       14. KEYBOARD ACCESSIBILITY
       ===================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Escape") {

                document.activeElement?.blur();
            }

        }
    );


    /* =====================================================
       15. DEVELOPER CONSOLE
    ===================================================== */

    console.log(
        "%c VIGNESH VELMURUGAN ",
        `
        background:#0f172a;
        color:#60a5fa;
        padding:8px 14px;
        border-radius:6px;
        font-size:16px;
        font-weight:bold;
        `
    );

    console.log(
        "%c Data Analyst Portfolio 🚀 ",
        `
        color:#2563eb;
        font-size:13px;
        font-weight:bold;
        `
    );

});