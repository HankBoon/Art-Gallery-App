import Card from "./Card";

export default function CardList({ artistArray }) {
  return (
    <ul>
      {artistArray.map(({ slug, name, imageSource, artist }) => {
        return (
          <li key={slug}>
            <Card imageSource={imageSource} name={name} artist={artist}></Card>
          </li>
        );
      })}
    </ul>
  );
}
