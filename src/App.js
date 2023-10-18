import "./App.css";

function App() {
    return (
        <div className="container">
            <div className="left-column">
                {/* Personal Info */}
                <div>
                    <h2>Ayad Farhat</h2>
                    <p>Software Engineer</p>
                </div>

                <div>
                    <p>Email: your@email.com</p>
                    <p>Phone: +123-456-7890</p>
                </div>

                {/* Resume Button */}
                <a
                    href="path_to_your_resume.pdf"
                    className="resume-button"
                    download="Your_Name_Resume"
                >
                    Download My Resume
                </a>
            </div>

            <div className="main-content">
                {/* One Page Description */}
                <h1>About Me</h1>
                <p>
                    This is where you can write a detailed description about
                    yourself, your experience, achievements, and any other
                    relevant information.
                </p>
                <a
                    href="YOUR_SHEET_LINK_HERE"
                    className="books-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Books I've Read
                </a>
                {/* ... add more content as needed ... */}
            </div>
        </div>
    );
}

export default App;
