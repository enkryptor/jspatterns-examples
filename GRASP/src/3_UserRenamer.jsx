import { useState } from 'react';
import UserModel from './3_Model';
import User from './3_User';

function UserRenamer() {
    const [user, setUser] = useState(new UserModel());

    const rename = () => {
        setUser((u) => u.update({name: 'Никифор'}));
    }

    return (
        <div>
            <User data={user.data}></User>
            <button onClick={rename}>Rename</button>
        </div>
    );
}

export default UserRenamer
