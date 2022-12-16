import React , {useEffect, useState} from 'react';
import Card from './Card';

function Search() {
  const [searchValue, setSearchValue] = useState ("indore");
  const [tempInfo, setTempInfo] = useState ({});

  const getWeatherInfo = async () => {
    try{
      let url = 
      `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=a9d1d28472c08a1554a19cf5c46e7081`;

      const res = await fetch(url);
      const data = await res.json();
      const {temp} = data.main;

      const myNewWeatherInfo = {
        temp
      };

      setTempInfo(myNewWeatherInfo);

    } catch(error){
      console.log(error);
    }
  };
  
  useEffect(() => {
    getWeatherInfo()
  }, [])
  return (
    <>
        <div className='search-box'>
          <input type="search"
          placeholder='search...'
          autoFocus
          className='search-term'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
           />
          
          <button type='button' className="search-button" onClick={getWeatherInfo}>Search</button>

        </div>

    
        <Card tempInfo={tempInfo}/>
      </>
  )
}

export default Search