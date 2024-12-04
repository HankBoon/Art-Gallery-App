import Card from "./Card";
import Link from "next/link";

export default function CardList({ artistArray, handleFavourites }) {
  console.log(artistArray);
  return (
    <ul>
      {artistArray.map((piece) => {
        return (
          <li key={piece.slug}>
            {/* <Link href={`art-overview/${slug}`}> */}
            <Card piece={piece} handleFavourites={handleFavourites}></Card>
            {/* </Link> */}
          </li>
        );
      })}
    </ul>
  );
}
