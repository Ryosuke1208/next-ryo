import { Box, Grid } from "@mui/material";
import SideBarLayout from "./SideBarLayout";
import SideBar from "./SideBar";

export default async function ParallelLayout({
  children,
}: {
  children: React.ReactNode;
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
          <SideBar res={data} />
        </Grid>
        <Grid item xs={8}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
}
