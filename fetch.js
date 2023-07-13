const url = "http://api.gael.cloud/general/public/sismos";
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));