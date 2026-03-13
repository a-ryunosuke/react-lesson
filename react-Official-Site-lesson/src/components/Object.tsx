export const Object = () => {
    const users = [
        {name: "a", id: 1},
        {name: "b", id: 3},
        {name: "c", id: 7},
        {name: "d", id: 1},
        {name: "e", id: 4},
    ]
    return (
        <div>
            <h2>リストのレンダー</h2>
            {users.map((i) => {
                return <li key={i.id}>name: {i.name}</li>
            })}
        </div>
    )
}