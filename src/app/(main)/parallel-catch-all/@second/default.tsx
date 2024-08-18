import { Box } from "@mui/material";
import { green } from "@mui/material/colors";
import Link from "next/link";

export default function Page() {
  return (
    <Box sx={{ backgroundColor: green[100] }}>
      <h2>ここが@Secondのページだよ</h2>
      <h2>
        default.tsxはParallel
        Routeのフォルダ構成に影響を受けずに、常にdefault.tsxの内容が保持される。
      </h2>
      {Array.from({ length: 6 }, (_, i) => (
        <>
          <Link href={`/parallel-catch-all/${i + 1}`} key={i}>
            {`/parallel-catch-all/${i + 1}で遷移するよ`}
          </Link>
          <br />
        </>
      ))}
      <br />
      <br />
      <br />
      {Array.from({ length: 6 }, (_, i) => (
        <>
          <Link href={`/parallel-catch-all/1/${i + 1}`} key={i}>
            {`/parallel-catch-all/1/${i + 1}で遷移するよ`}
          </Link>
          <br />
        </>
      ))}
    </Box>
  );
}
