import { useState } from 'react';
import UserModel from './2_Model';
import User from './2_User';

function UserRenamer() {
    const [user, setUser] = useState(new UserModel());

    const rename = () => {
        setUser((u) => u.rename());
    }

    return (
        <div>
            <User data={user.data}></User>
            <button onClick={rename}>Rename</button>
        </div>
    );
}

export default UserRenamer
