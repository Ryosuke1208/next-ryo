import { Box } from "@mui/material";
import { red } from "@mui/material/colors";
import Link from "next/link";

export default function Page() {
  console.log("first");
  return (
    <Box sx={{ backgroundColor: red[100] }}>
      <h2>ここが@Firstのページだよ</h2>
      {Array.from({ length: 10 }, (_, i) => (
        <>
          <Link href={`/sidebar-layout/${i + 1}`} key={i}>
            {`/sidebar-layout/${i + 1}で遷移するよ`}
          </Link>
          <br />
        </>
      ))}
    </Box>
  );
}
