// LIBRARIES
import Link from "next/link";

// COMPONENTS
import NavMenu from "~/app/_home-and-layout-components/nav-menu";
import StickyScrollBar from "~/components/sticky-scroll-bar";
import NeffreyLogo from "~/components/svgs/NeffreyLogo";

// COMP
const Header = () => {
  return (
    <StickyScrollBar>
      <Link
        // Logo & Name Container
        className="flex items-center justify-start gap-6"
        href="/"
      >
        <div
          // Logo Container
          className="fill-secondary-foreground h-12 w-12 cursor-pointer"
        >
          <NeffreyLogo />
        </div>
        <h1 className="text-primary-foreground text-lg font-semibold sm:text-xl md:text-2xl lg:text-4xl">
          nPoE
        </h1>
      </Link>
      <NavMenu />
    </StickyScrollBar>
  );
};

export default Header;
