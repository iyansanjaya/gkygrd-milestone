import { Loader2 } from "lucide-react";

/**
 * Loading UI component provided by Next.js
 * Automatically shown when navigating between routes
 */
export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-3">
      <div className="relative flex items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
        <div className="absolute inset-0 h-10 w-10 animate-ping rounded-full bg-primary/20 opacity-75" />
      </div>
      <p className="text-muted-foreground text-sm animate-pulse font-medium">
        Memuat data...
      </p>
    </div>
  );
}
