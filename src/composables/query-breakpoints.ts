export const breakpointsEnum = {
  xl: 1600,
  lg: 1199,
  md: 991,
  sm: 767,
  xs: 575,
};

export function useQueryBreakpoints() {
  const breakpoints = reactive(useBreakpoints(breakpointsEnum));

  // Mobile
  const isMobile = breakpoints.smaller("sm");
  // padEnd, tip
  const isPad = breakpoints.between("sm", "md");
  // pcEnd, tip
  const isDesktop = breakpoints.greater("md");

  return {
    breakpoints,
    isMobile,
    isPad,
    isDesktop,
  };
}
