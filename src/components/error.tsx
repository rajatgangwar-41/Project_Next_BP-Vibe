"use client";

import { Button } from "./ui/button";
import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface ErrorProps {
  className?: string;
  error?: unknown;
  refetch?: () => void;
  router?: AppRouterInstance;
  text?: string;
}

export const Error = ({
  className = "",
  error,
  refetch,
  router,
  text = "An error occurred",
}: ErrorProps) => {
  return (
    <div
      className={cn(
        `col-span-full flex flex-col items-center justify-center gap-4 text-center`,
        className,
      )}
    >
      <AlertTriangle className="w-10 h-10 text-red-500" />
      <div>
        <p className="font-medium text-lg">Something went wrong</p>
        <p className="text-sm text-muted-foreground mt-1">
          {error && typeof error === "object" && "message" in error
            ? String((error as { message?: string }).message)
            : text}
        </p>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" onClick={() => refetch?.()}>
          Try Again
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            if (router) router.refresh?.();
            else window.location.reload();
          }}
        >
          Refresh Page
        </Button>
      </div>
    </div>
  );
};
