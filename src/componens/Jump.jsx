import "../styles/App.css";

const Jump = ({count, list, goal}) => {
    return (
        <div className="jump box has-background-primary-light" style={{maxWidth:"50vw"}}>
            {list.map((item, index) => {
                return(
                    <tt key={index}>{item}→</tt>
                )
            })}
            <p>ジャンプ数：{count}</p>
            <p>goal:{goal.name}</p>
        </div>
    )
}

export default Jump;