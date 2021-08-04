const measureKelvin = function () {
  const measurment = {
    type: "type",
    unit: "celsius",

    value: Number(prompt("Degrees celsius")),
  };

  console.table(measurment);
  const kelvin = measurment.value + 273;
  return kelvin;
};
console.log(measureKelvin());
