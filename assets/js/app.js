// ============================================================
// ФЕЯ ЧИСТОТИ — єдиний скрипт. Працює офлайн (подвійний клік).
// Спільні header/footer/quiz вшиті як рядки й вставляються в [data-include].
// ============================================================

var FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzqOwoVb0miZXMa1jMPQPPMc-TyOUdquaGuVq7WI83mS1Kgi8DXi1uW4rPKDPajJKHEGg/exec';
var THANKS_URL = '/dyakuyemo.html';

var IC = {
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.18c-.24.68-1.4 1.3-1.94 1.38-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.8-4.17-4.94-4.36-.15-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.59.83 2.04.9 2.19.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.27.71 1.17 1.53 1.9 1.05.94 1.93 1.23 2.21 1.37.27.14.43.12.59-.07.16-.19.68-.79.86-1.07.18-.27.36-.22.61-.13.25.09 1.59.75 1.86.89.27.14.45.2.52.32.07.11.07.66-.17 1.34z"/></svg>',
  tg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.94 4.6 18.9 19.04c-.23 1.01-.83 1.26-1.68.78l-4.64-3.42-2.24 2.16c-.25.25-.46.46-.94.46l.33-4.73L18.6 6.1c.37-.33-.08-.52-.58-.19L7.4 12.78l-4.66-1.46c-1.01-.32-1.03-1.01.21-1.5l18.22-7.02c.84-.31 1.58.2 1.31 1.48z"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/></svg>',
  chevL: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',
  chevR: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none"/></svg>',
  viber: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 2.7C15.9 2.2 11.9 1.6 8.2 3 5.6 4 4.6 5.6 4.2 6.9 3.5 9.2 3.4 13 4.4 15.8c.5 1.4 1.2 2.3 1.7 2.8v2.7l2.6-1.4c1.1.3 2.3.5 3.5.5 1.8 0 4.7-.4 6.5-2.2 1.3-1.3 1.7-3.2 1.8-4.6.2-2.8.1-6.6-1.6-8.3-.5-.5-1.1-.9-1.9-1.1zm-1 12.6c-.3.5-1.2 1-1.7 1.1-.5.1-1 .1-1.6-.1-.4-.1-.8-.3-1.4-.5-2.5-1.1-4.1-3.6-4.2-3.8-.1-.2-1-1.3-1-2.6 0-1.2.6-1.8.9-2.1.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .5.4l.7 1.7c.1.2.1.3 0 .4l-.3.4-.3.3c-.1.1-.2.3-.1.5.1.2.6 1 1.3 1.6.9.8 1.6 1 1.8 1.2.2.1.4.1.5-.1l.7-.9c.2-.2.3-.2.5-.1l1.6.8c.2.1.4.2.4.3.1.2.1.7-.2 1.2z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>'
};

var HEADER_HTML = `
<header class="site-header" id="siteHeader">
  <div class="hdr-inner">
    <a class="brand" href="/">
      <img class="brand__logo" src="/assets/img/Головний%20логотип.png" alt="ФЕЯ ЧИСТОТИ" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'">
      <span class="brand__fallback">Ф</span>
    </a>
    <nav class="hdr-nav" id="navLinks">
      <a class="hn" href="/#poslugy">Послуги</a>
      <a class="hn" href="/#garantiyi">Гарантії</a>
      <a class="hn" href="/#ciny">Ціни</a>
      <a class="hn" href="/#vidhuky">Відгуки</a>
      <a class="hn" href="/kontakty.html">Контакти</a>
      <div class="mob-nav-footer">
        <a class="hsoc" href="https://instagram.com/feya_chistoty_cv_new" target="_blank" rel="noopener" aria-label="Instagram"><i class="ic">`+IC.ig+`</i></a>
        <a class="hsoc" href="#" aria-label="Telegram"><i class="ic">`+IC.tg+`</i></a>
        <a class="hsoc" href="#" aria-label="Viber"><i class="ic">`+IC.viber+`</i></a>
        <a class="hsoc" href="tel:+380508149859" aria-label="Телефон"><i class="ic">`+IC.phone+`</i></a>
      </div>
    </nav>
    <div class="hdr-right">
      <a class="hdr-cta" href="tel:+380508149859"><i class="ic">`+IC.phone+`</i><span>+380 50 814 98 59</span></a>
    </div>
    <button class="burger" id="burger" aria-label="Меню"><span></span><span></span><span></span></button>
  </div>
</header>`;

var FOOTER_HTML = `
<footer class="footer">
  <div class="footer__accent"></div>
  <div class="container">
    <div class="footer__top">
      <div class="footer__brand">
        <a class="footer__logo" href="/">
          <img src="/assets/img/Головний%20логотип.png" alt="ФЕЯ ЧИСТОТИ" class="footer__logo-img">
        </a>
        <p class="footer__desc">Більше 13 років на ринку. Сертифікована хімія, фінансова відповідальність за майно, гарантія якості 7 днів.</p>
        <div class="footer__social">
          <a href="https://instagram.com/feya_chistoty_cv_new" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
          <a href="tel:+380508149859" aria-label="Телефон"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></a>
          <a href="mailto:feyachustoty@gmail.com" aria-label="Email"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></a>
        </div>
      </div>
      <nav class="footer__nav">
        <div>
          <h4>Послуги</h4>
          <ul>
            <li><a href="/generalne.html">Генеральне прибирання</a></li>
            <li><a href="/regulyarne.html">Регулярне прибирання</a></li>
            <li><a href="/pislya-remontu.html">Після ремонту</a></li>
            <li><a href="/komerciyniy.html">Комерційний клінінг</a></li>
            <li><a href="/himchystka-mebliv.html">Хімчистка меблів</a></li>
            <li><a href="/myttya-vikon.html">Миття вікон</a></li>
            <li><a href="/himchystka-avto.html">Хімчистка авто</a></li>
          </ul>
        </div>
        <div>
          <h4>Компанія</h4>
          <ul>
            <li><a href="/#pro-nas">Про нас</a></li>
            <li><a href="/#garantiyi">Гарантії</a></li>
            <li><a href="/ciny.html">Ціни</a></li>
            <li><a href="/blog.html">Блог</a></li>
            <li><a href="/kontakty.html">Контакти</a></li>
          </ul>
        </div>
        <div>
          <h4>Контакти</h4>
          <ul>
            <li><a href="tel:+380508149859">+380 50 814 98 59</a></li>
            <li><a href="mailto:feyachustoty@gmail.com">feyachustoty@gmail.com</a></li>
            <li>Чернівці та область</li>
          </ul>
          <a class="footer__cta" href="#quiz">Замовити прибирання</a>
          <span class="footer__dev">Розробка WANDALS</span>
        </div>
      </nav>
    </div>
    <div class="footer__bottom">
      <span>© <span id="year"></span> ФЕЯ ЧИСТОТИ, Чернівці</span>
      <span><a href="/polityka.html">Політика конфіденційності</a> · <a href="/umovy.html">Умови</a></span>
    </div>
  </div>
</footer>`;

var QUIZ_HTML = `
<section class="section" id="quiz">
  <div class="container">
    <div class="quizplate">

      <div class="quizplate__head">
        <p class="quizplate__sub">Не хочете самі гортати прайс лист?</p>
        <h2 class="quizplate__title">Дізнайтесь точну вартість прибирання <b>за 1 хвилину,</b><br>та отримайте <span class="qaccent">знижку 10%</span> на перше прибирання<br><span class="qaccent">+ 1 з 3 подарунків</span> на вибір</h2>
      </div>

      <div class="quizwrap">

      <div class="quiz" id="quizBox">
        <div class="quiz__progress">
          <div class="quiz__bar"><span></span><em class="quiz__barlabel">Ви відповідаєте на <b class="q-cur">1</b> питання з 5</em></div>
        </div>

      <div class="quiz__steps-wrap">
      <div class="quiz__step active" data-key="Тип обєкта">
        <div class="quiz__qhead"><span class="quiz__qnum">Питання 1</span><p class="quiz__q">Який у вас об'єкт?</p></div>
        <div class="quiz__opts">
          <button type="button" class="quiz__opt"><span class="quiz__opt-media"><img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&q=70&auto=format&fit=crop" alt="" loading="lazy"></span><span class="quiz__opt-check" aria-hidden="true"></span><span class="quiz__opt-label">Квартира</span></button>
          <button type="button" class="quiz__opt"><span class="quiz__opt-media"><img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&q=70&auto=format&fit=crop" alt="" loading="lazy"></span><span class="quiz__opt-check" aria-hidden="true"></span><span class="quiz__opt-label">Будинок / котедж</span></button>
          <button type="button" class="quiz__opt"><span class="quiz__opt-media"><img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=70&auto=format&fit=crop" alt="" loading="lazy"></span><span class="quiz__opt-check" aria-hidden="true"></span><span class="quiz__opt-label">Офіс</span></button>
          <button type="button" class="quiz__opt"><span class="quiz__opt-media"><img src="https://res.cloudinary.com/dv4xqeucm/image/upload/v1783343926/quiz1-4_ywkoae.jpg" alt="" loading="lazy"></span><span class="quiz__opt-check" aria-hidden="true"></span><span class="quiz__opt-label">Магазин</span></button>
          <button type="button" class="quiz__opt"><span class="quiz__opt-media"><img src="https://res.cloudinary.com/dv4xqeucm/image/upload/v1783343926/quiz1-5_rospun.jpg" alt="" loading="lazy"></span><span class="quiz__opt-check" aria-hidden="true"></span><span class="quiz__opt-label">Кафе / ресторан</span></button>
          <button type="button" class="quiz__opt quiz__opt--other"><span class="quiz__opt-media"><span class="quiz__opt-q" aria-hidden="true">?</span></span><span class="quiz__opt-check" aria-hidden="true"></span><span class="quiz__opt-label">Інше</span></button>
        </div>
      </div>

      <div class="quiz__step" data-key="Послуга">
        <div class="quiz__qhead"><span class="quiz__qnum">Питання 2</span><p class="quiz__q">Яка послуга потрібна?</p></div>
        <div class="quiz__opts">
          <button type="button" class="quiz__opt"><span class="quiz__opt-media"><img src="https://res.cloudinary.com/dv4xqeucm/image/upload/v1782988502/%D0%91%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_5_h5dnlw.png" alt="" loading="lazy"></span><span class="quiz__opt-check" aria-hidden="true"></span><span class="quiz__opt-label">Генеральне</span></button>
          <button type="button" class="quiz__opt"><span class="quiz__opt-media"><img src="https://res.cloudinary.com/dv4xqeucm/image/upload/v1782745990/%D0%A0%D0%B5%D0%B3%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D0%B5_%D0%BF%D1%80%D0%B8%D0%B1%D0%B8%D1%80%D0%B0%D0%BD%D0%BD%D1%8F_0_dcisww.jpg" alt="" loading="lazy" style="object-position:center bottom"></span><span class="quiz__opt-check" aria-hidden="true"></span><span class="quiz__opt-label">Регулярне</span></button>
          <button type="button" class="quiz__opt"><span class="quiz__opt-media"><img src="https://res.cloudinary.com/dv4xqeucm/image/upload/v1782745989/%D0%9F%D1%81%D0%BB%D1%8F%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82%D0%BD%D0%B5_%D0%BF%D1%80%D0%B8%D0%B1%D0%B8%D1%80%D0%B0%D0%BD%D0%BD%D1%8F_2_dmvbgq.jpg" alt="" loading="lazy"></span><span class="quiz__opt-check" aria-hidden="true"></span><span class="quiz__opt-label">Після ремонту</span></button>
          <button type="button" class="quiz__opt"><span class="quiz__opt-media"><img src="https://res.cloudinary.com/dv4xqeucm/image/upload/v1782988042/%D0%91%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_3_qvrq5f.png" alt="" loading="lazy"></span><span class="quiz__opt-check" aria-hidden="true"></span><span class="quiz__opt-label">Хімчистка меблів</span></button>
          <button type="button" class="quiz__opt"><span class="quiz__opt-media"><img src="https://res.cloudinary.com/dv4xqeucm/image/upload/v1782745989/%D0%9C%D0%B8%D1%82%D1%82%D1%8F_%D0%B2%D1%96%D0%BA%D0%BE%D0%BD_%D1%82%D0%B0_%D0%B2%D1%96%D1%82%D1%80%D0%B8%D0%BD_0_htvif1.png" alt="" loading="lazy"></span><span class="quiz__opt-check" aria-hidden="true"></span><span class="quiz__opt-label">Миття вікон</span></button>
          <button type="button" class="quiz__opt quiz__opt--other"><span class="quiz__opt-media"><span class="quiz__opt-q" aria-hidden="true">?</span></span><span class="quiz__opt-check" aria-hidden="true"></span><span class="quiz__opt-label">Інше</span></button>
        </div>
      </div>

      <div class="quiz__step" data-key="Площа">
        <div class="quiz__qhead"><span class="quiz__qnum">Питання 3</span><p class="quiz__q">Орієнтовна площа?</p></div>
        <div class="quiz__opts quiz__opts--text">
          <button type="button" class="quiz__opt quiz__opt--text"><span class="quiz__opt-radio" aria-hidden="true"></span><span class="quiz__opt-label">до 50 м²</span></button>
          <button type="button" class="quiz__opt quiz__opt--text"><span class="quiz__opt-radio" aria-hidden="true"></span><span class="quiz__opt-label">до 70 м²</span></button>
          <button type="button" class="quiz__opt quiz__opt--text"><span class="quiz__opt-radio" aria-hidden="true"></span><span class="quiz__opt-label">до 90 м²</span></button>
          <button type="button" class="quiz__opt quiz__opt--text"><span class="quiz__opt-radio" aria-hidden="true"></span><span class="quiz__opt-label">120+ м²</span></button>
        </div>
      </div>

      <div class="quiz__step" data-key="Коли">
        <div class="quiz__qhead"><span class="quiz__qnum">Питання 4</span><p class="quiz__q">Коли потрібно?</p></div>
        <div class="quiz__opts">
          <button type="button" class="quiz__opt"><span class="quiz__opt-media"><img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&q=70&auto=format&fit=crop" alt="" loading="lazy"></span><span class="quiz__opt-check" aria-hidden="true"></span><span class="quiz__opt-label">Сьогодні</span></button>
          <button type="button" class="quiz__opt"><span class="quiz__opt-media"><img src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&q=70&auto=format&fit=crop" alt="" loading="lazy"></span><span class="quiz__opt-check" aria-hidden="true"></span><span class="quiz__opt-label">Цими днями</span></button>
          <button type="button" class="quiz__opt"><span class="quiz__opt-media"><img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=70&auto=format&fit=crop" alt="" loading="lazy"></span><span class="quiz__opt-check" aria-hidden="true"></span><span class="quiz__opt-label">Планую заздалегідь</span></button>
        </div>
      </div>

      <div class="quiz__step" data-key="Контакт">
        <h3 class="price-hero__heading" style="font-size:clamp(1.1rem,1.5vw,1.4rem);margin:0 0 1.4rem;text-transform:uppercase">Куди надіслати<br><span style="color:var(--c-brand)">ваш розрахунок?</span></h3>
        <form class="quiz-final">
          <div class="msg-picker" style="margin-top:0">
            <div class="msg-opts">
              <label class="msg-opt msg-opt--vb">
                <input type="radio" name="messenger" value="Viber">
                <span class="msg-opt__btn"><span class="msg-opt__icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 0h.02C15.26 0 18.31 1.18 20.65 3.35c2.34 2.18 3.7 5.11 3.72 8.19v.06c.04 2.96-.95 5.78-2.8 8.01L24 23.53 19.46 22c-2.08 1.37-4.5 2.1-7.04 2.1h-.01C5.57 24.1.06 18.68 0 12.01v-.06C-.01 5.39 5.38-.01 11.99 0zm-4.1 4.89c-.38-.02-.73.08-1 .31-.43.37-.97 1.02-1.12 1.97-.18 1.12.12 2.5.93 3.74 1.01 1.55 2.39 3.22 4.45 4.34 1.12.6 2.08.9 2.87 1.04.97.17 1.82-.01 2.45-.45 1.11-.78 1.36-1.79 1.36-1.79s-.22-.56-.79-.78c-.57-.22-1.33-.55-1.7-.68-.37-.13-.66-.09-.9.16-.25.25-.63.71-.85.94-.22.23-.47.26-.77.14-.68-.27-1.47-.77-2.18-1.52-.71-.75-1.21-1.58-1.44-2.26-.11-.34-.07-.59.15-.79l.59-.59c.27-.27.36-.59.24-.89-.12-.3-.43-1.01-.64-1.54-.12-.3-.28-.41-.47-.43z"/></svg></span>Viber</span>
              </label>
              <label class="msg-opt msg-opt--tg">
                <input type="radio" name="messenger" value="Telegram">
                <span class="msg-opt__btn"><span class="msg-opt__icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.076 14.43l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.836.945z"/></svg></span>Telegram</span>
              </label>
              <label class="msg-opt msg-opt--wa">
                <input type="radio" name="messenger" value="WhatsApp" checked>
                <span class="msg-opt__btn"><span class="msg-opt__icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/><path d="M11.999 0C5.373 0 0 5.373 0 12c0 2.117.554 4.101 1.523 5.822L.057 24l6.304-1.654C8.014 23.332 9.972 24 12 24c6.627 0 12-5.373 12-12S18.626 0 11.999 0zm.001 21.818c-1.846 0-3.562-.5-5.039-1.369l-.361-.214-3.741.981.998-3.648-.235-.374C2.64 15.474 2.181 13.78 2.181 12c0-5.415 4.408-9.818 9.819-9.818S21.819 6.585 21.819 12c0 5.416-4.403 9.818-9.819 9.818z"/></svg></span>WhatsApp</span>
              </label>
            </div>
            <p class="msg-picker__label">Надішлемо на <strong>зручний<br>месенджер:</strong></p>
          </div>
          <div class="price-form-wrap" style="margin-top:1.2rem">
            <input type="tel" name="phone" placeholder="+38" required
              onfocus="if(!this.value)this.value='+38 '"
              onblur="if(this.value.trim()==='+38')this.value=''">
            <button type="submit" class="btn btn--cta">Отримати розрахунок</button>
          </div>
          <p style="margin-top:.6rem;font-size:.8rem;color:var(--c-gray)">Без спаму. Тільки розрахунок.</p>
        </form>
      </div>
      </div><!-- /.quiz__steps-wrap -->

      <div class="quiz__nav" id="quizNav">
        <button type="button" class="btn btn--ghost quiz-prev">Назад</button>
        <span class="quiz__hint">Виберіть варіант і натисніть «Далі»</span>
        <button type="button" class="btn btn--cta quiz-next">Далі <span class="arr">»</span></button>
      </div>
      </div>

      <aside class="quiz__manager">
        <div class="qman__photo">
          <img src="https://res.cloudinary.com/dv4xqeucm/image/upload/f_auto,q_auto/Зроби_мені_цю_жінку_в_202606261352-Photoroom_npeihd" alt="Оксана Чумак — менеджерка ФЕЯ ЧИСТОТИ" loading="lazy">
          <span class="qman__badge"><small>Менеджер</small><b>Оксана Чумак</b></span>
        </div>
        <div class="qman__body">
          <p class="qman__lead">Відповідайте на питання, щоб ми могли розрахувати вартість</p>
          <div class="qman__gettitle">Наприкінці тесту отримаєте:</div>
          <ul class="qman__perks">
            <li><b>Розрахунок вартості</b><span>під ваш об'єкт</span></li>
            <li><span>Гарантований</span><b>подарунок на вибір</b></li>
          </ul>
        </div>
        <div class="qman__collage"><img src="https://res.cloudinary.com/dv4xqeucm/image/upload/v1783349739/b70d41be-f8e1-436f-bc11-8190a0356c2d_mfzq1o.png" alt="" aria-hidden="true" loading="lazy"></div>
      </aside>

      </div>
    </div>
  </div>
</section>`;

function injectPartials() {
  document.querySelectorAll('[data-include]').forEach(function (el) {
    var n = el.getAttribute('data-include');
    if (n === 'header') el.innerHTML = HEADER_HTML;
    else if (n === 'footer') el.innerHTML = FOOTER_HTML;
    else if (n === 'quiz') el.innerHTML = QUIZ_HTML;
  });
}

function initChrome() {
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
  var burger = document.getElementById('burger');
  var nav = document.getElementById('navLinks');
  if (burger && nav) {
    burger.addEventListener('click', function () { nav.classList.toggle('open'); });
    nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { nav.classList.remove('open'); }); });
  }
}

async function sendToSheet(data) {
  var payload = Object.assign({}, data, { page: location.pathname.split('/').pop() || 'index.html', ts: new Date(Date.now() + 3 * 3600000).toISOString().replace('T', ' ').slice(0, 19) });
  if (!FORM_ENDPOINT) { console.log('[ДЕМО] Заявка (endpoint не налаштовано):', payload); return true; }
  try {
    await fetch(FORM_ENDPOINT, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    return true;
  } catch (e) { console.error(e); return false; }
}

function initForms() {
  document.querySelectorAll('form.js-form').forEach(function (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      var phoneInput = form.querySelector('[name=phone]');
      if (phoneInput) {
        var digits = phoneInput.value.replace(/\D/g, '');
        if (!digits.startsWith('38') || digits.length !== 12) {
          phoneInput.style.outline = '2px solid #e03';
          phoneInput.focus();
          return;
        }
        phoneInput.style.outline = '';
      }
      var fd = Object.fromEntries(new FormData(form).entries());
      fd.source = form.dataset.source || 'form';
      var picker = form.closest('.price-hero__left') || form.parentElement;
      var checked = picker ? picker.querySelector('input[name="messenger"]:checked') : null;
      if (checked) fd.messenger = checked.value;
      var btn = form.querySelector('[type=submit]');
      if (btn) { btn.disabled = true; btn.textContent = 'Відправляємо…'; }
      await sendToSheet(fd);
      window.location.href = THANKS_URL;
    });
  });
}

function initQuiz() {
  var root = document.getElementById('quizBox');
  if (!root) return;
  var steps = [].slice.call(root.querySelectorAll('.quiz__step'));
  var bar = root.querySelector('.quiz__bar > span');
  var cur = root.querySelector('.q-cur');
  var pct = root.querySelector('.quiz__pct');
  var globalNav = root.querySelector('#quizNav');
  var answers = {};
  var i = 0;
  function render() {
    steps.forEach(function (s, idx) { s.classList.toggle('active', idx === i); });
    if (bar) bar.style.width = ((i + 1) / steps.length * 100) + '%';
    if (cur) cur.textContent = (i + 1);
    if (pct) pct.textContent = Math.round((i + 1) / steps.length * 100) + '%';
    if (globalNav) {
      var isLast = (i === steps.length - 1);
      var nextBtn = globalNav.querySelector('.quiz-next');
      var hint = globalNav.querySelector('.quiz__hint');
      var pb = globalNav.querySelector('.quiz-prev');
      if (nextBtn) { nextBtn.style.visibility = isLast ? 'hidden' : 'visible'; nextBtn.style.pointerEvents = isLast ? 'none' : ''; }
      if (hint) hint.style.visibility = isLast ? 'hidden' : 'visible';
      if (pb) pb.style.visibility = (i === 0) ? 'hidden' : 'visible';
    }
  }
  function next() { if (i < steps.length - 1) { i++; render(); } }
  function prev() { if (i > 0) { i--; render(); } }
  root.addEventListener('click', function (e) {
    var opt = e.target.closest('.quiz__opt');
    if (opt) {
      var step = opt.closest('.quiz__step');
      step.querySelectorAll('.quiz__opt').forEach(function (o) { o.classList.remove('sel'); });
      opt.classList.add('sel');
      answers[step.dataset.key] = opt.textContent.trim();
      return;
    }
    if (e.target.closest('.quiz-next')) {
      var act = steps[i];
      if (act.querySelector('.quiz__opt') && !act.querySelector('.quiz__opt.sel')) return;
      next();
      return;
    }
    if (e.target.closest('.quiz-prev')) prev();
  });
  var form = root.querySelector('form.quiz-final');
  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      var phoneInput = form.querySelector('[name=phone]');
      var digits = (phoneInput ? phoneInput.value : '').replace(/\D/g, '');
      if (!digits.startsWith('38') || digits.length !== 12) {
        if (phoneInput) {
          phoneInput.style.outline = '2px solid #e03';
          phoneInput.focus();
        }
        return;
      }
      if (phoneInput) phoneInput.style.outline = '';
      var fd = Object.fromEntries(new FormData(form).entries());
      var data = Object.assign({}, answers, fd);
      data.source = 'quiz';
      var btn = form.querySelector('[type=submit]');
      if (btn) { btn.disabled = true; btn.textContent = 'Відправляємо…'; }
      await sendToSheet(data);
      window.location.href = THANKS_URL;
    });
  }
  render();
}

function initHeaderScroll() {
  var h = document.getElementById('siteHeader');
  if (!h) return;
  var lastY = 0;
  var heroH = window.innerHeight;

  function upd() {
    if (document.body.classList.contains('mob-nav-active')) return;
    var y = window.scrollY;

    if (y <= 10) {
      // Самий верх — шапка видима, з solid (як після другого екрану)
      h.classList.add('hdr-visible');
      h.classList.add('solid');
    } else if (y < heroH) {
      // Перший екран, але вже прогортали — шапка зникає
      h.classList.remove('hdr-visible');
      h.classList.remove('solid');
    } else {
      // Другий екран і далі: вниз — ховаємо, вверх — показуємо
      h.classList.toggle('hdr-visible', y < lastY);
      h.classList.add('solid');
    }

    lastY = y;
  }

  upd();
  window.addEventListener('scroll', upd, { passive: true });
}

function initBenefitsSlider() {
  var track = document.querySelector('.bslider__track');
  if (!track) return;
  track.style.opacity = '1';
  track.style.transform = 'translateX(0)';
  var gap = 11, animating = false, timer;
  function firstW() { var c = track.firstElementChild; return c ? c.offsetWidth + gap : 200; }
  function next() {
    if (animating) return; animating = true;
    var w = firstW();
    track.style.transition = 'transform .6s ease';
    track.style.transform = 'translateX(' + (-w) + 'px)';
    var done = function () {
      track.removeEventListener('transitionend', done);
      track.style.transition = 'none';
      track.appendChild(track.firstElementChild);
      track.style.transform = 'translateX(0)';
      void track.offsetHeight;
      animating = false;
    };
    track.addEventListener('transitionend', done);
  }
  function prev() {
    if (animating) return; animating = true;
    track.style.transition = 'none';
    track.insertBefore(track.lastElementChild, track.firstElementChild);
    track.style.transform = 'translateX(' + (-firstW()) + 'px)';
    void track.offsetHeight;
    track.style.transition = 'transform .6s ease';
    track.style.transform = 'translateX(0)';
    var done = function () { track.removeEventListener('transitionend', done); animating = false; };
    track.addEventListener('transitionend', done);
  }
  function restart() { clearInterval(timer); timer = setInterval(next, 3000); }
  var p = document.querySelector('.bslider__arr.prev');
  var n = document.querySelector('.bslider__arr.next');
  if (n) n.addEventListener('click', function () { next(); restart(); });
  if (p) p.addEventListener('click', function () { prev(); restart(); });
  restart();
}

function initRoadmap() {
  var sec = document.getElementById('roadmap');
  if (!sec) return;
  if (window.innerWidth < 980) return; // мобільна версія — у CSS
  var track = document.getElementById('rmTrack');
  var fill = sec.querySelector('.rm-fill');
  var view = sec.querySelector('.roadmap__viewport');
  var nodes = [].slice.call(sec.querySelectorAll('.rm-node'));
  if (!track || !fill || !view) return;
  var len = fill.getTotalLength();
  fill.style.strokeDasharray = len;
  fill.style.strokeDashoffset = len;
  var labels = [].slice.call(sec.querySelectorAll('.rm-label'));
  var nodeX = nodes.map(function (nd) { return nd.offsetLeft; }); // центр кожного вузла (координати треку)
  var firstX = nodeX[0], lastX = nodeX[nodeX.length - 1];
  var minX = 0, maxX = 0, currentX = 0;
  function calc() {
    var half = view.clientWidth / 2;
    minX = firstX - half; // 1-й етап по центру екрана
    maxX = lastX - half;  // 5-й етап по центру екрана
  }
  function progress() {
    var rect = sec.getBoundingClientRect();
    var total = sec.offsetHeight - window.innerHeight;
    if (total <= 0) return 0;
    return Math.max(0, Math.min(1, (-rect.top) / total));
  }
  calc();
  currentX = minX + progress() * (maxX - minX); // без стрибка на старті
  window.addEventListener('resize', calc);
  function loop() {
    var target = minX + progress() * (maxX - minX);
    currentX += (target - currentX) * 0.08;          // плавність / інерція
    if (Math.abs(target - currentX) < 0.4) currentX = target;
    track.style.transform = 'translate(' + (-currentX) + 'px,-50%)';
    var centerX = currentX + view.clientWidth / 2;   // що зараз по центру екрана
    var frac = Math.max(0, Math.min(1, (centerX - firstX) / (lastX - firstX)));
    fill.style.strokeDashoffset = len * (1 - frac);
    nodes.forEach(function (node, i) {
      var on = centerX >= nodeX[i] - 4; // лінія дійшла до центру цього вузла
      node.classList.toggle('on', on);
      if (labels[i]) labels[i].classList.toggle('show', on);
    });
    requestAnimationFrame(loop);
  }
  loop();
}

function initReveal() {
  var els = document.querySelectorAll('.js-reveal');
  if (!els.length) return;
  if (!('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('is-in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) { entry.target.classList.add('is-in'); io.unobserve(entry.target); }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
  els.forEach(function (el) { io.observe(el); });
}

function initBeforeAfter() {
  var range = document.getElementById('baRange');
  if (!range) return;
  var after = document.getElementById('baAfterImg');
  var divider = document.getElementById('baDivider');
  range.addEventListener('input', function (e) {
    var v = e.target.value;
    divider.style.left = v + '%';
    after.style.clipPath = 'inset(0 ' + (100 - v) + '% 0 0)';
  });
}

function initReviews() {
  var track = document.querySelector('.slider-track');
  if (!track) return;
  var wrap = document.querySelector('.slider-wrapper');
  var prevBtn = document.querySelector('.slider-arrow.prev');
  var nextBtn = document.querySelector('.slider-arrow.next');

  var originals = [].slice.call(track.querySelectorAll('.testimonial-card'));
  var T = originals.length;
  if (!T) return;
  originals.forEach(function (c, k) { c.setAttribute('data-num', ('0' + (k + 1)).slice(-2)); c.setAttribute('data-v', String(k % 4)); });
  // клони ліворуч і праворуч → нескінченне коло в обидва боки (без очікування анімації)
  var fragL = document.createDocumentFragment(), fragR = document.createDocumentFragment();
  originals.forEach(function (c) { fragL.appendChild(c.cloneNode(true)); fragR.appendChild(c.cloneNode(true)); });
  track.insertBefore(fragL, track.firstChild);
  track.appendChild(fragR);
  var cards = [].slice.call(track.querySelectorAll('.testimonial-card'));
  cards.forEach(function (c, d) { c.style.zIndex = d; });   // пізніші картки зверху (накладання)

  var idx = T, step = 0, VIS = 7;            // VIS — карток на екрані

  function sizeUp() {
    var band = wrap.clientWidth || 1200;
    VIS = band > 1100 ? 7 : band > 820 ? 5 : band > 560 ? 3 : band > 400 ? 2 : 1;
    var ov = 0.2;                                     // частка накладання
    var cw = band / (VIS - ov * (VIS - 1));           // ширина картки, щоб саме VIS заповнили смугу
    step = cw * (1 - ov);
    cards.forEach(function (c) { c.style.flex = '0 0 ' + cw + 'px'; c.style.marginLeft = (-(cw - step)) + 'px'; });
    cards[0].style.marginLeft = '0px';
  }
  function place(anim) {
    if (!anim) track.classList.add('no-anim');
    track.style.transform = 'translateX(-' + (idx * step) + 'px)';
    // рівно VIS видимих [idx .. idx+VIS-1]; решта — повністю прозорі (зникають як елемент)
    for (var d = 0; d < cards.length; d++) cards[d].style.opacity = (d >= idx && d < idx + VIS) ? '1' : '0';
    if (!anim) { void track.offsetWidth; track.classList.remove('no-anim'); }
  }
  function go(dir) { idx += dir; place(true); }       // без блокування — кнопки реагують будь-коли

  // коли рух зупинився — безшовно повертаємо idx у «справжній» діапазон
  track.addEventListener('transitionend', function (e) {
    if (e.target !== track || e.propertyName !== 'transform') return;
    var n = idx;
    while (n >= 2 * T) n -= T;
    while (n < T) n += T;
    if (n !== idx) { idx = n; place(false); }
  });

  if (nextBtn) nextBtn.addEventListener('click', function () { go(1); });
  if (prevBtn) prevBtn.addEventListener('click', function () { go(-1); });

  var sx = 0, drag = false;
  wrap.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; drag = true; }, { passive: true });
  wrap.addEventListener('touchmove', function (e) {
    if (!drag) return;
    var dx = sx - e.touches[0].clientX;
    if (Math.abs(dx) > 60) { go(dx > 0 ? 1 : -1); drag = false; }
  }, { passive: true });
  wrap.addEventListener('touchend', function () { drag = false; });

  window.addEventListener('resize', function () { sizeUp(); place(false); });
  sizeUp(); place(false);
  setTimeout(function () { sizeUp(); place(false); }, 250);
}

document.addEventListener('DOMContentLoaded', function () {
  injectPartials();
  initChrome();
  initHeaderScroll();
  initBenefitsSlider();
  initQuiz();
  initForms();
  initRoadmap();
  initReveal();
  initReviews();
  initBeforeAfter();
  initFaqAccordion();
  initSmoothScroll();
  initCertsSlider();
  initCertLightbox();
  initMobileMenu();
  initFloatSocials();
  initCursor();
  initQuizEraser();
  initZoneTabs();
});

function initFloatSocials() {
  var el = document.createElement('div');
  el.className = 'float-socials';
  el.innerHTML =
    '<a class="float-soc" href="https://instagram.com/feya_chistoty_cv_new" target="_blank" rel="noopener" aria-label="Instagram"><i class="ic">' + IC.ig + '</i></a>' +
    '<a class="float-soc" href="#" aria-label="Telegram"><i class="ic">' + IC.tg + '</i></a>' +
    '<a class="float-soc" href="#" aria-label="Viber"><i class="ic">' + IC.viber + '</i></a>' +
    '<a class="float-soc float-soc--phone" href="tel:+380508149859" aria-label="Телефон"><i class="ic">' + IC.phone + '</i></a>';
  document.body.appendChild(el);
}

function initSmoothScroll() {
  // Ловимо і #hash і page.html#hash на тій самій сторінці
  document.addEventListener('click', function(e) {
    var a = e.target.closest('a[href]');
    if (!a) return;
    var href = a.getAttribute('href') || '';
    var hi = href.indexOf('#');
    if (hi === -1) return;
    var hash = href.slice(hi);
    if (hash === '#') return;
    var pagePart = href.slice(0, hi);
    if (pagePart) {
      var cur = window.location.pathname.split('/').pop();
      var tgt = pagePart.split('/').pop();
      if (tgt !== cur) return;
    }
    var el = document.querySelector(hash);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  if ('ontouchstart' in window) return;

  var pos = 0, dest = 0, raf = null;
  function getY() { return window.scrollY || 0; }
  function setY(y) { window.scrollTo({ top: y, behavior: 'instant' }); }

  window.addEventListener('wheel', function(e) {
    e.preventDefault();
    var delta = e.deltaMode === 1 ? e.deltaY * 40 : e.deltaMode === 2 ? e.deltaY * window.innerHeight : e.deltaY;
    // Синхронізуємо dest з реальною позицією на початку нової анімації
    if (!raf) { pos = getY(); dest = getY(); }
    dest = Math.max(0, Math.min(dest + delta, document.documentElement.scrollHeight - window.innerHeight));
    if (!raf) raf = requestAnimationFrame(step);
  }, { passive: false });

  function step() {
    pos += (dest - pos) * 0.1;
    setY(pos);
    if (Math.abs(dest - pos) > 0.5) {
      raf = requestAnimationFrame(step);
    } else {
      setY(dest);
      pos = dest;
      raf = null;
    }
  }
}

function initMobileMenu() {
  var burger  = document.getElementById('burger');
  var nav     = document.getElementById('navLinks');
  var header  = document.getElementById('siteHeader');
  if (!burger || !nav) return;

  var backdrop = document.createElement('div');
  backdrop.className = 'hdr-nav-backdrop';
  document.body.appendChild(backdrop);

  var _lockY = 0;
  function openMenu() {
    _lockY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = '-' + _lockY + 'px';
    document.body.style.width = '100%';
    nav.classList.add('mob-open');
    backdrop.classList.add('mob-open');
    burger.classList.add('open');
    if (header) header.classList.add('mob-menu-open');
    document.body.classList.add('mob-nav-active');
  }
  function closeMenu() {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, _lockY);
    nav.classList.remove('mob-open');
    backdrop.classList.remove('mob-open');
    burger.classList.remove('open');
    if (header) header.classList.remove('mob-menu-open');
    document.body.classList.remove('mob-nav-active');
  }

  burger.addEventListener('click', function () {
    nav.classList.contains('mob-open') ? closeMenu() : openMenu();
  });
  backdrop.addEventListener('click', closeMenu);
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });
}

function initCertLightbox() {
  var box = document.getElementById('certLightbox');
  if (!box) return;
  var boxImg    = box.querySelector('.lightbox__img');
  var closeBtn  = box.querySelector('.lightbox__close');
  var backdrop  = box.querySelector('.lightbox__backdrop');

  function open(src, alt) {
    boxImg.src = src;
    boxImg.alt = alt || 'Сертифікат';
    box.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    box.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.tcert--img').forEach(function (card) {
    card.style.cursor = 'zoom-in';
    card.addEventListener('click', function () {
      var img = card.querySelector('img');
      if (img) open(img.src, img.alt);
    });
  });

  closeBtn.addEventListener('click', close);
  backdrop.addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
}

function initCertsSlider() {
  var track = document.querySelector('.tetyana-certs');
  var prev  = document.querySelector('.tcerts-prev');
  var next  = document.querySelector('.tcerts-next');
  if (!track || !prev || !next) return;
  function scrollDir(dir) {
    var card = track.querySelector('.tcert');
    var amount = card ? card.offsetWidth + 8 : 200;
    track.scrollBy({ left: dir * amount, behavior: 'smooth' });
  }
  prev.addEventListener('click', function () { scrollDir(-1); });
  next.addEventListener('click', function () { scrollDir(1); });
}

function initFaqAccordion() {
  var details = [].slice.call(document.querySelectorAll('.faq--colored details'));
  var label = document.querySelector('.faq-layout__label');
  if (!details.length) return;

  // Lock label height to closed-FAQ height before any item opens
  if (label) {
    var faqList = document.querySelector('.faq--colored');
    if (faqList) label.style.height = faqList.offsetHeight + 'px';
  }

  details.forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (!d.open) return;
      details.forEach(function (other) { if (other !== d) other.removeAttribute('open'); });
    });
  });
}

function initCursor() {
  if (matchMedia('(pointer:coarse)').matches) return;

  document.documentElement.classList.add('cur-active');

  var dot = document.createElement('div');
  dot.className = 'cur-dot';
  var ring = document.createElement('div');
  ring.className = 'cur-ring';
  document.body.appendChild(ring);
  document.body.appendChild(dot);

  var mx = -100, my = -100;
  var rx = -100, ry = -100;
  var ringEase = 0.22;
  var visible = false;

  document.addEventListener('mousemove', function (e) {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';
    if (!visible) {
      visible = true;
      rx = mx; ry = my;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      dot.classList.add('vis');
      ring.classList.add('vis');
    }
  });

  document.addEventListener('mouseleave', function () {
    visible = false;
    dot.classList.remove('vis');
    ring.classList.remove('vis');
  });

  var hoverSel = 'a, button, [role="button"], input, label, details summary, .pchip, .quiz__opt';
  document.addEventListener('mouseover', function (e) {
    if (e.target.closest(hoverSel)) { dot.classList.add('hover'); ring.classList.add('hover'); }
  });
  document.addEventListener('mouseout', function (e) {
    if (e.target.closest(hoverSel)) { dot.classList.remove('hover'); ring.classList.remove('hover'); }
  });

  (function loop() {
    rx += (mx - rx) * ringEase;
    ry += (my - ry) * ringEase;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(loop);
  })();
}

function initQuizEraser() {
  if (window.innerWidth < 769) return;

  var sec = document.getElementById('quiz');
  if (!sec) return;

  var cvs = document.createElement('canvas');
  cvs.className = 'quiz-eraser';
  sec.insertBefore(cvs, sec.firstChild);
  var ctx = cvs.getContext('2d');

  var brushSize = 36;
  var drawing = false;
  var lastX, lastY;

  function resize() {
    var w = sec.offsetWidth;
    var h = sec.offsetHeight;
    var dpr = window.devicePixelRatio || 1;
    cvs.width = w * dpr;
    cvs.height = h * dpr;
    cvs.style.width = w + 'px';
    cvs.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = '#4C72C9';
    ctx.fillRect(0, 0, w, h);
    drawing = false;
  }
  resize();
  window.addEventListener('resize', resize);

  function erase(x, y) {
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, brushSize / 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function stroke(x1, y1, x2, y2) {
    var dx = x2 - x1, dy = y2 - y1;
    var dist = Math.sqrt(dx * dx + dy * dy);
    var steps = Math.max(1, Math.ceil(dist / (brushSize * 0.3)));
    for (var i = 0; i <= steps; i++) {
      var t = i / steps;
      erase(x1 + dx * t, y1 + dy * t);
    }
  }

  sec.addEventListener('mousemove', function (e) {
    var rect = sec.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    if (drawing) {
      stroke(lastX, lastY, x, y);
    } else {
      drawing = true;
      erase(x, y);
    }
    lastX = x;
    lastY = y;
  });

  sec.addEventListener('mouseleave', function () {
    drawing = false;
  });
}

function initZoneTabs() {
  document.querySelectorAll('.zone-tabs').forEach(function(tabs){
    var btns = tabs.querySelectorAll('.zone-tabs__btn');
    var panels = tabs.querySelectorAll('.zone-tabs__panel');
    btns.forEach(function(btn){
      btn.addEventListener('click', function(e){
        e.preventDefault();
        btns.forEach(function(b){b.classList.remove('active');});
        panels.forEach(function(p){p.classList.remove('active');});
        btn.classList.add('active');
        var target = tabs.querySelector('#'+btn.getAttribute('data-tab'));
        if(target) target.classList.add('active');
      });
    });
  });
}
