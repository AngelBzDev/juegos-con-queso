export const getGames = async () => {
  try {
    const respuesta = await fetch(
      "https://api.rawg.io/api/games?key=48add53f7d224aae88ebe6826f55af90",
      {
        method: "GET",
      }
    );

    const resultado = respuesta.json();

    return resultado;
  } catch (err) {
    return err;
  }
};
