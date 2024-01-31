import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faFlagCheckered, faShuffle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import GameLog from "../componens/GameLog";
import Header from "../componens/Header";
async function getWikiId(title) {
    const url = `https://ja.wikipedia.org/w/api.php?&origin=*&action=query&format=json&titles=${title}`;
    const res = await fetch(url);
    const json = await res.json();
    if (Number(Object.keys(json.query.pages)[0]) === -1) {
        alert("存在しないタイトルです")
        throw new Error("Invalid input: Page does not exist.");
    }
    const pageId = Object.keys(json.query.pages)[0]; // 一番最初のキーを取得
    return { name: title, id: pageId }
}

async function getRandomWikititle(func) {
    const url = "https://ja.wikipedia.org/w/api.php?origin=*&format=json&action=query&list=random&rnlimit=1";
    const res = await fetch(url);
    const json = await res.json();
    console.log(json.query.random[0].title);
    const randomTitle = json.query.random[0].title;
    func({"name":randomTitle, "id":""});

}

const setPage = ({ start, goal, setStart, setGoal, setList, setTitle, setCount, logList, setLogList }) => {
    const navigate = useNavigate();
    return (
        <main>
            <Header />
            <form
                autoComplete="off"
                onSubmit={async (event) => {
                    event.preventDefault();
                    if (!event.target.elements.start.value || !event.target.elements.goal.value) {
                        alert("スタート地点とゴール地点は必須です。");
                        return;
                    }
                    if (event.target.elements.start.value === event.target.elements.goal.value) {
                        alert("スタート地点とゴール地点は異なる値を入力してください。");
                        return;
                    }
                    if (event.target.elements.start.value !== logList[0] || event.target.elements.goal.value !== logList[logList.length - 1]) {
                        setLogList("");
                    }
                    const startValue = await getWikiId(event.target.elements.start.value);
                    setStart(startValue);
                    setList([event.target.elements.start.value]);
                    setTitle(startValue.name);
                    const goalValue = await getWikiId(event.target.elements.goal.value);
                    setGoal(goalValue);
                    setCount(0);
                    navigate("/game");
                }}
            >
                <div className="columns is-centered field is-horizontal">
                    <div className="column is-half">
                        <label className="label">スタート地点</label>
                        <div className="control has-icons-left has-icons-right" style={{display:"flex"}}>
                            <input className="input" type="text" name="start" placeholder="start" required value={start.name} onChange={(e) => setStart(e.target.value)} />
                            <span className="icon is-small is-left">
                                <FontAwesomeIcon icon={faFlagCheckered} />
                            </span>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <FontAwesomeIcon icon={faShuffle} onClick={async() => getRandomWikititle(setStart)} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="columns is-centered field is-horizontal">
                    <div className="column is-half">
                        <label className="label">ゴール地点</label>
                        <div className="control has-icons-left has-icons-right" style={{ display: "flex" }}>
                            <input className="input" type="text" name="goal" placeholder="goal" required value={goal.name} onChange={(e) => setGoal(e.target.value)} />
                            <span className="icon is-small is-left" >
                                <FontAwesomeIcon icon={faLocationDot} />
                            </span>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <FontAwesomeIcon icon={faShuffle} onClick={async() => getRandomWikititle(setGoal)} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="columns is-centered control">
                    <button className="button is-link">セットしてゲームを始める</button>
                </div>
            </form>
            <GameLog logList={logList} setLogList={setLogList} setStart={setStart} setGoal={setGoal} />
        </main>
    )
}

export default setPage;