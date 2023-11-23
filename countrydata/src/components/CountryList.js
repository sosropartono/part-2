import DetailedInfo from "./DetailedInfo"



const CountryList = (props) => {
    //make button with state, if its clicked then return detailed info for that specific country

    if (props.filteredCountries.length > 10){
        return (
            <p>Too many countries, please specify</p>
        )
    }
    if (props.filteredCountries.length == 1){
        return (
            <div>
                <DetailedInfo country={props.filteredCountries[0]} api_key={props.api_key} />
            </div>
        )
    }
    return (
            <div>
                {props.filteredCountries.map((country) => {
                    return <div>
                        {country.name} <button id={country.name} onClick={props.show}>show</button>
                    </div>
                }) }
            </div>
        )
    
}


export default CountryList