import { useState } from "react";
import Input from "./Input";
import Result from "./Result";

export default function Calculator() {
  const [userHeight, setUserHeight] = useState();
  const [userWeight, setUserWeight] = useState();
  const [click, setClick] = useState(false);

  function heightHandler(value) {
    setUserHeight(Number(value));
  }

  function weightHandler(value) {
    setUserWeight(Number(value));
  }

  function clickHandler() {
    setClick((prev) => !prev);
  }

  return (
    <section className="w-full justify-items-center mt-8 ">
      <div className="flex flex-col w-lg items-center rounded-4xl shadow-lg/30 gap-4 p-20 bg-white">
        <h3 className="text-4xl w-md text-center">
          Please insert your height and weight
        </h3>
        <Input
          title="Height (m)"
          onWriting={(event) => heightHandler(event.target.value)}
        />
        <Input
          title="Weight (Kg)"
          onWriting={(event) => weightHandler(event.target.value)}
        />
        <button
          onClick={clickHandler}
          className="bg-sky-600 p-2 w-100% text-white font-bold hover:bg-sky-800 rounded-lg w-md cursor-pointer"
        >
          Calculate
        </button>
        {click && (
          <p className="bg-blue-200 rounded-md w-md p-5">
            <Result a={userHeight} b={userWeight} />
          </p>
        )}
      </div>
    </section>
  );
}
