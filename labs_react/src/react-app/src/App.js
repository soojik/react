import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Header(props) {
    return (
        <header>
            <h1>
                <a
                    href="/"
                    onClick={function (e) {
                        e.preventDefault();
                        props.onChangeMode();
                    }}
                >
                    {props.title}
                </a>
            </h1>
        </header>
    );
}

function Nav(props) {
    const list = [];
    for (let t of props.topics)
        list.push(
            <li key={t.id}>
                <a
                    href={'/read/' + t.id}
                    onClick={(e) => {
                        e.preventDefault();
                        props.onChangeMode(t.id);
                    }}
                >
                    {t.title}
                </a>
            </li>,
        );

    return (
        <nav>
            <ol>{list}</ol>
        </nav>
    );
}

function Article(props) {
    return (
        <article>
            <h2>{props.title}</h2>
            {props.body}
        </article>
    );
}

function App() {
    const [mode, setMode] = useState('welcome');
    const [id, setId] = useState(null);
    const topics = [
        { id: 1, title: 'html', body: 'html is ...' },
        { id: 2, title: 'js', body: 'js is ...' },
        { id: 3, title: 'css', body: 'css is ...' },
    ];

    let content = null;
    if (mode === 'welcome') {
        content = <Article title="welcome" body="hello, web"></Article>;
    } else if (mode === 'read') {
        let title,
            body = null;
        for (let t of topics) {
            if (t.id === id) {
                title = t.title;
                body = t.body;
            }
        }

        content = <Article title={title} body={body}></Article>;
    }
    return (
        <div>
            <Header
                title="WEB"
                onChangeMode={() => {
                    setMode('welcome');
                }}
            ></Header>
            <Nav
                topics={topics}
                onChangeMode={(id) => {
                    setMode('read');
                    setId(id);
                }}
            ></Nav>
            {content}
        </div>
    );
}

export default App;
