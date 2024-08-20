"use client";

import { Box, Button } from "@mui/material";
import { red } from "@mui/material/colors";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Router } from "next/router";

export default function Page({ params }: { params: { dynamic: string } }) {
  const router = useRouter();

  const handleClick = () => {
    // router.push(`/sidebar-layout`);
    // router.refresh();
    window.location.href = `/sidebar-layout`;
  };

  console.log("first-dynamic");

  return (
    <>
      <Box sx={{ backgroundColor: red[100] }}>
        <h2>ここが@First/[dynamic]のページだよ</h2>
        <h2>/parallel-default/{params.dynamic}で遷移してきたよ</h2>
        <Button onClick={handleClick}>前のページに戻る</Button>
      </Box>
    </>
  );
}
