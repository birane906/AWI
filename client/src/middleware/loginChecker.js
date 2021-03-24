import axios from "axios"

const loginChecker = (history) => {
    axios.get('/api/login')
        .catch(e => {
            history.push('/login')
        })
}

export default loginChecker;