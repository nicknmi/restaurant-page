import "./styles.css";
import restaurantImg from "./imgs/restaurant.png"
import steakImg from "./imgs/steak.png";
import fajitaImg from "./imgs/fajita.png";
import burgerImg from "./imgs/burger.png";

const container = document.querySelector("#content");
const HomeNav = document.querySelector("#Home");
const MenuNav = document.querySelector("#Menu");
const AboutNav = document.querySelector("#About");

function aboutPage() {
    container.innerHTML = "";

    let aboutParagraph = document.createElement("p");
    aboutParagraph.textContent = "The Sizzling Fork is a bold, flavor-packed dining experience where fire meets finesse. Specializing in flame-grilled steaks, sizzling fajitas, gourmet burgers, and smoky BBQ, every dish is crafted with high-quality ingredients and a passion for rich, smoky flavors. Whether you're craving a perfectly seared steak, a sizzling skillet of fajitas, or a juicy, stacked burger, we bring the heat with every bite. Pair your meal with our handcrafted cocktails and house-made sauces for an unforgettable feast. At The Sizzling Fork, we don’t just serve food—we serve fire-kissed perfection.";
    container.appendChild(aboutParagraph);
}



function menuPage() {
    container.innerHTML = "";

    let steakDiv = document.createElement("div");
    steakDiv.className = "menu-item";

    let steakImgElement = document.createElement("img");
    steakImgElement.src = steakImg;
    steakImgElement.style.width = "300px";
    steakDiv.appendChild(steakImgElement);
    
    let steakP = document.createElement("p");
    steakP.textContent = "Expertly seasoned and seared over an open flame, our steaks are juicy, tender, and packed with bold, smoky flavors. Served with your choice of house-made sauces and classic sides.";
    steakDiv.appendChild(steakP);

    container.appendChild(steakDiv);


    let fajitaDiv = document.createElement("div");
    fajitaDiv.className = "menu-item";

    let fajitaImgElement = document.createElement("img");
    fajitaImgElement.src = fajitaImg;
    fajitaImgElement.style.width = "300px";
    fajitaDiv.appendChild(fajitaImgElement);
    
    let fajitaP = document.createElement("p");
    fajitaP.textContent = "Served on a scorching hot skillet, our fajitas come loaded with marinated meats, sautéed peppers and onions, and a side of warm tortillas, ready to be customized with fresh toppings.";
    fajitaDiv.appendChild(fajitaP);

    container.appendChild(fajitaDiv);


    let burgerDiv = document.createElement("div");
    burgerDiv.className = "menu-item";

    let burgerImgElement = document.createElement("img");
    burgerImgElement.src = burgerImg;
    burgerImgElement.style.width = "300px";
    burgerDiv.appendChild(burgerImgElement);
    
    let burgerP = document.createElement("p");
    burgerP.textContent = "Crafted with premium beef and grilled to perfection, our burgers are stacked high with unique toppings, house-made sauces, and served on a toasted brioche bun with crispy fries.";
    burgerDiv.appendChild(burgerP);

    container.appendChild(burgerDiv);
}

function mainPage() {
    container.innerHTML = "";
    // img
    let img = document.createElement("img");
    img.src = restaurantImg;
    img.id = "main-img";
    img.style.width = "1000px";

    container.appendChild(img);

    // text content inside img
    let titlePage = document.createElement("div");
    titlePage.id = "title-page";

    let titleh1 = document.createElement("h1");
    titleh1.textContent = "Welcome to The Sizzling Fork";
    titlePage.appendChild(titleh1);

    let titlep = document.createElement("p");
    titlep.textContent = "Where every bite sizzles with flavor and every meal feels like a feast!";
    titlePage.appendChild(titlep);



    let titleButtons = document.createElement("div");
    titleButtons.id = "title-buttons";

    let titleButtons1 = document.createElement("button");
    titleButtons1.textContent = "Book With Us";
    titleButtons.appendChild(titleButtons1);

    let titleButtons2 = document.createElement("button");
    titleButtons2.textContent = "Call Us";
    titleButtons.appendChild(titleButtons2);

    titlePage.appendChild(titleButtons);

    container.appendChild(titlePage);    
}

mainPage();
// menuPage();


MenuNav.addEventListener("click", () => {
    menuPage();
});
HomeNav.addEventListener("click", () => {
    mainPage();
});

AboutNav.addEventListener("click", () => {
    aboutPage();
});