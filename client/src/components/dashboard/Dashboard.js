import { React, useState } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import "./Dashboard.css"

const Dashboard = (props) => {

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
                            <Route path={value.props.path} component={() => {return value}} key={index}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Dashboard;