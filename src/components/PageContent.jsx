import Markdown from "react-markdown";
import { useState, useEffect } from "react";

export default function PageContent({contentPath}){

    const [content, setContent] = useState(`# header`);

    useEffect(() => {
      fetch(contentPath)
        .then((res) => res.text())
        .then((text) => setContent(text));
    }, [contentPath]);

    return (
        <div>
            <Markdown children={content}/>
        </div>
    )
}