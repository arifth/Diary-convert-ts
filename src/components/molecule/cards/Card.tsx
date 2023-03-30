import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ICardProps } from "../../../@types/CardProps";
import dayjs from "dayjs";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useArchieveDiaryMutation } from "../../../redux/feature/api/apiSlice";
import { Navigate, Link } from "react-router-dom";

export default function CardBasic({
  id,
  title,
  content,
  created_at,
}: ICardProps) {
  const [Archieve] = useArchieveDiaryMutation();
  const handleArchieve = async () => await Archieve(id);
  const handleEdit = () => alert("this is  edit");
  return (
    <Card sx={{ Width: "400px", Height: "250px" }}>
      <CardContent>
        <CardMedia
          sx={{ borderRadius: "10px", marginBottom: "1em" }}
          component="img"
          height="140"
          image="https://source.unsplash.com/random/300x300/?city,night"
        />
        <Navigate to={`/detail-card/${id}`}>
          <Typography gutterBottom variant="h5" component="div">
            {title?.toUpperCase()}
          </Typography>
        </Navigate>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginBottom: "5em" }}
        >
          {content}
        </Typography>
        <Typography>{dayjs(created_at).format("DD MMMM YYYY")}</Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button variant="contained" size="medium" onClick={handleEdit}>
          <BorderColorIcon sx={{ marginRight: "10px" }} />
          <Typography>Edit</Typography>
        </Button>
        <Button variant="outlined" size="medium" onClick={handleArchieve}>
          <DeleteOutlineIcon sx={{ marginRight: "10px" }} />
          Archieve
        </Button>
      </CardActions>
    </Card>
  );
}
