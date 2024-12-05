import Card from "@/components/Card";

export default function favourites({ favouritesArray, handleFavourites }) {
  return (
    <ul>
      {favouritesArray.map((favourite) => {
        return (
          <li key={favourite.slug}>
            <Card
              piece={favourite}
              handleFavourites={handleFavourites}
              isLink={false}
              favouritesArray={favouritesArray}
            ></Card>
          </li>
        );
      })}
    </ul>
  );
}
