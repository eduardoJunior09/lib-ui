import styled from "styled-components";

type StyleButtonProps = {
  bgColor: string;
  borderColor: string;
  color: string;
  hoverBgColor: string;
  hoverBorderColor: string;
  hoverColor: string;
  textSize: string;
  widthSize: string;
  heightSize: string;
};

export const StyleButton = styled.button<StyleButtonProps>`
  width: 100%;
  max-width: ${(props) => props.widthSize};
  height: ${(props) => props.heightSize};

  border-radius: 8px;

  background-color: ${(props) => props.bgColor};
  border: 1px solid ${(props) => props.borderColor};
  color: ${(props) => props.color};

  font-size: ${(props) => props.textSize};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.hoverBgColor};
    border: 1px solid ${(props) => props.hoverBorderColor};
    color: ${(props) => props.hoverColor};
  }
`;
