import Link from "next/link";

function NavLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="rounded-md p-1 px-4 hover:bg-slate-200 hover:text-slate-200 dark:hover:bg-slate-700"
    >
      {children}
    </Link>
  );
}

export default function LeftNavigation({
  links,
}: {
  links: { href: string; label: string }[];
}) {
  return (
    <nav className="flex w-48 flex-col space-y-2">
      {links.map((link) => (
        <NavLink key={link.href} href={link.href}>
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}
