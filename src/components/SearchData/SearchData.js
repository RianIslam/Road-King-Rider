import React from 'react'
import searchData from '../Data/SearchData.json'
import Destination from '../Destination/Destination';

const SearchData = () => {

    const [search, setSearch] = useState([]);

    useEffect(() => {
      setSearch(searchData);
      console.log(searchData);
    }, []);

    return (
        <div>
            {searchs.map((r) => (
            <Destination
              rideName={r.name}
              rideImg={r.image}
              key={r.id}
            ></Destination>
        </div>
    )
}

export default SearchData
