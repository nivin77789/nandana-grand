import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";

export default function ScrollManager() {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        // Force scroll to top immediately on route change
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        // Prevent browser from restoring scroll position
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        // Ensure Lenis knows we are at top
        lenis.scrollTo(0, { immediate: true });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return null;
}
