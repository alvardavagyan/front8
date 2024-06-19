import { useState } from "react"
export const SignUp = ({ onAdd, users }) => {
    const [user, setUser] = useState({ id: "", name: "", surname: "", login: "", password: "" })
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const handleSubmit = e => {
        e.preventDefault()

        if (!user.name.trim() ||
            !user.surname.trim() ||
            !user.login.trim() ||
            !user.password.trim()) {
            return setError("Please fill all fields.")
        }

        const testLogin = /\S+@\S+\.\S+/
        if (!testLogin.test(user.login)) {
            return setError("Please enter a valid email address.")
        }

        if (users.find(elm => elm.login === user.login)) {
            return setError("This login is already taken.")
        }

        if (user.password.length < 6) {
            return setError("Password should be at least 6 characters long.")
        }

        onAdd(user)
        setSuccess("User successfully added.")
        setUser({ name: "", surname: "", login: "", password: "" })
        setError()

    }

    return <div>
        <h3>SignUp</h3>
        <form onSubmit={handleSubmit}>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}

            <input placeholder="name"
                value={user.name}
                onChange={e => setUser({ ...user, name: e.target.value })}

            />
            <input placeholder="surename"
                value={user.surname}
                onChange={e => setUser({ ...user, surname: e.target.value })}

            />
            <input placeholder="login"
                value={user.login}
                onChange={e => setUser({ ...user, login: e.target.value })}

            />
            <input placeholder="password"
                value={user.password}
                onChange={e => setUser({ ...user, password: e.target.value })}

            />

            <button>SIGN UP</button>

        </form>

    </div>
}