"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
   staleTime: 1000 * 60 * 5,
      retry: 2,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
    },
  },
});

export default function ReactqueryProviders({ children }: { children: ReactNode }) {
    return (
        // Provide the client to your App
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}