import {
  LikenessSizeWrapper,
  LikenessSizeGeneral,
  LikenessSizeDescription,
  LikenessSizeTextOneContainer,
  LikenessSizeTextOne,
  LikenessSizeTextTwoContainer,
  LikenessSizeTextTwo,
  LikenessSizeContainer,
  LikenessSizeTextOneMore,
  LikenessSizeTextOneMoreContainer,
  LikenessSizeTextTwoMoreContainer,
  LikenessSizeTextTwoMore,
} from "./styled";

import PortraitSizesTitle from "../ArtStylesSize/PortraitSizesTitle/PortraitSizesTitle";
import LikenessSizeItem from "./LikenessSizeItem";

const LikenessSize = () => {
  return (
    <LikenessSizeWrapper>
      <LikenessSizeGeneral>
        <PortraitSizesTitle />
        <LikenessSizeDescription>
          <LikenessSizeTextOneContainer>
            <LikenessSizeTextOne>
              Стоимость дизайн-услуги фотоколлаж — 1090 руб./одно лицо
            </LikenessSizeTextOne>
          </LikenessSizeTextOneContainer>

          <LikenessSizeTextOneMoreContainer>
            <LikenessSizeTextOneMore>
              + 540 руб. каждое дополнительное лицо на картине.
            </LikenessSizeTextOneMore>
          </LikenessSizeTextOneMoreContainer>

          <LikenessSizeTextTwoContainer>
            <LikenessSizeTextTwo>
              Добавим самых важных для вас людей и домашних животных, любые
              детали, другой фон.
            </LikenessSizeTextTwo>
          </LikenessSizeTextTwoContainer>

          <LikenessSizeTextTwoMoreContainer>
            <LikenessSizeTextTwoMore>
              Дополнительная сложность в дизайн-макете от 540 руб.
            </LikenessSizeTextTwoMore>
          </LikenessSizeTextTwoMoreContainer>
        </LikenessSizeDescription>

        <LikenessSizeContainer>
          {[
            {
              imageSrc: "/images/Sizes/size 1.jpg",
              imageSize: "30×40",
              printDescription: "Печать от 2280 руб.",
              oilDescription: "Маслом от 5600 руб.",
            },
            {
              imageSrc: "/images/Sizes/size 2.jpg",
              imageSize: "40×60",
              printDescription: "Печать от 3040 руб.",
              oilDescription: "Маслом от 8800 руб.",
            },
            {
              imageSrc: "/images/Sizes/size 3.jpg",
              imageSize: "50×70",
              printDescription: "Печать от 3790 руб.",
              oilDescription: "Маслом от 11900 руб.",
            },
            {
              imageSrc: "/images/Sizes/size 4.jpg",
              imageSize: "60×80",
              printDescription: "Печать от 4540 руб.",
              oilDescription: "Маслом от 13700 руб.",
            },
            {
              imageSrc: "/images/Sizes/size 5(1).jpg",
              imageSize: "70×90",
              printDescription: "Печать от 6290 руб.",
              oilDescription: "Маслом от 19500 руб.",
            },
          ].map(
            (
              { imageSrc, imageSize, printDescription, oilDescription },
              idx
            ) => (
              <LikenessSizeItem
                key={idx}
                imageSrc={imageSrc}
                imageSize={imageSize}
                printDescription={printDescription}
                oilDescription={oilDescription}
              />
            )
          )}
        </LikenessSizeContainer>
      </LikenessSizeGeneral>
    </LikenessSizeWrapper>
  );
};

export default LikenessSize;