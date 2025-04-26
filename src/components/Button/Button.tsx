import { AppColors, ButtonSize } from "../../Styles/global";
import { StyleButton } from "./style";

const variantToColor = {
  default: {
    bgColor: AppColors.default,
    borderColor: AppColors.borderDefault,
    color: AppColors.colorDefault,
    hoverBgColor: AppColors.hoverDefault,
    hoverBorderColor: AppColors.borderHoverDefault,
    hoverColor: AppColors.colorDefault,
  },
  outline: {
    bgColor: "transparent",
    borderColor: AppColors.borderOutline,
    color: AppColors.colorOutline,
    hoverBgColor: "transparent",
    hoverBorderColor: AppColors.borderHoverOutline,
    hoverColor: AppColors.colorHoverOutline,
  },
};

const variantToSize = {
  default: {
    textSize: ButtonSize.textBase,
    widthSize: ButtonSize.maxwidthDefault,
    heightSize: ButtonSize.heightDefault,
  },
  sm: {
    textSize: ButtonSize.textSm,
    widthSize: ButtonSize.maxwidthSm,
    heightSize: ButtonSize.heigthSm,
  },
  lg: {
    textSize: ButtonSize.textLg,
    widthSize: ButtonSize.maxwidthLg,
    heightSize: ButtonSize.heigthLg,
  },
};

type ButtonProps = {
  label: string;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
};

export default function Button({
  label,
  variant = "default",
  size = "default",
}: ButtonProps) {
  const {
    bgColor,
    borderColor,
    color,
    hoverBgColor,
    hoverBorderColor,
    hoverColor,
  } = variantToColor[variant];

  const { textSize, widthSize, heightSize } = variantToSize[size];

  return (
    <StyleButton
      bgColor={bgColor}
      borderColor={borderColor}
      color={color}
      hoverBgColor={hoverBgColor}
      hoverBorderColor={hoverBorderColor}
      hoverColor={hoverColor}
      textSize={textSize}
      widthSize={widthSize}
      heightSize={heightSize}
    >
      {label}
    </StyleButton>
  );
}
