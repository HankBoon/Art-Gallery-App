import CardList from "@/components/CardList";

export default function artOverview({ artistArray, handleFavourites }) {
  return (
    <CardList
      artistArray={artistArray}
      handleFavourites={handleFavourites}
    ></CardList>
  );
}
