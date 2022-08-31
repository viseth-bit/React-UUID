import { useState } from "react";
import "./App.css";
function UUID() {
  const [uuIds, setUuIds] = useState([crypto.randomUUID()]);
  const [amountOfUuIdsToGenerate, setAmountOfUuIdsToGenerate] = useState(1);
  return (
    <div className="App-header">
      <div className=" input-group col-md-5 text-right">
        <div className="input-group">
          <h3>Generate UUID</h3>
        </div>
        <input
          className="form-control"
          value={amountOfUuIdsToGenerate}
          onChange={(e) => {
            setAmountOfUuIdsToGenerate(e.target.value);
            setUuIds([]);
          }}
          type="number"
        />
        <button
          className="btn btn-light"
          onClick={() => {
            let nextUuIds = [];
            for (let i = 0; i < amountOfUuIdsToGenerate; i++) {
              nextUuIds.push(crypto.randomUUID());
            }
            setUuIds(nextUuIds);
          }}
        >
          {"       "}
          Generate{"      "}
        </button>
      </div>

      {uuIds && (
        <div style={{ padding: "50px" }}>
          <table
            style={{ minWidth: 600, color: "white" }}
            className="table col-md-4"
          >
            {uuIds.map((uuId, index) => {
              return (
                <tr style={{ minWidth: 600 }}>
                  <td
                    style={{
                      fontSize: 30,
                      verticalAlign: "middle",
                      margin: "auto",
                    }}
                  >
                    {index + 1}{" "}
                  </td>
                  <td style={{ fontSize: 20, verticalAlign: "middle" }}>
                    {uuId}
                  </td>

                  <td style={{ margin: "auto", verticalAlign: "middle" }}>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(uuId);
                      }}
                      className="btn btn-light"
                    >
                      {" "}
                      Copy{" "}
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      )}
    </div>
  );
}
export default UUID;
