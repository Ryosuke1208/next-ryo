"use client";

import { ErrorBoundary, useErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./errorFallback";
import Button from "@mui/material/Button/Button";
import { restUtils } from "./restUtils";
import FetchButton from "./fetchButton";

const Page = () => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <FetchButton />
      </ErrorBoundary>
    </>
  );
};

export default Page;
