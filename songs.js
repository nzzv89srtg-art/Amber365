const songs = [
  {
    day: 1,
    title: "Sun to Me",
    artist: "Zach Bryan",
    lyric: "You're the sun to me."
  },
  {
    day: 2,
    title: "Ho Hey",
    artist: "The Lumineers",
    lyric: "I belong with you, you belong with me."
  },
  {
    day: 3,
    title: "All of Me",
    artist: "John Legend",
    lyric: "All of me loves all of you."
  },
  {
    day: 4,
    title: "All of Me",
    artist: "John Legend",
    lyric: "You're my end and my beginning."
  },
  {
    day: 5,
    title: "Mirrors",
    artist: "Justin Timberlake",
    lyric: "I'm looking right at the other half of me."
  },
  {
    day: 6,
    title: "You're My Heart, You're My Soul",
    artist: "Modern Talking",
    lyric: "You're my heart, you're my soul."
  }
];

// Fill the remaining days
for (let i = 7; i <= 365; i++) {
  songs.push({
    day: i,
    title: "Coming Soon",
    artist: "",
    lyric: "Another song is waiting for you soon... ❤️"
  });
}