var boldButton = document.getElementById('bold')
              boldButton.addEventListener("click", addBold);

function addBold() {
  //Get the user input
  var textArea = document.getElementById("editorveld")
  textArea.style.fontWeight = "900";