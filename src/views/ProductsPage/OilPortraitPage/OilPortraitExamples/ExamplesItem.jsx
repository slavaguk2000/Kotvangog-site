import { ExamplesGallery, ExamplesGalleryContainer } from "./styled-examples";
import { useState } from "react";

const ExamplesItem = ({ previewSrc, fullSrc, setFullImage, onImageLoad }) => {
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
    <ExamplesGalleryContainer>
      <ExamplesGallery onClick={() => setFullImage(fullSrc)}>
        <img
          src={previewSrc}
          style={style}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          width="100%"
          loading="lazy"
          decoding="async"
          onLoad={() => onImageLoad()}
          alt=""
        />
      </ExamplesGallery>
    </ExamplesGalleryContainer>
  );
};

export default ExamplesItem;
