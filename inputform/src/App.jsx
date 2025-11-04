import {useState} from 'react'
import UserForm from './components/UserForm'
import PreviewCard from './components/PreviewCard'

function App () {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!formData.name || !formData.email || !formData.age) {
            alert("Please fill in all required fields!")
            return
        }

        alert(`Form Submitted!\nName: ${formData.name}\nEmail: ${formData.email}`)
    }

    return (
        <div className='app-container' style={styles.container}>
            <h1>User Input Form with Live Preview</h1>

            <UserForm 
               formData={formData}
               onChange={handleChange}
               onSubmit={handleSubmit}
            />

            <PreviewCard data={formData} />
        </div>
    )
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    fontFamily: "Arial",
    padding: "30px",
  },
}

export default App

