import { Buzos } from "./components/buzos/Buzos";
import { Camisas } from "./components/camisas/Camisas";
import { Header } from "./components/header/Header";
import { Otros } from "./components/otros/Otros";
import { Pantalones } from "./components/pantalones/Pantalones";
import { Remeras } from "./components/remeras/Remeras";

export const BrokersApp = () => {
  return (
    <>
      <Header></Header>
      <div className="container">
        <h3>Brokers Surf Shop</h3>
        <Remeras />
        <Pantalones />
        <Camisas />
        <Buzos />
        <Otros />
      </div>
    </>
  );
};
