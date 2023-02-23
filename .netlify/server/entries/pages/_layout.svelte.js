import { c as create_ssr_component, v as validate_component, e as each, a as add_attribute, b as escape } from "../../chunks/index2.js";
import { w as writable } from "../../chunks/index.js";
const app = "";
const mobileMenuActive = writable(false);
const MenuClose = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"absolute top-0 right-0 -mr-12 pt-2"}"><button type="${"button"}" class="${"ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"}"><span class="${"sr-only"}">Close sidebar</span>
        <svg class="${"h-6 w-6 text-white"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M6 18L18 6M6 6l12 12"}"></path></svg></button></div>`;
});
const Menu_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".hide.svelte-4kzueq{display:none}",
  map: null
};
const Menu$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let menuOn = false;
  mobileMenuActive.subscribe((value) => {
    menuOn = value;
  });
  $$result.css.add(css$1);
  return `<div class="${["relative z-40 md:hidden svelte-4kzueq", !menuOn ? "hide" : ""].join(" ").trim()}" role="${"dialog"}" aria-modal="${"true"}"><div class="${"fixed inset-0 bg-gray-600 bg-opacity-75"}"></div>

    <div class="${"fixed inset-0 z-40 flex"}"><div class="${"relative flex w-full max-w-xs flex-1 flex-col bg-gray-800 pt-5 pb-4"}">${validate_component(MenuClose, "MenuClose").$$render($$result, {}, {}, {})}

        <div class="${"flex flex-shrink-0 items-center px-4"}"><img class="${"h-8 w-auto"}" src="${"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"}" alt="${"Your Company"}"></div>
        <div class="${"mt-5 h-0 flex-1 overflow-y-auto"}"><nav class="${"space-y-1 px-2"}"><a href="${"/"}" class="${"bg-gray-900 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"}"><svg class="${"text-gray-300 mr-4 flex-shrink-0 h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"}"></path></svg>
              Dashboard
            </a>

            <a href="${"#"}" class="${"text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"}"><svg class="${"text-gray-400 group-hover:text-gray-300 mr-4 flex-shrink-0 h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"}"></path></svg>
              Team
            </a>
            
            <a href="${"#"}" class="${"text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"}"><svg class="${"text-gray-400 group-hover:text-gray-300 mr-4 flex-shrink-0 h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"}"></path></svg>
              Projects
            </a>

            <a href="${"#"}" class="${"text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"}"><svg class="${"text-gray-400 group-hover:text-gray-300 mr-4 flex-shrink-0 h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"}"></path></svg>
              Calendar
            </a>

            <a href="${"#"}" class="${"text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"}"><svg class="${"text-gray-400 group-hover:text-gray-300 mr-4 flex-shrink-0 h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"}"></path></svg>
              Documents
            </a>

            <a href="${"#"}" class="${"text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"}"><svg class="${"text-gray-400 group-hover:text-gray-300 mr-4 flex-shrink-0 h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"}"></path></svg>
              Reports
            </a></nav></div></div>

      <div class="${"w-14 flex-shrink-0"}" aria-hidden="${"true"}"></div></div>
  </div>`;
});
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col"}"><div class="${"flex min-h-0 flex-1 flex-col bg-gray-800"}"><div class="${"flex h-16 flex-shrink-0 items-center bg-gray-900 px-4"}"><img class="${"h-8 w-auto"}" src="${"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"}" alt="${"Your Company"}"></div>
    <div class="${"flex flex-1 flex-col overflow-y-auto"}"><nav class="${"flex-1 space-y-1 px-2 py-4"}"><a href="${"/"}" class="${"bg-gray-900 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"}"><svg class="${"text-gray-300 mr-3 flex-shrink-0 h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"}"></path></svg>
          Dashboard
        </a>

        <a href="${"#"}" class="${"text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"}"><svg class="${"text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"}"></path></svg>
          Team
        </a>

        <a href="${"#"}" class="${"text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"}"><svg class="${"text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"}"></path></svg>
          Projects
        </a>

        <a href="${"#"}" class="${"text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"}"><svg class="${"text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"}"></path></svg>
          Calendar
        </a>

        <a href="${"#"}" class="${"text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"}"><svg class="${"text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"}"></path></svg>
          Documents
        </a>

        <a href="${"#"}" class="${"text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"}"><svg class="${"text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"}"></path></svg>
          Reports
        </a></nav></div></div></div>`;
});
const MenuToggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button type="${"button"}" class="${"border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"}"><span class="${"sr-only"}">Open sidebar</span>
    <svg class="${"h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"}"></path></svg></button>`;
});
const Profile_svelte_svelte_type_style_lang = "";
const css = {
  code: ".hide.svelte-knicoi{display:none}",
  map: null
};
const Profile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let menuItems = [
    {
      name: "Your Profile",
      href: "/profile",
      id: 1
    },
    {
      name: "Settings",
      href: "/settings",
      id: 2
    },
    { name: "Sign Out", href: "/logout", id: 3 }
  ];
  $$result.css.add(css);
  return `<div class="${"relative ml-3"}"><div><button type="${"button"}" class="${"flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"}" id="${"user-menu-button"}" aria-expanded="${"false"}" aria-haspopup="${"true"}"><span class="${"sr-only"}">Open user menu</span>
        <img class="${"h-8 w-8 rounded-full"}" src="${"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}" alt="${""}"></button></div>

    <div class="${[
    "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none svelte-knicoi",
    "hide"
  ].join(" ").trim()}" role="${"menu"}" aria-orientation="${"vertical"}" aria-labelledby="${"user-menu-button"}" tabindex="${"-1"}">${each(menuItems, (item) => {
    return `<a${add_attribute("href", item.href, 0)} class="${"block px-4 py-2 text-sm text-gray-700"}" role="${"menuitem"}" tabindex="${"-1"}" id="${"user-menu-item-" + escape(item.id, true)}">${escape(item.name)}
        </a>`;
  })}</div>
  </div>`;
});
const SearchBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex flex-1"}"><form class="${"flex w-full md:ml-0"}" action="${"#"}" method="${"GET"}"><label for="${"search-field"}" class="${"sr-only"}">Search</label>
      <div class="${"relative w-full text-gray-400 focus-within:text-gray-600"}"><div class="${"pointer-events-none absolute inset-y-0 left-0 flex items-center"}"><svg class="${"h-5 w-5"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}" aria-hidden="${"true"}"><path fill-rule="${"evenodd"}" d="${"M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"}" clip-rule="${"evenodd"}"></path></svg></div>
        <input id="${"search-field"}" class="${"block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"}" placeholder="${"Search"}" type="${"search"}" name="${"search"}"></div></form></div>`;
});
const Notifications = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button type="${"button"}" class="${"rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"}"><span class="${"sr-only"}">View notifications</span>
    <svg class="${"h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"}"></path></svg></button>`;
});
const Content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"py-4"}">${slots.default ? slots.default({}) : ``}</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>${validate_component(Menu$1, "MobileMenu").$$render($$result, {}, {}, {})}
    ${validate_component(Menu, "DesktopMenu").$$render($$result, {}, {}, {})}
    <div class="${"flex flex-col md:pl-64"}"><div class="${"sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow"}">${validate_component(MenuToggle, "MenuToggle").$$render($$result, {}, {}, {})}
        <div class="${"flex flex-1 justify-between px-4"}">${validate_component(SearchBar, "SearchBar").$$render($$result, {}, {}, {})}
          <div class="${"ml-4 flex items-center md:ml-6"}">${validate_component(Notifications, "Notifications").$$render($$result, {}, {}, {})}
            ${validate_component(Profile, "Profile").$$render($$result, {}, {}, {})}</div></div></div>
  
      <main class="${"flex-1"}"><div class="${"py-6"}"><div class="${"mx-auto max-w-7xl px-4 sm:px-6 md:px-8"}">${validate_component(Content, "Content").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</div></div></main></div></div>`;
});
export {
  Layout as default
};
