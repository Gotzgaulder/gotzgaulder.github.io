var textFile = null,
makeTextFile = function(text) 
{
var data = new Blob([text], 
{
type: 'text/plain'
});
//если заменяем ранее сгенерированный файл
// 
if (textFile !== null) {
window.URL.revokeObjectURL(textFile);
}

textFile = window.URL.createObjectURL(data);

return textFile;
};


var create = document.getElementById('create');
var textbox = document.getElementById('textbox');

textbox.addEventListener('focus', function (event) 
{
create.style.display = 'block';
create.href = makeTextFile(''); //Создание блока с пустым текстом
});

textbox.addEventListener('change', function (event) 
{
create.href = makeTextFile(event.target.value); //Обновление значения атрибута при изменении
});