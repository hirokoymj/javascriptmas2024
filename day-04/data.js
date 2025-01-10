const films = [
  {
    title: "Die Hard",
    emoji: ["🌇", "💣", "👮‍", "✈️", "🔫"],
    ariaLabel: "skyline, bomb, police officer, airplane, gun",
    id: "1",
  },
  {
    title: "Home Alone",
    emoji: ["🏠", "🧒", "🪶", "🕷️", "✈️"],
    ariaLabel: "house, boy, feather, spider, plane",
    id: "2",
  },
  {
    title: "Elf",
    emoji: ["🧝‍♂️", "🎅", "🍝", "🍬", "🛷"],
    ariaLabel: "elf, Santa, spaghetti, candy, sleigh",
    id: "3",
  },
  {
    title: "The Polar Express",
    emoji: ["🚂", "🎟️", "❄️", "☕", "🔔"],
    ariaLabel: "train, ticket, snowflake, hot chocolate, tree",
    id: "4",
  },
  {
    title: "Love Actually",
    emoji: ["❤️", "✉️", "👩‍❤️‍💋‍👨", "🤣", "💔"],
    ariaLabel: "heart, letter, romantic couple, laughing, broken heart",
    id: "5",
  },
  {
    title: "The Grinch",
    emoji: ["🎄", "🐕", "🎁", "🛷", "🟩"],
    ariaLabel: "tree, dog, gift, sleigh, green",
    id: "6",
  },
  {
    title: "A Christmas Carol",
    emoji: ["👻", "🎩", "❄️", "💰", "🕯️�"],
    ariaLabel: "ghost, top hat, snowflake, money, candle",
    id: "7",
  },
  {
    title: "The Nightmare Before Christmas",
    emoji: ["🎃", "🦞", "🧌", "💀", "🎁"],
    ariaLabel: "pumpkin, lobster, monster, skull, gift",
    id: "8",
  },
  {
    title: "Rudolph the Red-Nosed Reindeer",
    emoji: ["🦌", "🔴", "🌉", "🐻‍❄️", "❄️"],
    ariaLabel: "reindeer, red, bridge, polar bear, snowflake",
    id: "9",
  },
  {
    title: "Klaus",
    emoji: ["📮", "🎁", "🎅", "🏔️", "🛷"],
    ariaLabel: "mailbox, gift, Santa, mountain, sleigh",
    id: "10",
  },
  {
    title: "Gremlins",
    emoji: ["👹", "💦", "🍗", "🕰️", "🌜"],
    ariaLabel: "monster, water, chicken leg, clock, moon",
    id: "11",
  },
];

const copyFilms = [...films];

const renderRandomEmoji = () => {
  const randomIndex = Math.floor(Math.random() * copyFilms.length);

  const emoji = copyFilms[randomIndex].emoji.join(" ");
  console.log(emoji);
  const removedItem = copyFilms.splice(randomIndex, 1);
};

let count = 0;
const interval = setInterval(() => {
  renderRandomEmoji();
  count++;

  if (count === 0) {
    clearInterval(interval);
  }
}, 1500);
