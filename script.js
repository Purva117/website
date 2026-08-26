/* =========================================================
   TERMINAL INTRO
   ========================================================= */

const terminal = document.getElementById("terminal-command");

const command = "whoami";

let index = 0;

function typeCommand() {
  if (index >= command.length) {
    return;
  }

  terminal.textContent += command[index];

  index++;

  setTimeout(typeCommand, 90);
}

setTimeout(typeCommand, 500);


/* =========================================================
   CURRENT YEAR
   ========================================================= */

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealElements = document.querySelectorAll(
  ".project, .stack-group, .currently, " +
  ".experience-item, .about-grid, .contact-terminal"
);

const revealObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (!entry.isIntersecting) {
        return;
      }

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";

      revealObserver.unobserve(entry.target);

    });

  },
  {
    threshold: 0.08
  }
);


revealElements.forEach((element) => {

  element.style.opacity = "0";

  element.style.transform =
    "translateY(16px)";

  element.style.transition =
    "opacity 0.6s ease, transform 0.6s ease";

  revealObserver.observe(element);

});


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const sections = document.querySelectorAll(
  "section[id]"
);

const navLinks = document.querySelectorAll(
  ".navbar nav a"
);


const sectionObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (!entry.isIntersecting) {
        return;
      }

      navLinks.forEach((link) => {

        link.style.color = "";

        if (
          link.getAttribute("href") ===
          `#${entry.target.id}`
        ) {
          link.style.color =
            "var(--green)";
        }

      });

    });

  },
  {
    rootMargin: "-35% 0px -55% 0px"
  }
);


sections.forEach((section) => {
  sectionObserver.observe(section);
});


/* =========================================================
   SMOOTH NAVIGATION FALLBACK
   ========================================================= */

document
  .querySelectorAll('a[href^="#"]')
  .forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId =
        link.getAttribute("href");

      const target =
        document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });


/* =========================================================
   KEYBOARD EASTER EGG
   Type "sudo" anywhere.
   ========================================================= */

let keyBuffer = "";

document.addEventListener(
  "keydown",
  (event) => {

    if (event.key.length !== 1) {
      return;
    }

    keyBuffer += event.key.toLowerCase();

    if (keyBuffer.length > 10) {
      keyBuffer =
        keyBuffer.slice(-10);
    }

    if (keyBuffer.endsWith("sudo")) {

      document.body.classList.toggle(
        "sudo-mode"
      );

      keyBuffer = "";

    }

  }
);


/* =========================================================
   SUDO MODE
   ========================================================= */

const sudoStyle =
  document.createElement("style");

sudoStyle.textContent = `

  body.sudo-mode {
    --green: #ff4d8d;
    --cyan: #ff9f43;
    --purple: #f472b6;
  }

  body.sudo-mode .logo::after {
    content: " [root]";
    color: var(--green);
    font-size: 10px;
  }

`;

document.head.appendChild(sudoStyle);
