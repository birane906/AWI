import axios from "axios"

const loginChecker = (history) => {
    const re = /\/login/
    console.log(window.location.pathname);
    axios.get('/api/login')
        .then(response => {
            if (re.test(window.location.pathname)) {
                history.push("/dashboard/home")
            } 
        })
        .catch(e => {
            history.push('/login')
        })
}

export default loginChecker;