// Fonction pour formater le SSN au format français "x xx xx xx xxx xxx xx"
export const formatSSN = (value: string) => {
  // Supprimer tous les caractères non numériques
  const numbers = value.replace(/\D/g, '');

  // Limiter à 15 chiffres maximum
  const limitedNumbers = numbers.slice(0, 15);

  // Formater selon le pattern français
  let formatted = '';
  for (let i = 0; i < limitedNumbers.length; i++) {
    if (i === 1 || i === 3 || i === 5 || i === 7 || i === 10 || i === 13) {
      formatted += ' ';
    }
    formatted += limitedNumbers[i];
  }

  return formatted;
};

// Fonction pour supprimer le formatage et renvoyer seulement les chiffres
export const unformatSSN = (formattedSSN: string) => {
  return formattedSSN.replace(/\s/g, '');
};
