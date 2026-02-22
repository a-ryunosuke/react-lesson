import { Function } from "./Function"
import { TypeDefinition } from "./TypeDefinition"

export const TypeScript = () => {
    // アテネーション
    const number: number = 125 // 数字
    const str: string = "aaa" // 文字列
    const bool: boolean = true // 真偽値
    const undef: undefined = undefined // 中身なし。null返すAPIは無いのでnullよりこっち使った方がいい
    const n: null = null // 中身なし
    const str_num: string | number = 1 // 文字列か数字

    // 配列の型アテネーション
    const arry: string[] = []
    arry[0] = "dasad"
    arry[1] = "adsafaf"
    arry[2] = 1 //型エラー


    // 型推論
    let answer = 40 // let answer: number = 40 と推論されているのでanswer = "ああああ"ではエラーが出る
    answer = "ああああ"

    let answer2 = true // 上に同じ
    answer2 = 3
    
    // 数値と演算値
    const x = "ああああ" + 12
    console.log(x) // ああああ12 数値と文字列が結合

    // Object
    const ob: object ={
        make: "Food",
        model: "Mustang",
        yeer: 2000
    }

    return (
        <div className="p-8 border-2">
            <h1>TypeScript</h1>
            <span>{x}</span>
            <Function />
            <TypeDefinition />
        </div>
    )
}