const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

export const createGame = async (gameName) => {
  try {
    const res = await fetch(`${baseUrl}games/`, {
      method: 'POST',
      body: JSON.stringify({ name: gameName }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return await res.json();
  } catch (error) {
    return error;
  }
};

export const getScores = async (gameId) => {
  try {
    const res = await fetch(`${baseUrl}games/${gameId}/scores/`);
    return await res.json();
  } catch (error) {
    return error;
  }
};

export const createScore = async (gameId, username, score) => {
  try {
    const res = await fetch(`${baseUrl}games/${gameId}/scores/`, {
      method: 'POST',
      body: JSON.stringify({
        user: username,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return await res.json();
  } catch (error) {
    return error;
  }
};