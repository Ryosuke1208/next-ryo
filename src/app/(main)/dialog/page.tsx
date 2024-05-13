"use client";

import { BasicDialog } from "@/components/Dialog/BasicDialog";
import { useDialog } from "@/components/Dialog/useDialog";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { resolve } from "path";
import { useState } from "react";

const DialogPage = () => {
  const { openDialog, renderDialog } = useDialog();

  const handleOnClick = async () => {
    const result = await openDialog();
    console.log(result);
  };

  return (
    <>
      <Button variant="outlined" type="button" onClick={handleOnClick}>
        OPEN DIALOG
      </Button>
      {renderDialog()}
    </>
  );
};

export default DialogPage;
