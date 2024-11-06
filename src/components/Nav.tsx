import NavItem from "./NavItem";

export default function Nav() {
  const base_path = import.meta.dev ? "/Groundhog" : "";

  return (
    <nav>
      <ul class="flex flex-row gap-3 text-2xl md:text-4xl font-thin md:py-3 py-2">
        <NavItem href={`${base_path}/`} title="Home" />
        <NavItem href={`${base_path}/about`} title="About us" />
      </ul>
    </nav>
  );
}
