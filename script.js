// +-----------------------+
// |                       |
// | JS PARA EL TO-DO LIST |
// |                       |
// +-----------------------+

// crear las variables
const input = document.querySelector(".input");
const boton_agregar = document.querySelector(".boton-agregar");
const container = document.querySelector(".container");

console.log(input);
console.log(input.value);

const chequearInput = () => {
    console.log(input.value);
    let item = new Item(input.value);
};

// creador de la Clase
class Item {
    constructor(valor) {
        this.valor = valor;
        this.crearDiv(valor);
    }

    crearDiv(valor) {

        const desabilitar = () => {
         if (inputItem.disabled) {
            inputItem.disabled = false;
            inputItem.style.backgroundColor = "white";
            botonEditar.innerHTML = `<i class="fas fa-lock-open"></i>`;
         } else {
            inputItem.disabled = true;
            inputItem.style.backgroundColor = "bisque";
            botonEditar.innerHTML = `<i class="fas fa-lock"></i>`;
         }
        }
        // crea texto del item
        let inputItem = document.createElement("input");
        inputItem.disabled = true;
        inputItem.classList.add("item-input");
        inputItem.value = valor;

        let div = document.createElement("div");
        div.classList.add("item");

        // crea boton EDITAR
        let botonEditar = document.createElement("button");
        botonEditar.innerHTML = `<i class="fas fa-lock"></i>`;
        botonEditar.classList.add("boton-editar");

        botonEditar.addEventListener("click", () => {
               desabilitar();     
        });

        // crea el boton BORRAR
        let botonRemover = document.createElement("button");
        botonRemover.innerHTML = `<i class="fas fa-trash"></i>`;
        botonRemover.classList.add("boton-remover");

        botonRemover.addEventListener("click", () => {
            container.removeChild(div);
        });

        // agrega el div
        div.appendChild(inputItem);
        div.appendChild(botonEditar);
        div.appendChild(botonRemover);

        container.appendChild(div);
    }
}

boton_agregar.addEventListener("click", () => {
   if (input.value != "") {
      chequearInput();
      input.value = "";
   } else {
      alert("La tarea no puede estar vacia");
   } 
});

/*
<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>to-do-list-22-03-23</title>
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
   <style>

   </style>
</head>

<body>
   <h1>cosas para hacer</h1>
   <div class="input-div">
      <input type="text" class="input" placeholder="Tarea a agregar">
      <button class="boton-agregar">
         <i class="bi bi-plus-circle-fill"></i>
      </button>
   </div>
   <div class="container">
      <!-- <div class="item">
         <input type="text" class="item-input" disabled value="Regar las plantas">
         <button class="boton-editar">
            <i class="bi bi-pencil"></i>
            <i class="bi bi-pencil-fill"></i>
         </button>
         <button class="boton-remover">
            <i class="bi bi-trash3-fill"></i>
         </button>
      </div> -->
   </div>
   <script>
      // Clase Item
      // Para empezar, seleccionarás los elementos del "input" principal. 
      // Luego, continuarás con el "boton-agregar" y el "container".
      const inputPrincipal = document.querySelector('.input');
      const botonAgregar = document.querySelector('.boton-agregar');
      const container = document.querySelector('.container');
      let tareaAAgregar;

      inputPrincipal.addEventListener('keydown', function (event) {
         if (event.key === 'Enter') {
            inputPrincipal.value === '' ? alert(`La tarea no puede estar vacia, agregue una`) : tareaAAgregar = capturarTarea();
            inputPrincipal.value = '';
         }
      })

      botonAgregar.addEventListener('click', function () {
         inputPrincipal.value === '' ? alert(`La tarea no puede estar vacia, agregue una`) : tareaAAgregar = capturarTarea();
         inputPrincipal.value = '';
      });

      function capturarTarea() {
         return inputPrincipal.value;
      }

      console.info(tareaAAgregar);

      class Item {

         constructor(tareaAAgregar) {
            this.nuevaTarea = tareaAAgregar;
            // console.info(tareaAAgregar);
            this.crearDiv(nuevaTarea)
         }

         // ¿Cómo Debe Ser El div?            
         crearDiv(nuevaTarea) {
            
            // Método crearDiv (Parte 1)
            let inputItem = document.createElement('input');
            inputItem.setAttribute('type', 'text');
            inputItem.classList.add('item-imput');
            inputItem.setAttribute('disabled', 'true');
            inputItem.value = nuevaTarea;
            
            let item = document.createElement('div');
            item.classList.add('item');

            // Trabajar Con Botones
            // Botón "EDITAR"
            let botonEditar = document.createElement('button');
            botonEditar.innerHTML = '<i class="bi bi-pencil"></i>';
            botonEditar.classList.add('boton-editar');

            // Botón "REMOVER"
            let botonRemover = document.createElement('button');
            botonRemover.innerHTML = '<i class="bi bi-trash3-fill"></i>';
            botonRemover.classList.add('boton-remover');

            // Agregar Elementos A La Lista
            item.appendChild(inputItem);
            item.appendChild(botonEditar);
            item.appendChild(botonRemover);
            container.appendChild(item);

            // Método crearDiv (Parte 2)
            botonEditar.addEventListener('click', function(){
               console.log("Hice click en el boton editar");
            })
         }
      }

      // Verificar El Input
      function chequearInput(){

      }

   </script>
</body>

</html>,
*/