

    
function MyApp() {
    return <h1>Hello, world!</h1>;
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
//root.render(<MyApp />);
//const button = React.createElement("button", null, "Hello, world!");
const button = React.createElement("button", {"data-id": 123}, "Hello, world!");

root.render(button);
