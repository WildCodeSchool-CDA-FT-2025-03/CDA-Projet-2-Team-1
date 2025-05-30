function createExpireDateUtils() {
  return new Date(Date.now() + 3600000); // Expiration dans 1h
}

export { createExpireDateUtils };

function createDate_Number_Utils() {
  const dateNow: number = Math.floor(Date.now() / 1000); // Date actuelle
  return dateNow; // Date actuelle en timestamp UNIX
}

export { createDate_Number_Utils };
