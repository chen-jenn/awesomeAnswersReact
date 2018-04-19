import React from "react" //whenever you use JSX you must import React so that the JSX gets translated to a method call

function Field(props){ //name that describes well what it is doing/showing; used to refactor repetitive code in your other components and helps with reusing styles
  return(
    <p className="Field">
      <strong style={{
        color: "white",
        backgroundColor: "maroon",
        borderRadius: "3px",
        padding: "0 4px"
      }}>{props.name}</strong> <em>{props.value}</em>
    </p>
  );
}

export {Field};
