export function convertDate(date: string) {
  const newDate = new Date(date);
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(newDate);

  return formattedDate;
}
