import React from 'react';
import { cn } from '@/lib/utils';

interface CustomLogoProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
}

export function CustomLogo({ className, ...props }: CustomLogoProps) {
    return (
        <svg
            // Set your SVG viewBox - defines the coordinate system and aspect ratio
            // Format: "min-x min-y width height"
            viewBox="0 0 100 100"

            // Standard SVG namespace
            xmlns="http://www.w3.org/2000/svg"

            // Controls how the SVG scales within its container
            // "xMidYMid meet" centers the SVG and maintains aspect ratio
            preserveAspectRatio="xMidYMid meet"

            // Combine custom className with default styles
            className={cn("w-full h-full", className)}

            // Spread any additional SVG props passed to the component
            {...props}
        >
            {/*
                YOUR SVG CONTENT GOES HERE

                Replace this example with your own SVG paths, shapes, etc.
                You can paste the contents from any SVG file here.

                Tips:
                - Remove the opening <svg> and closing </svg> tags from your SVG file
                - Keep all the <path>, <circle>, <rect>, etc. elements
                - You can add fill="colorCode" to paths for specific colors
                - Or leave them without fill to inherit from CSS/props

                Example shapes below:
            */}

            {/* Example: Circle */}
            <circle
                cx="50"
                cy="50"
                r="40"
                fill="#3E6D72"
            />

            {/* Example: Rectangle */}
            <rect
                x="30"
                y="30"
                width="40"
                height="40"
                fill="#97A55E"
            />

            {/* Example: Path (complex shape) */}
            <path
                d="M 50 10 L 90 90 L 10 90 Z"
                fill="#2C5F66"
            />

        </svg>
    );
}
