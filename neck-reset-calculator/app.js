function NeckResetApp() {
  const [heelLength, setHeelLength] = React.useState("89");
  const [angleDeg, setAngleDeg] = React.useState("0.5");
  const [scaleLength, setScaleLength] = React.useState("632");

  const heel = parseFloat(heelLength);
  const angle = parseFloat(angleDeg);
  const scale = parseFloat(scaleLength);
  const angleRad = angle * Math.PI / 180;
  const shaved = heel * Math.tan(angleRad);
  const stringChange = (scale * Math.tan(angleRad)) / 2;

  return (
    React.createElement("div", { className: "max-w-md mx-auto p-6 font-sans" },
      React.createElement("h1", { className: "text-2xl font-bold mb-6" }, "ネックリセット計算機"),
      React.createElement("div", { className: "space-y-4" },
        ["ヒール長 (mm)", "角度の変更量 (°)", "スケール長 (mm)"].map((label, i) =>
          React.createElement("div", {}, [
            React.createElement("label", { className: "block text-sm" }, label),
            React.createElement("input", {
              className: "border rounded w-full p-2",
              value: i === 0 ? heelLength : i === 1 ? angleDeg : scaleLength,
              onChange: (e) => {
                const value = e.target.value;
                if (i === 0) setHeelLength(value);
                else if (i === 1) setAngleDeg(value);
                else setScaleLength(value);
              },
              inputMode: "decimal"
            })
          ])
        )
      ),
      React.createElement("div", { className: "mt-6 bg-gray-100 rounded p-4" },
        React.createElement("p", {}, `🔧 削るべきヒールの厚み: ${!isNaN(shaved) ? shaved.toFixed(2) : "-"} mm`),
        React.createElement("p", {}, `🎸 弦高の変化量: ${!isNaN(stringChange) ? stringChange.toFixed(2) : "-"} mm`)
      )
    )
  );
}

ReactDOM.render(React.createElement(NeckResetApp), document.getElementById("root"));