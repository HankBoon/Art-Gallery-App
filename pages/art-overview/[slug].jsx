import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

export default function Details({ artistArray }) {
  const router = useRouter();
  const { slug } = router.query;

  function getArtPiece() {
    return artistArray.find((piece) => {
      return piece.slug === slug && piece;
    });
  }

  const artPiece = getArtPiece();

  return (
    <>
      <Link href="/art-overview">← Back to Overview</Link>
      <br />
      <Image
        src={artPiece.imageSource}
        alt={artPiece.name}
        width={250}
        height={250}
      >
        {/* <img
          src={"../assets/startTrackValue.svg"}
          alt="unchecked favourite icon"
        ></img> */}
      </Image>
      <h2>
        {`"${artPiece.name}"`} by {artPiece.artist}
      </h2>
      <h3>Year: {artPiece.year}</h3>
      <h3>Genre: {artPiece.genre}</h3>
    </>
  );
}
