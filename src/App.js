import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import path from "./appLinks";
import Main from "./start/start";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Route path={path.start} component={Main}/>
            </div>
        </BrowserRouter>

    );
}

export default App;
