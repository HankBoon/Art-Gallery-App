import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout";
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const {
    data: artistArray,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  const [favourites, setFavourites] = useState([]);

  function handleFavourites(favouriteObject) {
    if (favourites.includes(favouriteObject.slug)) {
      setFavourites(
        favourites.filter(() => {
          !favouriteObject;
        })
      );
    } else {
      setFavourites([...favourites, favouriteObject]);
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
          handleFavourites={handleFavourites}
          {...pageProps}
        />
      </Layout>
    </>
  );
}
