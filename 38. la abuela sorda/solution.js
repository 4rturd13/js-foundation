const grandMother = (string) => {
  if (string === "") {
    return "Do you say something?";
  } else if (string === string.toUpperCase()) {
    return "Ohh yes, apples!";
  } else {
    return "Speak harder son";
  }
};

grandMother("HOLA");
