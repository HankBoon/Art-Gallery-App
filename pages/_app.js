import GlobalStyle from "../styles";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const {
    data: artistArray,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  console.log(artistArray);

  return (
    <>
      <GlobalStyle />
      <Component artistArray={artistArray} {...pageProps} />
    </>
  );
}
