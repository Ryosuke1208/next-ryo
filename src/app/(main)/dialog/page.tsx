"use client";

import { CustomDialog, CustomDialogProps } from "@/components/Dialog/Dialog";
import {
  Button,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useState } from "react";

const DialogPage = () => {
  const [modalConfig, setModalConfig] = useState<CustomDialogProps | undefined>(
    undefined
  );

  const handleDeleteClick = async () => {
    const ret = await new Promise<string>((resolve) => {
      setModalConfig({
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
    setModalConfig(undefined);
    console.log(ret);
    console.log("ダイアログが閉じられました");
    if (ret === "ok") {
      console.log("削除する:OK時の処理を実行する");
      // 仮のAPIリクエスト
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      const data = await response.json();
      console.log(data);
    }
    if (ret === "cancel") {
      console.log("削除する:Cancel時の処理を実行する");
    }
  };

  return (
    <div className="App">
      <Button variant="outlined" type="button" onClick={handleDeleteClick}>
        OPEN DIALOG
      </Button>

      {modalConfig && <CustomDialog {...modalConfig} />}
    </div>
  );
};

export default DialogPage;
