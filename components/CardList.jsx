import Card from "./Card";
import Link from "next/link";

export default function CardList({
  artistArray,
  handleFavourites,
  favouritesArray,
}) {
  return (
    <ul>
      {artistArray.map((piece) => {
        return (
          <li key={piece.slug}>
            <Card
              piece={piece}
              handleFavourites={handleFavourites}
              isLink={true}
              favouritesArray={favouritesArray}
            ></Card>
          </li>
        );
      })}
    </ul>
  );
}
