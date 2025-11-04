function UserForm({formData, onChange, onSubmit}) {
    return (
        <form onSubmit={onSubmit} style={styles.form}>
            <label>
                Name:  
                <input
                   type='text'
                   name='name'
                   value={formData.name}
                   onChange={onChange}
                   placeholder='Enter your name'
                   
                />
            </label>

            <label>
                Email:
                <input
                   type='email'
                   name='email'
                   value={formData.email}
                   onChange={onChange}
                   placeholder='Enter your email'
            
                />
            </label>
            
            <label>
                Age:
                <input
                   type='number'
                   name="age"
                   value={formData.age}
                   onChange={onChange}
                   placeholder='Enter your age'
                   
                />
            </label>

            <button type='submit'>Submit</button>
        </form>
    )
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "300px",
  },
}

export default UserForm