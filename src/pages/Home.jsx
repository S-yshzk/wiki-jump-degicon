import "../styles/Home.css"
import mp4 from "../videoes/title.mp4";
import webm from "../videoes/title.webm";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home">
            <h1>Wiki Jump</h1>
            <p className="p1 start"
                onClick={() => navigate("/set")}
            >はじめる</p>
            <p className="p1 log"
            onClick={() => navigate("/recommended")}
            >おすすめ問題</p>
            <div id="video-area">
                <video id="video" poster="images/title.png" webkit-playsinline="true" playsInline muted autoPlay loop>
                    <source src={mp4} type="video/mp4" />
                    <source src={webm} type="video/webm" />
                    <p>動画を再生できる環境ではありません。</p>
                </video>
            </div>
        </div>
    )
}

export default Home;