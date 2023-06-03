import { Box } from "@mui/material";
import { useState } from "react";

const ModernGalleryItem = ({ previewSrc, fullSrc, setFullImage }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const style = {
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    transition: "transform 0.5s ease-in-out",
  };
  return (
    <Box>
      <Box onClick={() => setFullImage(fullSrc)}>
        <img
          src={previewSrc}
          width="190px"
          height="245px"
          loading="lazy"
          decoding="async"
          alt=""
          style={style}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </Box>
    </Box>
  );
};

export default ModernGalleryItem;
