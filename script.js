// ============================================
// AMAR IBISHI — PORTFOLIO SCRIPT
// Bilingual · Dark/Light · Animated · Promo
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  console.log('%c✅ Amar Ibishi Portfolio Loaded', 'color:#2563eb;font-weight:bold;font-size:14px;');

  // ============================================
  // LANGUAGE SYSTEM (EN / SQ)
  // ============================================
  const translations = {
    en: {
      nav_about: "About",
      nav_experience: "Experience",
      nav_projects: "Projects",
      nav_skills: "Skills",
      nav_contact: "Contact",
      hero_status: "Available for freelance work",
      hero_hi: "Hi, I'm",
      hero_role1: "Web Developer",
      hero_role2: "Photographer",
      hero_desc: "Turning ideas into functional web experiences and capturing life's best moments.",
      hero_cta1: "View Projects",
      hero_cta2: "Get in Touch",
      hero_cta3: "Download CV",
      stat_projects: "Projects",
      stat_years: "Years Coding",
      stat_tech: "Technologies",
      profile_role: "Full Stack Developer",
      profile_loc: "Kosovo / Region · Remote",
      about_title: "About Me",
      about_text: "Web Developer and Programmer with a strong passion for technology, design, and photography. Skilled in developing web applications using PHP, MySQL, HTML, CSS, and JavaScript. Dedicated to creating functional, modern, and professional solutions. Highly motivated to build a successful career in the IT and software development industry, continuously improving technical skills and embracing new challenges.",
      exp_title: "Work Experience",
      exp_role: "Web Developer & Programmer",
      exp_place: "Freelance / Personal Projects",
      exp_text: "Completed structured training in Full Stack Development, working with technologies such as React.js, PHP, JavaScript, SQL, and MySQL. Developed functional web applications, featuring interactive forms, data management, and responsive design. Gained hands-on experience with Git for version control and collaborative development workflows.",
      edu_title: "Education",
      edu_role: "Faculty of Computer Science",
      edu_place: "AAB College",
      edu_text: "Currently pursuing a Bachelor's degree in Computer Science at AAB College, with a focus on software development, web technologies, databases, and information systems. Developing strong analytical, programming, and problem-solving skills through academic projects and practical work.",
      proj_title: "Featured Projects",
      proj_visit: "Visit site",
      cert_title: "Certification",
      cert_name: "Certificate of Achievement",
      cert_org: "Full-Stack Developer PERPROGRAMERA",
      links_title: "Quick Links",
      skills_title: "Skills & Expertise",
      skill_cat1: "Web Development",
      skill_cat2: "Backend & Database",
      skill_cat3: "Design & Tools",
      skill_cat4: "Languages",
      contact_title: "Get in Touch",
      contact_phone: "Phone",
      contact_email: "Email",
      contact_cv: "Download CV",
      contact_cv_hint: "PDF · 1 click",
      slogan1: "BETTER CODE",
      slogan2: "BIGGER DREAMS",
      slogan_cta: "LET'S BUILD SOMETHING GREAT!",
      footer_role: "Web Developer & Photographer",
      floating_cv: "Download CV",
      // Promo
      promo_title: "Ready to start a project?",
      promo_text: "Let's turn your idea into a stunning website. Get a free consultation today!",
      promo_cta: "Get a Free Quote",
      promo_later: "Maybe Later",
      chat_online: "Online now",
      chat_msg: "👋 Hi! Need a website or photo session? Let's chat!",
      chat_whatsapp: "WhatsApp",
      chat_email: "Email",
      banner_text: "🎁 Limited Offer: 20% OFF on your first project!",
      banner_cta: "Claim Now",
      toast_title: "Need a website?",
      toast_text: "Let's build it together. Free consultation!",
      toast_cta: "Hire Me",
      float_cta: "Hire Me Now"
    },
    sq: {
      nav_about: "Rreth Meje",
      nav_experience: "Përvoja",
      nav_projects: "Projektet",
      nav_skills: "Aftësitë",
      nav_contact: "Kontakti",
      hero_status: "I disponueshëm për punë freelance",
      hero_hi: "Përshëndetje, unë jam",
      hero_role1: "Zhvillues Web",
      hero_role2: "Fotograf",
      hero_desc: "Shndërroj idetë në përvoja funksionale web dhe kap momentet më të mira të jetës.",
      hero_cta1: "Shiko Projektet",
      hero_cta2: "Kontakto",
      hero_cta3: "Shkarko CV",
      stat_projects: "Projekte",
      stat_years: "Vite Kodim",
      stat_tech: "Teknologji",
      profile_role: "Zhvillues Full Stack",
      profile_loc: "Kosovë / Rajon · Remote",
      about_title: "Rreth Meje",
      about_text: "Zhvillues Web dhe Programues me pasion të madh për teknologjinë, dizajnin dhe fotografinë. I aftë në zhvillimin e aplikacioneve web duke përdorur PHP, MySQL, HTML, CSS dhe JavaScript. I përkushtuar për të krijuar zgjidhje funksionale, moderne dhe profesionale. Shumë i motivuar për të ndërtuar një karrierë të suksesshme në industrinë e IT-së dhe zhvillimit të softuerit, duke përmirësuar vazhdimisht aftësitë teknike dhe duke përqafuar sfida të reja.",
      exp_title: "Përvoja e Punës",
      exp_role: "Zhvillues Web & Programues",
      exp_place: "Freelance / Projekte Personale",
      exp_text: "Përfundova trajnim të strukturuar në Zhvillim Full Stack, duke punuar me teknologji si React.js, PHP, JavaScript, SQL dhe MySQL. Zhvillova aplikacione web funksionale, me forma interaktive, menaxhim të dhënash dhe dizajn responsiv. Përfitova përvojë praktike me Git për kontroll versionesh dhe rrjedha pune bashkëpunuese.",
      edu_title: "Arsimimi",
      edu_role: "Fakulteti i Shkencave Kompjuterike",
      edu_place: "Kolegji AAB",
      edu_text: "Aktualisht duke ndjekur studimet Bachelor në Shkenca Kompjuterike në Kolegjin AAB, me fokus në zhvillimin e softuerit, teknologjitë web, bazat e të dhënave dhe sistemet e informacionit. Duke zhvilluar aftësi të forta analitike, programimi dhe zgjidhje problemesh përmes projekteve akademike dhe punës praktike.",
      proj_title: "Projektet e Shquara",
      proj_visit: "Vizito faqen",
      cert_title: "Certifikimi",
      cert_name: "Certifikatë Arritjeje",
      cert_org: "Zhvillues Full-Stack PERPROGRAMERA",
      links_title: "Lidhje të Shpejta",
      skills_title: "Aftësitë & Ekspertiza",
      skill_cat1: "Zhvillim Web",
      skill_cat2: "Backend & Bazë Dhënash",
      skill_cat3: "Dizajn & Mjete",
      skill_cat4: "Gjuhët",
      contact_title: "Kontakto",
      contact_phone: "Telefon",
      contact_email: "Email",
      contact_cv: "Shkarko CV",
      contact_cv_hint: "PDF · 1 klikim",
      slogan1: "KOD MË I MIRË",
      slogan2: "ËNDRRA MË TË MËDHA",
      slogan_cta: "LE TË NDËRTOJMË DIÇKA TË MADHE!",
      footer_role: "Zhvillues Web & Fotograf",
      floating_cv: "Shkarko CV",
      // Promo
      promo_title: "Gati për të nisur një projekt?",
      promo_text: "Le ta kthejmë idenë tuaj në një website mahnitës. Merr një konsultë falas sot!",
      promo_cta: "Merr Ofertë Falas",
      promo_later: "Ndoshta Më Vonë",
      chat_online: "Online tani",
      chat_msg: "👋 Përshëndetje! Ke nevojë për një website ose sesion fotografik? Le të bisedojmë!",
      chat_whatsapp: "WhatsApp",
      chat_email: "Email",
      banner_text: "🎁 Ofertë e Limituar: 20% ZBRITJE për projektin tuaj të parë!",
      banner_cta: "Merr Tani",
      toast_title: "Ke nevojë për një website?",
      toast_text: "Le ta ndërtojmë së bashku. Konsultë falas!",
      toast_cta: "Punëso Mua",
      float_cta: "Punëso Mua Tani"
    }
  };

  let currentLang = localStorage.getItem('lang') || 'en';

  function applyLanguage(lang) {
    if (!translations[lang]) lang = 'en';
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-key]').forEach(el => {
      const key = el.getAttribute('data-key');
      const value = translations[lang][key];
      if (!value) return;

      const hasElementChildren = el.children.length > 0;

      if (!hasElementChildren) {
        el.textContent = value;
        return;
      }

      let textNodeReplaced = false;
      el.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
          if (!textNodeReplaced) {
            node.textContent = ' ' + value + ' ';
            textNodeReplaced = true;
          } else {
            node.textContent = ' ';
          }
        }
      });

      if (!textNodeReplaced) {
        el.appendChild(document.createTextNode(' ' + value));
      }
    });

    const flag = document.querySelector('.lang-flag');
    const code = document.getElementById('langCode');
    if (flag && code) {
      flag.textContent = lang === 'en' ? '🇬🇧' : '🇦🇱';
      code.textContent = lang === 'en' ? 'EN' : 'SQ';
    }

    document.title = lang === 'en'
      ? 'Amar Ibishi · Web Developer & Photographer'
      : 'Amar Ibishi · Zhvillues Web & Fotograf';
  }

  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      applyLanguage(currentLang === 'en' ? 'sq' : 'en');
      langToggle.style.transform = 'scale(0.9)';
      setTimeout(() => { langToggle.style.transform = ''; }, 150);
    });
  }

  applyLanguage(currentLang);

  // ============================================
  // THEME TOGGLE
  // ============================================
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    if (themeIcon) themeIcon.className = 'fas fa-sun';
  } else {
    if (themeIcon) themeIcon.className = 'fas fa-moon';
  }

  if (themeToggle && themeIcon) {
    themeToggle.addEventListener('click', () => {
      themeToggle.classList.add('rotating');
      setTimeout(() => themeToggle.classList.remove('rotating'), 400);

      document.body.classList.toggle('light-mode');

      if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        themeIcon.className = 'fas fa-sun';
      } else {
        localStorage.setItem('theme', 'dark');
        themeIcon.className = 'fas fa-moon';
      }
    });
  }

  // ============================================
  // NAVBAR SCROLL + PROGRESS + BACK TOP
  // ============================================
  const navbar = document.getElementById('navbar');
  const scrollProgress = document.getElementById('scrollProgress');
  const backTop = document.getElementById('backTop');

  function handleScroll() {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

    if (scrollProgress) scrollProgress.style.width = progress + '%';
    if (navbar) navbar.classList.toggle('scrolled', scrollY > 40);
    if (backTop) backTop.classList.toggle('show', scrollY > 500);
  }

  let scrollTicking = false;
  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });
  handleScroll();

  // ============================================
  // MOBILE MENU
  // ============================================
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.nav-links');

  function closeMobileMenu() {
    if (!navLinks || !menuToggle) return;
    navLinks.classList.remove('open');
    const icon = menuToggle.querySelector('i');
    if (icon) {
      icon.classList.add('fa-bars');
      icon.classList.remove('fa-times');
    }
  }

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('open');
      const icon = menuToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });

    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', closeMobileMenu);
    });

    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        closeMobileMenu();
      }
    });
  }

  // ============================================
  // BACK TO TOP
  // ============================================
  if (backTop) {
    backTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ============================================
  // SMOOTH SCROLL
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      }
    });
  });

  // ============================================
  // REVEAL ON SCROLL
  // ============================================
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    revealEls.forEach(el => revealObserver.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('active'));
  }

  // ============================================
  // ANIMATED COUNTERS
  // ============================================
  const statNums = document.querySelectorAll('.stat-num');

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'), 10) || 0;
    const duration = 1400;
    const startTime = performance.now();
    const suffix = target >= 10 ? '+' : '';

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(eased * target);
      el.textContent = value + (progress === 1 ? suffix : '');
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNums.forEach(el => counterObserver.observe(el));
  } else {
    statNums.forEach(el => {
      const target = parseInt(el.getAttribute('data-count'), 10) || 0;
      el.textContent = target + (target >= 10 ? '+' : '');
    });
  }

  // ============================================
  // CUSTOM CURSOR
  // ============================================
  const cursorDot = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');
  const isFinePointer = window.matchMedia('(pointer: fine)').matches;

  if (cursorDot && cursorRing && isFinePointer) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    });

    function animateRing() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      cursorRing.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      requestAnimationFrame(animateRing);
    }
    animateRing();

    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest('a, button, .skill-tag, .card, .project-link-item, .contact-card');
      if (target) cursorRing.classList.add('hover');
    });
    document.addEventListener('mouseout', (e) => {
      const target = e.target.closest('a, button, .skill-tag, .card, .project-link-item, .contact-card');
      if (target) cursorRing.classList.remove('hover');
    });

    document.addEventListener('mouseleave', () => {
      cursorDot.style.opacity = '0';
      cursorRing.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
      cursorDot.style.opacity = '1';
      cursorRing.style.opacity = '1';
    });
  }

  // ============================================
  // 3D TILT ON PROFILE CARD
  // ============================================
  const profileCard = document.querySelector('.profile-card');
  if (profileCard && isFinePointer) {
    let rafId = null;

    profileCard.addEventListener('mousemove', (e) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = profileCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotX = ((y - centerY) / centerY) * -6;
        const rotY = ((x - centerX) / centerX) * 6;
        profileCard.style.transform =
          `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-8px)`;
      });
    });

    profileCard.addEventListener('mouseleave', () => {
      if (rafId) cancelAnimationFrame(rafId);
      profileCard.style.transform = '';
    });
  }

  // ============================================
  // NAV LINK ACTIVE STATE
  // ============================================
  const sections = document.querySelectorAll('section[id], div[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');

  if ('IntersectionObserver' in window && navAnchors.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (!id) return;
          navAnchors.forEach(a => {
            const href = a.getAttribute('href');
            if (href === '#' + id) {
              a.style.color = 'var(--primary)';
            } else {
              a.style.color = '';
            }
          });
        }
      });
    }, { threshold: 0.4 });

    sections.forEach(s => sectionObserver.observe(s));
  }

  // ============================================
  // 🎯 PROMO MODAL (Popup)
  // ============================================
  const promoModal = document.getElementById('promoModal');
  const promoOverlay = document.getElementById('promoOverlay');
  const promoClose = document.getElementById('promoClose');
  const promoLater = document.getElementById('promoLater');

  let promoShown = sessionStorage.getItem('promoShown') === 'true';

  function showPromoModal() {
    if (promoShown || !promoModal) return;
    promoModal.classList.add('active');
    promoOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    promoShown = true;
    sessionStorage.setItem('promoShown', 'true');
  }

  function hidePromoModal() {
    if (!promoModal) return;
    promoModal.classList.remove('active');
    promoOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (promoClose) promoClose.addEventListener('click', hidePromoModal);
  if (promoLater) promoLater.addEventListener('click', hidePromoModal);
  if (promoOverlay) promoOverlay.addEventListener('click', hidePromoModal);

  let promoTriggered = false;
  function checkPromoTrigger() {
    if (promoTriggered || promoShown) return;
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercent > 30) {
      promoTriggered = true;
      setTimeout(showPromoModal, 500);
    }
  }
  window.addEventListener('scroll', checkPromoTrigger, { passive: true });

  // ============================================
  // 💬 CHAT BUBBLE
  // ============================================
  const chatToggle = document.getElementById('chatToggle');
  const chatWindow = document.getElementById('chatWindow');
  const chatClose = document.getElementById('chatClose');

  if (chatToggle && chatWindow) {
    chatToggle.addEventListener('click', () => {
      chatWindow.classList.toggle('active');
      const badge = chatToggle.querySelector('.chat-badge');
      if (badge) badge.style.display = 'none';
    });
  }

  if (chatClose && chatWindow) {
    chatClose.addEventListener('click', () => {
      chatWindow.classList.remove('active');
    });
  }

  let chatTriggered = false;
  function checkChatTrigger() {
    if (chatTriggered) return;
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercent > 60) {
      chatTriggered = true;
      setTimeout(() => {
        if (chatWindow && !chatWindow.classList.contains('active')) {
          chatWindow.classList.add('active');
          const badge = chatToggle ? chatToggle.querySelector('.chat-badge') : null;
          if (badge) badge.style.display = 'none';
        }
      }, 2000);
    }
  }
  window.addEventListener('scroll', checkChatTrigger, { passive: true });

  // ============================================
  // 🎁 PROMO BANNER (top)
  // ============================================
  const promoBanner = document.getElementById('promoBanner');
  const bannerClose = document.getElementById('bannerClose');

  let bannerShown = sessionStorage.getItem('bannerShown') === 'true';

  if (!bannerShown && promoBanner) {
    // Shfaq pas 2 minutash (120000ms). Për testim ndrysho në 15000 (15 sekonda)
    setTimeout(() => {
      promoBanner.classList.add('active');
      document.body.classList.add('banner-active');
      sessionStorage.setItem('bannerShown', 'true');
    }, 120000);
  }

  if (bannerClose && promoBanner) {
    bannerClose.addEventListener('click', () => {
      promoBanner.classList.remove('active');
      document.body.classList.remove('banner-active');
    });
  }

  // ============================================
  // 📢 PROMO TOAST (çdo 90s)
  // ============================================
  const promoToast = document.getElementById('promoToast');
  let toastInterval;

  function showToast() {
    if (!promoToast) return;
    promoToast.classList.add('active');
    setTimeout(() => {
      promoToast.classList.remove('active');
    }, 8000);
  }

  if (promoToast && !sessionStorage.getItem('toastShown')) {
    setTimeout(() => {
      showToast();
      sessionStorage.setItem('toastShown', 'true');
      toastInterval = setInterval(showToast, 90000);
    }, 30000);
  }

  window.addEventListener('beforeunload', () => {
    if (toastInterval) clearInterval(toastInterval);
  });

  // ============================================
  // ✨ FLOATING CTA (pulsing)
  // ============================================
  const floatingCTA = document.createElement('a');
  floatingCTA.href = '#contact';
  floatingCTA.className = 'floating-cta';
  floatingCTA.innerHTML = `
    <i class="fas fa-bolt"></i>
    <span data-key="float_cta">Hire Me Now</span>
  `;
  document.body.appendChild(floatingCTA);

  // Apliko gjuhën për elementin e ri
  const floatCtaSpan = floatingCTA.querySelector('[data-key="float_cta"]');
  if (floatCtaSpan) {
    floatCtaSpan.textContent = translations[currentLang].float_cta || 'Hire Me Now';
  }

  let ctaTriggered = false;
  function checkCtaTrigger() {
    if (ctaTriggered) return;
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercent > 40) {
      ctaTriggered = true;
      floatingCTA.classList.add('active');
    }
  }
  window.addEventListener('scroll', checkCtaTrigger, { passive: true });

  const contactSection = document.getElementById('contact');
  if (contactSection) {
    const contactObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          floatingCTA.classList.remove('active');
        } else if (ctaTriggered) {
          floatingCTA.classList.add('active');
        }
      });
    }, { threshold: 0.3 });
    contactObserver.observe(contactSection);
  }

  // ============================================
  // KEYBOARD SHORTCUTS
  // ============================================
  document.addEventListener('keydown', (e) => {
    if (e.target.matches('input, textarea, [contenteditable]')) return;

    if (e.key === 'l' || e.key === 'L') {
      applyLanguage(currentLang === 'en' ? 'sq' : 'en');
    }

    if (e.key === 't' || e.key === 'T') {
      if (themeToggle && themeIcon) {
        themeToggle.classList.add('rotating');
        setTimeout(() => themeToggle.classList.remove('rotating'), 400);
      }
      if (document.body.classList.contains('light-mode')) {
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
        if (themeIcon) themeIcon.className = 'fas fa-moon';
      } else {
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
        if (themeIcon) themeIcon.className = 'fas fa-sun';
      }
    }

    if (e.key === 'Escape') {
      if (promoModal && promoModal.classList.contains('active')) hidePromoModal();
      if (chatWindow && chatWindow.classList.contains('active')) {
        chatWindow.classList.remove('active');
      }
    }
  });

});