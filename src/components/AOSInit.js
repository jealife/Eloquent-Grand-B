"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: "ease-out-cubic",
            once: true,
            offset: 50,
        });
    }, []);

    return null;
}
