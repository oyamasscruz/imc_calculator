export default function Result({ a, b }) {
  function calculate(a, b) {
    let mult = a * a;
    return Number(b / mult).toFixed(2);
  }

  return (
    <>
      <h4 className="font-bold">IMC = {calculate(a, b)}</h4>
      <br />
      {calculate(a, b) < 18.5 && "Você está abaixo do peso"}
      {calculate(a, b) < 24.9 && "Seu peso está normal"}
      {calculate(a, b) < 29.9 && "Você está com obesidade grau 1"}
      {calculate(a, b) < 39.9 && "Você está com obesidade grau 2"}
      {calculate(a, b) >= 39.9 && "Você está com obesidade grau 3"}
    </>
  );
}
