const PersonForm = (props) => {

    return (
        <form>
            <div>
                name:  <input value={props.newName} onChange={props.nameChange} />
            </div>
            <div>number: <input value={props.newNumber} onChange={props.numChange}></input></div>
            <div>
                <button type="submit" onClick={props.addPerson}>add</button>
            </div>
        </form>
    )
}

export default PersonForm