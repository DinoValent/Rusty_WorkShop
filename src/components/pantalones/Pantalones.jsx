const pantalones = [
  {
    id: 1,
    nombre: "Pantalon Rusty",
    precio: 1000,
    talles: ["M", "S", "XL"],
    imagen: "/images/Pantalon_Modelo1.jpg",
  },
  {
    id: 2,
    nombre: "Pantalon Rusty",
    precio: 1000,
    talles: ["M", "S", "XL"],
    imagen: "/images/Pantalon_Modelo2.jpg",
  },
  {
    id: 3,
    nombre: "Pantalon Rusty",
    precio: 1000,
    talles: ["M", "S", "XL"],
    imagen: "/images/Pantalon_Modelo3.jpg",
  },
];
export const Pantalones = () => {
  return (
    <>
      <div className="bg-black p-3 text-center">
        <h2 className="text-white mb-5">
          _ - _ - _ - _ - _ - _ - _ - _ - _ - P a n t a l o n e s _ - _ - _ -_ -
          _ - _ -_ - _ - _ -
        </h2>
        <div className="bg-white d-flex">
          <div className="container mt-3">
            <div className="row">
              {pantalones.map((pantalon) => (
                <div key={pantalon.id} className="col-md-4 mb-3">
                  <div className="bg-black p-3">
                    <div className="bg-white d-flex">
                      <img
                        className="img-fluid"
                        src={pantalon.imagen}
                        alt={pantalon.nombre}
                        style={{ width: "180px" }}
                      />
                      <div className="ml-3">
                        <h3>{pantalon.nombre}</h3>
                        <p>
                          <strong>Precio:</strong> ${pantalon.precio}
                        </p>
                        <p>
                          <strong>Talles:</strong> {pantalon.talles.join(" - ")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
