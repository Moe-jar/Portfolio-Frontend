import { Icon } from "./Icon.js";

export function Header() {
  return ` <header class="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30">
  <div class="h-16 max-w-[1200px] mx-auto px-margin-mobile sm:px-margin flex items-center justify-between">
    <div class="flex items-center gap-space-md">
      <!-- High-Tech Hexagonal Circuit 'M' Logo SVG -->
      <svg class="h-9 w-9 text-primary shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Outer Hexagon / Frame -->
        <path d="M14 5H26L33 15V25L26 35H14L7 25V15L14 5Z" class="fill-surface-container-high stroke-primary/60" stroke-width="1.5" stroke-linejoin="round"/>
        <!-- Circuit Connection Dots -->
        <circle cx="20" cy="5" r="2" class="fill-primary"/>
        <circle cx="33" cy="20" r="2" class="fill-primary"/>
        <circle cx="20" cy="35" r="2" class="fill-primary"/>
        <circle cx="7" cy="20" r="2" class="fill-primary"/>
        <!-- Inner Traces / 'M' Monogram -->
        <path d="M12 26V14L20 20L28 14V26" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <span class="font-label-md text-label-md text-on-surface tracking-wider uppercase font-semibold">
        MOE<span class="text-primary">.io</span>
      </span>
    </div>
    <nav
      class="flex items-center gap-space-sm sm:gap-space-lg"
      data-active-classes="text-primary border-b-2 border-primary pb-[2px] font-semibold"
    >
      <a
        class="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors"
        data-path="home"
        href="#/home"
      >
        Home
      </a>
      <a
        aria-current="page"
        class="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors"
        data-path="projects"
        href="#/projects"
      >
        Projects
      </a>
      
      <a
        class="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors"
        data-path="contact"
        href="#/contact"
      >
        Contact
      </a>
    </nav>
    <div class="flex items-center gap-space-md">
      <a
        class="hidden sm:inline-flex items-center justify-center px-space-md py-space-xs rounded-lg bg-primary hover:bg-primary-fixed-dim text-on-primary font-label-md text-label-md transition-all active:scale-[0.98]"
        data-path="contact"
        href="#/contact"
      >
        Hire Me / Get in Touch
      </a>
      <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
        <span class="text-on-primary text-[18px]">${Icon("work")}</span>
      </div>
    </div>
  </div>
</header>`;
}
