export default function Divider({ className = '' }: { className?: string }) {
  return <hr className={`hairline ${className}`} aria-hidden="true" />;
}
