"use client";

import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./errorFallback";
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
