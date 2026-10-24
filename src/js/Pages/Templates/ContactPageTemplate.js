import { Icon } from "../../Components/Icon.js";

export function ContactPageHTML() {
  return `
    <div class="max-w-[1200px] mx-auto px-margin-mobile sm:px-margin py-space-xl">
      <section class="grid grid-cols-1 lg:grid-cols-2 gap-space-xl items-start">
        <div class="flex flex-col gap-space-md">
          <div class="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container border border-outline-variant/40 w-fit">
            <span class="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
            <span class="font-label-sm text-label-sm uppercase tracking-widest text-tertiary">available for work</span>
          </div>
          <div class="max-w-2xl">
            <h1 class="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-surface">
              Let's build something <span class="text-primary">exceptional.</span>
            </h1>
            <p class="font-body-lg text-body-lg text-on-surface-variant mt-space-md">
              Have an idea, a technical challenge, or an opportunity to discuss?
              Send a message and let’s turn it into a reliable digital solution.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-space-md mt-space-md">
            <a class="group flex items-start gap-space-sm p-space-md rounded-xl bg-surface-container border border-outline-variant/30 hover:border-primary/60 transition-colors" href="mailto:mjaradat702@gmail.com">
              ${Icon("mail", "text-primary")}
              <span class="flex flex-col gap-space-xs">
                <span class="font-label-sm text-label-sm uppercase tracking-widest text-outline">Email</span>
                <span class="font-body-sm text-body-sm text-on-surface group-hover:text-primary transition-colors">mjaradat702@gmail.com</span>
              </span>
            </a>
            <a class="group flex items-start gap-space-sm p-space-md rounded-xl bg-surface-container border border-outline-variant/30 hover:border-primary/60 transition-colors" href="https://www.linkedin.com/in/moe-q-jaradat" target="_blank" rel="noreferrer">
              ${Icon("work", "text-primary")}
              <span class="flex flex-col gap-space-xs">
                <span class="font-label-sm text-label-sm uppercase tracking-widest text-outline">LinkedIn</span>
                <span class="font-body-sm text-body-sm text-on-surface group-hover:text-primary transition-colors">Connect professionally</span>
              </span>
            </a>
          </div>

          <div class="flex items-center gap-space-sm pt-space-sm text-on-surface-variant">
            ${Icon("schedule", "text-tertiary")}
            <span class="font-body-sm text-body-sm">Usually responds within 1-2 business days.</span>
          </div>
        </div>

        <form id="contactForm" class="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-space-lg md:p-space-xl flex flex-col gap-space-md">
          <div>
            <h2 class="font-headline-md text-headline-md text-on-surface">Start the conversation</h2>
            <p class="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">Tell me a little about what you're working on.</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
            <label class="flex flex-col gap-space-xs">
              <span class="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Name</span>
              <input class="h-10 px-space-sm bg-surface-container-lowest border border-outline-variant/40 rounded text-on-surface placeholder:text-outline/70 font-body-sm text-body-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" name="name" placeholder="Your name" required type="text" />
            </label>
            <label class="flex flex-col gap-space-xs">
              <span class="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Email</span>
              <input class="h-10 px-space-sm bg-surface-container-lowest border border-outline-variant/40 rounded text-on-surface placeholder:text-outline/70 font-body-sm text-body-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" name="email" placeholder="you@example.com" required type="email" />
            </label>
          </div>

          <label class="flex flex-col gap-space-xs">
            <span class="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Subject</span>
            <input class="h-10 px-space-sm bg-surface-container-lowest border border-outline-variant/40 rounded text-on-surface placeholder:text-outline/70 font-body-sm text-body-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" name="subject" placeholder="How can I help?" required type="text" />
          </label>

          <label class="flex flex-col gap-space-xs">
            <span class="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Message</span>
            <textarea class="min-h-32 p-space-sm bg-surface-container-lowest border border-outline-variant/40 rounded text-on-surface placeholder:text-outline/70 font-body-sm text-body-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-y" name="message" placeholder="Share the details of your project or idea..." required></textarea>
          </label>

          <button class="w-full inline-flex items-center justify-center gap-space-xs px-space-md py-space-sm rounded-lg bg-primary hover:bg-primary-fixed-dim text-on-primary font-label-md text-label-md transition-all active:scale-[0.98]" type="submit">
            ${Icon("send", "text-[18px]")}
            Send message
          </button>
          <p aria-live="polite" class="hidden font-body-sm text-body-sm text-tertiary" id="contactFormStatus"></p>
        </form>
      </section>
    </div>
  `;
}
