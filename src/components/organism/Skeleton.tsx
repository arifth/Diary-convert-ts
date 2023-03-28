import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function SkeletonChildrenDemo() {
  return (
    <div>
      <Skeleton sx={{ width: "550px", height: "600px " }}></Skeleton>
    </div>
  );
}

export default function SkeletonChildren() {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1em" }}>
      {data.map((el, id) => (
        <SkeletonChildrenDemo key={id} />
      ))}
    </Box>
  );
}
