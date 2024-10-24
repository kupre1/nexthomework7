type NavLinkstype = {
  id: string;
  title: string;
  href: string;
};

export const navlinks: NavLinkstype[] = [
  { id: "home", title: "Home", href: "/" },
  { id: "about", title: "About", href: "/about" },
  { id: "works", title: "How it Works", href: "/howitswork" },
  { id: "services", title: "Services", href: "/services" },
];
