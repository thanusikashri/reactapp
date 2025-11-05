function PreviewCard({data}) {
    return (
        <div style={styles.card}>
            <h2>Live Preview</h2>
            <p><strong>Name: </strong> {data.name}</p>
            <p><strong>Email: </strong> {data.email}</p>
            <p><strong>Age: </strong> {data.age}</p>
        </div>
    )
}

const styles = {
  card: {
    border: "2px solid #ccc",
    borderRadius: "12px",
    padding: "20px",
    width: "300px",
    backgroundColor: "#f9f9f9",
  },
}

export default PreviewCard 