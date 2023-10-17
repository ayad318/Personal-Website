import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>About Me</h1>
                <p>This is a brief description about me.</p>
                <a href="http://">books</a>
                <button onClick={() => {}}>Upload Resume</button>
            </header>
            <main>
                <h2>Experience</h2>
                <ul>
                    <li>Company 1</li>
                    <li>Company 2</li>
                    <li>Company 3</li>
                </ul>
            </main>
        </div>
    );
}

export default App;
