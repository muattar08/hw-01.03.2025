let names = ['Sunnat', 'Umid', 'Gafar', 'Shokhjahon', 'Islom', 'Muattar'];

let name = prompt('Your name: ').trim(); 

name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

if (names.includes(name)) {
    alert('Уже есть');
} else if (name.length < 7) {
    alert('Не достаточно символов');
} else {
    names.push(name);
    alert(`Добавлено: ${name}`);
}

console.log(names); 


