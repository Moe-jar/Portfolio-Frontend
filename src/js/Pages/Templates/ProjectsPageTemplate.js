import { Icon } from "../../Components/Icon.js";

export function ProjectPageHTML() {
  return `<div style= "color : white; " class="max-w-[1200px] mx-auto px-margin py-space-xl"  >
    <div class="flex flex-col w-full">
      <!-- Page Header -->
      <section class="flex flex-col gap-space-md mb-space-xl">
        <div class="flex flex-wrap items-center justify-between gap-space-sm">
          <div
            class="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container border border-outline-variant/40"
          >
            <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span
              class="font-label-sm text-label-sm uppercase tracking-widest text-primary"
              >my work</span
            >
          </div>
          <div
            class="flex items-center gap-space-xs px-space-sm py-1 rounded bg-surface-container-high border border-outline-variant/30 text-on-surface-variant font-label-sm text-label-sm"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
            <span id="projectCounterDisplay"> No Projects</span>
          </div>
        </div>
        <div class="max-w-3xl flex flex-col gap-space-xs">
          <h1 class="font-headline-xl text-headline-xl text-on-surface">
            Projects Built to Solve Real Problems
          </h1>
          <p class="font-body-lg text-body-lg text-on-surface-variant">
            A curated collection of full-stack web applications, scalable
            backend REST APIs, and responsive frontend systems designed for
            real-world reliability.
          </p>
        </div>
        
      </section>
      <!-- Filter & Search Toolbar Component -->
      <section
        class="mb-space-xl p-space-md rounded-xl bg-surface-container-low border border-outline-variant/30 flex flex-col gap-space-md"
      >
        <div class="grid grid-cols-1 md:grid-cols-12 gap-space-md items-center">
          <!-- Search Input -->
          <div class="md:col-span-5 relative">
            ${Icon("search", "absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-outline pointer-events-none")}
            <input
              class="w-full h-9 pl-9 pr-space-md bg-surface-container-lowest border border-outline-variant/40 rounded text-on-surface placeholder:text-outline/70 font-body-sm text-body-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              id="projectSearchInput"
              placeholder="Search by title, description, or keyword..."
              type="text"
            />
          </div>
          <!-- Tech Dropdown -->
          <div class="md:col-span-3 relative">
            <select
              class="w-full h-9 px-space-sm bg-surface-container-lowest border border-outline-variant/40 rounded text-on-surface font-label-sm text-label-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none cursor-pointer"
              id="techFilterSelect"
            >
              <option value="all">All Technologies</option>
              <option value="ASP.NET Core">ASP.NET Core</option>
              <option value="C#">C#</option>
              <option value="TypeScript">TypeScript</option>
              <option value="Vanilla JS">Vanilla JS / ES Modules</option>
              <option value="SQL Server">SQL Server</option>
              <option value="PostgreSQL">PostgreSQL</option>
              <option value="Redis">Redis</option>
              <option value="Docker">Docker</option>
            </select>
            ${Icon("expand_more", "absolute right-2.5 top-1/2 -translate-y-1/2 text-[18px] text-outline pointer-events-none")}
          </div>
          <!-- Sort Dropdown -->
          <div class="md:col-span-2 relative">
            <select
              class="w-full h-9 px-space-sm bg-surface-container-lowest border border-outline-variant/40 rounded text-on-surface font-label-sm text-label-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none cursor-pointer"
              id="sortSelect"
            >
              <option value="newest">Newest First</option>
              <option value="alpha">Title A-Z</option>
            </select>
            ${Icon("swap_vert", "absolute right-2.5 top-1/2 -translate-y-1/2 text-[18px] text-outline pointer-events-none")}
          </div>
          <!-- Reset CTA -->
          <div class="md:col-span-2 flex justify-end">
            <button
              class="w-full md:w-auto h-9 px-space-md inline-flex items-center justify-center gap-space-xs rounded bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all"
              id="resetFiltersBtn"
              type="button"
            >
              ${Icon("refresh", "text-[16px]")}
              Reset
            </button>
          </div>
        </div>
        <!-- Category Pill Filters -->
        <div
          class="flex flex-wrap items-center gap-space-xs pt-space-xs border-t border-outline-variant/20"
        >
          <span class="font-label-sm text-label-sm text-outline mr-1"
            >CATEGORY:</span
          >
          <button
            class="category-pill active-cat px-space-sm py-1 rounded-full font-label-sm text-label-sm bg-primary/20 text-primary border border-primary/40 transition-all"
            data-category="all"
            type="button"
          >
            All Categories
          </button>
          <button
            class="category-pill px-space-sm py-1 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant hover:text-on-surface border border-outline-variant/30 transition-all"
            data-category="Full-Stack"
            type="button"
          >
            Full-Stack
          </button>
          <button
            class="category-pill px-space-sm py-1 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant hover:text-on-surface border border-outline-variant/30 transition-all"
            data-category="Backend API"
            type="button"
          >
            Backend API
          </button>
          <button
            class="category-pill px-space-sm py-1 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant hover:text-on-surface border border-outline-variant/30 transition-all"
            data-category="Web Application"
            type="button"
          >
            Web Applications
          </button>
          <button
            class="category-pill px-space-sm py-1 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant hover:text-on-surface border border-outline-variant/30 transition-all"
            data-category="System Tools"
            type="button"
          >
            System Tools
          </button>
        </div>
      </section>
      <!-- State 1: Populated Projects Grid (Default) -->
      <section class="w-full" id="populatedState">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg"
          id="projectsGridContainer"
        >
          <!-- Cards will be dynamically injected here -->
         
        </div>
      </section>
      <!-- State 2: Loading Skeleton Grid -->
      <section class="hidden w-full" id="loadingState">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg"
        >
          <!-- Skeleton 1 to 6 -->
          <div
            class="flex flex-col justify-between rounded-xl bg-surface-container-low border border-outline-variant/20 overflow-hidden animate-pulse"
          >
            <div>
              <div class="h-44 w-full bg-surface-container-high"></div>
              <div class="p-space-lg flex flex-col gap-space-sm">
                <div
                  class="h-6 w-3/4 bg-surface-container-highest rounded"
                ></div>
                <div class="space-y-2 mt-1">
                  <div
                    class="h-3 w-full bg-surface-container-highest rounded"
                  ></div>
                  <div
                    class="h-3 w-5/6 bg-surface-container-highest rounded"
                  ></div>
                  <div
                    class="h-3 w-2/3 bg-surface-container-highest rounded"
                  ></div>
                </div>
                <div class="flex gap-2 mt-space-sm">
                  <div
                    class="h-5 w-16 bg-surface-container-highest rounded-full"
                  ></div>
                  <div
                    class="h-5 w-20 bg-surface-container-highest rounded-full"
                  ></div>
                  <div
                    class="h-5 w-14 bg-surface-container-highest rounded-full"
                  ></div>
                </div>
              </div>
            </div>
            <div
              class="p-space-md border-t border-outline-variant/20 flex justify-between"
            >
              <div class="h-4 w-20 bg-surface-container-highest rounded"></div>
              <div class="h-6 w-24 bg-surface-container-highest rounded"></div>
            </div>
          </div>
          <div
            class="flex flex-col justify-between rounded-xl bg-surface-container-low border border-outline-variant/20 overflow-hidden animate-pulse"
          >
            <div>
              <div class="h-44 w-full bg-surface-container-high"></div>
              <div class="p-space-lg flex flex-col gap-space-sm">
                <div
                  class="h-6 w-3/4 bg-surface-container-highest rounded"
                ></div>
                <div class="space-y-2 mt-1">
                  <div
                    class="h-3 w-full bg-surface-container-highest rounded"
                  ></div>
                  <div
                    class="h-3 w-5/6 bg-surface-container-highest rounded"
                  ></div>
                  <div
                    class="h-3 w-2/3 bg-surface-container-highest rounded"
                  ></div>
                </div>
                <div class="flex gap-2 mt-space-sm">
                  <div
                    class="h-5 w-16 bg-surface-container-highest rounded-full"
                  ></div>
                  <div
                    class="h-5 w-20 bg-surface-container-highest rounded-full"
                  ></div>
                  <div
                    class="h-5 w-14 bg-surface-container-highest rounded-full"
                  ></div>
                </div>
              </div>
            </div>
            <div
              class="p-space-md border-t border-outline-variant/20 flex justify-between"
            >
              <div class="h-4 w-20 bg-surface-container-highest rounded"></div>
              <div class="h-6 w-24 bg-surface-container-highest rounded"></div>
            </div>
          </div>
          <div
            class="flex flex-col justify-between rounded-xl bg-surface-container-low border border-outline-variant/20 overflow-hidden animate-pulse"
          >
            <div>
              <div class="h-44 w-full bg-surface-container-high"></div>
              <div class="p-space-lg flex flex-col gap-space-sm">
                <div
                  class="h-6 w-3/4 bg-surface-container-highest rounded"
                ></div>
                <div class="space-y-2 mt-1">
                  <div
                    class="h-3 w-full bg-surface-container-highest rounded"
                  ></div>
                  <div
                    class="h-3 w-5/6 bg-surface-container-highest rounded"
                  ></div>
                  <div
                    class="h-3 w-2/3 bg-surface-container-highest rounded"
                  ></div>
                </div>
                <div class="flex gap-2 mt-space-sm">
                  <div
                    class="h-5 w-16 bg-surface-container-highest rounded-full"
                  ></div>
                  <div
                    class="h-5 w-20 bg-surface-container-highest rounded-full"
                  ></div>
                  <div
                    class="h-5 w-14 bg-surface-container-highest rounded-full"
                  ></div>
                </div>
              </div>
            </div>
            <div
              class="p-space-md border-t border-outline-variant/20 flex justify-between"
            >
              <div class="h-4 w-20 bg-surface-container-highest rounded"></div>
              <div class="h-6 w-24 bg-surface-container-highest rounded"></div>
            </div>
          </div>
          <div
            class="flex flex-col justify-between rounded-xl bg-surface-container-low border border-outline-variant/20 overflow-hidden animate-pulse"
          >
            <div>
              <div class="h-44 w-full bg-surface-container-high"></div>
              <div class="p-space-lg flex flex-col gap-space-sm">
                <div
                  class="h-6 w-3/4 bg-surface-container-highest rounded"
                ></div>
                <div class="space-y-2 mt-1">
                  <div
                    class="h-3 w-full bg-surface-container-highest rounded"
                  ></div>
                  <div
                    class="h-3 w-5/6 bg-surface-container-highest rounded"
                  ></div>
                  <div
                    class="h-3 w-2/3 bg-surface-container-highest rounded"
                  ></div>
                </div>
                <div class="flex gap-2 mt-space-sm">
                  <div
                    class="h-5 w-16 bg-surface-container-highest rounded-full"
                  ></div>
                  <div
                    class="h-5 w-20 bg-surface-container-highest rounded-full"
                  ></div>
                  <div
                    class="h-5 w-14 bg-surface-container-highest rounded-full"
                  ></div>
                </div>
              </div>
            </div>
            <div
              class="p-space-md border-t border-outline-variant/20 flex justify-between"
            >
              <div class="h-4 w-20 bg-surface-container-highest rounded"></div>
              <div class="h-6 w-24 bg-surface-container-highest rounded"></div>
            </div>
          </div>
          <div
            class="flex flex-col justify-between rounded-xl bg-surface-container-low border border-outline-variant/20 overflow-hidden animate-pulse"
          >
            <div>
              <div class="h-44 w-full bg-surface-container-high"></div>
              <div class="p-space-lg flex flex-col gap-space-sm">
                <div
                  class="h-6 w-3/4 bg-surface-container-highest rounded"
                ></div>
                <div class="space-y-2 mt-1">
                  <div
                    class="h-3 w-full bg-surface-container-highest rounded"
                  ></div>
                  <div
                    class="h-3 w-5/6 bg-surface-container-highest rounded"
                  ></div>
                  <div
                    class="h-3 w-2/3 bg-surface-container-highest rounded"
                  ></div>
                </div>
                <div class="flex gap-2 mt-space-sm">
                  <div
                    class="h-5 w-16 bg-surface-container-highest rounded-full"
                  ></div>
                  <div
                    class="h-5 w-20 bg-surface-container-highest rounded-full"
                  ></div>
                  <div
                    class="h-5 w-14 bg-surface-container-highest rounded-full"
                  ></div>
                </div>
              </div>
            </div>
            <div
              class="p-space-md border-t border-outline-variant/20 flex justify-between"
            >
              <div class="h-4 w-20 bg-surface-container-highest rounded"></div>
              <div class="h-6 w-24 bg-surface-container-highest rounded"></div>
            </div>
          </div>
          <div
            class="flex flex-col justify-between rounded-xl bg-surface-container-low border border-outline-variant/20 overflow-hidden animate-pulse"
          >
            <div>
              <div class="h-44 w-full bg-surface-container-high"></div>
              <div class="p-space-lg flex flex-col gap-space-sm">
                <div
                  class="h-6 w-3/4 bg-surface-container-highest rounded"
                ></div>
                <div class="space-y-2 mt-1">
                  <div
                    class="h-3 w-full bg-surface-container-highest rounded"
                  ></div>
                  <div
                    class="h-3 w-5/6 bg-surface-container-highest rounded"
                  ></div>
                  <div
                    class="h-3 w-2/3 bg-surface-container-highest rounded"
                  ></div>
                </div>
                <div class="flex gap-2 mt-space-sm">
                  <div
                    class="h-5 w-16 bg-surface-container-highest rounded-full"
                  ></div>
                  <div
                    class="h-5 w-20 bg-surface-container-highest rounded-full"
                  ></div>
                  <div
                    class="h-5 w-14 bg-surface-container-highest rounded-full"
                  ></div>
                </div>
              </div>
            </div>
            <div
              class="p-space-md border-t border-outline-variant/20 flex justify-between"
            >
              <div class="h-4 w-20 bg-surface-container-highest rounded"></div>
              <div class="h-6 w-24 bg-surface-container-highest rounded"></div>
            </div>
          </div>
        </div>
      </section>
      <!-- State 3: Empty Results View -->
      <section class="hidden w-full" id="emptyState">
        <div
          class="flex flex-col items-center justify-center p-space-xl py-20 text-center rounded-xl bg-surface-container-low border border-outline-variant/30"
        >
          <div
            class="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-space-md text-primary"
          >
            ${Icon("search_off", "text-[28px]")}
          </div>
          <h3
            class="font-headline-md text-headline-md text-on-surface mb-space-xs"
          >
            No matching projects found
          </h3>
          <p
            class="font-body-md text-body-md text-on-surface-variant max-w-md mb-space-lg"
          >
            We couldn't find any projects matching your current search or filter
            criteria. Try adjusting your query or resetting filters.
          </p>
          <button
            class="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded bg-primary hover:bg-primary-fixed-dim text-on-primary font-label-md text-label-md transition-all active:scale-[0.98]"
            id="emptyResetAction"
            type="button"
          >
            ${Icon("restart_alt", "text-[16px]")}
            Reset All Filters
          </button>
        </div>
      </section>
      <!-- State 4: Error State View -->
      <section class="hidden w-full" id="errorState">
        <div
          class="flex flex-col items-center justify-center p-space-xl py-20 text-center rounded-xl bg-surface-container-low border border-error/30"
        >
          <div
            class="w-14 h-14 rounded-full bg-error-container/30 border border-error/40 flex items-center justify-center mb-space-md text-error"
          >
            ${Icon("cloud_off", "text-[28px]")}
          </div>
          <h3
            class="font-headline-md text-headline-md text-on-surface mb-space-xs"
          >
            Unable to load projects
          </h3>
          <p
            class="font-body-md text-body-md text-on-surface-variant max-w-md mb-space-lg"
          >
            An error occurred while communicating with the API endpoint (<code
              class="px-1 py-0.5 rounded bg-surface-container text-error font-code-inline"
              >GET /api/projects</code
            >). Check your network connection or server status.
          </p>
          <div class="flex items-center gap-space-md">
            <button
              class="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded bg-primary hover:bg-primary-fixed-dim text-on-primary font-label-md text-label-md transition-all"
              id="retryConnectionBtn"
              type="button"
            >
              ${Icon("sync", "text-[16px]")}
              Retry Connection
            </button>
            <button
              class="px-space-md py-space-xs rounded bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-all"
              id="viewMockFallbackBtn"
              type="button"
            >
              View Cached Mock Data
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>`;
}
