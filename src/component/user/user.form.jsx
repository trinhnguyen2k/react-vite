import '../../styles/user.css';
import { Button, Input } from 'antd';
const UserForm = () => {
    return (
        <div>
            <div className="user-form">
                <label>FullName</label>
                <input type="text" />
                <label>Email</label>
                <input type="text" />
                <label>Password</label>
                <Input.Password placeholder="input password" />
                <label>Phone Number</label>
                <input type="text" />
                <div>

                    <Button type="primary" style={{ width: "150px" }}>Create User</Button>
                </div>
            </div>
        </div >
    )

}

export default UserForm;