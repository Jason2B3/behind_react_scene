import React from "react";

function Button(props) {
  console.log("Button Component running");
  return <button onClick={props.onClick}>{props.children}</button>;
}

export default React.memo(Button);
