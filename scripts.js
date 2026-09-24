/* =========================================================
   VIGNESH VELMURUGAN
   PREMIUM DATA ANALYST PORTFOLIO
   MOTION + 3D + GLOW ENGINE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    const body = document.body;

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    const isMobile = window.innerWidth <= 650;


    /* =====================================================
       01 — PAGE READY
    ===================================================== */

    document.documentElement.style.scrollBehavior =
        reduceMotion ? "auto" : "smooth";


    /* =====================================================
       02 — CURSOR LIGHT
    ===================================================== */

    const cursor = document.createElement("div");

    cursor.className = "cursor-glow";

    Object.assign(cursor.style, {
        position: "fixed",
        width: "280px",
        height: "280px",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: "50",
        transform: "translate(-50%, -50%)",
        background:
            "radial-gradient(circle, rgba(0,234,255,.14), rgba(0,110,255,.06) 35%, transparent 70%)",
        filter: "blur(8px)",
        opacity: "0",
        transition: "opacity .25s ease"
    });

    body.appendChild(cursor);


    if (!reduceMotion && !isMobile) {

        window.addEventListener("mousemove", (e) => {

            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
            cursor.style.opacity = "1";

        });

    }


    /* =====================================================
       03 — SCROLL PROGRESS
    ===================================================== */

    const progress = document.createElement("div");

    Object.assign(progress.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "0%",
        height: "3px",
        zIndex: "10000",
        pointerEvents: "none",
        background:
            "linear-gradient(90deg,#006eff,#00eaff,#7df7ff)",
        boxShadow:
            "0 0 18px rgba(0,220,255,.9)"
    });

    body.appendChild(progress);


    function updateProgress() {

        const scrollTop = window.scrollY;

        const maxScroll =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const percentage =
            maxScroll > 0
                ? (scrollTop / maxScroll) * 100
                : 0;

        progress.style.width =
            `${percentage}%`;
    }


    window.addEventListener(
        "scroll",
        updateProgress,
        { passive: true }
    );

    updateProgress();


    /* =====================================================
       04 — HERO ELEMENTS
    ===================================================== */

    const hero =
        document.querySelector(".hero");

    const heroContent =
        document.querySelector(".hero-content");

    const dataCore =
        document.querySelector(".data-core");

    const techNodes =
        document.querySelectorAll(".tech-node");

    const orbits =
        document.querySelectorAll(".data-orbit");


    /* =====================================================
       05 — HERO 3D MOUSE MOVEMENT
    ===================================================== */

    if (
        hero &&
        heroContent &&
        !reduceMotion &&
        !isMobile
    ) {

        hero.addEventListener("mousemove", (e) => {

            const rect =
                hero.getBoundingClientRect();

            const x =
                (e.clientX - rect.left) /
                rect.width -
                0.5;

            const y =
                (e.clientY - rect.top) /
                rect.height -
                0.5;


            /* Main content */

            heroContent.style.transform =
                `
                perspective(1400px)
                rotateY(${x * 3}deg)
                rotateX(${y * -3}deg)
                translateZ(25px)
                `;


            /* Central core */

            if (dataCore) {

                dataCore.style.transform =
                    `
                    translate(-50%,-50%)
                    translate3d(${x * 35}px, ${y * 35}px, -180px)
                    rotateY(${x * 8}deg)
                    rotateX(${y * -8}deg)
                    `;

            }


            /* Orbit depth */

            orbits.forEach((orbit, index) => {

                const depth =
                    (index + 1) * 12;

                orbit.style.marginLeft =
                    `${x * depth}px`;

                orbit.style.marginTop =
                    `${y * depth}px`;

            });


            /* Technology nodes */

            techNodes.forEach((node, index) => {

                const depth =
                    (index + 1) * 5;

                node.style.marginLeft =
                    `${x * depth}px`;

                node.style.marginTop =
                    `${y * depth}px`;

            });

        });


        hero.addEventListener("mouseleave", () => {

            heroContent.style.transform =
                `
                perspective(1400px)
                rotateY(0deg)
                rotateX(0deg)
                translateZ(0)
                `;


            if (dataCore) {

                dataCore.style.transform =
                    `
                    translate(-50%,-50%)
                    translateZ(-180px)
                    `;

            }


            orbits.forEach((orbit) => {

                orbit.style.marginLeft = "0px";
                orbit.style.marginTop = "0px";

            });


            techNodes.forEach((node) => {

                node.style.marginLeft = "0px";
                node.style.marginTop = "0px";

            });

        });

    }


    /* =====================================================
       06 — FLOATING TECHNOLOGY NODES
    ===================================================== */

    if (!reduceMotion) {

        techNodes.forEach((node, index) => {

            const duration =
                4200 + index * 850;

            const distance =
                12 + index * 3;

            node.animate(
                [
                    {
                        transform:
                            "translate3d(0,0,0) rotateZ(0deg)"
                    },
                    {
                        transform:
                            `translate3d(0,-${distance}px,0) rotateZ(1deg)`
                    },
                    {
                        transform:
                            "translate3d(0,0,0) rotateZ(0deg)"
                    }
                ],
                {
                    duration,
                    iterations: Infinity,
                    easing: "ease-in-out",
                    delay: index * -500
                }
            );

        });

    }


    /* =====================================================
       07 — DATA CORE PULSE
    ===================================================== */

    if (dataCore && !reduceMotion) {

        const coreCenter =
            dataCore.querySelector(".core-center");

        if (coreCenter) {

            coreCenter.animate(
                [
                    {
                        transform:
                            "translate(-50%,-50%) scale(1)"
                    },
                    {
                        transform:
                            "translate(-50%,-50%) scale(1.08)"
                    },
                    {
                        transform:
                            "translate(-50%,-50%) scale(1)"
                    }
                ],
                {
                    duration: 2600,
                    iterations: Infinity,
                    easing: "ease-in-out"
                }
            );

        }

    }


    /* =====================================================
       08 — CARD 3D TILT
    ===================================================== */

    const cards =
        document.querySelectorAll(
            ".skill-card, .project-card, .contact-card, .career-card, .about-panel"
        );


    cards.forEach((card) => {

        card.style.transformStyle =
            "preserve-3d";


        /* Mouse light */

        const light =
            document.createElement("div");

        Object.assign(light.style, {
            position: "absolute",
            width: "220px",
            height: "220px",
            borderRadius: "50%",
            pointerEvents: "none",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            background:
                "radial-gradient(circle,rgba(0,234,255,.13),transparent 70%)",
            opacity: "0",
            transition: "opacity .25s ease",
            zIndex: "0"
        });

        card.appendChild(light);


        if (!reduceMotion && !isMobile) {

            card.addEventListener(
                "mousemove",
                (e) => {

                    const rect =
                        card.getBoundingClientRect();

                    const x =
                        e.clientX - rect.left;

                    const y =
                        e.clientY - rect.top;

                    const rotateY =
                        ((x - rect.width / 2) /
                            (rect.width / 2)) * 7;

                    const rotateX =
                        ((rect.height / 2 - y) /
                            (rect.height / 2)) * 7;


                    card.style.transform =
                        `
                        perspective(1000px)
                        rotateX(${rotateX}deg)
                        rotateY(${rotateY}deg)
                        translateY(-7px)
                        scale(1.015)
                        `;


                    light.style.left =
                        `${x}px`;

                    light.style.top =
                        `${y}px`;

                    light.style.opacity =
                        "1";

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform =
                        "";

                    light.style.opacity =
                        "0";

                }
            );

        }

    });


    /* =====================================================
       09 — CINEMATIC SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".section-intro, .about-main, .about-panel, " +
            ".skill-card, .project-card, .career-card, " +
            ".contact-card, .resume-section"
        );


    revealElements.forEach(
        (element, index) => {

            element.classList.add(
                "cinematic-reveal"
            );

            element.style.transitionDelay =
                `${(index % 5) * 70}ms`;

        }
    );


    if (!reduceMotion) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "revealed"
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


        revealElements.forEach(
            (element) => {

                revealObserver.observe(
                    element
                );

            }
        );

    } else {

        revealElements.forEach(
            (element) => {

                element.classList.add(
                    "revealed"
                );

            }
        );

    }


    /* =====================================================
       10 — ACTIVE NAVIGATION
    ===================================================== */

    const navLinks =
        document.querySelectorAll(
            ".nav-links a"
        );

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    const navObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        const id =
                            entry.target.id;

                        navLinks.forEach(
                            (link) => {

                                link.classList.toggle(
                                    "active",
                                    link.getAttribute(
                                        "href"
                                    ) === `#${id}`
                                );

                            }
                        );

                    }

                });

            },
            {
                threshold: 0.45
            }
        );


    sections.forEach(
        (section) => {

            navObserver.observe(
                section
            );

        }
    );


    /* =====================================================
       11 — SMOOTH NAVIGATION
    ===================================================== */

    navLinks.forEach((link) => {

        link.addEventListener(
            "click",
            (e) => {

                const href =
                    link.getAttribute(
                        "href"
                    );

                if (
                    !href ||
                    !href.startsWith("#")
                ) return;

                const target =
                    document.querySelector(
                        href
                    );

                if (!target) return;

                e.preventDefault();

                target.scrollIntoView({
                    behavior:
                        reduceMotion
                            ? "auto"
                            : "smooth",
                    block: "start"
                });

            }
        );

    });


    /* =====================================================
       12 — MAGNETIC BUTTONS
    ===================================================== */

    const buttons =
        document.querySelectorAll(
            ".hero-btn, .resume-btn, .project-link"
        );


    if (!reduceMotion && !isMobile) {

        buttons.forEach((button) => {

            button.addEventListener(
                "mousemove",
                (e) => {

                    const rect =
                        button.getBoundingClientRect();

                    const x =
                        e.clientX -
                        rect.left -
                        rect.width / 2;

                    const y =
                        e.clientY -
                        rect.top -
                        rect.height / 2;


                    button.style.transform =
                        `
                        translate(
                            ${x * 0.10}px,
                            ${y * 0.10}px
                        )
                        scale(1.04)
                        `;

                }
            );


            button.addEventListener(
                "mouseleave",
                () => {

                    button.style.transform =
                        "";

                }
            );

        });

    }


    /* =====================================================
       13 — BUTTON RIPPLE
    ===================================================== */

    buttons.forEach((button) => {

        button.addEventListener(
            "click",
            (e) => {

                const rect =
                    button.getBoundingClientRect();

                const size =
                    Math.max(
                        rect.width,
                        rect.height
                    );


                const ripple =
                    document.createElement(
                        "span"
                    );


                Object.assign(
                    ripple.style,
                    {
                        position: "absolute",
                        width: `${size}px`,
                        height: `${size}px`,
                        borderRadius: "50%",
                        left:
                            `${e.clientX - rect.left - size / 2}px`,
                        top:
                            `${e.clientY - rect.top - size / 2}px`,
                        background:
                            "rgba(255,255,255,.2)",
                        transform:
                            "scale(0)",
                        pointerEvents:
                            "none"
                    }
                );


                button.appendChild(
                    ripple
                );


                ripple.animate(
                    [
                        {
                            transform:
                                "scale(0)",
                            opacity: 1
                        },
                        {
                            transform:
                                "scale(1.8)",
                            opacity: 0
                        }
                    ],
                    {
                        duration: 650,
                        easing: "ease-out"
                    }
                );


                setTimeout(
                    () => ripple.remove(),
                    700
                );

            }
        );

    });


    /* =====================================================
       14 — FLOATING PARTICLES
    ===================================================== */

    const particleField =
        document.querySelector(
            ".particle-field"
        );


    if (
        particleField &&
        !reduceMotion
    ) {

        const count =
            isMobile ? 25 : 70;


        for (
            let i = 0;
            i < count;
            i++
        ) {

            const particle =
                document.createElement(
                    "span"
                );


            const size =
                Math.random() * 2.5 + 1;


            Object.assign(
                particle.style,
                {
                    position: "absolute",
                    width: `${size}px`,
                    height: `${size}px`,
                    borderRadius: "50%",
                    left:
                        `${Math.random() * 100}%`,
                    top:
                        `${Math.random() * 100}%`,
                    background:
                        i % 2 === 0
                            ? "#00eaff"
                            : "#087cff",
                    boxShadow:
                        "0 0 10px rgba(0,220,255,.8)",
                    opacity:
                        `${Math.random() * .7 + .2}`
                }
            );


            particleField.appendChild(
                particle
            );


            const duration =
                5000 +
                Math.random() * 10000;


            const x =
                (Math.random() - .5) * 180;

            const y =
                (Math.random() - .5) * 220;


            particle.animate(
                [
                    {
                        transform:
                            "translate3d(0,0,0)",
                        opacity: .2
                    },
                    {
                        transform:
                            `translate3d(${x}px,${y}px,0)`,
                        opacity: .9
                    },
                    {
                        transform:
                            "translate3d(0,0,0)",
                        opacity: .2
                    }
                ],
                {
                    duration,
                    iterations: Infinity,
                    easing: "ease-in-out",
                    delay:
                        -Math.random() *
                        duration
                }
            );

        }

    }


    /* =====================================================
       15 — SKILL BAR ANIMATION
    ===================================================== */

    const skillBars =
        document.querySelectorAll(
            ".skill-bar span"
        );


    skillBars.forEach((bar) => {

        bar.style.width = "0%";

    });


    if (skillBars.length) {

        const skillObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.style.width =
                                    "72%";

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.5
                }
            );


        skillBars.forEach(
            (bar) => {

                skillObserver.observe(
                    bar
                );

            }
        );

    }


    /* =====================================================
       16 — BACK TO TOP
    ===================================================== */

    const backTop =
        document.createElement(
            "button"
        );


    backTop.className =
        "ultra-back-top";

    backTop.innerHTML =
        "↑";

    backTop.setAttribute(
        "aria-label",
        "Back to top"
    );


    Object.assign(
        backTop.style,
        {
            position: "fixed",
            right: "24px",
            bottom: "24px",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            border:
                "1px solid rgba(0,220,255,.35)",
            background:
                "rgba(5,15,30,.8)",
            color:
                "#00eaff",
            fontSize:
                "22px",
            cursor:
                "pointer",
            zIndex:
                "500",
            opacity:
                "0",
            visibility:
                "hidden",
            transform:
                "translateY(20px)",
            transition:
                "all .35s ease",
            backdropFilter:
                "blur(14px)",
            boxShadow:
                "0 0 30px rgba(0,180,255,.15)"
        }
    );


    body.appendChild(
        backTop
    );


    window.addEventListener(
        "scroll",
        () => {

            const visible =
                window.scrollY > 500;


            backTop.style.opacity =
                visible ? "1" : "0";

            backTop.style.visibility =
                visible
                    ? "visible"
                    : "hidden";

            backTop.style.transform =
                visible
                    ? "translateY(0)"
                    : "translateY(20px)";

        },
        { passive: true }
    );


    backTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior:
                    reduceMotion
                        ? "auto"
                        : "smooth"
            });

        }
    );


    /* =====================================================
       17 — PAGE LOAD
    ===================================================== */

    window.addEventListener(
        "load",
        () => {

            body.classList.add(
                "page-loaded"
            );

            updateProgress();

        }
    );


    /* =====================================================
       18 — CONSOLE BRANDING
    ===================================================== */

    console.log(
        "%c VIGNESH VELMURUGAN ",
        "background:#07111f;color:#00eaff;font-size:18px;font-weight:bold;padding:8px 14px;border-radius:8px;"
    );

    console.log(
        "%c DATA ANALYST PORTFOLIO ",
        "color:#7aa7c7;font-size:12px;"
    );
    

});