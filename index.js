

    
function MyApp() {
    return <h1>Hello, world!</h1>;
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
//root.render(<MyApp />);
//const button = React.createElement("button", null, "Hello, world!");
const button = React.createElement("button", {"data-id": 123}, "Button 1");
const button2 = React.createElement("button", {"data-id": 456}, "Button 2");
const button3 = React.createElement("button", {"data-id": 789}, "Button 3");

//const div = React.createElement("div", null, button, button2, button3);
const div = React.createElement(React.Fragment, null, button, button2, button3);

//JSX
const a = <React.Fragment>
    <button data-id="123">Button 1</button>
    <button data-id="456">Button 2</button>
    <button data-id="789">Button 3</button>
    <button data-id="147">Button 4</button>
</React.Fragment>

root.render(a);

// SWC Speedy Web Compiler: https://swc.rs/playground
// o babel pero con swc esta mas rapido