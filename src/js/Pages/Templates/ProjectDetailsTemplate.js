import { replaceMaterialIcons } from "../../Components/Icon.js";

export function ProjectDetailsPageHTML(project) {
  return replaceMaterialIcons(` <div
        class="flex flex-col w-full px-4 sm:px-8 max-w-7xl mx-auto py-8 space-y-8"
      >
        <!-- Top Navigation & Metadata Strip -->
        <div class="flex flex-wrap items-center justify-between gap-4 pb-2">
          <div class="flex items-center space-x-3">
            <button
              class="inline-flex items-center space-x-2 text-on-surface-variant hover:text-primary transition-colors duration-150 font-label-code text-label-code group" id ="backButton"
              type="button"
            >
              <span
                class="material-symbols-outlined text-[16px] transition-transform duration-150 group-hover:-translate-x-1"
                >arrow_back</span
              >
              <span class="">Back to Projects</span>
            </button>
            <span class="text-outline-variant font-label-micro select-none"
              >/</span
            >
            <div
              class="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-surface-container-high text-on-surface-variant font-label-micro text-label-micro"
            >
              <span class="text-primary font-bold">#104</span>
              <span class="text-outline">·</span>
              <span class="">Distributed Platform</span>
            </div>
          </div>
          <!-- Live Telemetry Tag -->
        </div>
        <!-- Hero Headline & Global Actions -->
        <div
          class="bg-surface-container rounded-lg p-6 sm:p-8 space-y-6 relative overflow-hidden"
        >
          <!-- Ambient subtle background glow -->
          <div
            class="absolute -top-24 -right-24 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"
          ></div>
          <div
            class="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10"
          >
            <div class="space-y-3 max-w-3xl">
              <div class="flex items-center space-x-2">
                <span
                  class="px-2.5 py-0.5 rounded-full bg-surface-container-highest text-tertiary font-label-code text-label-code uppercase tracking-wider"
                >
                  Cloud &amp; Distributed Systems
                </span>
                <span class="text-outline text-label-micro font-label-micro"
                  >CONTRACT::ProjectResponse</span
                >
              </div>
              <h1
                class="text-headline-lg font-headline-lg text-on-surface tracking-tight"
              >
                HyperScale Distributed Task Engine
              </h1>
              <p class="text-body-md font-body-md text-on-surface-variant">
                Ultra-low-latency asynchronous task scheduler and cluster
                orchestrator built to partition high-throughput ETL pipelines
                with raft consensus and real-time checkpointing.
              </p>
            </div>
            <!-- Action Button Group -->
            <div class="flex flex-wrap items-center gap-3 shrink-0">
              <!-- Live Demo CTA -->
              <a
                class="inline-flex items-center space-x-2 px-5 py-2.5 rounded bg-primary-container hover:bg-primary text-on-primary-container font-headline-sm text-label-code transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-primary-container/20"
                href="https://demo.hyperscale.internal"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span class="material-symbols-outlined text-[18px]"
                  >rocket_launch</span
                >
                <span class="">View Live Demo</span>
                <span class="material-symbols-outlined text-[16px]"
                  >open_in_new</span
                >
              </a>
              <!-- Repository CTA -->
              <a
                class="inline-flex items-center space-x-2 px-4 py-2.5 rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-headline-sm text-label-code transition-all duration-200"
                href="https://github.com/engine/hyperscale-scheduler"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span class="material-symbols-outlined text-[18px]">code</span>
                <span class="">Source Code</span>
              </a>
              <!-- Share / Copy URI -->
              <button
                class="relative inline-flex items-center justify-center w-10 h-10 rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface transition-colors duration-150"
                id="copy-btn"
                title="Copy share link"
              >
                <span class="material-symbols-outlined text-[18px]">share</span>
              </button>
            </div>
          </div>
        </div>
        <!-- Primary Showcase Grid (8 cols Story / 4 cols Metadata) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <!-- LEFT COLUMN: 8 Columns -->
          <div class="lg:col-span-8 space-y-8 min-w-0">
            <!-- Interactive Architecture Visualizer Card -->
            <div class="bg-surface-container rounded-lg p-6 space-y-5">
              <div
                class="flex flex-wrap items-center justify-between gap-2 pb-2"
              >
                <div class="flex items-center space-x-2">
                  <span
                    class="material-symbols-outlined text-primary text-[20px]"
                    >hub</span
                  >
                  <h2 class="text-headline-sm font-headline-sm text-on-surface">
                    Topology &amp; Cluster Preview
                  </h2>
                </div>
                <div class="flex items-center space-x-2">
                  <span
                    class="inline-flex items-center px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface-variant font-label-code text-label-code"
                  >
                    NODE_COUNT: 12
                  </span>
                  <span
                    class="inline-flex items-center px-2 py-0.5 rounded bg-surface-container-lowest text-primary font-label-code text-label-code"
                  >
                    LATENCY: 1.4ms
                  </span>
                </div>
              </div>
              <!-- System Architecture Canvas Mockup -->
              <!-- Real Screenshot / Architecture Snapshot Image -->
              <div
                class="rounded-lg border border-surface-variant bg-surface-container-lowest overflow-hidden shadow-sm"
              >
                <div
                  class="flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 bg-surface-container-high border-b border-surface-variant"
                >
                  <div class="flex items-center space-x-2">
                    <div class="flex items-center space-x-1.5">
                      <span
                        class="w-2.5 h-2.5 rounded-full bg-error inline-block"
                      ></span
                      ><span
                        class="w-2.5 h-2.5 rounded-full bg-outline inline-block"
                      ></span
                      ><span
                        class="w-2.5 h-2.5 rounded-full bg-primary inline-block"
                      ></span>
                    </div>
                    <span class="text-outline-variant select-none ml-1">|</span>
                    <div
                      class="flex items-center space-x-1 text-on-surface-variant"
                    >
                      <button
                        class="p-1 rounded hover:bg-surface-container-highest transition-colors"
                      >
                        <span class="material-symbols-outlined text-[16px]"
                          >arrow_back</span
                        ></button
                      ><button
                        class="p-1 rounded hover:bg-surface-container-highest transition-colors"
                      >
                        <span class="material-symbols-outlined text-[16px]"
                          >refresh</span
                        >
                      </button>
                    </div>
                  </div>
                  <div class="flex-1 max-w-md mx-2">
                    <div
                      class="flex items-center px-3 py-1 rounded bg-surface-container-lowest border border-surface-variant text-on-surface-variant font-label-code text-label-micro space-x-2"
                    >
                      <span
                        class="material-symbols-outlined text-[14px] text-primary"
                        >lock</span
                      ><span class="text-on-surface truncate"
                        >https://demo.hyperscale.internal/cluster/live</span
                      ><span
                        class="material-symbols-outlined text-[14px] text-outline ml-auto"
                        >shield</span
                      >
                    </div>
                  </div>
                  <div class="flex items-center space-x-2">
                    <div
                      class="inline-flex items-center rounded bg-surface-container-lowest p-0.5 border border-surface-variant text-on-surface-variant"
                    >
                      <button
                        class="px-2 py-1 rounded bg-surface-container-high text-primary font-label-micro flex items-center space-x-1"
                      >
                        <span class="material-symbols-outlined text-[14px]"
                          >desktop_windows</span
                        ><span class="hidden sm:inline">Desktop</span></button
                      ><button
                        class="px-2 py-1 rounded hover:text-on-surface font-label-micro flex items-center space-x-1"
                      >
                        <span class="material-symbols-outlined text-[14px]"
                          >tablet_mac</span
                        ></button
                      ><button
                        class="px-2 py-1 rounded hover:text-on-surface font-label-micro flex items-center space-x-1"
                      >
                        <span class="material-symbols-outlined text-[14px]"
                          >smartphone</span
                        >
                      </button>
                    </div>
                    <a
                      class="p-1.5 rounded hover:bg-surface-container-highest text-on-surface-variant hover:text-primary transition-colors flex items-center"
                      href="https://demo.hyperscale.internal"
                      rel="noopener noreferrer"
                      target="_blank"
                      title="Open in standalone window"
                      ><span class="material-symbols-outlined text-[16px]"
                        >open_in_new</span
                      ></a
                    >
                  </div>
                </div>
                <div
                  class="relative w-full h-96 bg-surface-container-lowest overflow-hidden flex flex-col justify-between p-6"
                >
                  <div
                    class="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#4edea3_1px,transparent_1px)] [background-size:16px_16px]"
                  ></div>
                  <div class="relative z-10 flex items-center justify-between">
                    <div
                      class="flex items-center space-x-2 bg-surface-container-high/90 px-3 py-1 rounded border border-surface-variant"
                    >
                      <span
                        class="inline-block w-2 h-2 rounded-full bg-primary animate-ping"
                      ></span
                      ><span
                        class="font-label-code text-label-code text-primary"
                        >LIVE IFRAME INSTANCE</span
                      ><span class="text-outline">|</span
                      ><span
                        class="font-label-micro text-label-micro text-on-surface-variant"
                        >Worker Node #4 active</span
                      >
                    </div>
                    <span
                      class="px-2.5 py-1 rounded bg-surface-container text-tertiary font-label-micro border border-surface-variant"
                      >Interactive Session</span
                    >
                  </div>
                  <div class="relative z-10 my-auto text-center space-y-3">
                    <div
                      class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-container/20 text-primary border border-primary/30"
                    >
                      <span class="material-symbols-outlined text-[28px]"
                        >play_circle</span
                      >
                    </div>
                    <h4
                      class="text-headline-sm font-headline-sm text-on-surface"
                    >
                      Connected to Real-time Cluster SandBox
                    </h4>
                    <p
                      class="text-body-sm font-body-sm text-on-surface-variant max-w-lg mx-auto"
                    >
                      Interactive scheduler console loaded in iframe viewport.
                      Inject tasks, simulate node partition failover, and
                      inspect vectorized telemetry in real time.
                    </p>
                    <div class="flex items-center justify-center gap-3 pt-2">
                      <a
                        class="inline-flex items-center space-x-2 px-4 py-2 rounded bg-primary text-on-primary font-label-code text-label-code hover:opacity-90 transition-opacity"
                        href="https://demo.hyperscale.internal"
                        rel="noopener noreferrer"
                        target="_blank"
                        ><span class="material-symbols-outlined text-[16px]"
                          >bolt</span
                        ><span class="">Launch Fullscreen Session</span></a
                      ><button
                        class="px-4 py-2 rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-code text-label-code transition-colors border border-surface-variant"
                      >
                        Trigger Heartbeat
                      </button>
                    </div>
                  </div>
                  <div
                    class="relative z-10 flex items-center justify-between text-on-surface-variant font-label-micro text-label-micro border-t border-surface-variant/60 pt-3"
                  >
                    <span class="flex items-center space-x-1.5"
                      ><span
                        class="material-symbols-outlined text-[14px] text-primary"
                        >verified</span
                      ><span class=""
                        >Sandboxed environment · TLS 1.3 encrypted</span
                      ></span
                    ><span class="font-label-code"
                      >WS: wss://engine.internal:8443/stream</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- Description & Architecture Deep Dive (Mapped from record Description) -->
            <div class="bg-surface-container rounded-lg p-6 space-y-6">
              <div
                class="flex flex-wrap items-center justify-between gap-3 pb-2"
              >
                <div class="flex items-center space-x-2">
                  <span
                    class="material-symbols-outlined text-secondary text-[22px]"
                    >photo_library</span
                  >
                  <h2 class="text-headline-sm font-headline-sm text-on-surface">
                    Visual Assets &amp; Screenshot Gallery
                  </h2>
                </div>
                <div class="flex items-center space-x-2">
                  <span
                    class="px-2 py-0.5 rounded bg-surface-container-lowest text-outline font-label-micro text-label-micro uppercase"
                    >4 High-Res Captures</span
                  ><span
                    class="px-2 py-0.5 rounded bg-surface-container-lowest text-primary font-label-code text-label-code"
                    >1080p UHD</span
                  >
                </div>
              </div>
              <div
                class="relative rounded-lg overflow-hidden border border-surface-variant group bg-surface-container-lowest"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  class="w-full h-80 object-cover object-center transition-all duration-300 group-hover:scale-[1.01]"
                  data-alt="HyperScale Cluster Architecture Blueprint and Topology Visualizer View"
                  id="featured-gallery-img"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMDjY1Lp9BHj_ALHDmAb8Yqz0VyKrRI8qmRryN7Jn9Wvtru06AH2WwEtLHy4CQougMSYkWsk5JbE38A-B_zDWcLrSpa6y4YZHpYDwyA6WGrnP-bdBnkhnMfkhMeacL31inaMcuAtVBGHsja3hK-OH3IIPIw6CsGl6Qcuj0NjqhOdFwmO9KGSZ9kv6TEh6BIf9yLqQSG3xtmbfhXpJtAj9EZVhYeMUvTaW6JQCWB7FLqDCk2Bgj03I"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-80 pointer-events-none"
                ></div>
                <div
                  class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-on-surface z-10"
                >
                  <div
                    class="bg-surface-container-lowest/80 backdrop-blur-sm px-3 py-1.5 rounded flex items-center space-x-2 border border-surface-variant"
                  >
                    <span
                      class="material-symbols-outlined text-[16px] text-primary"
                      >zoom_in</span
                    ><span
                      class="font-label-code text-label-code text-on-surface"
                      id="featured-gallery-caption"
                      >02 · High-Throughput Job Scheduling Matrix &amp;
                      Partition Queue</span
                    >
                  </div>
                  <div
                    class="hidden sm:flex items-center space-x-2 bg-surface-container-lowest/80 backdrop-blur-sm px-2.5 py-1 rounded border border-surface-variant text-on-surface-variant font-label-micro"
                  >
                    <span
                      class="material-symbols-outlined text-[14px] text-tertiary"
                      >aspect_ratio</span
                    ><span class="">1920 × 1080 · SVG Canvas</span>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                <div
                  class="flex flex-col text-left p-2 rounded-lg bg-surface-container-high border-2 border-primary transition-all group cursor-pointer"
                >
                  <div
                    class="w-full h-16 rounded overflow-hidden bg-surface-container-lowest mb-1.5 relative"
                  >
                    <div
                      class="absolute inset-0 bg-primary/20 flex items-center justify-center"
                    >
                      <span
                        class="material-symbols-outlined text-primary text-[20px]"
                        >hub</span
                      >
                    </div>
                  </div>
                  <span
                    class="font-label-code text-label-micro text-on-surface font-bold truncate"
                    >01 Topology</span
                  ><span
                    class="font-label-micro text-label-micro text-primary truncate"
                    >Active View</span
                  >
                </div>
                <div
                  class="flex flex-col text-left p-2 rounded-lg bg-surface-container-low border border-surface-variant hover:border-outline transition-all group cursor-pointer"
                >
                  <div
                    class="w-full h-16 rounded overflow-hidden bg-surface-container-lowest mb-1.5 relative"
                  >
                    <div
                      class="absolute inset-0 bg-tertiary/10 flex items-center justify-center group-hover:bg-tertiary/20 transition-colors"
                    >
                      <span
                        class="material-symbols-outlined text-tertiary text-[20px]"
                        >table_chart</span
                      >
                    </div>
                  </div>
                  <span
                    class="font-label-code text-label-micro text-on-surface font-bold truncate"
                    >02 Task Matrix</span
                  ><span
                    class="font-label-micro text-label-micro text-on-surface-variant truncate"
                    >Queue View</span
                  >
                </div>
                <div
                  class="flex flex-col text-left p-2 rounded-lg bg-surface-container-low border border-surface-variant hover:border-outline transition-all group cursor-pointer"
                >
                  <div
                    class="w-full h-16 rounded overflow-hidden bg-surface-container-lowest mb-1.5 relative"
                  >
                    <div
                      class="absolute inset-0 bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors"
                    >
                      <span
                        class="material-symbols-outlined text-secondary text-[20px]"
                        >monitoring</span
                      >
                    </div>
                  </div>
                  <span
                    class="font-label-code text-label-micro text-on-surface font-bold truncate"
                    >03 Analytics</span
                  ><span
                    class="font-label-micro text-label-micro text-on-surface-variant truncate"
                    >Telemetry</span
                  >
                </div>
                <div
                  class="flex flex-col text-left p-2 rounded-lg bg-surface-container-low border border-surface-variant hover:border-outline transition-all group cursor-pointer"
                >
                  <div
                    class="w-full h-16 rounded overflow-hidden bg-surface-container-lowest mb-1.5 relative"
                  >
                    <div
                      class="absolute inset-0 bg-primary-container/10 flex items-center justify-center group-hover:bg-primary-container/20 transition-colors"
                    >
                      <span
                        class="material-symbols-outlined text-primary text-[20px]"
                        >sync_saved_locally</span
                      >
                    </div>
                  </div>
                  <span
                    class="font-label-code text-label-micro text-on-surface font-bold truncate"
                    >04 Failover Log</span
                  ><span
                    class="font-label-micro text-label-micro text-on-surface-variant truncate"
                    >Audit Trail</span
                  >
                </div>
              </div>
            </div>
            <div class="bg-surface-container rounded-lg p-6 sm:p-8 space-y-6">
              <div class="flex items-center space-x-2">
                <span class="material-symbols-outlined text-primary text-[22px]"
                  >subject</span
                >
                <h2 class="text-headline-md font-headline-md text-on-surface">
                  Overview &amp; Implementation Details
                </h2>
              </div>
              <div
                class="space-y-4 text-body-md font-body-md text-on-surface-variant leading-relaxed"
              >
                <p class="">
                  The
                  <strong class="text-on-surface font-headline-sm"
                    >HyperScale Distributed Task Engine</strong
                  >
                  addresses critical throughput degradation in batch job
                  handling by substituting traditional centralized queue brokers
                  with a decentralized, partition-aware deterministic work
                  scheduler.
                </p>
                <p class="">
                  Developed around the Raft consensus algorithm, the system
                  features sub-millisecond lease handoffs and an in-memory
                  lock-free priority queue. Each compute worker processes state
                  transitions using vector clock synchronization, eliminating
                  race hazards across heterogeneous container runtimes while
                  maintaining zero data loss on unexpected node outages.
                </p>
              </div>
              <!-- Key Architectural Features List -->
            </div>
          </div>
          <!-- RIGHT COLUMN: 4 Columns (Sidebar Metadata & JSON Contract) -->
          <div class="lg:col-span-4 space-y-6">
            <!-- Technologies Stack Array Card -->
            <div class="bg-surface-container rounded-lg p-6 space-y-4">
              <div class="flex items-center justify-between pb-1">
                <div class="flex items-center space-x-2">
                  <span
                    class="material-symbols-outlined text-secondary text-[20px]"
                    >layers</span
                  >
                  <h3 class="text-headline-sm font-headline-sm text-on-surface">
                    Technologies
                  </h3>
                </div>
                <span class="font-label-micro text-label-micro text-outline"
                  >8 FRAMEWORKS</span
                >
              </div>
              <p class="text-body-sm font-body-sm text-on-surface-variant">
                Mapped from
                <code class="font-label-code text-label-code text-tertiary"
                  >string[] Technologies</code
                >:
              </p>
              <!-- Tech Pill Badges Grid -->
              <div class="flex flex-wrap gap-2 pt-1">
                <span
                  class="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface font-label-code text-label-code"
                >
                  <span
                    class="material-symbols-outlined text-primary text-[14px]"
                    >terminal</span
                  >
                  <span class="">C# 12</span>
                </span>
                <span
                  class="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface font-label-code text-label-code"
                >
                  <span
                    class="material-symbols-outlined text-tertiary text-[14px]"
                    >cloud</span
                  >
                  <span class="">ASP.NET Core</span>
                </span>
                <span
                  class="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface font-label-code text-label-code"
                >
                  <span
                    class="material-symbols-outlined text-secondary text-[14px]"
                    >code_blocks</span
                  >
                  <span class="">TypeScript</span>
                </span>
                <span
                  class="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface font-label-code text-label-code"
                >
                  <span
                    class="material-symbols-outlined text-on-surface text-[14px]"
                    >dataset</span
                  >
                  <span class="">Next.js</span>
                </span>
                <span
                  class="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface font-label-code text-label-code"
                >
                  <span
                    class="material-symbols-outlined text-tertiary text-[14px]"
                    >deployed_code</span
                  >
                  <span class="">Docker</span>
                </span>
                <span
                  class="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface font-label-code text-label-code"
                >
                  <span
                    class="material-symbols-outlined text-secondary text-[14px]"
                    >database</span
                  >
                  <span class="">PostgreSQL</span>
                </span>
                <span
                  class="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface font-label-code text-label-code"
                >
                  <span class="material-symbols-outlined text-error text-[14px]"
                    >memory</span
                  >
                  <span class="">Redis</span>
                </span>
                <span
                  class="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface font-label-code text-label-code"
                >
                  <span
                    class="material-symbols-outlined text-primary text-[14px]"
                    >css</span
                  >
                  <span class="">TailwindCSS</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    `);
}
