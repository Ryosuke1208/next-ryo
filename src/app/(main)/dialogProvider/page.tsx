"use client";

import { CustomDialogContext } from "@/components/Context/CustomDialogContext";
import {
  Button,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

import { useContext } from "react";

const DialogProviderPage = () => {
  const dialogContext = useContext(CustomDialogContext);
  if (!dialogContext) {
    throw new Error("Erroe Occured!!");
  }
  const { openDialog } = dialogContext;

  /**
   * 削除ボタンクリック時の処理
   */
  const handleClick = async () => {
    const ret = await new Promise<string>((resolve) => {
      openDialog({
        onClose: resolve,
        content: (
          <>
            <DialogTitle>削除します。よろしいですか?</DialogTitle>
            <DialogContent>
              <DialogContentText>
                削除すると二度と元に戻せません。
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => resolve("ok")}>OK</Button>
              <Button onClick={() => resolve("cancel")} autoFocus>
                Cancel
              </Button>
            </DialogActions>
          </>
        ),
      });
    });
    console.log(ret);
    if (ret === "ok") {
      console.log("削除する:OK時の処理を実行する");
    }
    if (ret === "cancel") {
      console.log("削除する:Cancel時の処理を実行する");
    }
  };

  return (
    <>
      <Button variant="outlined" type="button" onClick={handleClick}>
        OPEN DIALOG
      </Button>
    </>
  );
};

export default DialogProviderPage;
