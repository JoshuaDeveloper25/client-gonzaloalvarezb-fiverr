function formatDate(date) {
  const options = { year: "numeric", month: "long", day: "2-digit" };
  const formattedDate = new Date(date).toLocaleDateString("es-ES", options);

  return formattedDate;
}

export default formatDate;
