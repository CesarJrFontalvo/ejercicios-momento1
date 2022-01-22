let pieza =Number(prompt('Venta de llantas tipo carreras para motos\n\nEl valor por unidad es de: $300.000\nIngresa la cantidá de llantas a comprar.'));
let monto = pieza*300;



if (monto>500) {
    let pocentajeEmpresa = monto*0.55;
    let pocentajeBanco = monto*0.30;
    let pocentajefabricante = monto*0.15;
    let interesPrestamoFabricante=(pocentajefabricante*15)/100;
    let montoTotal = monto + interesPrestamoFabricante;

    alert(`${pieza} LLantas tienen un valor de $${monto}.000\n\nPorcentaje de inversión de la empresa es de: $${pocentajeEmpresa}.000\n Porcentaje de inversión del Banco es de: $${pocentajeBanco}.000\n Porcentaje de inversión del Fabricante es de: $${pocentajefabricante}.000\n Porcentaje del prestamo del fabricante es de: $${interesPrestamoFabricante}\n\n El monto total a pagar es de: $${montoTotal}  `)

} else {
    let pocentajeEmpresa = monto*0.70;
    let pocentajefabricante = monto*0.30;
    let interesPrestamoFabricante=(pocentajefabricante*30)/100;
    let montoTotal = monto + interesPrestamoFabricante;
    alert(`${pieza} LLanta tiene un valor de $${monto}.000\n\nPorcentaje de inversión de la empresa es de: $${pocentajeEmpresa}.000\n Porcentaje de inversión del Fabricante es de: $${pocentajefabricante}.000\n Porcentaje del prestamo del fabricante es de: $${interesPrestamoFabricante}.000\n\n El monto total a pagar es de: $${montoTotal}.000  `)

    
}

