import { useEffect, useState } from "react";

type BreakpointsType = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

interface UseWidthReturn {
  width: number;
  breakpoints: BreakpointsType;
  xs: boolean;
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
}

export function useWidth(): UseWidthReturn {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoints: BreakpointsType = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1500,
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    width,
    breakpoints,
    xs: width >= breakpoints.xs,
    sm: width >= breakpoints.sm,
    md: width >= breakpoints.md,
    lg: width >= breakpoints.lg,
    xl: width >= breakpoints.xl,
  };
}
