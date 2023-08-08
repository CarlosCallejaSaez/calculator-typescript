import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  justify-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
  background-color: #c8a2c8;
  color: #111;
  padding: 20px;
  text-align: center;
`;

const GithubLink = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <p>
          <GithubLink
            href="https://github.com/carloscallejasaez/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              id="github"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="32"
              height="32"
              fill="currentcolor"
            >
              <path d="M0 18 C0 12 3 10 3 9 C2.5 7 2.5 4 3 3 C6 3 9 5 10 6 C12 5 14 5 16 5 C18 5 20 5 22 6 C23 5 26 3 29 3 C29.5 4 29.5 7 29 9 C29 10 32 12 32 18 C32 25 30 30 16 30 C2 30 0 25 0 18 M3 20 C3 24 4 28 16 28 C28 28 29 24 29 20 C29 16 28 14 16 14 C4 14 3 16 3 20 M8 21 A1.5 2.5 0 0 0 13 21 A1.5 2.5 0 0 0 8 21 M24 21 A1.5 2.5 0 0 0 19 21 A1.5 2.5 0 0 0 24 21 z"></path>
            </svg>
          </GithubLink>
        </p>
        <p>Developed with ♥ by Carlos Calleja Sáez</p>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
