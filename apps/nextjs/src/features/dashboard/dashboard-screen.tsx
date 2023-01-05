import Page from "../shared/page";

export default function DashboardScreen() {
  return (
    <Page withGlobalNav>
      <div className="container mx-auto flex w-full flex-row">
        <div>Dashboard</div>
      </div>
    </Page>
  );
}

DashboardScreen.auth = true;
