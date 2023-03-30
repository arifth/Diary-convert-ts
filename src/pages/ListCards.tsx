import React from "react";
import NavBar from "../components/organism/NavBar";
import Card from "../components/molecule/cards/Card";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import type { ICardProps } from "../@types/CardProps";
import { useGetAllDiaryQuery } from "../redux/feature/api/apiSlice";
import SkeletonChildren from "../components/organism/Skeleton";
import Input from "../components/atom/Input";
import { Alert } from "@mui/material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import PaginationRounded from "../components/molecule/Pagination/Pagination";
import ModalCreate from "../components/molecule/modal/modalCreate";

interface IResponse {
  title: string;
  content: string;
}

interface IResponses extends Array<IResponse> {}

const ListCards = () => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state: any) => state.pagination);
  const [isOpen, setOpen] = React.useState<boolean>(false);
  // const [dataDiary, setDataDiary] = React.useState([]);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const current = currentPage || 0;
  const [input, setInput] = React.useState("");
  const [debounceInput, setDebounceInput] = React.useState("");
  // const { data: diaries, isSuccess: successFromInput } = useGetAllDiaryQuery({
  //   search: debounceInput,
  //   page: current,
  // });

  React.useEffect(() => {
    const intervalId = setTimeout(() => {
      setInput("");
      setDebounceInput(input);
    }, 1000);

    return () => {
      clearTimeout(intervalId);
    };
  }, [input]);
  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  const {
    data: diaries,
    isLoading,
    isError,
  } = useGetAllDiaryQuery({
    page: currentPage || 0,
    searchWord: debounceInput || "",
  });

  return (
    <React.Fragment>
      <ModalCreate open={isOpen} handleClose={handleClose} />
      <NavBar />
      <Box
        sx={{ padding: "2em", display: "flex", gap: "1em", flexWrap: "wrap" }}
      >
        <Box width="100%">
          <Input
            input={input}
            debounceInput={debounceInput}
            handleChange={handleChange}
          />
        </Box>
        <Box width="100%">
          <Button variant="contained" onClick={handleOpen}>
            Create a new Diary
          </Button>
        </Box>
        <PaginationRounded
          pageCount={Math.ceil(
            (diaries?.total_data || 0) / (diaries?.limit || 0)
          )}
        />

        {isLoading && <SkeletonChildren />}
        {isError && <Alert>Cannot fetch data right now </Alert>}
        {diaries
          ? diaries?.data?.map((diary: ICardProps, id: number) => (
              <Card
                key={id}
                id={diary.id}
                title={diary.title}
                content={diary.content}
                created_at={diary.created_at}
              />
            ))
          : null}
      </Box>
    </React.Fragment>
  );
};

export default ListCards;
