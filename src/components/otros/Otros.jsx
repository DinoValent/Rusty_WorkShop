const otros = [
  {
    id: 1,
    nombre: "Otro Rusty",
    precio: 1000,
    talles: ["M", "S", "XL"],
    imagen: "/images/Otros_Modelo1.jpg",
  },
  {
    id: 2,
    nombre: "Otro Rusty",
    precio: 1000,
    talles: ["M", "S", "XL"],
    imagen: "/images/Otros_Modelo2.jpg",
  },
  {
    id: 3,
    nombre: "Otro Rusty",
    precio: 1000,
    talles: ["M", "S", "XL"],
    imagen: "/images/Otros_Modelo3.jpg",
  },
];
export const Otros = () => {
  return (
    <>
      <div className="bg-black p-3 text-center">
        <h2 className="text-white mb-5">
          _ - _ - _ - _ - _ - _ - _ - _ - _ - O t r o s _ - _ - _ -_ - _ - _ -_
          - _ - _ -
        </h2>
        <div className="bg-white d-flex">
          <div className="container mt-3">
            <div className="row">
              {otros.map((otro) => (
                <div key={otro.id} className="col-md-4 mb-3">
                  <div className="bg-black p-3">
                    <div className="bg-white d-flex">
                      <img
                        className="img-fluid"
                        src={otro.imagen}
                        alt={otro.nombre}
                        style={{ width: "180px" }}
                      />
                      <div className="ml-3">
                        <h3>{otro.nombre}</h3>
                        <p>
                          <strong>Precio:</strong> ${otro.precio}
                        </p>
                        <p>
                          <strong>Talles:</strong> {otro.talles.join(" - ")}
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
