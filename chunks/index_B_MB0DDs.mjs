import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, e as renderSlot, F as Fragment, b as addAttribute } from './astro/server_KmjNErg0.mjs';
import 'kleur/colors';
import 'html-escaper';
import { B as Button, c as cn, $ as $$BaseLayout } from './BaseLayout_BEiV8GGL.mjs';
import { C as Card } from './card_GaVpo9-7.mjs';
import { SquareArrowOutUpRight, Github, Linkedin, Mail, File } from 'lucide-react';
import { L as LINKS, E as EXPERIENCE, S as STUDIES } from './constants_iwfGSVFM.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import 'clsx';
import { cva } from 'class-variance-authority';

const $$Astro$3 = createAstro("https://patriciovacaescobar.github.io");
const $$ContentCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ContentCard;
  const { title, body } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${title && renderTemplate`${maybeRenderHead()}<h2 class="z-20 m-0 text-xl font-bold">${title}</h2>`}${body && renderTemplate`<p class="m-0 text-base font-light">${body}</p>`}${renderSlot($$result2, $$slots["default"])}` })}`;
}, "/Users/pcorsario/Sites/patriciovacaescobar/src/components/ContentCard.astro", void 0);

const $$Astro$2 = createAstro("https://patriciovacaescobar.github.io");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Card;
  const { title, body, colSpan, rowSpan, href, colorText } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "ShadcnCard", Card, { "className": `card-animate transfor-y-[-40%] align-start perspective-1200 group group relative col-span-1 h-auto w-full flex-none transform justify-start overflow-hidden p-6 shadow-lg transition duration-75 ease-in-out ${colSpan || "md:col-span-2"} ${rowSpan || ""} ${href ? "cursor-pointer hover:border-primary" : ""}` }, { "default": ($$result2) => renderTemplate`${href ? renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`block h-full w-full ${colorText || " "}`, "class")}> ${renderComponent($$result2, "SquareArrowOutUpRight", SquareArrowOutUpRight, { "className": "group-hover:text-primary position absolute right-6 ", "size": 20 })} ${renderComponent($$result2, "ContentCard", $$ContentCard, { "title": title, "body": body }, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["default"])} ` })} </a>` : renderTemplate`${renderComponent($$result2, "ContentCard", $$ContentCard, { "title": title, "body": body }, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["default"])} ` })}`}` })}`;
}, "/Users/pcorsario/Sites/patriciovacaescobar/src/components/Card.astro", void 0);

const $$IntroCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "colSpan": "md:col-span-3", "rowSpan": "md:row-span-4" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex h-full w-full"> <div class="flex flex-col justify-between gap-4 md:max-h-[300px]"> <div class="flex h-full flex-col"> <h6 class="m-0 text-sm font-light text-gray-500">welcome</h6> <p class="m-0 text-xl font-light">
Hi, I'm <b class="font-bold">Patricio Vaca Escobar</b>, a software
          developer, systems engineer and tattoo artist with strong focus on the
          user experience, animations and micro interactions. I love to create
          beautiful and functional interfaces, I am passionate about technology
          and I am always looking for new challenges.
</p> </div> <div class="flex gap-4"> <a${addAttribute(LINKS.github, "href")} aria-label="github profile" target="_blank"> ${renderComponent($$result2, "Button", Button, { "aria-label": "github profile" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Github", Github, {})} <span class="sr-only">GitHub Profile</span> ` })} </a> <a${addAttribute(LINKS.linkedin, "href")} aria-label="linkeding profile" target="_blank"> ${renderComponent($$result2, "Button", Button, { "aria-label": "linkedin profile" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Linkedin", Linkedin, {})} <span class="sr-only">Linkedin Profile</span> ` })} </a> <a${addAttribute(LINKS.mail, "href")} aria-label="mail profile" target="_blank"> ${renderComponent($$result2, "Button", Button, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Mail", Mail, {})} <span class="sr-only">Email contact</span> ` })} </a> </div> </div> <img width="300" height="300" src="/me.png" class="pointer-events-none absolute bottom-[-20px] right-[-110px] z-[-1] max-h-[300px] w-auto select-none opacity-50 md:relative md:bottom-auto md:right-auto md:z-auto md:opacity-100" alt="memoji of andres plaza"> </div> ` })}`;
}, "/Users/pcorsario/Sites/patriciovacaescobar/src/components/sections/IntroCard.astro", void 0);

const $$Astro$1 = createAstro("https://patriciovacaescobar.github.io");
const $$AboutMe = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AboutMe;
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "colSpan": "md:col-span-1", "rowSpan": "md:row-span-6", "title": "About me" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-2"> <p class="text-sm font-light">
Hi, I'm Patricio, a fullstack software developer from Ecuador 🇪🇨.
<br> <br>
My primary tools of choice includes:
</p><ul class="list-inside list-disc"> <li>JavaScript</li> <li>React</li> <li>Astro</li> <li>Python</li> <li>Php</li> <li>Mongo</li> <li>SQL</li> <li>Nodejs</li> </ul>  <p class="text-sm font-light">
Beyond coding, I'm passionate about soccer and traveling. An
      unusual hobby of mine is play classical music in the guitar or ukulele.
</p> </div> ` })}`;
}, "/Users/pcorsario/Sites/patriciovacaescobar/src/components/sections/AboutMe.astro", void 0);

const Timezone = ({ timezone }) => {
  const [dateTime, setDateTime] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment().tz(timezone);
      setDateTime(now.format("dddd, DD MMMM YYYY [a] h:mm:ss A"));
    }, 1e3);
    return () => clearInterval(interval);
  }, [timezone]);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("p", { children: dateTime }),
    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "🇪🇨 Santo Domingo, Ecuador 🇪🇨" })
  ] });
};

const $$TimeZoneCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "colSpan": "lg:col-span-2", "rowSpan": "md:row-span-2", "title": "Time zone" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TimeZoneV2", Timezone, { "timezone": "America/Bogota", "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/pcorsario/Sites/patriciovacaescobar/src/components/sections/TimeZoneCardV2", "client:component-export": "default" })} ` })}`;
}, "/Users/pcorsario/Sites/patriciovacaescobar/src/components/sections/TimeZoneCard.astro", void 0);

const $$ContactsCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "colSpan": "md:col-span-1", "rowSpan": "md:row-span-4" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="h-full"> <header class="flex items-center"> <h1 class="text-xl font-bold text-foreground">
Let's start working together!
</h1> </header> <address class="mt-4 flex flex-col"> <h2 class="text-gray-500">Contact Details</h2> <p>patriciovacaescobar@gmail.com</p> <p>🇪🇨 Santo Domingo, Ecuador 🇪🇨</p> </address> <div class="mt-4 flex w-fit flex-col"> <h2 class="text-gray-500">Socials</h2> <ul> <li> <a${addAttribute(LINKS.linkedin, "href")} target="_blank">Linkedin</a> </li> <li> <a${addAttribute(LINKS.github, "href")} target="_blank">Github</a> </li> <li> <a${addAttribute(LINKS.instagram, "href")} target="_blank">Instagram</a> </li> </ul> </div> </div> ` })}`;
}, "/Users/pcorsario/Sites/patriciovacaescobar/src/components/sections/ContactsCard.astro", void 0);

const $$Pulse = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span class="relative flex h-3 w-3"> <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span> <span class="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span> </span>`;
}, "/Users/pcorsario/Sites/patriciovacaescobar/src/components/Pulse.astro", void 0);

const $$Now = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "colSpan": "md:col-span-1", "rowSpan": "md:row-span-2" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-2 flex w-full items-start justify-between"> <div class="flex flex-col"> <h2>Now</h2> <a href="https://sive.rs/nowff" target="_blank"> <span class="cursor-pointer text-xs text-gray-500">what's that ?</span> </a> </div> ${renderComponent($$result2, "Pulse", $$Pulse, {})} </div> <p class="text-xs">Currently working as a teacher</p> ` })}`;
}, "/Users/pcorsario/Sites/patriciovacaescobar/src/components/sections/Now.astro", void 0);

const $$CVCard = createComponent(($$result, $$props, $$slots) => {
  const PDF = "/CV English.pdf";
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "colSpan": "md:col-span-1", "rowSpan": "md:row-span-4", "title": "CV" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-4 flex w-full justify-center"> <div class="card card-compact md:w-112 lg:w-128 w-96 gap-2 border-[oklch(var(--p))] transition-all"> <figure> <object${addAttribute(PDF, "data")} type="application/pdf" width="100%"></object> </figure> <div class="mt-4 flex flex-col gap-2"> <p class="text-sm text-muted-foreground">
View and download my resume by clicking on the button below
</p> <div class="card-actions mt-2 flex w-full items-center justify-center"> <a target="_blank"${addAttribute(PDF, "href")}> ${renderComponent($$result2, "Button", Button, {}, { "default": ($$result3) => renderTemplate`
Download resume
${renderComponent($$result3, "File", File, {})} ` })} </a> </div> </div> </div> </div> ` })}`;
}, "/Users/pcorsario/Sites/patriciovacaescobar/src/components/sections/CVCard.astro", void 0);

const $$ExperienceCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "colSpan": "md:col-span-1", "rowSpan": "md:row-span-2", "title": "Experience" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-2 space-y-4"> ${EXPERIENCE.slice(0, 3).map((exp) => renderTemplate`<div> <h3 class="text-lg font-semibold">${exp.position}</h3> <a class="text-sm text-primary"${addAttribute(exp?.link ?? "", "href")}> ${exp.company} </a> <p class="text-sm text-gray-600"> ${exp.start} - ${exp.end} </p> </div>`)} <a href="/work"> ${renderComponent($$result2, "Button", Button, { "variant": "link", "className": "pl-0" }, { "default": ($$result3) => renderTemplate` View More ` })} </a> </div> ` })}`;
}, "/Users/pcorsario/Sites/patriciovacaescobar/src/components/sections/ExperienceCard.astro", void 0);

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}

const $$StudyCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "colSpan": "md:col-span-1", "rowSpan": "md:row-span-1", "title": "Study" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-2 flex w-full flex-wrap items-center justify-center gap-2"> ${STUDIES.map((study) => renderTemplate`<a${addAttribute(study.link, "href")} target="__blank"> ${renderComponent($$result2, "Badge", Badge, { "variant": "outline" }, { "default": ($$result3) => renderTemplate`${study.institution}` })} </a>`)} </div> ` })}`;
}, "/Users/pcorsario/Sites/patriciovacaescobar/src/components/sections/StudyCard.astro", void 0);

const $$Astro = createAstro("https://patriciovacaescobar.github.io");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate` ${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Patricio Vaca Escobar - Full Stack Developer", "description": "Patricio Vaca Escobar - Full Stack Developer - Portfolio, Projects, CV, About Me, Contact, Timezone, Now, Experience, Tattoo, Study" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<main class="relative m-auto grid w-full max-w-6xl gap-2 overflow-hidden p-2 sm:gap-2 sm:p-4 md:grid-cols-2 md:gap-3 md:p-6 lg:grid-cols-4 lg:grid-rows-8 lg:gap-4"> ${renderComponent($$result2, "IntroCard", $$IntroCard, {})} ${renderComponent($$result2, "AboutMe", $$AboutMe, {})} ${renderComponent($$result2, "CVCard", $$CVCard, {})} ${renderComponent($$result2, "Now", $$Now, {})} ${renderComponent($$result2, "Card", $$Card, { "colSpan": "md:col-span-1", "rowSpan": "md:row-span-2", "title": "Portfolio & Projects", "href": "/portfolio" })} ${renderComponent($$result2, "TimeZoneCard", $$TimeZoneCard, {})} ${renderComponent($$result2, "ContactsCard", $$ContactsCard, {})} ${renderComponent($$result2, "ExperienceCard", $$ExperienceCard, {})} ${renderComponent($$result2, "Card", $$Card, { "colSpan": "md:col-span-1", "rowSpan": "md:row-span-1" }, { "default": ($$result3) => renderTemplate` <div class="flex h-full flex-col justify-between"> <blockquote class="mt-6 border-l-2 pl-6 italic">
“Anything one man can imagine, other men can make real.”
</blockquote> <p class="mt-2 text-xs">- Jules Verne</p> </div> ` })} <!-- <TattooCard /> --> ${renderComponent($$result2, "StudyCard", $$StudyCard, {})} <!-- <Card colSpan="md:col-span-1" rowSpan="md:row-span-1">
      <p class="text-xs">
        © 2023 · Crafted with ♥️ using <a
          href="https://astro.build/"
          target="_blank"
          class="text-red-500">Astro</a
        > by Gianmarco.
      </p>
    </Card> --> </main> `, "loader": ($$result2) => renderTemplate`<div class="loader bg-darkslate-700 fixed bottom-0 left-0 right-0 top-0 z-50 flex h-screen w-screen items-center justify-center text-3xl font-black uppercase text-neutral-50"></div>` })}`;
}, "/Users/pcorsario/Sites/patriciovacaescobar/src/pages/index.astro", void 0);

const $$file = "/Users/pcorsario/Sites/patriciovacaescobar/src/pages/index.astro";
const $$url = "/mi-repo";

export { $$Index as default, $$file as file, $$url as url };
