import React from 'react'
import './style.css'
import logo from 'logo.png'
import Form from 'components/Form'
import Content from 'components/Content'

const App: React.FC = () => {
    return (
        <>
            <header className="header">
                <Form />
            </header>
            <main className="main">
                <Content />
            </main>
            <footer className="footer">
                <div className="logo">
                    <img
                        alt="logo"
                        src={logo}
                        className="logo__image"
                    />
                    <span
                        className="logo__name"
                    >
                        SVG Project
                    </span>
                </div>
                <a
                    href="https://recruitment01.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="assignment"
                >
                    Assignment
                </a>
            </footer>
        </>
    )
}

export default App
