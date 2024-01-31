import "../styles/Recommended.css";
import data from "../data.json"
import Header from "../componens/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Recommended = ({setGoal, setStart}) => {
    const navigate = useNavigate();
    const colors = ["#B22222", "#FFD700", "#FFFF00", "#9ACD32", "#2E8B57", "#00BFFF", "#4682B4", "#800080"];
    const [recStart, setRecStart] = useState(null);
    const [recGoal, setRecGoal] = useState(null);
    const tableClicked = (e) => {
        const item = e.target.textContent
        if (!recStart) {
            (recGoal === item ? setRecGoal(null) : setRecStart(item));
        } else {
            (recStart === item ? setRecStart(null) : (recGoal === item ? setRecGoal(null) : setRecGoal(item)));
        }
        console.log(e.target.textContent);
    }
    const bottonStyle = {
        position: "absolute",
        left: "570px",
        top: "80px",
    }

    const svgStyle = {
        position: "absolute",
        left: "900px",
        top: "100px",
        width: "30%",
        height: "15%"
    }

    return (
        <div>
            <header>
                <Header />
                <div>
                    <svg style={svgStyle}>
                        <text textAnchor="middle" dominantBaseline="middle" x={100} y={50}>スタート:</text>
                        <rect x="140" y="40" width="50" height="20" fill="red" />
                        <text textAnchor="middle" dominantBaseline="middle" x={270} y={50}>ゴール:</text>
                        <rect x="300" y="40" width="50" height="20" fill="blue" />
                    </svg>
                    <button　className={recStart && recGoal ? "hilightBotton" : "noHilightBotton"} style={bottonStyle}
                        onClick={() => {
                            if(recStart && recGoal) {
                                setStart({"name":recStart, "pageid":""});
                                setGoal({"name":recGoal, "pageid":""});
                                navigate("/set");
                            } else {
                                alert("値を指定してください");
                            }
                        }}
                    >SET</button>
                </div>
            </header>
            <main>
                <table>
                    <thead>
                        <tr>
                            {Object.keys(data).map((item, index) => <th key={index} bgcolor={colors[index]}>{item}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {data["スポーツ"].map((row, i) => {
                            return (
                                <tr key={i}>
                                    {Object.keys(data).map((colmn, j) => {
                                        let color = data[colmn][i] === recStart ? "red" : (data[colmn][i] === recGoal ? "blue" : "");
                                        return (
                                            <td key={i + j} onClick={tableClicked} bgcolor={color}>{data[colmn][i]}</td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </main>
        </div>
    )
}

export default Recommended;