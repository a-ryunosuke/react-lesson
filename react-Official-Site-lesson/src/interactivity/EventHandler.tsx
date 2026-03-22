export const EventHandler = () => {
    return (
        <div>
            <div onClick={() => alert("親要素がクリックされました")}>
                親要素
                <button onClick={() => alert("buttonがクリックされました")}>buttonがクリックされました</button>
                <button onClick={(e) => { 
                    e.stopPropagation();
                    alert("e.を引数にする事で処理の電番をなくせる")
                    }}>e.を引数にする事で処理の電番をなくせる</button>
            </div>
        </div>
    )
}