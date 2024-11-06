import NavItem from "./NavItem";

export default function Nav() {
  return (
    <nav>
      <ul class="flex flex-row gap-3 text-4xl font-thin py-3">
        <NavItem href="/" title="Home" />
        <NavItem href="/about" title="About us" />
      </ul>
    </nav>
  );
}
