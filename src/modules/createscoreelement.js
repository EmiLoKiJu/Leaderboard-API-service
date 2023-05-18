const scoreElement = {
  name: '',
  score: 0,
  index: 0,
};

const createscoreelement = (str, num, arrayScores) => {
  const newscoreelement = Object.create(scoreElement);
  newscoreelement.name = str;
  newscoreelement.score = num;
  newscoreelement.index = arrayScores.length + 1;
  arrayScores.push(newscoreelement);
};

export default createscoreelement;