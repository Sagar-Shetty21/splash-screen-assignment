import { gsap } from "gsap";

gsap.fromTo(
    "#splash-text",
    {
        opacity: 0,
        y: 20,
    },
    {
        delay: 1, // wait 1 second before starting
        opacity: 1, // fade in
        y: 0, // move up slightly to center
        duration: 1.5,
        ease: "power2.out",
        onComplete: () => {
            // after 4 seconds from animation start, fade out
            gsap.to("#splash-text", {
                delay: 1.5, // 1.5s animation + 1.5s wait = 4s total
                opacity: 0,
                duration: 1,
                ease: "power2.in",
            });
        },
    }
);
