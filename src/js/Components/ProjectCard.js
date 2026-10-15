export function ProjectCard(project) {
  if (!project) {
    return ``;
  }
  return `<!-- Card -->
          <article
            class="project-card group flex flex-col justify-between rounded-xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all duration-200 hover:-translate-y-0.5 overflow-hidden cursor-pointer"
            data-category="${project.category}"
            data-id="${project.id}"
            data-tech="${project.technologies.join(",")}"
            data-title="${project.title}"
          >
            <div>
              <!-- Thumbnail Header -->
              <div
                class="h-44 w-full bg-surface-container-lowest border-b border-outline-variant/20 p-space-md flex flex-col justify-between relative overflow-hidden"
              >
                <!-- Project Image Background -->
                <img 
                  src="${project.imageUrl}" 
                  alt="${project.title}" 
                  class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                <!-- Dark Overlay to make badge readable if needed -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>

                <div class="flex items-center justify-between z-10">
                  <span
                    class="inline-flex items-center gap-1 px-space-xs py-0.5 rounded font-label-sm text-label-sm bg-surface-container-high/90 backdrop-blur-sm text-on-surface-variant border border-outline-variant/30"
                  >
                    <span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    ${project.category}
                  </span>
                  <span class="font-label-sm text-label-sm text-white/80 drop-shadow"
                    >v2.1-prod</span
                  >
                </div>
                
                <div class="flex items-center gap-2 z-10">
                  <span class="font-label-sm text-[10px] uppercase text-white/80 drop-shadow"
                    >DB: MSSQL-Cluster</span
                  >
                </div>
              </div>

              <!-- Content Body -->
              <div class="p-space-lg flex flex-col gap-space-sm">
                <h2
                  class="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors"
                >
                  ${project.title}
                </h2>
                <p
                  class="font-body-sm text-body-sm text-on-surface-variant line-clamp-3"
                >
                    ${project.description}
                </p>
                <!-- Technologies -->
                <div class="flex flex-wrap gap-1.5 mt-space-xs">
                  ${GenerateTechListBody(project.technologies)}
                </div>
              </div>
            </div>

            <!-- Footer Link CTA -->
            <div
              class="p-space-md border-t border-outline-variant/20 flex items-center justify-between gap-space-sm bg-surface-container/30"
            >
              <a
                aria-label="GitHub Repository"
                class="inline-flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors"
                href="#${project.repositoryUrl}"
              >
                <span class="material-symbols-outlined text-[16px]">code</span>
                <span>Source Code</span>
              </a>
              <a
                aria-label="Live Demo Link"
                class="inline-flex items-center gap-1.5 font-label-sm text-label-sm px-space-sm py-1 rounded bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 text-on-surface transition-all"
                href="#${project.liveDemoUrl}"
              >
                <span>Live System</span>
                <span class="material-symbols-outlined text-[14px]"
                  >open_in_new</span
                >
              </a>
            </div>
          </article>`;
}

function OneTechnologyBody(technology) {
  if (!technology) {
    return ``;
  }
  return `<span
            class="px-2 py-0.5 rounded-full bg-surface-container border border-outline-variant/30 text-on-surface-variant font-label-sm text-label-sm"
            >${technology}</span
          >`;
}

function GenerateTechListBody(techList) {
  let techListBody = "";
  for (let i = 0; i < techList.length; i++) {
    techListBody += OneTechnologyBody(techList[i]);
  }
  return techListBody;
}
