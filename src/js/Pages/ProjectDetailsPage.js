import { ProjectDetailsPageHTML } from "./Templates/ProjectDetailsTemplate.js";
import { projectsPage } from "./ProjectsPage.js";
import { getProjectDetailsById } from "../API/ProjectApi.js";

export async function projectDetailsPage(container, projectId) {
  const project = await getProjectById(projectId);
  container.innerHTML = ProjectDetailsPageHTML(project);
  setupBackButton();

  function setupBackButton() {
    const backButton = container.querySelector("#backButton");
    backButton.addEventListener("click", async () => {
      await projectsPage(container);
    });
  }
}

async function getProjectById(Id) {
  return await getProjectDetailsById(Id);
}
