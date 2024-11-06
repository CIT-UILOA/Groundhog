import NavItem from "./NavItem";

export default function Nav() {
  return (
    <nav>
      <ul class="flex flex-row gap-3 text-2xl md:text-4xl font-thin md:py-3 py-2">
        <NavItem href="/Groundhog/" title="Home" />
        <NavItem href="/Groundhog/about" title="About us" />
      </ul>
    </nav>
  );
}
