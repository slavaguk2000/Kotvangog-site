import {IconButton} from "@mui/material";
import {styled} from "@mui/material";

const StyledIconButton = styled(IconButton)`
  top: 50%;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 1;
  transform: translateY(-50%);
`;


export const StyledIconButtonPrev = styled(StyledIconButton)`
  svg {
    transform: translateX(15%);
  }
`;

export const StyledIconButtonNext = styled(StyledIconButton)`
  right: 0;
`;