/* eslint-disable react/jsx-key */
const remeras = [
  {
    id: 1,
    nombre: "Remera Rusty",
    precio: 1000,
    talles: ["M", "S", "XL"],
    imagen: "/images/Remera_Modelo.jpg",
  },
  {
    id: 2,
    nombre: "Remera Rusty",
    precio: 1000,
    talles: ["M", "S", "XL"],
    imagen: "/images/Remera_Modelo.jpg",
  },
  {
    id: 3,
    nombre: "Remera Rusty",
    precio: 1000,
    talles: ["M", "S", "XL"],
    imagen: "/images/Remera_Modelo.jpg",
  },
];
export const Remeras = () => {
  return (
    <>
      <div className="bg-black p-3 text-center">
        <h2 className="text-white mb-5 mt-3">
          _ - _ - _ - _ - _ - _ - _ - _ - _ - R e m e r a s _ - _ - _ -_ - _ - _
          -_ - _ - _ -
        </h2>
        <div className="bg-white d-flex">
          <div className="container mt-3">
            <div className="row">
              {remeras.map((remera) => (
                <div key={remera.id} className="col-md-4 mb-3">
                  <div className="bg-black p-3">
                    <div className="bg-white d-flex">
                      <img
                        className="img-fluid"
                        src={remera.imagen}
                        alt={remera.nombre}
                        style={{ width: "180px" }}
                      />
                      <div className="ml-3">
                        <h3>{remera.nombre}</h3>
                        <p>
                          <strong>Precio:</strong> ${remera.precio}
                        </p>
                        <p>
                          <strong>Talles:</strong> {remera.talles.join(" - ")}
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
