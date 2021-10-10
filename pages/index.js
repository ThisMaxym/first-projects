import React, { useState } from "react";

export default function HomePage() {
  const [name, setName] = useState("maks");

  function handleClick() {
    setName("maciek");
  }

  return <div onClick={handleClick}>Hello {name}</div>;
}
