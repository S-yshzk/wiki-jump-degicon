import "../styles/App.css"
import Header from "../componens/Header";
const ClearPage = ({ count, list, logList }) => {
    localStorage.setItem(localStorage.length, JSON.stringify(list));
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <Header />
            <h2>Result</h2>
            <p>ジャンプ回数: {count}</p>
            <p>
                あなたの経路：
                {list.map((item, index) => (
                    <tt key={index}>
                        <span style={{ color: "blue" }}>{item}</span>
                        {index < list.length - 1 && <span style={{ color: "red" }}>→</span>}
                    </tt>
                ))}
            </p>
            {logList && (  // logList が存在する場合のみ表示
                <p>
                    ログの経路：
                    {logList.map((item, index) => (
                        <tt key={index}>
                            <span style={{ color: "blue" }}>{item}</span>
                            {index < logList.length - 1 && <span style={{ color: "red" }}>→</span>}
                        </tt>
                    ))}
                </p>
            )}
        </div>
    );
};

export default ClearPage;