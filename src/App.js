import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
    {
        title: "What is React?",
        content: "React is a JS front-end library."
    },
    {
        title: "Why use React?",
        content: "React is a favorite JS front-end library."
    },
    {
        title: "How to use React?",
        content: "Use React by creating components."
    }
];

const options = [
    {
        label: "Red",
        value: "red"
    },
    {
        label: "Green",
        value: "green"
    },
    {
        label: "Blue",
        value: "blue"
    }
];

// METHOD 1 FOR ROUTING STARTS
const showAccordian = () => {
    if(window.location.pathname === '/') {
        return <Accordion items={items} />;
    }
};

const showList = () => {
    if(window.location.pathname === '/list') {
        return <Search />;
    }
};

const showDropdown = () => {
    if(window.location.pathname === '/dropdown') {
        return <Dropdown showPTag={true} label="Select a Color:" options={options} />;
    }
};

const showTranslate = () => {
    if(window.location.pathname === '/translate') {
        return <Translate />;
    }
};
// METHOD 1 FOR ROUTING ENDS

// METHOD 2 FOR ROUTING STARTS
const showComponent = (route, component) => {
    return window.location.pathname === route ? component : null;
};
// METHOD 2 FOR ROUTING ENDS

const App = () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <Header />
            
            {/* <Accordion items={items} /> */}
            {/* <Search /> */}
            {/* <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button> */}
            {/* {showDropdown ? <Dropdown showPTag={true} label="Select a Color:" selected={selected} onSelectedChange={setSelected} options={options} /> : null} */}
            {/* <Translate /> */}

            {/* {showAccordian()}
            {showList()}
            {showDropdown()}
            {showTranslate()} */}

            {/* {showComponent('/', <Accordion items={items} />)}
            {showComponent('/list', <Search />)}
            {showComponent('/dropdown', <Dropdown showPTag={true} label="Select a Color:" selected={selected} onSelectedChange={setSelected} options={options} />)}
            {showComponent('/translate', <Translate />)} */}

            <Route path="/">
                <Accordion items={items} />
            </Route>

            <Route path="/list">
                <Search />
            </Route>

            <Route path="/dropdown">
                <Dropdown showPTag={true} label="Select a Color:" selected={selected} onSelectedChange={setSelected} options={options} />
            </Route>

            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
};

export default App;