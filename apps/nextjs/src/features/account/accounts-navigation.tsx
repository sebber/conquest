import LeftNavigation from "../shared/left-navigation";

export default function AccountsNavigation() {
  const links = [{ href: `/account`, label: "Profile" }];
  return <LeftNavigation links={links} />;
}
