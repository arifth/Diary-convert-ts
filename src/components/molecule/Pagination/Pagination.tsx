import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { SET_CURRENT_PAGE } from "../../../redux/paginationSlice";

export default function PaginationRounded({
  pageCount,
}: {
  pageCount: number;
}) {
  const dispatch = useDispatch();
  // const { pageCount } = useSelector((state: any) => state.pagination);
  const { currentPage } = useSelector((state: any) => state.pagination);
  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    dispatch(SET_CURRENT_PAGE(page));
  };
  return (
    <Stack spacing={2} width="100%">
      <Pagination
        count={pageCount}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </Stack>
  );
}
