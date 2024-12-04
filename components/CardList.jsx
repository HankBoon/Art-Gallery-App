import Card from "./Card";
import Link from "next/link";

export default function CardList({ artistArray }) {
  return (
    <ul>
      {artistArray.map(({ slug, name, imageSource, artist }) => {
        return (
          <li key={slug}>
            {/* <Link href={`art-overview/${slug}`}> */}
            <Card
              imageSource={imageSource}
              name={name}
              artist={artist}
              slug={slug}
            ></Card>
            {/* </Link> */}
          </li>
        );
      })}
    </ul>
  );
}
