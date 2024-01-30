import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const GameLog = ({ logList, setLogList, setStart, setGoal }) => {
    const keys = Object.keys(localStorage).sort().reverse(); // キーを逆順にソート

    return (
        <div className="select is-multiple" style={{position:"absolute", top:180, left:10}}>
            <p><FontAwesomeIcon icon={faGear} />今までの記録に挑戦</p>
            <select multiple size="8" style={{ border: "none", borderBottom: "1px solid #000" }}>
                <option disabled style={{ color: "black", backgroundColor: "#00BFFF" }}>スタート→ゴール</option>
                {keys.map((index) => {
                    const item = JSON.parse(localStorage.getItem(index));
                    return (
                        <option onClick={() => {
                            setLogList(item);
                            setStart({"name":item[0], "pageid":""});
                            setGoal({"name":item[item.length - 1], "id":""});
                            console.log(item);
                        }} key={index} style={{ borderBottom: "1px solid #000" }} >
                            {item[0]}→{item[item.length - 1]}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}


export default GameLog;