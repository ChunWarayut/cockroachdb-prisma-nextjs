import DefaultFooter from "./footer";
import DefaultLogo from "./logo";
import DefaultNav from "./nav";
import DefaultSidebar from "./sidebar";

export default function DefaultLayout({ children }) {
  return (
    <div>
      <DefaultNav />
      <div className="flex overflow-hidden bg-white pt-16">
        <DefaultSidebar />
        <DefaultLogo />
        <div
          id="main-content"
          className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
        >
          <main className="min-h-[69vh]">
            <div className="pt-6 px-4">{children}</div>
          </main>
          <DefaultFooter />
        </div>
      </div>
      <script async defer src="https://buttons.github.io/buttons.js"></script>
      <script src="https://demo.themesberg.com/windster/app.bundle.js"></script>
    </div>
  );
}
