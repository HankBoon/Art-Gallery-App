import Card from "@/components/Card";

export default function HomePage({ artistArray }) {
  console.log("home page array:", artistArray);

  function getRandomArt() {
    const randomIndex = Math.floor(Math.random() * artistArray.length);
    return artistArray[randomIndex];
  }

  const randomArt = getRandomArt();

  return (
    <Card
      imageSource={randomArt.imageSource}
      name={randomArt.name}
      artist={randomArt.artist}
    />
  );
}
