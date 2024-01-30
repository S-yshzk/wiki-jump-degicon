import { useState, useEffect } from "react";
import "../styles/wiki.css";
import { useNavigate } from "react-router-dom";

const WikiPage = ({ title, list, count, setCount, setTitle, setList, setIsLoading, goal }) => {
    const [content, setContent] = useState(null);
    const navigate = useNavigate();
   (title);
    useEffect(() => {
        setIsLoading(true);
        const url = `https://ja.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=revisions&titles=${title}&rvprop=content&rvparse`;
        (async () => {
            const res = await fetch(url);
            const json = await res.json();
            const pageId = Object.keys(json.query.pages)[0];
           (pageId);
            if(pageId === goal.id) {
                navigate("/clear")
            }
            setContent(json.query.pages[pageId].revisions[0]["*"]);
            setIsLoading(false);
        })();
    }, [title])
    return (
        <div>
            <div
                className="wikipage"
                dangerouslySetInnerHTML={{ __html: content }}
                onClick={(event) => {
                    if (event.target.title) {
                        event.preventDefault();
                       (event.target.title);
                        setTitle(event.target.title);
                        setList([...list, event.target.title]);
                        setCount(count + 1);
                       (list)
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        });
                    }
                }}
            />
        </div>
    )
}

export default WikiPage;