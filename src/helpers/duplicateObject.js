export const isDuplicate = (data, items) => {
  if (items.length < 0) {
    return;
  }
  return items.some(
    (item) => item.Title === data.Title && item.Year === data.Year
  );
};
