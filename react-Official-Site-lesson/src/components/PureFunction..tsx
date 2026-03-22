export const PureFunction = () => {
    const cups = [];
    for (let i = 0; i <= 6; i++){
        cups.push(<Cup key={i} gest={i} />)
    }
    return cups
}

const Cup = ({gest}) => {
    return (
        <h2>#{gest}</h2>
    )
}

// コンポーねんとは純粋であるべし
// コンポーネント内で値を操作しない
// コンポーネンの可変する箇所はJSX内に記述する