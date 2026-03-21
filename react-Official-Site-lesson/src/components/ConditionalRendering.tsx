export const ConditionalRendering = () => {
    const a = {
        name: "true",
        isTrue: true
    }
    const b = {
        name: "false",
        isTrue: false
    }
    return (
        <div>
            <h2>条件付きレンダー</h2>
            <h3 key={a.name}>{a.name}{a.isTrue ? "☑️" : "❌"}</h3>
            <h3 key={b.name}>{b.name}{b.isTrue ? "☑️" : "❌"}</h3>
        </div>
    )
}