import { useState } from "react";
import { Buttons } from "./Buttons";

export const Header = () => {
  const [mode, setMode] = useState(false);

  const handlerMode = () => {
    if (mode == false) {
      setMode(true);
    } else {
      setMode(false);
    }
  };

  return (
    <>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-6 col-ml-1 text-center">
          {mode === false ? (
            <img
              className="img-fluid"
              src="/images/rusty_white.png"
              alt="Header"
              style={{ width: "180px" }}
            />
          ) : (
            <img
              className="img-fluid"
              src="/images/rusty_black.png"
              alt="Header"
              style={{ width: "180px" }}
            />
          )}
        </div>
        <div className="col-md-1 text-center mt-3">
          <button onClick={handlerMode} className="btn">
            {mode === false ? (
              <img
                className="img-fluid"
                src="/images/Screenshot_2.png"
                alt="Header"
                style={{ width: "180px" }}
              />
            ) : (
              <img
                className="img-fluid"
                src="/images/Screenshot_1.png"
                alt="Header"
                style={{ width: "180px" }}
              />
            )}
          </button>
        </div>
      </div>
      <Buttons />
    </>
  );
};
