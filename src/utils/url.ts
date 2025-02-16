export const generateQueryString = (
  params: Record<string, string | number | undefined | boolean>
) => {
  return Object.entries(params)
    .filter(([_, value]) => value !== undefined)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
    )
    .join("&");
};
