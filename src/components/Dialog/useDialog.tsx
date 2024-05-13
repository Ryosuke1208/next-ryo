import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { useState } from "react";
import { BasicDialog } from "./BasicDialog";

type State = {
  // ダイアログの開閉状態
  isOpen: boolean;
  resolve: (bool: boolean) => void;
};

// 状態の初期値
const initialState: State = {
  // ダイアログは閉じている
  isOpen: false,
  resolve: () => {},
};

export const useDialog = () => {
  const [state, setState] = useState<State>(initialState);
  const openDialog = () => {
    const promise: Promise<boolean> = new Promise((resolve) => {
      const newState: State = {
        isOpen: true,
        resolve,
      };
      setState(newState);
    });
    // Promiseが解決されたときに結果をログに出力
    promise.then((result) => {
      console.log("Promiseの結果:", result);
    });
    return promise;
  };
  const ok = () => {
    state.resolve(true);
    setState(initialState);
  };
  const cancel = () => {
    state.resolve(false);
    setState(initialState);
  };

  const renderDialog = () => {
    return <BasicDialog isOpen={state.isOpen} ok={ok} cancel={cancel} />;
  };

  return {
    openDialog,
    renderDialog,
  };
};
