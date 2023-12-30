input = document.getElementById('textInput');
function copySelectedText() {
  // Отримати виділений текст
  var selectedText = getSelectedText();
  // Записати виділений текст в елемент <input>
  input.value = selectedText;
}
function clearInput(){
  input.value = "";
}
function getSelectedText() {
  var selectedText = '';
  if (window.getSelection) {
    selectedText = window.getSelection().toString();
  } else if (document.selection && document.selection.type !== 'Control') {
    selectedText = document.selection.createRange().text;
  }
  return selectedText;
}