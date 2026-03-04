import { Claude } from "./components/claude"
import { InputFilter } from "./components/InputFilter"

function App() {

  return (
    <div>
      <InputFilter />
      <br />
      <Claude />
    </div>
  )
}

export default App

// 以下の条件を満たすコンポーネントを実装してください。

// 【仕様】
// ・商品リストが表示されている
// ・テキスト入力欄に文字を入力すると
// リアルタイムで商品名が絞り込まれる
// ・一致しない場合は「該当なし」と表示する

// 【データ】
// const products = [
//   { id: 1, name: "りんご" },
//   { id: 2, name: "ばなな" },
//   { id: 3, name: "みかん" },
//   { id: 4, name: "ぶどう" },
//   { id: 5, name: "いちご" },
// ]