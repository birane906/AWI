import React, { useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'

const FestivalDetails = (props) => {
    
    const [ festivalDetails, setFestivalDetails ] = useState({})
    const {pathFestival} = useParams()
    const history = useHistory()

    function loadFestival() {
        axios.get('/api/festivals/' + pathFestival)
            .then(res => {
                if (res.status === 200) {
                    setFestivalDetails(res.data[0])
                } else {
                    history.push('/dashboard/festivals')
                }
            })
            .catch(err => {
                console.log(err)
                history.push('/dashboard/festivals')
            })
    }

    useEffect(() => loadFestival(), [])

    return (
        <div>
            {pathFestival}
            {festivalDetails.name}
            {festivalDetails.year}
        </div>
    );
};

export default FestivalDetails;