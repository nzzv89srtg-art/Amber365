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
  },
  {
    day: 7,
    title: "Lucky",
    artist: "Jason Mraz & Colbie Caillat",
    lyric: "Lucky I'm in love with my best friend."
  },
  {
    day: 8,
    title: "Perfect",
    artist: "Ed Sheeran",
    lyric: "Darling, you look perfect tonight."
  },
  {
    day: 9,
    title: "Just the Way You Are",
    artist: "Bruno Mars",
    lyric: "Her eyes make the stars look like they're not shining."
  },
  {
    day: 10,
    title: "Just the Way You Are",
    artist: "Bruno Mars",
    lyric: "She's so beautiful."
  },
  {
    day: 11,
    title: "Just the Way You Are",
    artist: "Bruno Mars",
    lyric: "When you smile, the whole world stops and stares for a while."
  },
  {
    day: 12,
    title: "Just the Way You Are",
    artist: "Bruno Mars",
    lyric: "When I see your face, there's not a thing that I would change."
  }
];

// Automatically fill Days 13–365
for (let day = 13; day <= 365; day++) {
  songs.push({
    day: day,
    title: `Day ${day}`,
    artist: "",
    lyric: "Another song will be waiting here soon... ❤️"
  });
}