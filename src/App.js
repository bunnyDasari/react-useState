import { useState } from "react";

const App = () => {
  const [name, onChangeEvnet] = useState("");
  const changeFn = (event) => onChangeEvnet(event.target.value);
  return (
    <div>
      <input type="text" onChange={changeFn} />
      <p>{name}</p>
    </div>
  );
};
export default App;
