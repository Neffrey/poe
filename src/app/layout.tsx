import "~/styles/globals.css";

// LIBS
import type { Metadata } from "next";

// UTILS
import UseOnRender from "~/components/hooks/use-on-render";

// COMPONENTS
import HtmlWrapper from "~/app/_home-and-layout-components/html-wrapper";
import LightDarkProvider from "~/components/providers/light-dark-provider";
import Footer from "~/app/_home-and-layout-components/footer";
import Header from "~/app/_home-and-layout-components/header";
import LoadingSpinner from "~/components/ui/loading-spinner";

export const metadata: Metadata = {
  title: "PoE: Useful Links & Tools",
  description: "Useful links and tools for my favorite game, PoE",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <HtmlWrapper>
      <body className="custom-scrollbar">
        <LightDarkProvider>
          <UseOnRender
            fallback={
              <div className="absolute flex h-full w-full flex-col items-center justify-center gap-10 bg-cyan-800 text-slate-50">
                <LoadingSpinner className="h-20 w-20" />
                <h3 className="text-xl">Loading...</h3>
              </div>
            }
          >
            <Header />
            <main className="flex min-h-screen w-full flex-col">
              {children}
            </main>
            <Footer />
          </UseOnRender>
        </LightDarkProvider>
      </body>
    </HtmlWrapper>
  );
};

export default RootLayout;
