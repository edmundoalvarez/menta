import { ComponentPropsWithoutRef } from "react";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
    /**
     * Optional CSS class name to apply custom styles
     */
    className?: string;
    /**
     * Whether to reverse the animation direction
     * @default false
     */
    reverse?: boolean;
    /**
     * Whether to pause the animation on hover
     * @default false
     */
    pauseOnHover?: boolean;
    /**
     * Content to be displayed in the marquee
     */
    children: React.ReactNode;
    /**
     * Whether to animate vertically instead of horizontally
     * @default false
     */
    vertical?: boolean;
    /**
     * Number of times to repeat the content
     * @default 4
     */
    repeat?: number;
}

export function Marquee({
    className,
    reverse = false,
    pauseOnHover = false,
    children,
    vertical = false,
    repeat = 4,
    ...props
}: MarqueeProps) {
    return (
        <div
            {...props}
            className={`group flex overflow-hidden p-2 gap-[var(--gap,1rem)] ${
                vertical ? "flex-col" : "flex-row"
            } ${className}`}
        >
            {Array.from({ length: repeat }).map((_, i) => (
                <div
                    key={i}
                    className={`flex shrink-0 justify-around gap-[var(--gap,1rem)] ${
                        vertical
                            ? "animate-marquee-vertical flex-col"
                            : reverse
                            ? "animate-marquee-reverse flex-row"
                            : "animate-marquee flex-row"
                    } ${
                        pauseOnHover
                            ? "group-hover:[animation-play-state:paused]"
                            : ""
                    }`}
                >
                    {children}
                </div>
            ))}
        </div>
    );
}
