"use client";

import React, { useState } from "react";
import { CustomDialog, CustomDialogProps } from "@/components/Dialog/Dialog";
import {
  CustomDialogContext,
  CustomDialogContextType,
} from "../Context/CustomDialogContext";

export const CustomDialogProvider = (props: { children: React.ReactNode }) => {
  const { children } = props;

  const [modalConfig, setModalConfig] = useState<CustomDialogProps | undefined>(
    undefined
  );

  const openDialog: CustomDialogContextType["openDialog"] = (config) => {
    setModalConfig(config);
  };

  const closeDialog: CustomDialogContextType["closeDialog"] = () => {
    setModalConfig(undefined);
  };

  return (
    <CustomDialogContext.Provider value={{ openDialog, closeDialog }}>
      {children}
      {modalConfig && <CustomDialog {...modalConfig} />}
    </CustomDialogContext.Provider>
  );
};
