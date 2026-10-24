import { Icon } from "../../Components/Icon.js";

export function HomePageHTML() {
  return `
  <!-- Hero Section -->
  <section class="max-w-7xl mx-auto px-margin-mobile sm:px-gutter py-space-xl flex flex-col md:flex-row items-center gap-space-lg relative">
    <div class="absolute inset-0 bg-primary/5 blur-[120px] rounded-full w-full h-full -z-10 pointer-events-none"></div>
    <div class="w-full min-w-0 flex-1 space-y-space-md text-center md:text-left">
      <h1 class="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-primary">Mohammed Jaradat</h1>
      <h2 class="font-headline-lg text-headline-lg text-on-surface-variant">
        Full Stack Developer <span class="text-primary-container">&bull;</span> Amman
      </h2>
      <p class="font-body-lg text-body-lg text-on-surface max-w-2xl mx-auto md:mx-0">
        Building robust, scalable backend systems and elegant front-end experiences. Precision engineering meets modern design aesthetics to deliver high-value digital solutions.
      </p>
      <div class="flex flex-wrap items-center justify-center md:justify-start gap-space-sm md:gap-space-md pt-space-sm">
        <a class="flex items-center gap-2 bg-surface-container-high border border-outline-variant/50 px-4 py-2 rounded-xl hover:border-primary-container transition-colors duration-200 glow-hover text-on-surface" href="https://github.com/Moe-jar">
          ${Icon("code")}
          <span class="font-label-md text-label-md">GitHub</span>
        </a>
        <a class="flex items-center gap-2 bg-surface-container-high border border-outline-variant/50 px-4 py-2 rounded-xl hover:border-primary-container transition-colors duration-200 glow-hover text-on-surface" href="https://www.linkedin.com/in/moe-q-jaradat">
          ${Icon("work")}
          <span class="font-label-md text-label-md">LinkedIn</span>
        </a>
        <a class="flex items-center gap-2 bg-primary-container text-on-primary-container px-4 py-2 rounded-xl hover:opacity-90 transition-opacity duration-200" href="src/assets/cv.pdf">
          ${Icon("download")}
          <span class="font-label-md text-label-md">Resume</span>
        </a>
        <a class="flex items-center gap-2 bg-primary-container text-on-primary-container px-4 py-2 rounded-xl hover:opacity-90 transition-opacity duration-200" href="#/projects">
          ${Icon("folder")}
          <span class="font-label-md text-label-md">My Projects</span>
        </a>
      </div>
    </div>
    <div class="w-full min-w-0 flex-1 flex justify-center md:justify-end relative group">
      <div class="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-surface-container-high relative z-10 transition-transform duration-500 group-hover:scale-105">
        <img alt="Mohammed Jaradat Portrait" fetchpriority="high" decoding="async" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://res.cloudinary.com/zkyjhwrd/image/upload/f_auto,q_auto,w_768/v1791749111/7f3eac70-cc9a-44d4-a34e-14504104cd71.png"/>
      </div>
      <div class="absolute inset-0 bg-primary-container/20 blur-3xl rounded-full scale-110 -z-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  </section>

  <!-- Skills Section -->
  <section class="max-w-7xl mx-auto px-margin-mobile sm:px-gutter py-space-xl" id="about">
    <h3 class="font-headline-md text-headline-md text-primary mb-space-lg flex items-center gap-2">
      ${Icon("terminal")} Technical Arsenal
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-space-md">
      <!-- Backend -->
      <div class="bg-surface-container rounded-2xl md:rounded-full p-space-md border border-outline-variant/30 glow-hover transition-all duration-300">
        <div class="flex items-center gap-2 mb-space-sm text-primary-container">
          ${Icon("database")}
          <h4 class="font-label-sm text-label-sm uppercase tracking-widest">Backend Systems</h4>
        </div>
        <div class="flex flex-wrap gap-2 mt-space-sm">
          <span class="bg-primary-fixed/10 text-primary px-3 py-1 rounded-full font-label-md text-label-md border border-primary/20">.NET</span>
          <span class="bg-primary-fixed/10 text-primary px-3 py-1 rounded-full font-label-md text-label-md border border-primary/20">C#</span>
          <span class="bg-primary-fixed/10 text-primary px-3 py-1 rounded-full font-label-md text-label-md border border-primary/20">Sql Server</span>
        </div>
      </div>
      <!-- Frontend -->
      <div class="bg-surface-container rounded-2xl md:rounded-full p-space-md border border-outline-variant/30 glow-hover transition-all duration-300">
        <div class="flex items-center gap-2 mb-space-sm text-secondary">
          ${Icon("web")}
          <h4 class="font-label-sm text-label-sm uppercase tracking-widest">Frontend Development</h4>
        </div>
        <div class="flex flex-wrap gap-2 mt-space-sm">
        <span class="bg-secondary-fixed/10 text-secondary px-3 py-1 rounded-full font-label-md text-label-md border border-secondary/20">Angular</span>
          <span class="bg-secondary-fixed/10 text-secondary px-3 py-1 rounded-full font-label-md text-label-md border border-secondary/20">React</span>
          <span class="bg-secondary-fixed/10 text-secondary px-3 py-1 rounded-full font-label-md text-label-md border border-secondary/20">TypeScript</span>
          <span class="bg-secondary-fixed/10 text-secondary px-3 py-1 rounded-full font-label-md text-label-md border border-secondary/20">Tailwind CSS</span>
          <span class="bg-secondary-fixed/10 text-secondary px-3 py-1 rounded-full font-label-md text-label-md border border-secondary/20">Vanilla JS</span>
        </div>
      </div>
      <!-- Infrastructure -->
      <div class="bg-surface-container rounded-2xl md:rounded-full p-space-md border border-outline-variant/30 glow-hover transition-all duration-300">
        <div class="flex items-center gap-2 mb-space-sm text-tertiary">
          ${Icon("cloud")}
          <h4 class="font-label-sm text-label-sm uppercase tracking-widest">Infrastructure</h4>
        </div>
        <div class="flex flex-wrap gap-2 mt-space-sm">
          <span class="bg-tertiary-fixed/10 text-tertiary px-3 py-1 rounded-full font-label-md text-label-md border border-tertiary/20">Docker</span>
          <span class="bg-tertiary-fixed/10 text-tertiary px-3 py-1 rounded-full font-label-md text-label-md border border-tertiary/20">CI/CD</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Featured Projects -->
  <section class="max-w-7xl mx-auto px-margin-mobile sm:px-gutter py-space-xl" id="projects">
    <h3 class="font-headline-md text-headline-md text-primary mb-space-lg flex items-center gap-2">
      ${Icon("folder_special")} Featured Projects
    </h3>
    <div class="flex flex-col gap-space-lg">
      <!-- Project Card 1 -->
      <div class="group relative overflow-hidden rounded-2xl md:rounded-full bg-surface-container border border-outline-variant/30 glow-hover transition-all duration-300 flex flex-col md:flex-row h-auto md:h-80">
        <div class="md:w-1/2 h-48 md:h-full overflow-hidden">
          <img alt="Data Visualization Dashboard" loading="lazy" decoding="async" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8BoYnkMIxZSdK0u-45SRQYpOHk_b77TaY_Kh_48leMl-SDVZDJz4viD02jSvt3F9jDpP4wHOmff0HNpwWg3TJSpHJg48H11e_KzVpEpk1fpo1iTV4MGdSUunbEHWTw6q0HdjFCrZZVsy6CoqkWS1zMwJlEjCCWZG90Sx3OFYIJBSxtzD6IIKg7Sytu1NxJJEXL6XLQNXojcJuPTMQqClTJJMVOvgCV6GzZMLM6XdNeIwVfY_HRhTkezNdQy6tdswFcDirYmw2JA"/>
        </div>
        <div class="md:w-1/2 p-space-lg flex flex-col justify-center">
          <h4 class="font-headline-lg text-headline-lg text-on-surface mb-space-sm group-hover:text-primary-container transition-colors">Nexus Analytics</h4>
          <p class="font-body-md text-body-md text-on-surface-variant mb-space-md">
            A high-performance real-time data processing pipeline handling 1M+ events per minute, coupled with a highly responsive React-based visualization dashboard.
          </p>
          <div class="flex flex-wrap gap-2 mt-auto">
            <span class="font-label-md text-label-md text-primary-container border border-primary-container/30 px-2 py-1 rounded">Go</span>
            <span class="font-label-md text-label-md text-primary-container border border-primary-container/30 px-2 py-1 rounded">Kafka</span>
            <span class="font-label-md text-label-md text-primary-container border border-primary-container/30 px-2 py-1 rounded">React</span>
          </div>
        </div>
      </div>
      <!-- Project Card 2 -->
      <div class="group relative overflow-hidden rounded-2xl md:rounded-full bg-surface-container border border-outline-variant/30 glow-hover transition-all duration-300 flex flex-col md:flex-row-reverse h-auto md:h-80">
        <div class="md:w-1/2 h-48 md:h-full overflow-hidden">
          <img alt="Code Editor Interface" loading="lazy" decoding="async" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP2NV_PbRFDMqqH30SJ0trzG2VKVhzegk8q-mjRmgK358nw0gLQkz28YUToxaMNfcMBJOIeq3GUiIZxstyUONwH5Xfdf4xFWF9KE-vk97eqLJta99MrQfr42iyL8-jWoBQfRkSg3RLrbFAUPTt3sMYpFHt33G8__z9pPXgusSYwA-QGyPFWYURBfAI9UBfVnle56TChnx0BMMipeq7r1Uv-s9rper5xHP5edMiMdxnGxRvmML2iyGT2PoaGx7JbKf4ZfXn3_MO-A"/>
        </div>
        <div class="md:w-1/2 p-space-lg flex flex-col justify-center">
          <h4 class="font-headline-lg text-headline-lg text-on-surface mb-space-sm group-hover:text-primary-container transition-colors">Aether Gateway</h4>
          <p class="font-body-md text-body-md text-on-surface-variant mb-space-md">
            A resilient API gateway architecture designed for microservices, featuring custom rate-limiting, distributed tracing, and automated service discovery.
          </p>
          <div class="flex flex-wrap gap-2 mt-auto">
            <span class="font-label-md text-label-md text-primary-container border border-primary-container/30 px-2 py-1 rounded">Python</span>
            <span class="font-label-md text-label-md text-primary-container border border-primary-container/30 px-2 py-1 rounded">FastAPI</span>
            <span class="font-label-md text-label-md text-primary-container border border-primary-container/30 px-2 py-1 rounded">Docker</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section class="max-w-7xl mx-auto px-margin-mobile sm:px-gutter py-space-xl border-t border-outline-variant/10" id="contact">
    <div class="bg-surface-container-high rounded-2xl p-space-lg md:p-[64px] text-center max-w-3xl mx-auto relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
      <h3 class="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-lg md:text-headline-lg text-primary mb-space-sm relative z-10">
        Ready to build something exceptional?
      </h3>
      <p class="font-body-md text-body-md text-on-surface-variant mb-space-lg relative z-10">
        Currently accepting inquiries for high-impact engineering roles and specialized consulting engagements.
      </p>
      <div class="flex justify-center relative z-10">
        <a class="inline-flex items-center gap-2 bg-primary-container text-on-primary-container px-8 py-4 rounded-xl font-label-md text-label-md hover:scale-105 transition-transform duration-200 shadow-lg shadow-primary-container/20" href="#/contact">
          ${Icon("send")}
          Start the Conversation
        </a>
      </div>
    </div>
  </section>
  `;
}
