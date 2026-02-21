interface Car {
    make: string
    model: string
    yeer: number
}

export const TypeDefinition = () => {
    const myCar: Car ={
        make: "Food",
        model: "Mustang",
        yeer: 2000
    }
    
    return (
        <div>
            <div>{myCar.make}</div>
            <div>{myCar.model}</div>
            <div>{myCar.yeer}</div>
        </div> 
    )
}