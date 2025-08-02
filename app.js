import React, { useState } from "react";
import ReactDOM from "react-dom";

function NeckResetApp() {
  const [heelLength, setHeelLength] = useState("89");
  const [angleDeg, setAngleDeg] = useState("0.5");
  const [scaleLength, setScaleLength] = useState("632");

  const heel = parseFloat(heelLength);
  const angle = parseFloat(angleDeg);
  const scale = parseFloat(scaleLength);
  const angleRad = angle * Math.PI / 180;
  const shaved = heel * Math.tan(angleRad);
  const stringChange = (scale * Math.tan(angleRad)) / 2;

  return (
    <div className="max-w-md mx-auto p-6 font-sans">
      <h1 className="text-2xl font-bold mb-6">ネックリセット計算機</h1>

      <div className="space-y-4">
        <div>
          <label className="block text-sm">ヒール長 (mm)</label>
          <input
            className="border rounded w-full p-2"
            value={heelLength}
            onChange={(e) => setHeelLength(e.target.value)}
            inputMode="decimal"
          />
        </div>

        <div>
          <label className="block text-sm">角度の変更量 (°)</label>
          <input
            className="border rounded w-full p-2"
            value={angleDeg}
            onChange={(e) => setAngleDeg(e.target.value)}
            inputMode="decimal"
          />
        </div>

        <div>
          <label className="block text-sm">スケール長 (mm)</label>
          <input
            className="border rounded w-full p-2"
            value={scaleLength}
            onChange={(e) => setScaleLength(e.target.value)}
            inputMode="decimal"
          />
        </div>
      </div>

      <div className="mt-6 bg-gray-100 rounded p-4">
        <p>🔧 削るべきヒールの厚み: <strong>{!isNaN(shaved) ? shaved.toFixed(2) : "-"} mm</strong></p>
        <p>🎸 弦高の変化量: <strong>{!isNaN(stringChange) ? stringChange.toFixed(2) : "-"} mm</strong></p>
      </div>
    </div>
  );
}

ReactDOM.render(<NeckResetApp />, document.getElementById("root"));
