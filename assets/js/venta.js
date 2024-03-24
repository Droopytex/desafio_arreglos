// ciclo propiedades en venta
const propVenta = ["vent1", "vent2", "vent3", "vent4"];
console.log(propVenta[0]);

for (let enVenta of propVenta) {
  console.log(enVenta);
}

const titulo = {
  titulo: "Propiedades en venta",
};
console.log(titulo);
console.log(titulo.titulo, "es el titulo de la sección de ventas");

const ventaDOM = document.getElementById("venta");
const tituloSection = `
<section class="venta">
<h2>${titulo.titulo}</h2>   
</section>
`;

ventaDOM.innerHTML = tituloSection;

const propiedades_venta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial ",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    bath: 4,
    costo: 5.0,
    smoke: false,
    pets: false,
  },

  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 2,
    costo: 1.2,
    smoke: true,
    pets: true,
  },

  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue,Skyview City, CA 56789",
    habitaciones: 3,
    costo: 4.5,
    smoke: false,
    pets: true,
  },
];

const card1 = document.getElementById("vent1");
propiedades_venta.forEach((propiedad) => {
  card1.innerHTML += `
<div class="card">
<img src="${propiedades_venta.src}" </img>
<h5 class="card-title">${propiedades_venta.nombre}</h5>
<p class="card-text">${propiedades_venta.descripcion}</p>
<i class="fas fa-map-marker-alt">${propiedades_venta.ubicacion}</i>
<i class="fas fa-bed">${propiedades_venta.habitaciones}</i>
<i class="fas fa-bath">${propiedades_venta.bath}</i>
</div>
`;
});

// const card1 = {
//   nombre: "Apartamento de lujo en zona exclusiva",
//   src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
//   descripcion:
//     "Este apartamento de lujo está ubicado en una exclusiva zona residencial ",
//   ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
//   habitaciones: 4,
//   costo: 5.0,
//   smoke: false,
//   pets: false,
// };
// console.log(card1);
// console.log(card1.nombre, "es el nombre de la de la propiedad en venta:");

// const datosCard1 = document.getElementById("vent1");
// const infoC1 = `
// <div class = "card">
// <h5>${card1.nombre}</h5>
// </div>
// `;
// datosCard1.innerHTML = infoC1;
