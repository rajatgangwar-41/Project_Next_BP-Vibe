import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient, trpc } from "@/trpc/server";
import { Suspense } from "react";
import { Client } from "./client";

export default function Home() {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.hello.queryOptions({
      text: "Rajat PREFETCH",
    }),
  );
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Suspense fallback={<p>Loading...</p>}>
          <Client />
        </Suspense>
      </div>
    </HydrationBoundary>
  );
}
