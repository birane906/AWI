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
            <div class="cards">
            <CardDeck>
                <Card>
                    <Card.Body>
                        <Card.Title>Liste des exposants</Card.Title>
                        <Card.Text>
                            Vous trouvez ici liste des exposants
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link to="/dashboard/exposant">
                            <Button variant="info" size="lg" block>
                                Voir liste des exposants
                            </Button>
                        </Link>

                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Suivi des exposants</Card.Title>
                        <Card.Text>
                            Vous trouverez ici la liste de suivi des exposants
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link to="/dashboard/suivis">
                            <Button variant="info" size="lg" block>
                                Voir liste de suivis
                            </Button>
                        </Link>

                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Liste des zones</Card.Title>
                        <Card.Text>
                            Vous trouvez ici liste de zone
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link to="/dashboard/zones">
                            <Button variant="info" size="lg" block>
                                Voir liste de zone
                            </Button>
                        </Link>

                    </Card.Footer>
                </Card>
            </CardDeck>
            </div>
        </div>
    );
}

export default Homepage
