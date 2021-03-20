import React from 'react'
import searchData from '../Data/SearchData.json'

const SearchData = () => {

    const [searchs, setSearch] = useState([]);

    useEffect(() => {
      setSearch(searchData);
      console.log(searchData);
    }, []);

    return (
        <div>
            {searchs.map((r) => (
            <Destination
              dataname={r.name}
              key={r.id}
            ></Destination>
          ))}
        </div>
    )
}

export default SearchData
