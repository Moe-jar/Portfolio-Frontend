import { Header } from "./Components/Header.js";
import { Footer } from "./Components/Footer.js";
import { projectsPage } from "./Pages/ProjectsPage.js";
import { homePage } from "./Pages/HomePage.js";
import { contactPage } from "./Pages/ContactPage.js";

function init() {
  const headerContainer = document.querySelector("#app-header");
  const mainContainer = document.querySelector("#app-main");
  const footerContainer = document.querySelector("#app-footer");

  headerContainer.innerHTML = Header();
  footerContainer.innerHTML = Footer();

  // Render the page that matches the current URL.
  renderCurrentPage(mainContainer);

  // Render another page whenever the URL hash changes.
  window.addEventListener("hashchange", () => {
    renderCurrentPage(mainContainer);
  });
}

function renderCurrentPage(mainContainer) {
  const route = window.location.hash || "#/home";

  updateActiveNavigation(route);

  switch (route) {
    case "#/":
    case "#/home":
      homePage(mainContainer);
      break;

    case "#/projects":
      projectsPage(mainContainer);
      break;

    case "#/contact":
      contactPage(mainContainer);
      break;

    default:
      mainContainer.innerHTML = `
        <section class="p-8 text-center">
          <h1 class="text-2xl font-semibold">Page not found</h1>
          <a class="text-primary underline" href="#/home">
            Back to Home
          </a>
        </section>
      `;
  }
}

function updateActiveNavigation(route) {
  const nav = document.querySelector("#app-header nav");

  const activeClasses = nav.dataset.activeClasses.split(" ");

  const links = nav.querySelectorAll("[data-path]");

  links.forEach((link) => {
    const isActive = `#/${link.dataset.path}` === route;

    link.classList.remove(...activeClasses);

    if (isActive) {
      link.classList.add(...activeClasses);
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

init();
