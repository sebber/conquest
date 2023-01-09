import AccountsNavigation from "./accounts-navigation";
import Page from "../shared/page";

export default function AccountScreen() {
  return (
    <Page withGlobalNav>
      <div className="container mx-auto flex w-full flex-row">
        <AccountsNavigation />
        <div>Account</div>
      </div>
    </Page>
  );
}

AccountScreen.auth = true;
