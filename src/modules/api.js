const end_point = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

async getData = () => {
  try {
    const response = await fetch('end_point',{
        method: 'POST',
        body: JSON.stringify({
          name: 'SpongeBob vs Simpsoms',
        }),
    });
    console.log(response);
  } else {
    console.log('Not working');
  }
}