import { useLocation } from "@solidjs/router";

export default function NavItem(props: { href: string; title: string }) {
  const location = useLocation();

  const isActive = (path: string) => path == location.pathname;
  const buttonStyle = (path: string) =>
    isActive(path)
      ? "border-sky-600"
      : "border-transparent hover:border-sky-600";

  return (
    <li>
      <a href={isActive(props.href) ? "#" : props.href}>{props.title}</a>
    </li>
  );
}
