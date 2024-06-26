export const getNameInitials = (name: string, count = 2) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");
  const filtered = initials.replace(/[^a-zA-Z]/g, "");
  const newName = filtered.slice(0, count).toUpperCase();
  return newName;
};
