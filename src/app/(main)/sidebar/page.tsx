import { Box } from "@mui/material";
import { red } from "@mui/material/colors";
import Link from "next/link";

export default function Page() {
  return (
    <Box sx={{ backgroundColor: red[100] }}>
      <h2>ここが@Firstのページだよ</h2>
      {Array.from({ length: 10 }, (_, i) => (
        <>
          <Link href={`/parallel-default/${i + 1}`} key={i}>
            {`/parallel-default/${i + 1}で遷移するよ`}
          </Link>
          <br />
        </>
      ))}
    </Box>
  );
}
