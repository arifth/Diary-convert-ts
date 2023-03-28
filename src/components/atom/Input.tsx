import React from "react";
import InputUnstyled, { InputUnstyledProps } from "@mui/base/InputUnstyled";
import { styled } from "@mui/system";
import { color } from "../../constant/color";

type IInputProps = {
  input: string;
  debounceInput: string;
  handleChange: Function;
};
const StyledInputElement = styled("input")(
  ({ theme }) => `
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 12px;
  color: ${theme.palette.mode === "dark" ? color.grey[300] : color.grey[900]};
  background: ${theme.palette.mode === "dark" ? color.grey[900] : "#fff"};
  border: 1px solid ${
    theme.palette.mode === "dark" ? color.grey[700] : color.grey[200]
  };
  box-shadow: 0px 2px 2px ${
    theme.palette.mode === "dark" ? color.grey[900] : color.grey[50]
  };

  &:hover {
    border-color: ${color.blue[400]};
  }

  &:focus {
    border-color: ${color.blue[400]};
    box-shadow: 0 0 0 3px ${
      theme.palette.mode === "dark" ? color.blue[500] : color.blue[200]
    };
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);

const CustomInput = React.forwardRef(function CustomInput(
  props: InputUnstyledProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <InputUnstyled slots={{ input: StyledInputElement }} {...props} ref={ref} />
  );
});

export default function UnstyledInputBasic({
  input,
  debounceInput,
  handleChange,
}: IInputProps) {
  return (
    <CustomInput
      aria-label="Demo input"
      placeholder="Type something…"
      onChange={(e) => handleChange(e)}
    />
  );
}
