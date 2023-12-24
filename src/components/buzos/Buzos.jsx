const buzos = [
  {
    id: 1,
    nombre: "Buzos Rusty",
    precio: 1000,
    talles: ["M", "S", "XL"],
    imagen: "/images/Buzos_Modelo1.jpg",
  },
  {
    id: 2,
    nombre: "Buzos Rusty",
    precio: 1000,
    talles: ["M", "S", "XL"],
    imagen: "/images/Buzos_Modelo2.jpg",
  },
  {
    id: 3,
    nombre: "Buzos Rusty",
    precio: 1000,
    talles: ["M", "S", "XL"],
    imagen: "/images/Buzos_Modelo1.jpg",
  },
];
export const Buzos = () => {
  return (
    <>
      <div className="bg-black p-3 text-center">
        <h2 className="text-white mb-5">
          _ - _ - _ - _ - _ - _ - _ - _ - _ - B u z o s _ - _ - _ -_ - _ - _ -_
          - _ - _ -
        </h2>
        <div className="bg-white d-flex">
          <div className="container mt-3">
            <div className="row">
              {buzos.map((buzo) => (
                <div key={buzo.id} className="col-md-4 mb-3">
                  <div className="bg-black p-3">
                    <div className="bg-white d-flex">
                      <img
                        className="img-fluid"
                        src={buzo.imagen}
                        alt={buzo.nombre}
                        style={{ width: "180px" }}
                      />
                      <div className="ml-3">
                        <h3>{buzo.nombre}</h3>
                        <p>
                          <strong>Precio:</strong> ${buzo.precio}
                        </p>
                        <p>
                          <strong>Talles:</strong> {buzo.talles.join(" - ")}
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
