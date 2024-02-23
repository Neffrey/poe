// COMPONENTS
// import CreateTaskModal, { LoginBtn } from "~/components/create-task-modal";
// import ProtectedContent from "~/components/protectedContent";
// import TaskTableController from "~/app/_home-and-layout-components/tasks-table/table-controller";

import UsefulLinks from "./_components/useful-links";

const Home = () => {
  return (
    <div
      // HERO ROW
      className="flex w-full flex-wrap items-center justify-around gap-12 bg-gradient-to-br from-background to-background/50 px-4 py-16 md:justify-center md:px-20"
    >
      <div className="flex w-4/5 flex-col gap-5">
        <h1 className="text-bg-foreground w-full text-center text-5xl font-extrabold tracking-wider sm:text-[5rem]">
          nPoE
        </h1>
        <h2 className="text-bg-foreground w-full text-center text-xl tracking-wider">
          Just a few useful links & tools
        </h2>
        <div className="flex flex-col justify-center text-center">
          <h2 className="text-2xl font-bold">{`Neffrey's Tools - Coming Soon!!`}</h2>
          <h3 className="capitalize">
            arbitrage trade tool - sextant rolling helper - gem leveling - Mage
            blood flask helper
          </h3>
        </div>
        <UsefulLinks />
      </div>
    </div>
  );
};

export default Home;
