export const formatDate = (dateString: string) => {
  const formattedDate = `${dateString.slice(0, 4)}-${dateString.slice(
    4,
    6
  )}-${dateString.slice(6)}`;
  return new Date(formattedDate);
};
