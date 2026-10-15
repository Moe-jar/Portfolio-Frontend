import { ContactPageHTML } from "./Templates/ContactPageTemplate.js";

export function contactPage(mainContainer) {
  mainContainer.innerHTML = ContactPageHTML();

  const form = mainContainer.querySelector("#contactForm");
  const status = mainContainer.querySelector("#contactFormStatus");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    window.location.href = `mailto:contact@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    status.textContent = "Your email client is opening with the message ready to send.";
    status.classList.remove("hidden");
  });
}
