document.addEventListener("DOMContentLoaded", () => {
    let arrCards = JSON.parse(sessionStorage.getItem("arrCards"))
    let tBody = document.getElementById("t-body")
    arrCards.forEach((element, index) => {
        // Creando tr 
        const rowCarrito = document.createElement("tr");
        // Creando todos los td de la tabla
        const tdNum = document.createElement("td");
        const tdProduct = document.createElement("td");
        const tdCantidad = document.createElement("td");
        const tdButtons = document.createElement("td");
        const tdPrecio = document.createElement("td");

        // Creando etiquetas buttons
        const buttonSum = document.createElement("button");
        const buttonRes = document.createElement("button");
        // Añadiendo contenido (+ y -) a los botones
        buttonSum.textContent = "+";
        buttonRes.textContent = "-";
        // Añadiendo los botones al tdButtons
        tdButtons.appendChild(buttonSum);
        tdButtons.appendChild(buttonRes);

        // Añadiendo contenido a los td 
        tdNum.textContent = index + 1;
        tdProduct.textContent = `${element.type} de talla ${element.talla}`;
        tdCantidad.textContent = 1;
        tdPrecio.textContent = element.price;

        // Añadiendo los td al tr 
        rowCarrito.appendChild(tdNum);
        rowCarrito.appendChild(tdProduct);
        rowCarrito.appendChild(tdCantidad);
        rowCarrito.appendChild(tdButtons);
        rowCarrito.appendChild(tdPrecio);

        // Añadiendo al tBody los rows
        tBody.appendChild(rowCarrito)





    });
})