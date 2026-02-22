interface Car {
    make: string
    model: string
    yeer: number
}

interface TypeAbc {
    a: 1 | 2 | 3 | 4 | 5 // 1~5までが許可されている
    b: "ab" | "ba" // ab ba が許可
    c: "共同型" | "ある値がこのいずれかである事を表現する型"
}

export const TypeDefinition = () => {
    const myCar: Car ={
        make: "Food",
        model: "Mustang",
        yeer: 2000
    }

    const abc: TypeAbc = {
        a: 1,
        b: "ab",
        c: "共同型"
    }
    
    return (
        <div>
            <div>{myCar.make}</div>
            <div>{myCar.model}</div>
            <div>{myCar.yeer}</div>
            <br />
            <div>{abc.a}</div>
            <div>{abc.b}</div>
            <div>{abc.c}</div>
        </div> 
    )
}