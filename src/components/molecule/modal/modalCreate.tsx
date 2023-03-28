import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { useCreateDiaryMutation } from "../../../redux/feature/api/apiSlice";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../../../validations/login";
import { yupResolver } from "@hookform/resolvers/yup";
import { createSchema } from "../../../validations/create";

interface IModalCreate {
  open: boolean;
  handleClose: () => void | undefined;
  style?: any;
}

type createState = {
  title: string;
  note: string;
};

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const ModalCreate = ({ open, handleClose, style }: IModalCreate) => {
  const navigate = useNavigate();
  const [errorForm, setError] = React.useState(false);
  const [create, { isLoading, isSuccess }] = useCreateDiaryMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(createSchema),
  });

  const onSubmit = (data: createState) => {
    try {
      const response = create(data);
      handleClose();
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
          Create a new Diary
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register("title")}
            name="title"
            style={{ width: "100%", margin: "5px" }}
            type="text"
            label="New Title"
            variant="outlined"
          />
          {errors.title && (
            <Typography sx={{ color: "red" }}>
              Judul tidak boleh kosong
            </Typography>
          )}
          <br />
          <TextField
            {...register("content")}
            style={{ width: "100%", margin: "5px" }}
            type="text"
            label="add a new diary note "
            variant="outlined"
          />
          {errors.content && (
            <Typography sx={{ color: "red" }}>
              Note diary tidak boleh kosong
            </Typography>
          )}
          <br />
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "100%", height: "3em", marginTop: "1em" }}
            type="submit"
          >
            {isLoading ? <p>loading...</p> : <p>Create</p>}
          </Button>
        </form>
      </Box>
    </StyledModal>
  );
};

export default ModalCreate;
