import { cn } from "@/util/merge";
import React, { ComponentProps, forwardRef } from "react";

export const Divider = forwardRef<HTMLDivElement, ComponentProps<"div">>(
    ({ children, className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn("h-[1px] bg-gray-500 w-full", className)}
            {...props}
        >
            {children}
        </div>
    )
);

Divider.displayName = "HorizontalLine";

export default Divider;
