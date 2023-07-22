function formatDateToWords(dateString) {
  const daysOfWeek = [
  'domingo', 'lunes', 'martes', 'miércoles',
  'jueves', 'viernes', 'sábado'
  ];

  const months = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ];

  const parts = dateString.split('-');
  const day = parseInt(parts[0], 10);
  const monthIndex = parseInt(parts[1], 10) - 1;
  const year = parseInt(parts[2], 10);

  const dateObject = new Date(year, monthIndex, day);
  const dayOfWeekIndex = dateObject.getDay();
  const dayOfWeek = daysOfWeek[dayOfWeekIndex];

  const formattedDay = convertNumberToSpanishWords(day);
  const formattedDate = `${formattedDay} de ${months[monthIndex]} de ${convertYearToSpanishWords(year)}`;

  return formattedDate;
  }

  function convertNumberToSpanishWords(number) {
  const units = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
  const tens = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
  const exceptions = {
  10: 'diez',
  11: 'once',
  12: 'doce',
  13: 'trece',
  14: 'catorce',
  15: 'quince',
  20: 'veinte',
  };

  if (exceptions[number]) {
  return exceptions[number];
  } else if (number

  < 10) { return units[number]; } else if (number < 100) { const ten=tens[Math.floor(number / 10)]; const unit=units[number % 10]; return `${ten}${unit ? ` y ${unit}` : '' }`; } return number.toString(); } function convertYearToSpanishWords(year) { const thousands=['', 'mil' , 'dos mil' , 'tres mil' , 'cuatro mil' , 'cinco mil' , 'seis mil' , 'siete mil' , 'ocho mil' , 'nueve mil' ]; const hundreds=['', 'ciento' , 'doscientos' , 'trescientos' , 'cuatrocientos' , 'quinientos' , 'seiscientos' , 'setecientos' , 'ochocientos' , 'novecientos' ]; if (year < 10000) { const thousandsPart=thousands[Math.floor(year / 1000)]; const hundredsPart=hundreds[Math.floor((year % 1000) / 100)]; const unitsPart=convertNumberToSpanishWords(year % 100); let yearString='' ; if (thousandsPart) { yearString +=thousandsPart; } if (hundredsPart) { yearString +=` ${hundredsPart}`; } if (unitsPart) { yearString +=` ${unitsPart}`; } return yearString.trim(); } return year.toString(); }
