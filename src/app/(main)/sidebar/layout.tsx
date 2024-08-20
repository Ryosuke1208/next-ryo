import { Box, Grid } from "@mui/material";

export default async function ParallelLayout({
  first,
  second,
}: {
  first: React.ReactNode;
  second: React.ReactNode;
}) {
  const res = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo");
  const data = await res.json();
  return (
    // 二つのページを一つにまとめて表示できる
    // https://nextjs.org/docs/app/building-your-application/routing/parallel-routes

    <div>
      <h1>Parallel</h1>
      <Grid container>
        <Grid item xs={4}>
          {first}
        </Grid>
        <Grid item xs={4}>
          {second}
        </Grid>
      </Grid>
    </div>
  );
}
