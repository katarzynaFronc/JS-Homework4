const slugify = (sentence) => sentence.toLowerCase().split(" ").join("-");
console.log(slugify("Top 10 my favourite songs"));
console.log(slugify("Name of my blog article"));
