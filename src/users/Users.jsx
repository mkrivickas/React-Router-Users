import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function Users() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(`https://api.github.com/users`)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setUsers(json);
                setIsLoading(false);
            });
    }, []);
    return (
        <div className='App'>
            {users.map((user) => (
                <div>
                    <h1>Užduotis 8</h1>
                    {!isLoading && (
                        <img
                            className='rounded-image'
                            src={user.avatar_url}
                            alt=''
                        />
                    )}
                    <h1>{user.login}</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Inventore dolor aliquam optio, enim pariatur iusto
                        cupiditate. Dignissimos accusantium placeat voluptas
                        veritatis? Laudantium quaerat inventore odit doloribus
                        cupiditate, dolorem eius aut!
                    </p>
                    <Link className='btn-secondary' to={"/"+user.id}>View details</Link>
                </div>
            ))}
        </div>
    );
}

export default Users