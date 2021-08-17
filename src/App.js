import "./App.css";
import $ from "jquery";
import { useEffect, useState, Fragment } from "react";

function App() {
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    $("#form").css("display", "none");
  }, []);

  const clickEnterHandler = (event) => {
    $("#form").css("display", "block");
    setDisplay(false);
  };

  const clickleaveHandler = (event) => {
    $("#form").css("display", "None");
    setDisplay(true);
  };

  return (
    <div>
      {display ? (
        <Fragment>
          <h1>Welcome to the transferMe volunteer platform!</h1>
          <input
            type="button"
            value="Let's Get Started!"
            onClick={clickEnterHandler}
          />
        </Fragment>
      ) : (
        <Fragment>
          <input
            type="button"
            value="Back to home page"
            onClick={clickleaveHandler}
          />
        </Fragment>
      )}
    </div>
  );
}

export default App;
