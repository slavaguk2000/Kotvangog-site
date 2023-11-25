import { styled, Box } from '@mui/material';
import { mobileStyles } from '../../utils/stylesUtils';

export const UnderHeaderBlock = styled(Box)`
  height: 60px;
  width: 100%;

  ${mobileStyles(`  
    height: 50px;
  `)};
`;

export const GiftAdvertisementSlideWrapper = styled(Box)`
  padding: 25px 1px;
  width: 100%;
  background-color: #ede7d6;
  display: flex;
  align-items: center;
  flex-direction: column;

  ${mobileStyles(`  
    height: 700px;
  `)};
`;

export const FortuneWheelDescriptionWrapper = styled(Box)`
  max-width: 22rem;

  ${mobileStyles(`  
    max-width: 80vw;
  `)};
`;

export const NewCarouselWrapper = styled(Box)`
  display: block;
  width: 100%;

  ${mobileStyles(`  
    height: 500px;
  `)};
`;

export const NewCarouselItemWrapper = styled(Box)`
  display: flex;
  padding: 0 10px;
  width: 30%;
  box-sizing: border-box;
`;

export const NewCarouselItemDescriptionWrapper = styled(Box)`
  display: flex;
  height: 2.5rem;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  color: ${({ theme }) => theme.palette.common.white};
`;
