const endpoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const gameID = 'Pde9Q6MGmHtaoQtx74V1'; // SpongeBob vs Simpsom

export const postScore = async (name, score) => {
  const response = await fetch(`${endpoint}${gameID}/scores/`, {
    method: 'POST',
    body: JSON.stringify({
      user: `${name}`,
      score: `${score}`,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.json();
  return data;
};

export const getScores = async () => {
  const response = await fetch(`${endpoint}${gameID}/scores/`);
  const data = await response.json();
  return data;
};