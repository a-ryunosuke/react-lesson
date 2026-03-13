// import type { ContextType } from "../type"

import { number } from "zod";

// export const Map = () => {
//     return (
//         <div>
//             {contextArray.map((item, index) => {
//                 return <li key={index}>{item.name} {item.number}</li>
//             })}
//         </div>
//     )

// }


// const numbers = [5, 12, 23, 8, 31, 17, 25];

// const numbers20 = numbers.filter(a =>a >= 20)

// console.log(numbers20)

// // 期待する出力
// // [23, 31, 25]

const numbers = [1, 2, 3, 4, 5];

let str = 0;

// forループで合計
for (let i = 0; i < numbers.length; i++) {
    str += numbers[i];
}

console.log(str); // 15

// または reduce を使う方法
// const sum = numbers.reduce((acc, v) => acc + v, 0);
// console.log(sum); // 15