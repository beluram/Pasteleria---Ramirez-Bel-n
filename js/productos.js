const productos = [
    {
      id: 1,
      nombre: 'Lemon Pie',
      valor: 1500,
      imagen: "../assets/img/lemon-pie.jpg",
    },
    {
      id: 2,
      nombre: 'Chocotorta',
      valor: 1400,
      imagen: "../assets/img/chocotorta.jpg"
    },
    {
      id: 3,
      nombre: 'Pastafrola',
      valor: 1200,
      imagen: "../assets/img/pastafrola.jpg"
    },
    {
      id: 4,
      nombre: 'Rogel',
      valor: 1500,
      imagen: "../assets/img/rogel.jpg"
    },
  ];
  
  /// localstorage ////
  function obtenerProductosLS(){
    return JSON.parse(localStorage.getItem("productos")) || [];
  }
  
  function guardarProductosLS(productos){
    localStorage.setItem("productos", JSON.stringify(productos));
  }

  function buscarProducto(id){
    let producto = obtenerProductosLS();
    return productos.find(x => x.id == id);
  }