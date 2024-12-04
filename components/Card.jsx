import Image from "next/image";

export default function Card({ imageSource, name }) {
  return (
    <li>
      <Image src={imageSource} alt={name} width={500} height={500}>
        <Image
          src={"../assets/startTrackValue.svg"}
          alt="unchecked favourite icon"
        ></Image>
      </Image>
      <h2>
        {name} by {artist}
      </h2>
    </li>
  );
}
