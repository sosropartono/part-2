import { useState, useEffect } from 'react'
import axios from 'axios'



const DetailedInfo = ({country, api_key}) => {

    const [info, setInfo] = useState('')
    

    // Have an issue here regarding the side effect of useEffect is done AFTER rendering, solved by using conditional to check if data has been fetched from the API 
    // and updating the state once it does, thus re-rendering the rest of the DetailedInfo component
    
    const hook = () => {
        axios.get((`https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${api_key}`)).then((response) => {
            setInfo(response.data)
        })
      }
    useEffect(hook, [])


    if(info == ''){

        return (
            <div>
            <h1>{country.name}</h1>
            <p>Languages</p>
            <ul>
                {country.languages.map((language,i) => {
                    return <li> {language.name}</li>
                })}
            </ul>
            <p>Capital {country.capital}</p>
            <p>Area {country.area}</p>


            <img src={country.flag} width="200px" alt="nothing shown" />
            </div>
        )
    }



    else{
        const imgSrc = `http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`
        return (
            <div>
                <h1>{country.name}</h1>
                <p>Languages</p>
                <ul>
                    {country.languages.map((language,i) => {
                        return <li> {language.name}</li>
                    })}
                </ul>
                <p>Capital {country.capital}</p>
                <p>Area {country.area}</p>
    
    
                <img src={country.flag} width="200px" alt="nothing shown" />
     
                <div>
                    <h3>Weather in {country.capital}</h3>
                    <h5>temperature {info.main.temp}</h5>
                    <img src={imgSrc} alt="" /> 
                    <h3>wind {info.wind.speed}</h3> 
                </div>
    
                
    
    
            </div>
        )
    }

}


export default DetailedInfo