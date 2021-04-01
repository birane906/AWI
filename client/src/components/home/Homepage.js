import React from 'react'
import './Homepage.css'
import Button from 'react-bootstrap/Button'
import Image from "react-bootstrap/Image";
import CardDeck from "react-bootstrap/Card";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";

const Homepage=(props) => {

    return(
        <div>
            <div className="rowhead">
                <div className="logorow">
                    <Image src="/logo_text.png" className="logo" />
                </div>
                <h2>Dashboard admin</h2>
            </div>
            <CardDeck>
                <Card>
                    <Card.Body>
                        <Card.Title>Liste d'exposant</Card.Title>
                        <Card.Text>
                            Vous trouvez ici liste d'exposant de chaque années
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link to="/dashboard/exposant">
                            <Button variant="primary" size="lg" block>
                                Voir liste d'exposant
                            </Button>
                        </Link>

                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Suivi d'exposant</Card.Title>
                        <Card.Text>
                            Vous trouvez ici liste de suivi contact exposant
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link to="/dashboard/suivis">
                            <Button variant="primary" size="lg" block>
                                Voir liste de suivi
                            </Button>
                        </Link>

                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Liste de zone</Card.Title>
                        <Card.Text>
                            Vous trouvez ici liste de zone
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link to="/dashboard/zones">
                            <Button variant="primary" size="lg" block>
                                Voir liste de zone
                            </Button>
                        </Link>

                    </Card.Footer>
                </Card>
            </CardDeck>
        </div>
    );
}

export default Homepage
