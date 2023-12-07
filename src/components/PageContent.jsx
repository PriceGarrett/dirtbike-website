import Markdown from "react-markdown";
import { useState, useEffect } from "react";
import rehypeRaw from "rehype-raw";

export default function PageContent({contentPath}){

    const [content, setContent] = useState(`# header`);

    useEffect(() => {
      fetch(contentPath)
        .then((res) => res.text())
        .then((text) => setContent(text));
    }, [contentPath]);

    return (
        <div>
            <Markdown rehypePlugins={[rehypeRaw]} children={content}/>
        </div>
    )
}