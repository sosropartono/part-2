const Persons = ({ persons, filtered, search}) => {
    if (search === '') {
        return (
            <div>
                {persons.map(person => {
                    return <div key={person.name}>{person.name} {person.number} <button>delete</button>  </div>
                })}
            </div>
        )

    } else {
        return (
            <div>
                {filtered.map(person => {
                    return <div key={person.name}>{person.name} {person.number} </div>
                })}
            </div>
        )
    }

}

export default Persons
