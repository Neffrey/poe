// UTILS
import { usefulLinks, type UsefulLink } from "./links-db";
import { cn } from "~/lib/utils";

// COMP - List
const UsefulLinks = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">Information Tools</h2>
        <div className="grid grid-cols-5 gap-3">
          {usefulLinks.information.map((link: UsefulLink, i) => (
            <UsefulLinkSingle
              className={BgColorizor(
                i,
                "bg-primary/80 text-primary-foreground",
                "bg-secondary/80 text-secondary-foreground",
              )}
              link={link}
              key={`info-${i}`}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">Game Tools</h2>
        <div className="grid grid-cols-5 gap-3">
          {usefulLinks.gameTools.map((link: UsefulLink, i) => (
            <UsefulLinkSingle
              className={BgColorizor(
                i,
                "bg-secondary/80 text-secondary-foreground",
                "bg-primary/80 text-primary-foreground",
              )}
              link={link}
              key={`info-${i}`}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">Trade Tools</h2>
        <div className="grid grid-cols-4 gap-3">
          {usefulLinks.tradeTools.map((link: UsefulLink, i) => (
            <UsefulLinkSingle
              className={BgColorizor(
                i,
                "bg-primary/80 text-primary-foreground",
                "bg-secondary/80 text-secondary-foreground",
              )}
              link={link}
              key={`info-${i}`}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">Guides</h2>
        <div className="grid grid-cols-4 gap-3">
          {usefulLinks.guides.map((link: UsefulLink, i) => (
            <UsefulLinkSingle
              className={BgColorizor(
                i,
                "bg-secondary/80 text-secondary-foreground",
                "bg-primary/80 text-primary-foreground",
              )}
              link={link}
              key={`info-${i}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsefulLinks;

// COMP - Single
const UsefulLinkSingle = ({
  className = "",
  link,
}: {
  className: string;
  link: UsefulLink;
}) => {
  return (
    <div className={cn("rounded-sm", className)}>
      <a
        href={link.url}
        target="_blank"
        rel="noreferrer"
        className={"flex flex-col px-4 py-2"}
      >
        <h3 className="text-md font-bold">{link.title}</h3>
        <h3 className="text-sm">{link.description}</h3>
      </a>
    </div>
  );
};

const BgColorizor = (i: number, str1: string, str2: string) => {
  if (i < 5) {
    if (i === 0 || i % 2 === 0) {
      return str1;
    }
    return str2;
  }
  if (i <= 10) {
    if (i % 2 === 0) {
      return str2;
    }
    return str1;
  }
  if (i <= 15) {
    if (i % 2 === 0) {
      return str1;
    }
    return str2;
  }
  if (i <= 20) {
    if (i % 2 === 0) {
      return str2;
    }
    return str1;
  }
  if (i % 2 === 0) {
    return str1;
  }
  return str2;
};
