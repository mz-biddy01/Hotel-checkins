import { useState } from 'react'

const CheckinsForm = ({ createCheckin }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState('')

    const handleNameChange = event => setName(event.target.value)
    const handleEmailChange = event => setEmail(event.target.value)
    const handleStatusChange = event => setStatus(event.target.value)

    const handleSubmit = event => {
        console.log(event)
        event.preventDefault()
        const checkin = {
            name: name,
            email: email,
            status: status
        }
    
    createCheckin(checkin)
    setName('')
    setEmail('')
    setStatus('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
            />
            <label htmlFor="email">Email:</label>
            <input
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            />
            <label htmlFor="status">Checked in?</label>
            <select>
                <option id="status" value={status} onChange={handleStatusChange}>Checked in</option>
                <option id="status" value={status} onChange={handleStatusChange}>Not checked in</option>
            </select>

            <input type="submit" name="submit" value="Save"/>
        </form>
    )
}

export default CheckinsForm;
