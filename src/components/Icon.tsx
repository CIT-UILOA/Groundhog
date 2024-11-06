export default function Icon(props: { icon: string; style?: string }) {
  return <span class={`font-mono ${props.style}`}>{props.icon}</span>;
}
