import React from "react";

function DemoOutput({testAttribute}) {
  console.log("DemoOutput Component running")
  return <p>This component always outputs the same words!</p>
}

export default React.memo(DemoOutput);
