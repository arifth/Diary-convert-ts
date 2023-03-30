import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IregisterData {
  email: string;
  username: string;
  password: string;
  password_confirmation: string;
}

interface IloginData {
  email: string;
  password: string;
}

const baseUrl = fetchBaseQuery({
  baseUrl: "https://private-anon-e9f1b8baf7-halfwineaid.apiary-proxy.com/",
  prepareHeaders: (headers: any) => {
    const token = localStorage.getItem("token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    headers.set("Accept", "application/json");
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseUrl,
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data: IregisterData) => ({
        url: "auth/register",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data: IloginData) => ({
        url: "auth/login",
        method: "POST",
        body: data,
      }),
    }),
    getAllDiary: builder.query({
      query: ({ page, search, searchString }) => ({
        url: "diary",
        params: { page, search, ...searchString },
      }),
      providesTags: ["Diaries"],
      // invalidatesTags: ["Diaries"],
    }),
    getSingleDiary: builder.query({
      query: (id: string) => ({
        url: `diary/${id}`,
        method: "GET",
      }),
    }),
    createDiary: builder.mutation<any, object>({
      query: (data: {}) => ({
        url: "diary",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Diaries"],
    }),
    updateDiary: builder.mutation<any, string>({
      query: (id: string) => ({
        url: `diary/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["Diaries"],
    }),
    archieveDiary: builder.mutation({
      query: (id: string) => ({
        url: `diary/${id}/archieve`,
        method: "PUT",
      }),
      invalidatesTags: ["Diaries"],
    }),
    unarchieveDiary: builder.mutation({
      query: (id: string) => ({
        url: `diary/${id}/unarchieve`,
        method: "POST",
      }),
      invalidatesTags: ["Diaries"],
    }),
  }),
  // tag used for caching purpose
  tagTypes: ["Diaries"],
});

export const {
  useGetAllDiaryQuery,
  useLoginMutation,
  useRegisterMutation,
  useCreateDiaryMutation,
  useGetSingleDiaryQuery,
  useUpdateDiaryMutation,
  useArchieveDiaryMutation,
  useUnarchieveDiaryMutation,
  endpoints,
} = apiSlice;
