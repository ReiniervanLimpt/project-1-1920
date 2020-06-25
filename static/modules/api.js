const cors = 'https://cors-anywhere.herokuapp.com/';
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
const key = '0076bc3bc11d080e07a303360178002a';
const secret = '187b973dc49e054fa7635313a9c8540f';
const detail = 'Default';


async function getData(userInput) {

  let retrievedData = ""

  const query = (userInput);
  const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;
  const config = {
    Authorization: `Bearer ${secret}`
  };

  if (localStorage.getItem("'" + userInput + "'") === null) {
    console.log("nee hehe")
    const response = await (fetch(url, config)
      .then(response => {
        return response.json()
      })
      .then(data => {
        localStorage.setItem("'" + userInput + "'", JSON.stringify(data.results));
        return data.results
      })
      .catch(err => {
        console.log(err)
      })
    )
    return response
  } else {
    console.log("ja man")
    const retrievedData = await JSON.parse(localStorage.getItem("'" + userInput + "'"))
    return retrievedData
  }
}

export default getData;