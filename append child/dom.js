var newItem=document.createElement('li');
newItem.className='list-item';

var text=document.createTextNode('Five');
newItem.appendChild(text);

var old=document.querySelector('.task-list');
old.appendChild(newItem);



