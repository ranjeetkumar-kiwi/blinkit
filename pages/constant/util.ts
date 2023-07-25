export const getPageTitle = (pathname: string): string => {
  return pathname.replace(/\//g, "").replace(/^\w/, (c) => c.toUpperCase());
};
