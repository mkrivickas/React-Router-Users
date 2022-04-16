import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function SingleUser() {
    let id = useParams();
    console.log(id);
    const [user, setUser] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(`https://api.github.com/users/` + id.id)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setUser(json);
                setIsLoading(false);
            });
    }, []);
    return (
        <div>
            {!isLoading && (
                <div>
                    <h1>{user.name}</h1>
                    <h2>{user.id}</h2>
                    <h2>{user.location}</h2>
                    <h3>{user.company}</h3>
                </div>
            )}
        </div>
    );
}

export default SingleUser;
