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
                        Phone: <a href="tel:+61401077009">+61 401 077 009</a>
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
                    Based in Sydney, my interests as a software engineer are
                    diverse and evolving. I'm particularly drawn to blockchain
                    related technologies and smart contract development. I have
                    a keen interest in data structures and algorithms, as they
                    present intriguing puzzles to unravel. I'm also drawn to the
                    challenges offered by distributed systems and
                    multithreading. Both these areas keep my curiosity piqued
                    and my skills sharpened. Beyond the tech realm, my downtime
                    sees me on the basketball court, strategizing over a
                    chessboard, rallying on the tennis court, or immersed in a
                    compelling read. For those intrigued by my literary
                    adventures, you can explore{" "}
                    <a
                        href="https://www.goodreads.com/review/list/96235225?sort=rating"
                        className="books-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        the books I've read
                    </a>
                    . Each of these passions provides a distinct flavor to my
                    daily life, and I relish the balance they bring.
                </p>
            </div>
        </div>
    );
}

export default App;
