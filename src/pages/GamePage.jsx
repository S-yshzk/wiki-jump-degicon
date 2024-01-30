import WikiPage from "../componens/WikiPage";
import Header from "../componens/Header";
import Jump from "../componens/Jump";
const GamePage = ({ title, list, count, setCount, setTitle, setList , goal, setIsLoading}) => {
    return(
        <div>
            <Header/>
            <Jump count={count} list={list} goal={goal}/>
            <WikiPage title={title} list={list} count={count} goal={goal} setCount={setCount} setTitle={setTitle} setList={setList} setIsLoading={setIsLoading}/>
        </div>
    )
}

export default GamePage;