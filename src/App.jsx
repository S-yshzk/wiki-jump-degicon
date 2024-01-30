import { useState, useEffect } from "react";
import './styles/App.css';
import SetPage from "./pages/SetPage";
import 'bulma/css/bulma.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import GamePage from "./pages/GamePage";
import ClearPage from "./pages/ClearPage";
import Home from "./pages/Home";
import Recommended from "./pages/Recommended";


function App() {
    const [data, setData] = useState([]);
    const [title, setTitle] = useState(null);
    const [start, setStart] = useState({ name: "", pageid: "" });
    const [goal, setGoal] = useState({ name: "", pageid: "" });
    const [count, setCount] = useState(0);
    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [logList, setLogList] = useState("");
    return (
        <div>
            {isLoading &&
                <div className="loading-overlay">
                    <h1>LOADING...</h1>
                    <p>クリックしないでください</p>
                </div>}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/recommended" element={<Recommended setStart={setStart} setGoal={setGoal} />} />
                    <Route path="/set" element={<SetPage start={start} goal={goal} setStart={setStart} setGoal={setGoal} setList={setList} setTitle={setTitle} setIsLoadingisLoading={setIsLoading} setCount={setCount} logList={logList} setLogList={setLogList} />}></Route>
                    <Route path="/game" element={<GamePage title={title} list={list} goal={goal} count={count} setCount={setCount} setTitle={setTitle} setList={setList} setIsLoading={setIsLoading} />}></Route>
                    <Route path="/clear" element={<ClearPage count={count} list={list} logList={logList} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;