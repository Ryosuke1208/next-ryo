import { Box } from "@mui/material";
import { red } from "@mui/material/colors";
import Link from "next/link";

export default function Page({ params }: { params: { dynamic: string } }) {
  return (
    <>
      <Box sx={{ backgroundColor: red[100] }}>
        <h2>ここが@First/[dynamic]のページだよ</h2>
        <h2>/parallel-default/{params.dynamic}で遷移してきたよ</h2>
        <Link href="/parallel-default">前のページに戻る</Link>
      </Box>
    </>
  );
}
