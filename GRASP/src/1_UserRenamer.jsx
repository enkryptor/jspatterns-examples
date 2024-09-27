import { useState } from 'react';
import './App.css';

function UserRenamer() {
    const [user, setUser] = useState({ name: "Иоганн", email: "test@example.com" });

    const rename = () => {
        setUser((u) => ({ ...u, name: "Никифор" }));
    }

    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <button onClick={rename}>Rename</button>
        </div>
    );
}

export default UserRenamer
