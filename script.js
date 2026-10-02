/* ============================================================
   1. TAILWIND CONFIGURATION  —  5-COLOR PALETTE ONLY
   ============================================================ */
if (typeof tailwind !== 'undefined') {
    tailwind.config = {
        theme: {
            extend: {
                screens: {
                    'xs': '400px',
                },
                colors: {
                    ivory: '#F6F1E8',   // Warm Ivory   – main background
                    espresso: '#211C18',   // Espresso     – text, buttons, dark sections
                    sand: '#CFC3B3',   // Sand Stone   – cards, borders, secondary surfaces
                    bronze: '#A98A63',   // Muted Bronze – signature accent
                    linen: '#E9E1D5',   // Soft Linen   – alternate background
                },
                fontFamily: {
                    logo: ['"Great Vibes"', 'cursive'],
                    sans: ['Poppins', 'sans-serif'],
                    serif: ['"Playfair Display"', 'serif'],
                }
            }
        }
    }
}

/* ============================================================
   2. HEADER INJECTION
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
    const headerRoot = document.getElementById("header-root");

    if (headerRoot) {
        headerRoot.innerHTML = `
        <style>
            /* ---------- Global ---------- */
            html, body {
                overflow-x: hidden;
                max-width: 100vw;
            }
            body {
                background-color: #F6F1E8;   /* Warm Ivory */
                color: #211C18;              /* Espresso */
                font-family: 'Poppins', sans-serif;
                -webkit-font-smoothing: antialiased;
                margin: 0;
            }

            /* ---------- Header fixed at top, ALWAYS ---------- */
            #site-header {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                width: 100%;
                z-index: 9999;
            }

            /* ---------- Nav links ---------- */
            .nav-link {
                text-decoration: none;
                text-underline-offset: 7px;
                text-decoration-thickness: 1.5px;
                transition: color .3s ease;
            }
            .nav-link:hover { color: #A98A63; }         /* Muted Bronze */
            .nav-link.is-active {
                font-weight: 700;
                text-decoration: underline;
                color: #211C18;                          /* Espresso */
            }
            .nav-link.is-active:hover { color: #A98A63; }

            /* ---------- Mobile top-bar: never clip ---------- */
            .tb-item {
                min-width: 0;
                display: flex;
                align-items: center;
                gap: 0.25rem;
            }
            .tb-item span {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0;
            }
        </style>

        <!-- ============ FIXED HEADER ============ -->
        <div id="site-header">

            <!-- ===== TOP BAR (Espresso background) ===== -->
            <div id="top-bar"
                 class="bg-espresso text-ivory border-b border-sand/30 w-full text-[7px] xs:text-[8px] md:text-[10px] py-2 md:py-3">

                <!-- ---------- DESKTOP ---------- -->
                <div class="hidden lg:grid grid-cols-3 items-center w-full px-8 xl:px-12">
                    <div class="flex items-center space-x-6">
                        <a href="mailto:info@arvostile.com" class="hover:text-bronze transition-colors duration-300 flex items-center space-x-1.5">
                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                            <span>info@arvostile.com</span>
                        </a>
                        <a href="tel:+1234567890" class="hover:text-bronze transition-colors duration-300 flex items-center space-x-1.5">
                            <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                            <span>+1 (234) 567-890</span>
                        </a>
                    </div>
                    <div class="text-center font-medium tracking-[0.25em] uppercase text-ivory">Exquisite Timeless Appeal</div>
                    <div class="flex items-center justify-end space-x-3">
                        <a href="#" class="flex items-center space-x-1 hover:text-bronze transition-colors duration-300">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"/></svg>
                            <span>Track Your Order</span>
                        </a>
                        <span class="text-sand/40">|</span>
                        <a href="#" class="hover:text-bronze transition-colors duration-300">Blog</a>
                        <span class="text-sand/40">|</span>
                        <a href="#" class="hover:text-bronze transition-colors duration-300">FAQs</a>
                        <span class="text-sand/40">|</span>
                        <a href="#" class="hover:text-bronze transition-colors duration-300">Terms</a>
                        <span class="text-sand/40">|</span>
                        <a href="#" class="hover:text-bronze transition-colors duration-300">Privacy</a>
                    </div>
                </div>

                <!-- ---------- MOBILE (guaranteed no clipping) ---------- -->
                <div class="lg:hidden flex items-center justify-between w-full px-2 gap-1">

                    <a href="mailto:info@arvostile.com" class="tb-item hover:text-bronze transition-colors">
                        <svg class="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                        <span class="hidden xs:inline">info@arvostile.com</span>
                    </a>

                    <a href="tel:+1234567890" class="tb-item hover:text-bronze transition-colors border-l border-r border-sand/25 px-2">
                        <svg class="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        <span class="hidden xs:inline">+1 (234) 567-890</span>
                        <span class="xs:hidden">Call</span>
                    </a>

                    <a href="#" class="tb-item hover:text-bronze transition-colors">
                        <svg class="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"/>
                        </svg>
                        <span class="hidden xs:inline">Track Order</span>
                        <span class="xs:hidden">Track</span>
                    </a>
                </div>
            </div>

            <!-- ===== MAIN NAV (Warm Ivory background) ===== -->
            <header id="main-header" class="bg-ivory relative w-full shadow-sm border-b border-sand/40">
                <div class="w-full px-3 sm:px-4 md:px-8 lg:px-12 flex justify-between items-center h-14 sm:h-16 md:h-20 gap-2">

                    <button id="mobile-menu-btn" class="lg:hidden text-espresso focus:outline-none flex-shrink-0 p-1.5 -ml-1 z-[100]">
                        <svg id="menu-icon" class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                        <svg id="close-icon" class="w-5 h-5 sm:w-6 sm:h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>

                    <div class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-logo text-espresso flex-shrink-0 cursor-pointer mx-auto lg:mx-0 whitespace-nowrap leading-none"
                         onclick="window.location.href='/'">
                        Arvo Stile
                    </div>

                    <nav class="hidden lg:flex space-x-6 xl:space-x-8 text-xs font-medium tracking-[0.15em] text-espresso mx-auto">
                        <a href="index.html" data-nav="discover"    class="nav-link">DISCOVER</a>
                        <a href="bag.html" data-nav="bags"        class="nav-link">BAGS &amp; CARRY</a>
                        <a href="living.html" data-nav="home"        class="nav-link">HOME &amp; LIVING</a>
                        <a href="apparael.html" data-nav="apparel"     class="nav-link">APPAREL</a>
                        <a href="accessories.html" data-nav="accessories" class="nav-link">ACCESSORIES</a>
                        <a href="bespoke.html" data-nav="bespoke"     class="nav-link">BESPOKE</a>
                    </nav>

                    <div class="flex space-x-1 sm:space-x-2 md:space-x-6 text-espresso items-center flex-shrink-0">

                        <!-- Desktop search (Soft Linen bg) -->
                        <div class="relative hidden md:flex items-center bg-linen border border-transparent focus-within:border-sand focus-within:bg-ivory focus-within:shadow-sm rounded-full px-4 py-2 transition-all duration-300">
                            <svg class="w-4 h-4 text-bronze mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                            </svg>
                            <input type="text" placeholder="Search collection..."
                                   class="bg-transparent border-none outline-none text-xs tracking-wider text-espresso placeholder-bronze/70 w-24 lg:w-36 xl:w-48">
                        </div>

                        <button id="mobile-search-btn" class="md:hidden text-espresso hover:text-bronze transition-colors p-1.5 z-[100]">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                            </svg>
                        </button>

                        <a href="#" class="flex items-center space-x-1.5 text-espresso hover:text-bronze transition-colors duration-300 group p-1.5 -mr-1 z-[100]">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                            </svg>
                            <span class="text-xs font-medium tracking-[0.15em] hidden xl:inline">MY SELECTION</span>
                            <span class="bg-espresso text-ivory text-[9px] w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center group-hover:bg-bronze transition-colors duration-300">0</span>
                        </a>
                    </div>
                </div>

                <!-- Mobile search bar -->
                <div id="mobile-search-bar" class="hidden md:hidden w-full bg-ivory px-4 pb-4 border-t border-sand/40 pt-4 relative z-[100]">
                    <div class="relative flex items-center bg-linen border border-transparent focus-within:border-sand focus-within:bg-ivory rounded-full px-4 py-3">
                        <svg class="w-4 h-4 text-bronze mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                        <input type="text" placeholder="Search collection..."
                               class="bg-transparent border-none outline-none text-xs tracking-wider text-espresso placeholder-bronze/70 w-full min-w-0">
                    </div>
                </div>

                <!-- Mobile menu dropdown -->
                <div id="mobile-menu-dropdown"
                     class="hidden lg:hidden absolute top-full left-0 w-56 max-w-[85vw] bg-ivory border-r border-b border-sand/50 shadow-xl z-[100]">
                    <nav class="flex flex-col p-5 space-y-4 text-xs font-medium tracking-[0.15em] text-espresso">
                        <a href="#" data-nav="discover"    class="nav-link">DISCOVER</a>
                        <a href="#" data-nav="bags"        class="nav-link">BAGS &amp; CARRY</a>
                        <a href="#" data-nav="home"        class="nav-link">HOME &amp; LIVING</a>
                        <a href="#" data-nav="apparel"     class="nav-link">APPAREL</a>
                        <a href="#" data-nav="accessories" class="nav-link">ACCESSORIES</a>
                        <a href="#" data-nav="bespoke"     class="nav-link">BESPOKE</a>
                    </nav>
                </div>
            </header>
        </div>

        <!-- Mobile overlay (Espresso tint) -->
        <div id="mobile-menu-overlay"
             class="fixed inset-0 bg-espresso/40 backdrop-blur-sm z-[80] hidden lg:hidden"></div>
        `;
    }

    /* ============================================================
       3. PUSH PAGE CONTENT DOWN
       ============================================================ */
    const siteHeader = document.getElementById("site-header");

    function reserveHeaderSpace() {
        if (!siteHeader || !headerRoot) return;
        headerRoot.style.paddingTop = "0px";
        headerRoot.style.paddingTop = siteHeader.offsetHeight + "px";
    }

    reserveHeaderSpace();
    window.addEventListener("resize", reserveHeaderSpace);
    window.addEventListener("load", reserveHeaderSpace);
    setTimeout(reserveHeaderSpace, 200);
    setTimeout(reserveHeaderSpace, 800);

    /* ============================================================
       4. MOBILE MENU & SEARCH TOGGLE
       ============================================================ */
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenuDropdown = document.getElementById("mobile-menu-dropdown");
    const mobileMenuOverlay = document.getElementById("mobile-menu-overlay");
    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");
    const mobileSearchBtn = document.getElementById("mobile-search-btn");
    const mobileSearchBar = document.getElementById("mobile-search-bar");

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener("click", () => {
            const hidden = mobileMenuDropdown.classList.contains("hidden");
            if (hidden) {
                mobileMenuDropdown.classList.remove("hidden");
                mobileMenuOverlay.classList.remove("hidden");
                menuIcon.classList.add("hidden");
                closeIcon.classList.remove("hidden");
                mobileSearchBar.classList.add("hidden");
            } else {
                mobileMenuDropdown.classList.add("hidden");
                mobileMenuOverlay.classList.add("hidden");
                menuIcon.classList.remove("hidden");
                closeIcon.classList.add("hidden");
            }
        });
    }

    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener("click", () => {
            mobileMenuDropdown.classList.add("hidden");
            mobileMenuOverlay.classList.add("hidden");
            menuIcon.classList.remove("hidden");
            closeIcon.classList.add("hidden");
        });
    }

    if (mobileSearchBtn) {
        mobileSearchBtn.addEventListener("click", () => {
            const hidden = mobileSearchBar.classList.contains("hidden");
            if (hidden) {
                mobileSearchBar.classList.remove("hidden");
                mobileMenuDropdown.classList.add("hidden");
                mobileMenuOverlay.classList.add("hidden");
                menuIcon.classList.remove("hidden");
                closeIcon.classList.add("hidden");
            } else {
                mobileSearchBar.classList.add("hidden");
            }
        });
    }

    /* ============================================================
       5. ACTIVE NAV LINK (bold + underlined)
       ============================================================ */
    const navLinks = document.querySelectorAll(".nav-link");

    function setActiveNav(key) {
        navLinks.forEach(link => {
            link.classList.toggle("is-active", link.dataset.nav === key);
        });
    }

    (function initActiveNav() {
        const path = window.location.pathname.replace(/\/+$/, "") || "/";
        let matched = null;
        navLinks.forEach(link => {
            const href = (link.getAttribute("href") || "").split(/[?#]/)[0].replace(/\/+$/, "");
            if (href && href !== "" && href === path) matched = link.dataset.nav;
        });
        if (matched) setActiveNav(matched);
        else if (navLinks.length) setActiveNav(navLinks[0].dataset.nav);
    })();

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const href = link.getAttribute("href");
            if (!href || href === "#") e.preventDefault();
            setActiveNav(link.dataset.nav);
        });
    });
});

///footer//
/* ═══════════════════════════════════════════════════════════════
   ARVO FOOTER — JS component using Tailwind classes only
   Usage:  <div id="arvo-footer"></div>
           <script src="arvo-footer.js"></script>
   ═══════════════════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════════════════════
   ARVO FOOTER — JS component using Tailwind classes only
   Usage:  <div id="arvo-footer"></div>
           <script src="arvo-footer.js"></script>
   ═══════════════════════════════════════════════════════════════ */

(function () {
    "use strict";

    /* ── 1. CONFIG ────────────────────────────────────────────── */
    const CONFIG = {
        brand: {
            name: "Arvo Styles",
            tagline: "Handcrafted. Timeless. Yours.",
            description:
                "Arvo Styles curates handcrafted bags, home décor, apparel and bespoke pieces — made by artisans, designed for modern living.",
            logoLetter: "A"
        },

        columns: [
            {
                title: "Company",
                links: [
                    { label: "About Us", url: "#" },
                    { label: "Contact Us", url: "#" },
                    { label: "Blog", url: "#" },
                    { label: "FAQ", url: "#" },
                    { label: "Refund Policy", url: "#" }
                ]
            },
            {
                title: "Shop",
                links: [
                    { label: "Discover", url: "#" },
                    { label: "Bags & Carry", url: "#" },
                    { label: "Home & Living", url: "#" },
                    { label: "Apparel", url: "#" },
                    { label: "Accessories", url: "#" },
                    { label: "Bespoke", url: "#" }
                ]
            },
            {
                title: "Bespoke",
                links: [
                    { label: "Book a Fitting", url: "#" },
                    { label: "Custom Orders", url: "#" },
                    { label: "Corporate Gifting", url: "#" },
                    { label: "Fabric Library", url: "#" },
                    { label: "Gift Cards", url: "#" },
                    { label: "Bulk Enquiries", url: "#" }
                ]
            }
        ],

        contact: {
            heading: "Get in Touch",
            items: [
                { icon: "phone", label: "+255 700 000 000", url: "tel:+255700000000" },
                { icon: "mail", label: "hello@arvostyles.com", url: "mailto:hello@arvostyles.com" },
                { icon: "pin", label: "Dar es Salaam, Tanzania", url: "#" }
            ]
        },

        social: [
            { name: "Instagram", icon: "instagram", url: "#" },
            { name: "Facebook", icon: "facebook", url: "#" },
            { name: "TikTok", icon: "tiktok", url: "#" },
            { name: "WhatsApp", icon: "whatsapp", url: "#" }
        ],

        payments: ["Visa", "Mastercard", "PayPal", "M-Pesa"],

        bottom: {
            copyright: "© 2026 Arvo Styles. All rights reserved.",
            centerLinks: [
                { label: "Terms & Conditions", url: "#" },
                { label: "Privacy Policy", url: "#" }
            ],
            poweredBy: "Powered by Africana Tech and Branding Ltd"
        }
    };

    /* ── 2. FLAT ICONS ────────────────────────────────────────── */
    const ICONS = {
        phone: `<svg class="w-4 h-4 text-[#A98A63] shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66a.98.98 0 0 0 .25-1.01A10.8 10.8 0 0 1 8.65 4c0-.55-.45-1-1-1H4.19c-.55 0-1 .45-1 1C3.19 13.86 11.14 21.81 21 21.81c.55 0 1-.45 1-1v-3.44c0-.54-.45-.99-1-.99Z"/></svg>`,
        mail: `<svg class="w-4 h-4 text-[#A98A63] shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.236-8 4.444-8-4.444V6l8 4.444L20 6v2.236Z"/></svg>`,
        pin: `<svg class="w-4 h-4 text-[#A98A63] shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 11.5 7.3 11.8a1 1 0 0 0 1.4 0C13 21.5 20 15.4 20 10a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/></svg>`,

        instagram: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.05.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.05.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.05-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38a3.7 3.7 0 0 1 1.38-.9c.42-.16 1.05-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.9 5.9 0 0 0-2.13 1.38A5.9 5.9 0 0 0 .63 4.14c-.3.76-.5 1.64-.56 2.92C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.16.56 2.91.3.79.72 1.46 1.38 2.13.67.66 1.34 1.08 2.13 1.38.76.3 1.64.5 2.92.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.16-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.92.06-1.27.07-1.68.07-4.94s-.01-3.67-.07-4.95c-.06-1.27-.26-2.16-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.92-.56C15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z"/></svg>`,
        facebook: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12Z"/></svg>`,
        tiktok: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-1.15c.3 0 .59.05.86.13V9.4a6.33 6.33 0 0 0-5.3 10.87 6.33 6.33 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.08-.27Z"/></svg>`,
        whatsapp: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.41-1.49-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.06 2.88 1.21 3.08c.15.2 2.09 3.19 5.06 4.47.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35ZM12 2a10 10 0 0 0-8.5 15.27L2 22l4.87-1.28A10 10 0 1 0 12 2Zm0 18.13a8.14 8.14 0 0 1-4.14-1.13l-.3-.18-3.06.8.82-2.98-.2-.31A8.13 8.13 0 1 1 12 20.13Z"/></svg>`,

        mastercard: `<svg viewBox="0 0 40 24" class="w-8 h-5"><circle cx="15" cy="12" r="7" fill="#EB001B"/><circle cx="25" cy="12" r="7" fill="#F79E1B"/><path d="M20 6.5a7 7 0 0 1 0 11 7 7 0 0 1 0-11Z" fill="#FF5F00"/></svg>`
    };

    /* ── 3. HELPERS ───────────────────────────────────────────── */
    const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
    const ico = n => ICONS[n] || "";

    const paymentBadge = (name) => {
        switch (name) {
            case "Visa":
                return `<span class="h-[30px] w-12 rounded-md bg-white grid place-items-center text-[10px] font-bold text-[#1434CB] tracking-wider shadow-md">VISA</span>`;
            case "Mastercard":
                return `<span class="h-[30px] w-12 rounded-md bg-white grid place-items-center shadow-md">${ICONS.mastercard}</span>`;
            case "PayPal":
                return `<span class="h-[30px] w-12 rounded-md bg-white grid place-items-center text-[10px] font-bold text-[#003087] tracking-wide shadow-md">PayPal</span>`;
            case "M-Pesa":
                return `<span class="h-[30px] w-12 rounded-md bg-[#00A651] grid place-items-center text-[9px] font-bold text-white tracking-wide shadow-md">M-PESA</span>`;
            default: return "";
        }
    };

    /* ── 4. BUILD HTML ────────────────────────────────────────── */
    function buildHTML(cfg) {
        const { brand, columns, contact, social, payments, bottom } = cfg;

        const columnsHTML = columns.map(col => `
      <div>
        <h4 class="text-[11px] font-bold tracking-[.2em] uppercase text-[#A98A63] pb-3.5 mb-5 relative after:absolute after:left-0 after:bottom-0 after:w-7 after:h-[1.5px] after:bg-[#A98A63] after:rounded">
          ${esc(col.title)}
        </h4>
        <ul class="grid gap-3 list-none p-0 m-0">
          ${col.links.map(l => `
            <li>
              <a href="${esc(l.url)}"
                 class="text-sm text-[#F6F1E8]/60 hover:text-[#F6F1E8] hover:translate-x-0.5 inline-block transition">
                ${esc(l.label)}
              </a>
            </li>`).join("")}
        </ul>
      </div>`).join("");

        const contactHTML = contact.items.map(item => `
      <a href="${esc(item.url)}"
         class="flex items-center gap-3 text-sm text-[#F6F1E8]/60 hover:text-[#F6F1E8] transition">
        ${ico(item.icon)}
        <span>${esc(item.label)}</span>
      </a>`).join("");

        const socialHTML = social.map(s => `
      <a href="${esc(s.url)}" aria-label="${esc(s.name)}" title="${esc(s.name)}"
         class="w-10 h-10 rounded-xl bg-white/[.06] border border-white/10 text-[#F6F1E8]/60
                grid place-items-center hover:bg-[#A98A63] hover:border-[#A98A63] hover:text-white
                hover:-translate-y-0.5 transition">
        ${ico(s.icon)}
      </a>`).join("");

        const paymentsHTML = payments.map(p => paymentBadge(p)).join("");

        const centerLinksHTML = bottom.centerLinks.map(l => `
      <a href="${esc(l.url)}" class="hover:text-[#F6F1E8] transition">${esc(l.label)}</a>
    `).join("");

        return `
      <!-- ambient bronze glows -->
      <div class="pointer-events-none absolute -top-48 -right-48 w-[520px] h-[520px] rounded-full"
           style="background: radial-gradient(circle, rgba(169,138,99,.16), transparent 70%);"></div>
      <div class="pointer-events-none absolute -bottom-48 -left-40 w-[460px] h-[460px] rounded-full"
           style="background: radial-gradient(circle, rgba(169,138,99,.09), transparent 70%);"></div>

      <div class="relative z-10 w-full px-5 sm:px-8 lg:px-14 xl:px-20">

        <!-- ─────── MAIN GRID ───────
             Mobile:  2-col grid
               Row 1: About Arvo (col-span-2)
               Row 2: Company | Shop
               Row 3: Bespoke | Get in Touch
             Desktop: 5-col grid in one row -->
        <div class="pt-14 md:pt-16 pb-12 md:pb-14 grid grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.4fr] gap-x-6 gap-y-10 sm:gap-x-8 lg:gap-x-10 lg:gap-y-0">

          <!-- COLUMN 1 — ABOUT ARVO (full width on mobile) -->
          <div class="col-span-2 lg:col-span-1">
            <div class="flex items-center gap-3.5 mb-5">
              <span class="w-12 h-12 rounded-[14px] bg-[#A98A63] text-white grid place-items-center
                           font-logo text-[28px] leading-none shadow-lg shadow-[#A98A63]/40">
                ${esc(brand.logoLetter)}
              </span>
              <div>
                <div class="font-serif font-semibold text-[1.35rem] tracking-tight">${esc(brand.name)}</div>
                <span class="block text-[11px] tracking-[.18em] uppercase text-[#A98A63] font-semibold mt-0.5">
                  ${esc(brand.tagline)}
                </span>
              </div>
            </div>
            <p class="text-[14.5px] text-[#F6F1E8]/60 leading-relaxed max-w-[42ch] mb-7">
              ${esc(brand.description)}
            </p>
            <div class="pt-6 border-t border-white/10">
              <span class="block text-[11px] tracking-[.2em] uppercase text-[#F6F1E8]/40 font-semibold mb-3">
                We Accept
              </span>
              <div class="flex flex-wrap gap-2 items-center">
                ${paymentsHTML}
              </div>
            </div>
          </div>

          ${columnsHTML}

          <!-- COLUMN 5 — GET IN TOUCH -->
          <div>
            <h4 class="text-[11px] font-bold tracking-[.2em] uppercase text-[#A98A63] pb-3.5 mb-5
                       relative after:absolute after:left-0 after:bottom-0 after:w-7 after:h-[1.5px]
                       after:bg-[#A98A63] after:rounded">
              ${esc(contact.heading)}
            </h4>
            <div class="grid gap-3.5 mb-6">
              ${contactHTML}
            </div>
            <div class="flex flex-wrap gap-2.5">
              ${socialHTML}
            </div>
          </div>

        </div>

        <!-- ─────── BOTTOM LEGAL BAR ───────
             Desktop: 3 zones — copyright (left) · Terms/Privacy (center) · Powered by (right)
             Mobile:  stacked and centered -->
        <div class="border-t border-white/10">
          <div class="py-7 text-[12.5px] text-[#F6F1E8]/40
                      flex flex-col items-center gap-3 text-center
                      md:grid md:grid-cols-3 md:gap-6 md:text-left">

            <!-- LEFT: copyright -->
            <span class="md:justify-self-start">
              ${esc(bottom.copyright)}
            </span>

            <!-- CENTER: Terms & Conditions · Privacy Policy -->
            <div class="flex items-center justify-center gap-5 md:justify-self-center">
              ${centerLinksHTML}
            </div>

            <!-- RIGHT: Powered by -->
            <span class="md:justify-self-end inline-flex items-center gap-2.5">
              <span class="inline-block w-1.5 h-1.5 rounded-full bg-[#A98A63] ring-4 ring-[#A98A63]/15"></span>
              ${esc(bottom.poweredBy)}
            </span>

          </div>
        </div>

      </div>`;
    }

    /* ── 5. FULL-WIDTH FIT ────────────────────────────────────── */
    function fitToScreen() {
        const el = document.getElementById("arvo-footer");
        if (!el) return;

        el.style.marginLeft = "";
        el.style.marginRight = "";
        el.style.width = "";

        const vw = document.documentElement.clientWidth;
        const rect = el.getBoundingClientRect();
        const leftGap = rect.left;
        const rightGap = vw - rect.right;

        if (leftGap > 0 || rightGap > 0) {
            el.style.width = vw + "px";
            el.style.marginLeft = (-leftGap) + "px";
            el.style.marginRight = (-rightGap) + "px";
        }
    }

    /* ── 6. RENDER ────────────────────────────────────────────── */
    function render() {
        const mount = document.getElementById("arvo-footer");
        if (!mount) return;

        document.documentElement.style.margin = "0";
        document.documentElement.style.padding = "0";
        document.body.style.margin = "0";
        document.body.style.padding = "0";
        document.body.style.overflowX = "hidden";

        mount.className = "w-full bg-black text-[#F6F1E8] font-sans relative overflow-hidden";
        mount.innerHTML = buildHTML(CONFIG);

        requestAnimationFrame(fitToScreen);
        window.addEventListener("resize", fitToScreen);
        window.addEventListener("orientationchange", () => setTimeout(fitToScreen, 100));
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", render);
    } else {
        render();
    }

    window.ARVO_FOOTER_CONFIG = CONFIG;
})();