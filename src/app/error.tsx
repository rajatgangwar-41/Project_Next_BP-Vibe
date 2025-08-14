"use client";

import { Button } from "@/components/ui/button";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col gap-5 items-center justify-center text-3xl">
      Global error
      <div className="flex gap-2">
        <Button variant="secondary" onClick={() => window.location.reload()}>
          Refresh Page
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
