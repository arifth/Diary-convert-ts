import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../../redux/feature/api/apiSlice";
import { useNavigate } from "react-router-dom";
import { LOGIN_SUCCESS } from "./../../../redux/authSlice";
import { useDispatch } from "react-redux";
import { loginSchema } from "../../../validations/login";
import { yupResolver } from "@hookform/resolvers/yup";

interface IModalLogin {
  open: boolean;
  handleClose: () => void | undefined;
  style?: any;
}

type loginState = {
  email: string;
  password: string;
};

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const ModalLogin = ({ open, handleClose, style }: IModalLogin) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsloading] = React.useState(false);
  const [errorForm, setError] = React.useState(false);
  const [login] = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: loginState) => {
    try {
      setIsloading(true);
      const response = await login(data);
      dispatch(LOGIN_SUCCESS(response));
      console.log(response);
      setIsloading(false);
      navigate("/list-cards");
      handleClose();
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
          Login form
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register("email")}
            name="email"
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
            {...register("password")}
            style={{ width: "100%", margin: "5px" }}
            type="password"
            label="password"
            variant="outlined"
          />
          {errors.password && (
            <Typography sx={{ color: "red" }}>
              Password cannot be empty or less than 8 chars
            </Typography>
          )}
          {/* {errors.password?.message} */}
          <br />
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "100%", height: "3em", marginTop: "1em" }}
            type="submit"
          >
            {isLoading ? <p>loading...</p> : <p>Login</p>}
          </Button>
          {/* {errorForm && (
            <Typography color="red">
              your username or password might be wrong :(
            </Typography>
          )} */}
        </form>
      </Box>
    </StyledModal>
  );
};

export default ModalLogin;
