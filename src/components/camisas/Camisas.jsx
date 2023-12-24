const camisas = [
  {
    id: 1,
    nombre: "Camisa Rusty",
    precio: 1000,
    talles: ["M", "S", "XL"],
    imagen: "/images/Camisa_Modelo1.jpg",
  },
  {
    id: 2,
    nombre: "Camisa Rusty",
    precio: 1000,
    talles: ["M", "S", "XL"],
    imagen: "/images/Camisa_Modelo2.jpg",
  },
  {
    id: 3,
    nombre: "Camisa Rusty",
    precio: 1000,
    talles: ["M", "S", "XL"],
    imagen: "/images/Camisa_Modelo3.jpg",
  },
];
export const Camisas = () => {
  return (
    <>
      <div className="bg-black p-3 text-center">
        <h2 className="text-white mb-5">
          _ - _ - _ - _ - _ - _ - _ - _ - _ - C a m i s a s _ - _ - _ -_ - _ - _
          -_ - _ - _ -
        </h2>
        <div className="bg-white d-flex">
          <div className="container mt-3">
            <div className="row">
              {camisas.map((camisa) => (
                <div key={camisa.id} className="col-md-4 mb-3">
                  <div className="bg-black p-3">
                    <div className="bg-white d-flex">
                      <img
                        className="img-fluid"
                        src={camisa.imagen}
                        alt={camisa.nombre}
                        style={{ width: "180px" }}
                      />
                      <div className="ml-3">
                        <h3>{camisa.nombre}</h3>
                        <p>
                          <strong>Precio:</strong> ${camisa.precio}
                        </p>
                        <p>
                          <strong>Talles:</strong> {camisa.talles.join(" - ")}
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
