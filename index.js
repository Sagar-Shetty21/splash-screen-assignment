import { gsap } from "gsap";

gsap.fromTo(
    "#splash-text",
    {
        opacity: 0,
        y: 40,
    },
    {
        delay: 1.5,
        opacity: 1, // fade in
        y: 0,
        duration: 2.5,
        ease: "power2.out",
        onComplete: () => {
            // after 4 seconds from animation start, fade out
            gsap.to("#splash-text", {
                delay: 0.6, // 0.6s animation + 0.6s wait = 4s total
                opacity: 0,
                duration: 1.2,
                ease: "power2.in",
            });

            // Fade out all SVG elements at the same time as text
            gsap.to("#splash-logo-one", {
                delay: 0.6,
                opacity: 0,
                scale: 0.8, // slightly scale down while fading
                duration: 1,
                ease: "power2.in",
            });

            gsap.to("#left-stroke", {
                delay: 0.6,
                opacity: 0,
                duration: 1,
                ease: "power2.in",
            });

            gsap.to("#right-stroke", {
                delay: 0.6,
                opacity: 0,
                duration: 1,
                ease: "power2.in",
            });

            gsap.to("#top-stroke", {
                delay: 0.6,
                opacity: 0,
                duration: 1,
                ease: "power2.in",
            });

            gsap.to("#fill-rect", {
                delay: 0.6,
                opacity: 0,
                duration: 1,
                ease: "power2.in",
            });
        },
    }
);

gsap.fromTo(
    "#splash-logo-one",
    {
        y: 40,
    },
    {
        delay: 1.5,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
    }
);

gsap.fromTo(
    "#splash-logo-two",
    {
        y: 40,
    },
    {
        delay: 1.5,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
    }
);

function animateStar() {
    const star = document.getElementById("splash-logo-one");

    // Create timeline
    const tl = gsap.timeline();

    // Reset any previous animations
    gsap.set(star, {
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
        opacity: 1, // ensure it's visible at start
    });
    star.classList.remove("glow");

    // Animation sequence
    tl
        // Start from left, scaled down
        .set(star, {
            x: -100,
            y: -40,
            scale: 0.3,
            rotation: 0,
        })
        // Move to center while spinning and scaling up
        .to(star, {
            x: 0,
            y: 40,
            scale: 1,
            rotation: 180, // Two full rotations
            duration: 1.5,
            ease: "power2.out",
        })
        // Add glowing effect once in center
        .call(() => {
            star.classList.add("glow");
        });
}

// Auto-start animation when page loads
window.addEventListener("load", () => {
    animateStar();
});

const animateStroke = (selector) => {
    const path = document.querySelector(selector);
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    return gsap.to(path, {
        strokeDashoffset: 0,
        duration: 0.8,
        ease: "none",
    });
};

Promise.all([animateStroke("#left-stroke"), animateStroke("#right-stroke")])
    .then(() => {
        gsap.to("#top-stroke", {
            opacity: 1,
            duration: 0.2,
            ease: "none",
        });
    })
    .then(() => {
        gsap.to("#gradient-stop", {
            duration: 1.5,
            ease: "none", // linear fill
            attr: {
                offset: "100%",
            },
        });
    });
