export const Function = () => {
    const fn = (a: number, b: number) => a + b

    return (
        <div className="p-8 border-2">
            {fn(4, 6)}
        </div>
    )
}