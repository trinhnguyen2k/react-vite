import '../../styles/user.css';
import { Button, Input } from 'antd';
import { useState } from 'react';
const UserForm = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [passWord, setpassWord] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');

    const handleClickBtn = () => {
        console.log('Check value: ', { fullName, email, passWord, phoneNumber });
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
                    value={passWord}
                    onChange={((event) => { setpassWord(event.target.value) })}
                />
                <label>Phone Number</label>
                <Input
                    value={phoneNumber}
                    onChange={((event) => { setphoneNumber(event.target.value) })}
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