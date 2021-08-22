import React, {useMemo} from "react";

function DemoOutput({ testAttribute }) {
  console.log("DemoOutput Component running");

  useMemo(()=>{
    
    return testAttribute.sort((num1,num2)=>{
      console.log("Sorting as we speak")
      return num1-num2
    })
  },[testAttribute]) // reruns only when testAttribute prop changes

  return <p>{testAttribute}</p>;
}

export default React.memo(DemoOutput);
