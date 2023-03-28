import React from "react";
import NavBar from "../components/organism/NavBar";
import { useParams } from "react-router-dom";
import { useGetSingleDiaryQuery } from "../redux/feature/api/apiSlice";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

type ParamTypes = {
  id: string;
};

const Detail = () => {
  const { id } = useParams<ParamTypes>();
  // workaround
  const ids: string = id !== undefined ? id : "";
  const { data, isLoading, isError } = useGetSingleDiaryQuery(ids);
  console.log(data);
  return (
    <React.Fragment>
      <NavBar />
      <Box sx={{ padding: "2em" }}>
        <Card sx={{ Width: "100%", height: "50vh", padding: "2rem" }}>
          <CardMedia
            component="img"
            height="250"
            sx={{ objectFit: "cover" }}
            image="https://source.unsplash.com/random/600x600/?city,night"
          />
          <CardContent>
            {data ? (
              <Typography gutterBottom variant="h3" component="div">
                {data?.title}
              </Typography>
            ) : (
              <Skeleton variant="text" width={"full"} height={118} />
            )}

            {data ? (
              <Typography gutterBottom variant="body2" component="div">
                {data?.content}
              </Typography>
            ) : (
              <Skeleton variant="text" width={"full"} height={118} />
            )}
          </CardContent>
        </Card>
      </Box>
    </React.Fragment>
  );
};

export default Detail;
