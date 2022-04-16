import './App.css';
import Users from './users/Users';
import SingleUser from './singleUser/SingleUser';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <div>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Routes>
                        <Route path='/' element={<Users />}></Route>
                        <Route path='/:id' element={<SingleUser />}></Route>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
