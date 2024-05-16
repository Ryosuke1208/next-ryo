import Button from "@mui/material/Button/Button";
import React from "react";
import { restUtils } from "./restUtils";
import { useErrorBoundary } from "react-error-boundary";

const FetchButton = () => {
  const { showBoundary } = useErrorBoundary();

  const handleGetData = async () => {
    try {
      const res = await restUtils.getData();
      console.log(res);
    } catch (error) {
      showBoundary(error);
    }
  };
  return (
    <Button variant="outlined" onClick={handleGetData}>
      APIを投げる
    </Button>
  );
};

export default FetchButton;
