import { useEffect, useState } from "react";

export function useDeviceType() {
  const [device, setDevice] = useState<"desktop" | "tablet" | "mobile">(
    "desktop"
  );

  useEffect(() => {
    const checkDevice = () => {
      if (window.innerWidth >= 1024) setDevice("desktop");
      else if (window.innerWidth >= 768) setDevice("tablet");
      else setDevice("mobile");
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return device;
}
