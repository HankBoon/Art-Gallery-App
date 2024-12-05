import Card from "@/components/Card";
import { useEffect } from "react";
import { useState } from "react";

export default function HomePage({ artistArray, handleFavourites }) {
  const [randomArt, setRandomArt] = useState([]);

  function getRandomArt() {
    const randomIndex = Math.floor(Math.random() * artistArray.length);
    return artistArray[randomIndex];
  }

  useEffect(() => {
    setRandomArt(getRandomArt());
  }, []);

  return (
    <Card handleFavourites={handleFavourites} piece={randomArt} isLink={true} />
  );
}
