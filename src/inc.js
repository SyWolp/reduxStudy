import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {up, down} from "./cSlice";


const Counter = () => {

  const [nValue, setNvalue] = useState(0);

  const dispatch = useDispatch();
  const count = useSelector(state => {
    console.log(state)
    return state.counter.value
  });

  const onChange = (e) => {
    setNvalue(e.target.value);
  }

  return (
    <div>
      <input value={nValue} type={'number'} onChange={onChange} />
      <br />
      <button
        onClick={() => {
          dispatch(up(parseInt(nValue)));
        }} >+
      </button>
      <button
        onClick={() => {
          dispatch(down(parseInt(nValue)));
        }}
      >
        -
      </button>
      {count}
    </div>
  )
}

export default Counter;