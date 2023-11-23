const Filter = ({ search, changeSearch }) => {

    return (<form>
        filter shown with: <input value={search} onChange={changeSearch}>
        </input>
    </form>)
}


export default Filter