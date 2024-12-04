import Image from "next/image";

export default function Card({ imageSource, name, artist }) {
  return (
    <>
      <Image src={imageSource} alt={name} width={250} height={250}>
        {/* <img
          src={"../assets/startTrackValue.svg"}
          alt="unchecked favourite icon"
        ></img> */}
      </Image>
      <h2>
        {`"${name}"`} by {artist}
      </h2>
    </>
  );
}
