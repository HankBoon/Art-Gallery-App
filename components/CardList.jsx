import Card from "./Card";

export default function CardList({ artistArray }) {
  return artistArray.map(({ slug, name, imageSource, artist }) => {
    return (
      <Card
        key={slug}
        imageSource={imageSource}
        name={name}
        artist={artist}
      ></Card>
    );
  });
}
