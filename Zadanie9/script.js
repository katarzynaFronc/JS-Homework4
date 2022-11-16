const toUpperCase = (sentence) => {
  const words = sentence.split(" ");
  return words.map((word) => word[0].toUpperCase() + word.substring(1)).join(" ");
};
console.log(toUpperCase("top 10 my favourite songs"));
console.log(toUpperCase("Name of my Blog article"));
