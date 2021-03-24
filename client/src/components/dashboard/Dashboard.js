import React, { useState, useEffect } from 'react';
import { Route, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import loginChecker from '../../middleware/loginChecker';
import "./Dashboard.css"

const Dashboard = (props) => {
    const history = useHistory()
    useEffect(() => loginChecker(history), [history])

    const [navWidth, setNavWidth] = useState(0)

    function openNav() {
        setNavWidth(250)
      }
      
    function closeNav() {
        setNavWidth(0)
    }

    return (
        
        <div>
            <div id="mySidenav" className="sidenav" style={{ width: navWidth}}>
                {
                    props.children.map((value, index) => {
                        return (
                            <Link to={value.props.path} onClick={closeNav} key={index}>{value.props.title}</Link>
                        )
                    })
                }
                <p className="closebtn" onClick={closeNav}>&times;</p>
            </div>
            <span style={{"fontSize":"30px","cursor":"pointer"}} onClick={openNav}>&#9776;</span>
            <div className="dashboardContent">
                {
                    props.children.map((value, index) => {
                        return (
                            <DashboardComponent value={value} index={index} key={index}/>
                        )
                    })
                }
            </div>
        </div>
        
    );
};

const DashboardComponent = React.memo((props) => {
    const value = props.value
    const index = props.index
    return (
        <div>
            <Route exact path={value.props.path} component={() => {return value}} />
        </div>
    );
});

export default Dashboard;