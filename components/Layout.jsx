import Link from "next/link";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <h1>Art Gallery</h1>
      <div>{children}</div>
      <StyledFooter>
        <button>
          <Link href="/">Spotlight</Link>
        </button>
        <button>
          <Link href="/art-overview">Gallery</Link>
        </button>
      </StyledFooter>
    </>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  background-color: black;
  width: 100%;
`;
