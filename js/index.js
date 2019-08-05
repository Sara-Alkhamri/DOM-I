const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav
let nav = document.querySelectorAll("a");
nav[0].textContent = siteContent["nav"] ["nav-item-1"];
nav[1].textContent = siteContent["nav"] ["nav-item-2"];
nav[2].textContent = siteContent["nav"] ["nav-item-3"];
nav[3].textContent = siteContent["nav"] ["nav-item-4"];
nav[4].textContent = siteContent["nav"] ["nav-item-5"];
nav[5].textContent = siteContent["nav"] ["nav-item-6"];

//nav color
nav[0].style.color = "green";
nav[1].style.color = "green";
nav[2].style.color = "green";
nav[3].style.color = "green";
nav[4].style.color = "green";
nav[5].style.color = "green";

//new nav elements





//cta 
let cta_h1 = document.querySelector("h1");
cta_h1.textContent = siteContent["cta"]["h1"];

let cta_button = document.querySelector("button");
cta_button.textContent = siteContent["cta"] ["button"];

let cta_img = document.getElementById("cta-img");
cta_img.src = siteContent["cta"] ["img-src"];

//main content
//headers
let headers = document.querySelectorAll("h4");
headers[0].textContent = siteContent["main-content"] ["features-h4"];
headers[1].textContent = siteContent["main-content"] ["about-h4"];
headers[2].textContent = siteContent["main-content"] ["services-h4"];
headers[3].textContent = siteContent["main-content"] ["product-h4"];
headers[4].textContent = siteContent["main-content"] ["vision-h4"];
headers[5].textContent = siteContent["contact"] ["contact-h4"];

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"] ["middle-img-src"]);

//paragraphs
let par = document.querySelectorAll("p");
par[0].textContent = siteContent["main-content"] ["features-content"];
par[1].textContent = siteContent["main-content"] ["about-content"];
par[2].textContent = siteContent["main-content"] ["services-content"];
par[3].textContent = siteContent["main-content"] ["product-content"];
par[4].textContent = siteContent["main-content"] ["vision-content"];
par[5].textContent = siteContent["contact"] ["address"];
par[6].textContent = siteContent["contact"] ["phone"];
par[7].textContent = siteContent["contact"] ["email"];

//footer
let footer = document.querySelector("footer");
footer.textContent = siteContent["footer"] ["copyright"];

