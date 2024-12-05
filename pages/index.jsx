import Card from "@/components/Card";

export default function HomePage({ artistArray, handleFavourites }) {
  function getRandomArt() {
    const randomIndex = Math.floor(Math.random() * artistArray.length);
    return artistArray[randomIndex];
  }

  const randomArt = getRandomArt();

  return <Card handleFavourites={handleFavourites} piece={randomArt} />;
}
