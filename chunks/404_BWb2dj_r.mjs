import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from './astro/server_KmjNErg0.mjs';
import 'kleur/colors';
import 'html-escaper';
import { b as buttonVariants, $ as $$BaseLayout } from './BaseLayout_BEiV8GGL.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "404 - Not Found", "description": "404 Error \u2014 this page was not found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex h-[80vh] flex-auto"> <div class="flex flex-col items-center justify-center px-8"> <img src="/me_hello.png" alt="404" class="mb-8 size-64"> <p class="text-sm text-muted-foreground">404</p> <h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl">
Page not found
</h1> <p class="mb-4 leading-7 [&:not(:first-child)]:mt-6">
Sorry, we couldn't find the page you're looking for.
</p> <a href="/" rel="noreferrer"${addAttribute(buttonVariants(), "class")}> Go back home</a> </div> </main> ` })}`;
}, "/Users/pcorsario/Sites/patriciovacaescobar/src/pages/404.astro", void 0);

const $$file = "/Users/pcorsario/Sites/patriciovacaescobar/src/pages/404.astro";
const $$url = "/mi-repo/404";

export { $$404 as default, $$file as file, $$url as url };
