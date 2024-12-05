import CardList from "@/components/CardList";

export default function artOverview({
  artistArray,
  handleFavourites,
  favouritesArray,
}) {
  return (
    <CardList
      artistArray={artistArray}
      handleFavourites={handleFavourites}
      favouritesArray={favouritesArray}
    ></CardList>
  );
}
