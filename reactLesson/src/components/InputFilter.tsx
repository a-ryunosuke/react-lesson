import { useState } from "react"

export const InputFilter = () => {
    const [text, setText] = useState("")

        const products = [
        { id: 1, name: "りんご" },
        { id: 2, name: "ばなな" },
        { id: 3, name: "みかん" },
        { id: 4, name: "ぶどう" },
        { id: 5, name: "いちご" },
    ]

    // includes 対象に指定した要素があるか否か
    // 入力値であるtextがproducts.nameに含まれているか判定
    const productsFilter = products.filter((i) => i.name.includes(text))

    return (
    <div>
        <ul>
            {/* 判例され返された要素が0より大きければそれを表示 */}
        {productsFilter.length > 0 ?
        productsFilter.map((i) => {
            return <li key={i.name}>{i.name}</li>
        }) :
        <li>該当無し</li>
        }

        </ul>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    </div>
    )
}