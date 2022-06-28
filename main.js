// for hamburger menu
const headerIcon = document.querySelector('.header-menu-icon');
const nav = document.querySelector('.hamburger-nav');
const mask = document.querySelector('.mask');

//header
const headerLogo = document.querySelector('.header-logo');

// section1
const topImage = document.querySelector('.top-image');
const scrollIcon = document.querySelector('.scroll-icon');

// section2
const news = document.querySelector('.news-upper');
const newsDate = [...document.querySelectorAll('.news-date')];
const newsImg = [...document.querySelectorAll('.news-img')];
const newsTitle = [...document.querySelectorAll('.news-title')];

// section3
const title = [...document.querySelectorAll('.title')];
const titleSentence = [...document.querySelectorAll('.title-sentence')];
const recommendBody = [...document.querySelectorAll('.recommend-body')];

// section4
const pickUpLeft = document.querySelector('.pick-up-bottom-left');
const pickUpRight = document.querySelector('.pick-up-bottom-right');

// section5
const lineUp = [...document.querySelectorAll('.line-up-bottom-box')];

// section6
const salonInfo = document.querySelector('.salon-bottom-left');
const salonImage = document.querySelector('.salon-bottom-right');
const googleMap = document.querySelector('.google-map');

// hamburger-menu
headerIcon.addEventListener('click', () => {
  headerIcon.classList.toggle('open');
  nav.classList.toggle('open');
  mask.classList.toggle('open');
});

mask.addEventListener('click', () => {
  headerIcon.classList.toggle('open');
  nav.classList.toggle('open');
  mask.classList.toggle('open');
});

// ページ読み込み後の動き
window.addEventListener('load', () => {
  headerLogo.classList.add('fade-in');
  topImage.classList.add('fade-in');
  headerIcon.classList.add('fade-in');
  scrollIcon.classList.add('fade-in');
});

// IntersectionObserverApi
const setItemActive = (entries) => {
  entries.map ((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
};

const options = {rootMargin: '0px 0px -60px 0px'};

const observer = new IntersectionObserver(setItemActive, options);

const mapForObserve = (items) => {
  items.map((item) => {
    observer.observe(item);
  });
};

observer.observe(news);
mapForObserve(newsDate);
mapForObserve(newsImg);
mapForObserve(newsTitle);
mapForObserve(title);
mapForObserve(titleSentence);
mapForObserve(recommendBody);
observer.observe(pickUpLeft);
observer.observe(pickUpRight);
mapForObserve(lineUp);
observer.observe(salonInfo);
observer.observe(salonImage);
observer.observe(googleMap);

// 各タイトルのアニメーション用
const wrapH2AndSpan = (elem) => {
  let text = elem.innerText.trim();
  let concatText = '';

  for(let c of text) {
    c = c.replace(/\s+/, '&nbsp;');
    concatText += `<span>${c}</span>`;
  }
  return elem.innerHTML = `<h2>${concatText}</h2>`;
};

wrapH2AndSpan(news);
wrapH2AndSpan(title[0]);
wrapH2AndSpan(title[1]);
wrapH2AndSpan(title[2]);
wrapH2AndSpan(title[3]);

// section4のケアメニューテキストをspanタグで区切るメソッド
const wrapSpanText = (elem) => {
  let text = elem.innerText.trim();
  let concatText = '';

  for (let c of text) {
    concatText += `<span>${c}</span>`;
  }
  return elem.innerHTML = concatText;
};

wrapSpanText(document.querySelector('.pick-up-bottom-left p'));
wrapSpanText(document.querySelector('.pick-up-bottom-right p'));