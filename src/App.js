import $ from "jquery";
import { useEffect, useState, Fragment } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    $("#form").css("display", "none");
  }, []);

  const clickEnterHandler = (event) => {
    $("#form").css("display", "block");
    $("#form").addClass("animation");
    setDisplay(false);
  };

  const clickleaveHandler = (event) => {
    $("#form").css("display", "None");
    setDisplay(true);
  };

  return (
    <Fragment>
      {display ? (
        <div className={"home"}>
          <h1>Welcome to the transferMe volunteer platform!</h1>
          <input
            className={"prompt"}
            type="button"
            value="Let's Get Started!"
            onClick={clickEnterHandler}
          />
        </div>
      ) : (
        <div>
          <input
            className={"animation"}
            type="button"
            value="Back to home page"
            onClick={clickleaveHandler}
          />
        </div>
      )}
    </Fragment>
  );
}

export default App;
