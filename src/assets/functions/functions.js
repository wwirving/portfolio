export const getID = (string) => {
  let startPosition = string.indexOf("/d/");
  let endPosition = string.indexOf("/view");
  let id = string.slice(startPosition + 3, endPosition);
  return "https://drive.google.com/uc?export=view&id=" + id;
};
