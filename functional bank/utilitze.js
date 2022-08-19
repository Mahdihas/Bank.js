
function getInputValuById(inputFieldId){
    const inputField            = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue       = parseFloat(inputFieldValueString);
    inputField.value = " ";
    return inputFieldValue;
}




function getElementValueById (elementId){
  const textElement         = document.getElementById(elementId);
  const elementValueStr = textElement.innerText;
  const elementValue   = parseFloat(elementValueStr);
  return elementValue ;


}
function setTextElementValueById(elementId, newValue){
  const textElemnet     = document.getElementById(elementId);
  textElemnet.innerText = newValue ;

}
