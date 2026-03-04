import { useState } from "react"

export const Claude = () => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        if (count === 0) {
            return count
        } else {
            return setCount(count - 1)
        }
    }

    const reset = () => {
        setCount(0)
    }
    
    return (
        <div>
            {/* countが10以上になるとcolor redが当たる */}
            <p style={{color: count >= 10 ? "red" : "black"}}>{count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={handleClick}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

//     const products = [
//   { name: "キーボード", price: 8000, inStock: true },
//   { name: "マウス", price: 3000, inStock: false },
//   { name: "モニター", price: 45000, inStock: true },
//   { name: "ヘッドセット", price: 12000, inStock: true },
//   { name: "Webカメラ", price: 7000, inStock: false },
// ];
//     const getAvailableProducts = () => {
//         return products
//         .filter((i) => i.inStock === true)
//         .sort((a, b) => a.price - b.price)
//         .map(({name, price}) => ({ name, price}))
//     }

//     console.log(getAvailableProducts())複雑なロジックのデバッグ、仕様書からのコード生成、およびリファクタリング（Claude Code）を行う。