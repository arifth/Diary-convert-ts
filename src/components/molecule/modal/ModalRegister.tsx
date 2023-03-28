import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { useRegisterMutation } from "../../../redux/feature/api/apiSlice";
import { useNavigate } from "react-router-dom";
import { registerSchema } from "../../../validations/register";
import { yupResolver } from "@hookform/resolvers/yup";

interface IModalRegister {
  open: boolean;
  handleClose: () => void | undefined;
  style?: any;
}

interface IRegisterState {
  email: string;
  username: string;
  password: string;
  password_confirmation: string;
}

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const ModalRegister = ({ open, handleClose, style }: IModalRegister) => {
  const navigate = useNavigate();
  const [registerForm, { isLoading, isSuccess }] = useRegisterMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data: IRegisterState) => {
    try {
      const response = await registerForm(data);
      setTimeout(handleClose, 1000);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <StyledModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        width={500}
        height="auto"
        bgcolor={"white"}
        borderRadius={5}
        padding={"2em"}
      >
        <Typography
          variant="h4"
          textAlign="center"
          sx={{ marginBottom: "1em" }}
        >
          Register form
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register("email", {
              required: "email cannot be empty",
            })}
            style={{ width: "100%", margin: "5px" }}
            type="email"
            label="email here"
            variant="outlined"
          />
          {errors.email && (
            <Typography sx={{ color: "red" }}>
              Email tidak boleh kosong
            </Typography>
          )}
          <br />
          <TextField
            {...register("username", {
              required: "user name cannot be empty",
            })}
            style={{ width: "100%", margin: "5px" }}
            type="text"
            label="username"
            variant="outlined"
          />
          {errors.username && (
            <Typography sx={{ color: "red" }}>
              Username tidak boleh kosong
            </Typography>
          )}

          <br />

          <TextField
            {...register("password", {
              required: "password cannot be empty",
            })}
            style={{ width: "100%", margin: "5px" }}
            type="password"
            label="password"
            variant="outlined"
          />
          {errors.password && (
            <Typography sx={{ color: "red" }}>
              password tidak boleh kosong
            </Typography>
          )}

          <br />

          <TextField
            {...register("password_confirmation", {
              required: "password cannot be empty",
            })}
            style={{ width: "100%", margin: "5px" }}
            type="password"
            label="password confirmation"
            variant="outlined"
          />
          {errors.password_confirmation && (
            <Typography sx={{ color: "red" }}>
              password confirmation tidak boleh kosong
            </Typography>
          )}

          <br />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ width: "100%", height: "3em", marginTop: "1em" }}
          >
            {isLoading ? <p>Loading ... </p> : <p>Register</p>}
          </Button>
          {isSuccess && <Typography>Berhasil register </Typography>}
        </form>
      </Box>
    </StyledModal>
  );
};

export default ModalRegister;
