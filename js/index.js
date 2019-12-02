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


let nav = document.querySelectorAll('a')
let i = 0
for(let link of nav ){
  link.textContent = siteContent["nav"]["nav-item-"+i]
  i++
}

let h1 = document.querySelector('h1')
h1.textContent = siteContent["cta"]["h1"]

let button = document.querySelector('button')
button.textContent = siteContent["cta"]["button"]

let cta = document.getElementById('cta-img')
cta.setAttribute('src', siteContent["cta"]["img-src"])

let featureTitle = document.querySelectorAll('.text-content h4')

let featureContent = document.querySelectorAll('.text-content p')

console.log(featureTitle)

headersArr = ["features-h4","about-h4", "services-h4", "product-h4", "vision-h4" ]
contentArr = ["features-content", "about-content", "services-content", "product-content","vision-content"]
i = 0
featureTitle.forEach(element => {
  element.textContent = siteContent["main-content"][headersArr[i]]
  i++
})
i = 0
featureContent.forEach(element => {
  element.textContent = siteContent["main-content"][contentArr[i]]
  i++
})

let middleImg = document.querySelector('.middle-img')
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let contactHeader = document.querySelector('.contact h4')
contactHeader.textContent = siteContent["contact"]["contact-h4"]

let contactContent = document.querySelectorAll('.contact p')
console.log(contactContent)
contactArr = ["address","phone", "email" ]
i = 0
contactContent.forEach(element => {
  element.textContent = siteContent["contact"][contactArr[i]]
  i++
})

let footer = document.querySelector('footer p')
footer.textContent = siteContent["footer"]["copyright"]
/**
 * ## Task 3: Add new content
* [ ] Change the color of the navigation text to be green.
* [ ] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
* [ ] Check your work by looking at the [original html](original.html) in the browser
 */
nav.forEach(element => {
  element.style.color = "green"
})

let appendNode = document.createElement("a")
appendNode.textContent = "Learn More"
appendNode.style.color = "green"

let prependNode = document.createElement("a")
prependNode.textContent = "Learn More"
prependNode.style.color = "green"

nav[0].appendChild(appendNode)
nav[nav.length-1].appendChild(prependNode)