const CURRENT_LEAGUE = "affliction";

export type UsefulLink = {
  title: string;
  description: string;
  url: string;
};

export const usefulLinks = {
  neffs: [
    // arbitrage tool
    // sextant rolling helper
    // gem leveling - profit per xp - corrupt vs non-corrupt profit calc - buy cost filter
    // Mage blood flask helper
  ],
  information: [
    {
      title: "PoE Wiki",
      description: "Comprehensive online resource for all things PoE",
      url: "https://www.poewiki.net/wiki/Path_of_Exile_Wiki",
    },
    {
      title: "Craft of Exile",
      description: "Crafting simulator and calculator",
      url: "https://www.craftofexile.com/",
    },
    {
      title: "Map Comparison",
      description:
        "Compare maps in the current map pool on  metrics like openness, linearity, etc",
      url: "https://poeatlas.app/",
    },
    {
      title: "Div Cards But Better",
      description:
        "Filter maps by div card drops or see which maps drop specific div cards",
      url: "https://divcards.io/",
    },
    {
      title: "PoE Lab",
      description:
        "View the current lab layouts to help you navigate the labyrinth faster",
      url: "https://www.poelab.com/",
    },
  ],
  gameTools: [
    {
      title: "Path of Building",
      description:
        "A powerful build planner that helps you track and compare different options on your character",
      url: "https://pathofbuilding.community/",
    },
    {
      title: "Path of Regex",
      description:
        "Tool for in-game searching of specific stats on items, maps, and more",
      url: "https://poe.re/",
    },
    {
      title: "PoE Ladder Ancient Orb Tool",
      description:
        "A tool to show odds on using an Ancient Orb to get a specific unique item",
      url: "https://poeladder.com/ancient",
    },
    {
      title: "PoE Ladder Tainted Mythic Orb Tool",
      description:
        "A tool to show odds on getting new uniques with a Tainted Mythic Orb",
      url: "https://poeladder.com/mythic",
    },
    {
      title: "Maxroll Atlas Tree Planner",
      description:
        "A tool to show odds on getting new uniques with a Tainted Mythic Orb",
      url: "https://maxroll.gg/poe/poe-atlas-tree/",
    },
  ],
  tradeTools: [
    {
      title: "PoE Trade",
      description:
        "An online platform dedicated to facilitating item exchanges and transactions among players",
      url: "https://www.pathofexile.com/trade/",
    },
    {
      title: "PoE Ninja Economy",
      description:
        "An economic overview tool that provides insights into the in-game economy and item prices",
      url: `https://poe.ninja/economy/${CURRENT_LEAGUE}/currency`,
    },
    {
      title: "Awakened PoE Trade",
      description: "A trade tool for easy item price checking and trading",
      url: "https://snosme.github.io/awakened-poe-trade/download",
    },
  ],
  guides: [
    {
      title: "Acts Guide",
      description:
        "A guide to help you navigate the acts more quickly and efficiently",
      url: "https://www.poe-vault.com/guides/quick-reference-leveling-guide-act-1",
    },
    {
      title: "PoE Ninja Builds",
      description:
        "Tool to find popular builds and view their gear and skill trees",
      url: `https://poe.ninja/builds/affliction${CURRENT_LEAGUE}`,
    },
    {
      title: "Maxroll Guides",
      description: "A collection of guides for various aspects of PoE",
      url: "https://maxroll.gg/poe",
    },
  ],
};
