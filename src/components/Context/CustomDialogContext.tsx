import { createContext, useContext } from "react";
import { CustomDialogProps } from "../Dialog/Dialog";

export type CustomDialogContextType = {
  openDialog: (config: CustomDialogProps) => void;
  closeDialog: () => void;
};

export const CustomDialogContext = createContext<
  CustomDialogContextType | undefined
>(undefined);
