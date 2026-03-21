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