export async function apiPets() {
  const response = await fetch("https://60fe0c611fa9e90017c70fda.mockapi.io/pets");
  const json = response.json();
  //console.log(json[0].tips.text);
  return json;
} 

 

 
