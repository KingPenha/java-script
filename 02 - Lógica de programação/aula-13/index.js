/*For clássico*/

//i - index


for (let i = 0; i <= 5; i++){
    console.log('Linha', i);
}


for (let i = -100; i <= 100; i+=10){
    console.log('Linha', i);
}

for (let i = 0; i <= 10; i++){
    const par = i % 2 === 0;
    console.log(i, par);
    
}
for (let i = 0; i <= 10; i++){
    const pare = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, pare);
}

const frutas = ['Pera', 'Uva', 'Maçã', 'Mamão', 'Laranja'];

for (let i = 0; i < frutas.length; i++){
    
    console.log('Índice', i, frutas[i]);
}