const end_point = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

export const postGame = async (game) => {
  const response = await fetch('end_point',{
    method: 'POST',
    body: JSON.stringify({
        name: `${game}`,
    }),
  });
  console.log(response);
}