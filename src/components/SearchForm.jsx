import axios from "axios";
import { useState } from "react";

function SearchForm() {
    const [sity, setSity] = useState('')

const response=async()=>{
    const data=await axios.get('')
}

    return (
        <div>
            <input type="text" onChange={(e) => setSity(e.target.value)} placeholder="Enter the name of the city" />
            <button onClick={() => console.log(sity)}>Search</button>
        </div>
    );
}

export default SearchForm;