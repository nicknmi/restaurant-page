import "./styles.css";
import restaurantImg from "./imgs/restaurant.png"
import steakImg from "./imgs/steak.png";
import fajitaImg from "./imgs/fajita.png";
import burgerImg from "./imgs/burger.png";

const container = document.querySelector("#content");
const HomeNav = document.querySelector("#Home");
const MenuNav = document.querySelector("#Menu");

HomeNav.addEventListener("click", mainPage());

function menuPage() {

}

function mainPage() {
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

// mainPage();



