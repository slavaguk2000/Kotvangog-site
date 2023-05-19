import { Box, styled } from "@mui/material";

export const LikenessPortraitWrapper2 = styled(Box)`
  background-image: url("/images/background/back-gray.png");
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 70px;
`;

export const LikenessPortraitGeneral2 = styled(Box)`
  background-image: url("/images/background/Слой3.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
`;

export const LikenessContent2 = styled(Box)`
  display: flex;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    padding: 0 20px;
  }
`;
export const LikenessContent22 = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 990px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 10px;
  }
`;

export const LikenessContentDescription2 = styled(Box)`
  margin-top: 80px;
`;
export const EllipseСontainer2 = styled(Box)`
  position: relative;
  display: flex;
  justify-content: center;
`;
export const EllipseLikeness2 = styled(Box)`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -65%) rotate(175deg);
  width: 550px;
  height: 170px;
  background-color: rgba(190, 190, 190, 0.5);
  border-radius: 50% / 70%;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    width: 380px;
  }
`;

export const FirstTextLikeness2 = styled(Box)`
  font-size: 15px;
  font-family: "Nunito";
  font-weight: 700;
  flex-wrap: wrap;
  max-width: 420px;
  text-align: center;
  position: relative;
  z-index: 1;
  text-align: center;
  margin-bottom: 20px;
`;
export const SecondTextLikeness2 = styled(Box)`
  font-size: 15px;
  font-family: "Nunito";
  font-weight: 500;
  flex-wrap: wrap;
  max-width: 350px;
  text-align: left;
  margin-bottom: 20px;
`;
export const ThirdTextLikeness2 = styled(Box)`
  font-size: 15px;
  font-family: "Nunito";
  font-weight: 400;
  flex-wrap: wrap;
  max-width: 400px;
  text-align: left;
  margin-bottom: 20px;
`;
export const FourthTextLikeness2 = styled(Box)`
  font-size: 15px;
  font-family: "Nunito";
  font-weight: 400;
  flex-wrap: wrap;
  max-width: 450px;
  text-align: left;
  margin-bottom: 30px;
`;
export const LikenessContentPhoto2 = styled(Box)`
  margin-top: 15px;
  padding-bottom: 10px;
  width: 520px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    width: 280px;
    align-items: center;
  }
`;

export const ButtonContainer2 = styled(Box)`
  display: flex;
  margin-bottom: 20px;
`;
export const FirstButtonLikeness2 = styled(Box)`
  font-size: 16px;
  font-family: "Trebuchetms";
  font-weight: 500;

  background-color: #36883d;
  color: white;
  border-radius: 50px;
  border: none;
  padding: 10px;
  max-width: 300px;
  box-shadow: 3px 3px 0 1px #9e9e9e;
  margin: 0 20px;
  cursor: pointer;
`;
export const SecondButtonLikeness2 = styled(Box)`
  font-size: 16px;
  font-family: "Trebuchetms";
  font-weight: 500;
  background-color: #bdbdbd;
  color: white;
  border-radius: 50px;
  border: none;
  padding: 10px;
  max-width: 300px;
  box-shadow: 3px 3px 0 1px #9e9e9e;
`;

export const ModalTitle = styled(Box)`
  font-size: 18px;
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  text-align: center;
`;
export const ModalMessenger = styled(Box)`
  display: flex;
  justify-content: center;
  overflow: hidden;
`;
export const ModalMessengerContent = styled(Box)`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const ModalIcons = styled(Box)`
  margin-right: 10px;
  transition: 0.8s;

  :hover {
    transform: scale(1.2);
  }

  :last-child {
    content: "";
    margin-right: 0;
  }
`;
