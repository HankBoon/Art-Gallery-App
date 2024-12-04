import Link from "next/link";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <StyledH1>Art Gallery</StyledH1>
      <div>{children}</div>
      <StyledFooter>
        <StyledButton>
          <StyledLink href="/">
            <strong>Spotlight</strong>
          </StyledLink>
        </StyledButton>
        <StyledButton>
          <StyledLink href="/art-overview">
            <strong>Gallery</strong>
          </StyledLink>
        </StyledButton>
      </StyledFooter>
    </>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  background-color: black;
  width: 100%;
  position: fixed;
  bottom: 0px;
  justify-content: space-evenly;
`;

const StyledButton = styled.button`
  flex: 1;
  cursor: pointer;
  border: 4px solid #1f1e1c;
  background-color: #0d1117;
  padding: 1em 0;
  /* &:hover {
    background-color: grey; */
  /* } */
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  color: white;
  &:hover {
    background-color: #0d1117da;
  }
`;
const StyledH1 = styled.h1`
  text-align: center;
`;
