import Card from "./Card";

export default function CardList({ artistArray }) {
  return (
    <ul>
      {artistArray.map(({ slug, name, imageSource, artist }) => {
        return (
          <Card
            key={slug}
            imageSource={imageSource}
            name={name}
            artist={artist}
          ></Card>
        );
      })}
    </ul>
  );
}
