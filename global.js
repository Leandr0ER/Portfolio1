/* console.log("IT’S ALIVE!");
console.log("333")

function $$ (selector, context = document) {
    return Array.from(context.querySelectorAll(selector));
} */

/* let navLinks = $$("nav a");

// console.log(navLinks);

let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname);

// currentLink.classList.add("current");

if (currentLink) { // or if (currentLink !== undefined)
    currentLink.classList.add("current");
} */

// console.log(currentLink);

let pages = [
    {url: "", title: "Home"},
    {url: "projects/", title: "Projects"},
    {url: "resume/", title: "Resume"},  
    {url: "contact/", title: "Contact"},      
    //{url: "https://github.com/Mike-Kowalsky", title: "Projects"}
    // add the rest of your pages here
];

let nav = document.createElement("nav");
document.body.prepend(nav);

const ARE_WE_HOME = document.documentElement.classList.contains("home");

for (let p of pages) {
    let url = p.url;
    let title = p.title;
    // Create link and add it to nav
    if (!ARE_WE_HOME && !url.startsWith("http")) {
        url = "../" + url;
    }
    // nav.insertAdjacentHTML("beforeend", `<a href="${ url }">${ title }</a>` );

    let a = document.createElement("a");
    a.href = url;
    a.textContent = title;
    nav.append(a);

    a.classList.toggle("current", a.host === location.host && a.pathname === location.pathname);
}



