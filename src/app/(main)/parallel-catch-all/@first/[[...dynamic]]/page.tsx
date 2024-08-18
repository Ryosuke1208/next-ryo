import { Box } from "@mui/material";
import { red } from "@mui/material/colors";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function Page({ params }: { params: { dynamic?: string[] } }) {
  // https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#optional-catch-all-segments

  const dynamic = params.dynamic;

  const firstParams = dynamic?.[0];
  const secondParams = dynamic?.[1];

  if (!firstParams || Number(firstParams) > 5) {
    notFound();
  }

  if (secondParams && Number(secondParams) > 5) {
    throw new Error();
  }

  return (
    <>
      <Box sx={{ backgroundColor: red[100] }}>
        <h2>ここが@First/[dynamic]のページだよ</h2>

        <h2>
          /parallel-catch-all/{firstParams}
          {secondParams && `/${secondParams}`}
          で遷移してきたよ
        </h2>
      </Box>
    </>
  );
}
