import Link from "next/link";

function NavLink({ href, children }: { href: string; children: string }) {
  return (
    <Link href={href} className="mr-2 hover:text-slate-500">
      {children}
    </Link>
  );
}

export default function TopNavigation() {
  return (
    <nav className="flex flex-row items-center">
      <NavLink href="/dashboard">Dashboard</NavLink>
      <NavLink href="/universes">Universes</NavLink>
      <NavLink href="/account">Account</NavLink>
    </nav>
  );
}
