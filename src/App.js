import "./App.css";
import image from "./myImage.jpg";

function App() {
    return (
        <div className="container">
            <div className="left-column">
                {/* Personal Info */}

                <div className="social-links">
                    <h2>Ayad Farhat</h2>
                    <a
                        href="https://linkedin.com/in/ayad-farhat"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i
                            className="fa fa-linkedin-square"
                            aria-hidden="true"
                        ></i>
                    </a>
                    <a
                        href="https://github.com/ayad318"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa fa-github" aria-hidden="true"></i>
                    </a>
                </div>

                <img src={image} alt="Ayad Farhat" className="profile-image" />

                <div>
                    <p>
                        Email:{" "}
                        <a href="mailto: ayad.farhat2001@gmail.com">
                            ayad.farhat2001@gmail.com
                        </a>
                    </p>
                    <p>
                        Phone: <a href="tes:+61401077009">+61 401 077 009</a>
                    </p>
                </div>
                {/* Resume Button */}
                <a
                    href="/CV.pdf"
                    className="resume-button"
                    download="Ayad's_Resume.pdf"
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
