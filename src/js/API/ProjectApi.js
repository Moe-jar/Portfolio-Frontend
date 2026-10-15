import { API_URL } from "../Config.js";
import { ENDPOINTS } from "../Config.js";

export async function getProjects() {
  const fullUrl = `${API_URL}${ENDPOINTS.Projects}`;

  const response = await fetch(fullUrl, {});

  if (!response.ok) {
    throw new Error(
      ` failed to fetch projects: HTTP error! status: ${response.status}`,
    );
  }
  return await response.json();
}

export async function getProjectDetailsById(id) {
  const fullUrl = `${API_URL}${ENDPOINTS.Projects}/${id}`;
  const response = await fetch(fullUrl, {});

  if (!response.ok) {
    throw new Error(
      ` failed to fetch project details: HTTP error! status: ${response.status}`,
    );
  }
  return await response.json();
}
