import Markdown from "react-markdown";
import PageContent from "./PageContent";

export default function Home(){

    const mkdown = 
    `
# Hello
    
just testing this to see how it works

### More content

    `



      
    return (
        <>        
        <h1>Home</h1>
        <PageContent contentPath={"Buying_Used.md"}/>
        </>

    )
}