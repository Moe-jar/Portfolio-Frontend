import { ProjectCard } from "../Components/ProjectCard.js";
import { getProjects } from "../API/ProjectApi.js";
import { ProjectPageHTML } from "./Templates/ProjectsPageTemplate.js";
import { projectDetailsPage } from "./ProjectDetailsPage.js";

export async function projectsPage(mainContainer) {
  mainContainer.innerHTML = ProjectPageHTML();
  const loadingState = mainContainer.querySelector("#loadingState");
  const populatedState = mainContainer.querySelector("#populatedState");
  loadingState.classList.remove("hidden");
  populatedState.classList.add("hidden");

  const projects = await tryFetchProjects();
  if (!projects) {
    renderError(mainContainer);
    return;
  }
  setupProjectPage(mainContainer, projects);
}

async function tryFetchProjects() {
  try {
    const projects = await getProjects();
    return projects;
  } catch (error) {
    console.error("Error loading projects from API:", error);
    return null;
  }
}

function setupProjectPage(container, projects) {
  const projectsGrid = container.querySelector("#projectsGridContainer");
  const searchInput = container.querySelector("#projectSearchInput");
  const techFilterSelect = container.querySelector("#techFilterSelect");
  const sortSelect = container.querySelector("#sortSelect");
  const categoryPills = container.querySelectorAll(".category-pill");
  const resetFiltersBtn = container.querySelector("#resetFiltersBtn");
  const emptyResetAction = container.querySelector("#emptyResetAction");
  const projectCounterDisplay = container.querySelector(
    "#projectCounterDisplay",
  );

  let selectedCategory = "all";

  renderProjects(projects);
  setupProjectCardClickEvents();
  setupCategoryButtons();
  setupSearch();
  setupTechnologyFilter();
  setupSorting();
  setupReset();

  function setupProjectCardClickEvents() {
    const projectCards = container.querySelectorAll(".project-card");

    projectCards.forEach((card) => {
      card.addEventListener("click", () => {
        const projectId = card.dataset.id;
        projectDetailsPage(container, projectId);
      });
    });
  }
  function setupCategoryButtons() {
    categoryPills.forEach((button) => {
      button.addEventListener("click", () => {
        selectedCategory = button.dataset.category;

        categoryPills.forEach((pill) => {
          pill.classList.remove(
            "active-cat",
            "bg-primary/20",
            "text-primary",
            "border-primary/40",
          );

          pill.classList.add(
            "bg-surface-container",
            "text-on-surface-variant",
            "border-outline-variant/30",
            "active-cat",
          );
        });

        button.classList.remove(
          "bg-surface-container",
          "text-on-surface-variant",
          "border-outline-variant/30",
        );

        button.classList.add(
          "bg-primary/20",
          "text-primary",
          "border-primary/40",
        );

        applyFilters();
      });
    });
  }

  function setupSearch() {
    searchInput.addEventListener("input", () => {
      applyFilters();
    });
  }

  function setupTechnologyFilter() {
    techFilterSelect.addEventListener("change", () => {
      applyFilters();
    });
  }

  function setupSorting() {
    sortSelect.addEventListener("change", () => {
      applyFilters();
    });
  }

  function setupReset() {
    resetFiltersBtn.addEventListener("click", resetFilters);
    emptyResetAction.addEventListener("click", resetFilters);
  }

  function resetFilters() {
    searchInput.value = "";
    techFilterSelect.value = "all";
    sortSelect.value = "newest";

    selectedCategory = "all";

    categoryPills.forEach((pill) => {
      pill.classList.remove("active-cat");
    });

    const allCategoryButton = container.querySelector('[data-category="all"]');

    allCategoryButton.classList.add("active-cat");

    applyFilters();
  }

  function applyFilters() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const selectedTechnology = techFilterSelect.value;
    const selectedSort = sortSelect.value;

    let filteredProjects = projects.filter((project) => {
      const matchesSearch =
        searchTerm === "" ||
        project.title.toLowerCase().includes(searchTerm) ||
        project.description.toLowerCase().includes(searchTerm) ||
        project.technologies.some((technology) =>
          technology.toLowerCase().includes(searchTerm),
        );

      const matchesCategory =
        selectedCategory === "all" ||
        project.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchesTechnology =
        selectedTechnology === "all" ||
        project.technologies.some(
          (technology) =>
            technology.toLowerCase() === selectedTechnology.toLowerCase(),
        );

      return matchesSearch && matchesCategory && matchesTechnology;
    });

    if (selectedSort === "alpha") {
      filteredProjects.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (selectedSort === "newest") {
      filteredProjects.sort((a, b) => b.id - a.id);
    }

    renderProjects(filteredProjects);
  }

  function renderProjects(projectsToRender) {
    if (projectsToRender.length === 0) {
      projectsGrid.innerHTML = "";
      projectCounterDisplay.textContent = "0 Projects";

      container.querySelector("#populatedState").classList.add("hidden");
      container.querySelector("#emptyState").classList.remove("hidden");

      return;
    }

    const projectCards = projectsToRender
      .map((project) => ProjectCard(project))
      .join("");

    projectsGrid.innerHTML = projectCards;

    projectCounterDisplay.textContent = `${projectsToRender.length} Projects`;

    container.querySelector("#populatedState").classList.remove("hidden");
    container.querySelector("#emptyState").classList.add("hidden");
    setupProjectCardClickEvents();
  }
}

function renderError(container) {
  container.querySelector("#loadingState").classList.add("hidden");
  container.querySelector("#populatedState").classList.add("hidden");
  container.querySelector("#errorState").classList.remove("hidden");
  container.querySelector("#retryConnectionBtn").addEventListener("click", () => {
    projectsPage(container);
  });
}
