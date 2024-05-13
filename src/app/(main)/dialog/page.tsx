"use client";

import { BasicDialog } from "@/components/Dialog/BasicDialog";
import { WarningDialog } from "@/components/Dialog/WarningDialog";
import { useDialog } from "@/components/Dialog/useDialog";
import { Button } from "@mui/material";

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
      {/* {renderDialog(BasicDialog)} */}
      {renderDialog(WarningDialog)}
    </>
  );
};

export default DialogPage;
