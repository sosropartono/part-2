const Search = ({filterCountry}) => {



    return(
        
        <div>
            <p>find countries</p> 
            <input type="text" onChange={filterCountry} />
        </div>

    )
}

export default Search