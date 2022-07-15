import {useState} from 'react'

const RegistrationForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div className="RegistrationForm">

            <form>
                <div>
                    <label>First Name: </label> 
                    <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
                    { firstName && firstName.length < 2 ? <p>First name must be 2 or more letters!</p> : null }
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
                    { lastName && lastName.length < 2 ? <p>Last name must be 2 or more letters!</p> : null }
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
                    { email && email.length < 5 ? <p>Last name must be 5 or more letters!</p> : null }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
                    { password && password.length < 8 ? <p>The passwords must match and be at least 8 characters!</p> : null }
                    { !(password === confirmPassword) ? <p>The passwords must match!</p> : null }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
                    { confirmPassword && confirmPassword.length < 8 ? <p>The passwords must match and be at least 8 characters!</p> : null }
                    { !(password === confirmPassword) ? <p>The passwords must match!</p> : null }
                </div>
            </form>

            <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>

        </div>
    )
}

export default RegistrationForm;