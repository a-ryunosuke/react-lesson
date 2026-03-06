export const PromiseThen = () => {
    // Promiseで新しくオブジェクトが作られる
    const sample = new Promise(function(resolve, reject) {
        // 1秒後に処理を実行
        setTimeout(function() {
            resolve("成功しました")
            reject("失敗しました")
        }, 1000)
    })


    sample
    // resolve(処理が成功)なら、thenの引数に
    .then((value) => console.log(value))
    // reject(処理が失敗)なら、catchの引数に
    .catch((error) => console.log(error))

    // 同期処理なので
    console.log("先に出力")
    return (
        <div></div>
    )
}