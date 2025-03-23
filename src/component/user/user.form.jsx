import '../../styles/user.css';
import { Button, Input } from 'antd';
import { useState } from 'react';
import axios from 'axios';

const UserForm = () => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setpassWord] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');

    const handleClickBtn = () => {
        const URL_BACKEND = 'http://localhost:8080/api/v1/user';
        const data = {
            fullName: fullName,
            email: email,
            password: password,
            phone: phonenumber
        }
        axios.post(URL_BACKEND, data);
    }
    return (
        <div>
            <div className="user-form">
                <label>FullName</label>
                <Input
                    value={fullName}
                    onChange={((event) => { setFullName(event.target.value) })}
                />
                <label>Email</label>
                <Input
                    value={email}
                    onChange={((event) => { setEmail(event.target.value) })}
                />
                <label>Password</label>
                <Input.Password placeholder="Input password"
                    value={password}
                    onChange={((event) => { setpassWord(event.target.value) })}
                />
                <label>Phone Number</label>
                <Input
                    value={phonenumber}
                    onChange={((event) => { setPhoneNumber(event.target.value) })}
                />
                <div>

                    <Button type="primary" style={{ width: "150px" }}
                        onClick={handleClickBtn}
                    >Create User</Button>
                </div>
            </div>
        </div >
    )

}

export default UserForm;