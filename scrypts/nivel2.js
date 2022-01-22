let valor = Number(prompt('Ingresa el numero a multiplicar'));

for (let index = 1; index <= 10; index++) {
    multi = valor*index;
    document.write(`&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
    
                    ${valor} X ${index} = ${multi} <br> 
                    
                    `)
}