export default function Sources({sources}){
    return (
        <div className="sources-container">
          <h3>Sources:</h3>
          <ul>
            {sources.map((source, index) => (
              <li key={index}>
                <a href={source.url} target="_blank" rel="noopener noreferrer">
                  {source.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
}