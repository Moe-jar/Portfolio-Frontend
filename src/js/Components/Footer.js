export function Footer() {
  return ` <footer
      class="w-full bg-surface-container-low border-t border-outline-variant/30"
    >
      <div class="max-w-[1200px] mx-auto px-margin-mobile sm:px-margin py-space-xl">
        <div
          class="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg pb-space-lg border-b border-outline-variant/20"
        >
          <div class="flex flex-col gap-space-xs">
            <div class="flex items-center gap-space-sm">
              <span
                class="font-label-md text-label-md text-on-surface tracking-wider uppercase font-semibold"
                >MOE<span class="text-primary">.io</span></span
              ><span
                class="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-surface-container border border-outline-variant/40 text-on-surface-variant"
                >v1.0.0</span
              >
            </div>
            <p class="font-body-sm text-body-sm text-on-surface-variant">
              Engineering-grade web applications and high-performance digital
              architectures.
            </p>
          </div>
          
        </div>
        <div
          class="flex flex-col sm:flex-row items-center justify-between pt-space-lg gap-space-md"
        >
          <div class="flex items-center gap-space-lg">
            <a
              class="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors"
              data-path="home"
              href="#/home"
              >Home</a
            ><a
              class="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors"
              data-path="projects"
              href="#/projects"
              >Projects</a
            ><a
              class="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors"
              data-path="contact"
              href="#/contact"
              >Contact</a
            >
          </div>
          <p class="font-label-sm text-label-sm text-on-surface-variant">
            © ${new Date().getFullYear()} MOE.IO. Engineered with discipline. All rights reserved.
          </p>
        </div>
      </div>
    </footer>`;
}
