import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Card from "@/components/Card";
import CommentForm from "@/components/CommentForm";

export default function Details({
  artistArray,
  handleFavourites,
  favouritesArray,
}) {
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
      <Card
        piece={artPiece}
        handleFavourites={handleFavourites}
        isLink={false}
        favouritesArray={favouritesArray}
      />
      <h3>Year: {artPiece.year}</h3>
      <h3>Genre: {artPiece.genre}</h3>
      <CommentForm artistArray={artistArray}></CommentForm>
    </>
  );
}
