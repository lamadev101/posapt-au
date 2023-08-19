
export const tagExtractor = (description)=>{
  const tempContainer = document.createElement('div');
  tempContainer.innerHTML = description

  const h2Elements = tempContainer.getElementsByTagName('h2');

  const extractedH2Tags = Array.from(h2Elements).map(element => element.textContent);

  console.log("extectedH2Tags: " + extractedH2Tags);
}