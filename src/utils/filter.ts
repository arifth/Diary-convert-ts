export const handleFilter = (event: any, data: []) => {
  const searchWord = event.target.value;
  let newFilter = data?.filter((value: any) => {
    return value.title.toLowerCase().includes(searchWord.toLowerCase());
  });
  return newFilter;
};
