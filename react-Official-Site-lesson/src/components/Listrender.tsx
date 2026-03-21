export const ListRender = () => {
    const people = [{
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
        }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
        }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
        }, {
        id: 3,
        name: 'Percy Lavon Julian',
        profession: 'chemist',  
        }, {
        id: 4,
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
    }];
    return (
        <div>
            <li>
                {people.map((i) => <ul key={i.id}>{i.id}-{i.name}-{i.profession}</ul>)}
            </li>
            <br />
            <li>
                {people.filter((i) => i.id > 2).map((i) =>  <ul>{i.id}-{i.name}</ul>)}
            </li>
        </div>
    )
}