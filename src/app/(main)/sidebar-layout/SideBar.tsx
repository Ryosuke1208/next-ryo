import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import SideBarLayout from "./SideBarLayout";

type SideBarProps = {
  res: string; // `res` の型を適切に指定します。ここでは `string` にしていますが、実際のデータに応じて型を変更してください。
};

export default function SideBar({ res }: SideBarProps) {
  console.log(res);
  return (
    <>
      <h1>{JSON.stringify(res)}</h1>
      <SideBarLayout />
    </>
  );
}
