function User({ data }) {
    return (
        <div>
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
        </div>
    );
}

export default User