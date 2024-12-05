import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const {
    data: artistArray,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  const [artistArrayComments, setArtistArrayComments] = useState([]);

  function handleUpdateArtistArrayComments(newComment) {
    setArtistArrayComments(
      artistArrayComments.map((arrayItem) => {
        if (arrayItem.slug === newComment.slug) return newComment;
        return arrayItem;
      })
    );
  }

  useEffect(() => {
    setArtistArrayComments(artistArray);
  }, [artistArray]);
  console.log("artistArrayComments from app:", artistArrayComments);

  const [favouritesArray, setFavouritesArray] = useState([]);

  function handleFavourites(favouriteObject) {
    if (favouritesArray.some((item) => item.slug === favouriteObject.slug)) {
      setFavouritesArray(
        favouritesArray.filter(
          (favouriteItem) => favouriteItem.slug !== favouriteObject.slug
        )
      );
    } else {
      setFavouritesArray([...favouritesArray, favouriteObject]);
    }
  }

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          artistArray={artistArray}
          favouritesArray={favouritesArray}
          handleFavourites={handleFavourites}
          setArtistArrayComments={handleUpdateArtistArrayComments}
          artistArrayComments={artistArrayComments}
          {...pageProps}
        />
      </Layout>
    </>
  );
}
