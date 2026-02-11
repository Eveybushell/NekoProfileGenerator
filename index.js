
const image = ["kitsune", "neko", "husbando", "waifu"];
const gif = [
  "angry", "baka", "bite", "blush", "bonk", "bored", "cry", "cuddle",
  "dance", "facepalm", "feed", "handhold", "handshake", "happy",
  "highfive", "hug", "kick", "kiss", "laugh", "lurk", "nod", "nom",
  "nope", "pat", "peck", "poke", "pout", "punch", "run", "shoot",
  "shrug", "slap", "sleep", "smile", "smug", "stare", "tableflip",
  "think", "thumbsup", "tickle", "wave", "wink", "yawn", "yeet"
];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

async function generateImage() {
  const button = document.getElementById("imageButton");

  button.addEventListener("click", async () => {
    try {
      const randomImage = getRandomItem(image);

      const response = await fetch(`https://nekos.best/api/v2/${randomImage}`);
       if (!response.ok) {
            throw new Error (`Response status: ${response.status}`);
        }
      const data = await response.json();

      const img = document.createElement("img");
      img.src = data.results[0].url;
      img.alt = "a random anime picture";
      img.style.maxWidth = "300px";

      document.body.appendChild(img);
    } catch (error) {
      console.error(error.message);
    }
  });
};

async function generateGIF() {
  const button = document.getElementById("GIFButton");

  button.addEventListener("click", async () => {
    try {
      const randomGIF = getRandomItem(gif);

      const response = await fetch(`https://nekos.best/api/v2/${randomGIF}`);
       if (!response.ok) {
            throw new Error (`Response status: ${response.status}`);
        }
      const data = await response.json();

      const img = document.createElement("img");
      img.src = data.results[0].url;
      img.alt = "a random anime GIF";
      img.style.maxWidth = "300px";

      document.body.appendChild(img);
    } catch (error) {
      console.error(error.message);
    }
  });
};

generateImage();
generateGIF();

