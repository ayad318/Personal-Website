import "./App.css";
import image from "./myImage.jpg";

function App() {
    return (
        <div className="container">
            <div className="left-column">
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
                <a
                    href="/CV.pdf"
                    className="resume-button"
                    download="Ayad's_Resume.pdf"
                >
                    Download My Resume
                </a>
            </div>

            <div className="main-content">
                <h1>About Me</h1>
                <p>
                    I am a software engineer living in Sydney. I love working with
                    blockchain technology and building smart contracts. I also enjoy
                    solving problems using data structures and algorithms - it's like
                    solving fun puzzles! When I'm not coding, I like to play chess,
                    basketball, and tennis. I also love reading books. You can see{" "}
                    <a
                        href="https://www.goodreads.com/review/list/96235225?sort=rating"
                        className="books-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        what I'm reading
                    </a>
                    .
                </p>
            </div>
        </div>
    );
}

export default App;
