import { cn } from "@/lib/utils";
import { Loader2, Play } from "lucide-react";
import React, { forwardRef } from "react";

interface LoadingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const LoadingButton = forwardRef<HTMLButtonElement, LoadingButtonProps>(
  (
    { loading, children, className, disabled, type = "button", ...props },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        {...props}
        className={cn(
          "inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-neutral-800 bg-neutral-950 px-4 py-2 text-sm font-medium text-neutral-300 outline-none transition-colors hover:bg-neutral-800 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        type={type}>
        {loading ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <Play className="size-4" />
        )}
        {children}
      </button>
    );
  },
);

LoadingButton.displayName = "LoadingButton";
export default LoadingButton;
