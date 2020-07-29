URL = `https://hub-inmobiliaria.netlify.app/inmuebles.json`;

const getEstates = async () => {
  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw Error(response.statusText);
    }
    const data = await response.json();

    //console.log(response);
    //console.log(data);

    return data;
  } catch (error) {
    console.log(error);
    return "Error";
  }
};

export default getEstates;
