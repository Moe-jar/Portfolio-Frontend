import { API_URL } from "../Config.js";
import { ENDPOINTS } from "../Config.js";

const CACHE_KEY = "portfolio-projects";
const REQUEST_TIMEOUT_MS = 8000;

async function requestJson(url) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(url, { signal: controller.signal });

    if (!response.ok) {
      throw new Error(`Project API returned HTTP ${response.status}`);
    }

    return await response.json();
  } finally {
    clearTimeout(timeoutId);
  }
}

export async function getProjects() {
  const fullUrl = `${API_URL}${ENDPOINTS.Projects}`;
  try {
    const projects = await requestJson(fullUrl);
    localStorage.setItem(CACHE_KEY, JSON.stringify(projects));
    return projects;
  } catch (error) {
    const cachedProjects = localStorage.getItem(CACHE_KEY);
    if (cachedProjects) {
      console.warn("Project API unavailable; using cached projects.", error);
      return JSON.parse(cachedProjects);
    }
    throw error;
  }
}

export async function getProjectDetailsById(id) {
  const fullUrl = `${API_URL}${ENDPOINTS.Projects}/${id}`;
  return requestJson(fullUrl);
}
