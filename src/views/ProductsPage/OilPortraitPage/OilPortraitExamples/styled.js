import { Box, styled } from "@mui/material";

export const OilPortraitExamplesWrapper = styled(Box)`
  background-image: url("/images/background/back-gray.png");
  display: flex;
  justify-content: center;
  width: 100%;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    background-image: none;
  }
`;
export const OilPortraitExamplesGeneral = styled(Box)`
  background-image: url("/images/background/Слой3.png");
  background-repeat: no-repeat;
  background-size: cover;
  margin: 10px;
  width: 100%;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    background-image: none;
  }
`;
export const OilPortraitExamplesContent = styled(Box)``;

export const OilPortraitExamplesGallery = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 240px));
  grid-column-gap: 20px;
  grid-row-gap: 15px;
  width: 70%;
  margin: 40px auto;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    grid-column-gap: 10px;
  }
`;
