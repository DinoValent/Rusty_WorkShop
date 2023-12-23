import { Header } from "./components/header/Header";
import { Remeras } from "./components/remeras/Remeras";

export const BrokersApp = () => {
  return (
    <>
      <div className="container">
        <Header></Header>
        <h3>Brokers Surf Shop</h3>
        <Remeras />
      </div>
    </>
  );
};
