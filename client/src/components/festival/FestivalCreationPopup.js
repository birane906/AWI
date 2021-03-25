import React, { useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap'
import axios from 'axios'
import './FestivalCreationPopup.css'

const FestivalCreationPopup = (props) => {

    const [name, setName] = useState('')
    const [year, setYear] = useState(new Date().getFullYear())
    const [espaces, setEspaces] = useState([])

    const handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;

        switch (name) {
            case 'name':
                setName(value)
                break;

            case 'year':
                const re = /^[0-9\b]+$/;
                if (e.target.value === '' || re.test(e.target.value)) {
                    setYear(value)
                }
                break;

            default:
                break;
        }
    };

    const handleEspaceChange = (e, index) => {
        e.preventDefault();
        const { name, value } = e.target;
        var newValue = espaces[index]
        const re = /^[0-9\b]+$/;

        switch (name) {
            case 'name':
                newValue.name = value
                break;
            
            case 'nb_tables':
                if (e.target.value === '' || re.test(e.target.value)) {
                    newValue.nb_tables = value
                }
                break;
            
            case 'prix_table':
                if (e.target.value === '' || re.test(e.target.value)) {
                    newValue.prix_table = value
                }
                break;

            case 'prix_m2':
                if (e.target.value === '' || re.test(e.target.value)) {
                    newValue.prix_m2 = value
                }
                break;

            default:
                break;
        }
        var newArray = [...espaces]
        newArray[index] = newValue
        setEspaces(newArray)
        console.log(espaces);
    }

    const addEspace = () => {
        setEspaces([...espaces, {
            name: "",
            nb_tables: "",
            prix_table: "",
            prix_m2: "",
        }])
    }

    const removeElement = (array, index) => {
        const newArray = [...array]
        if (index > -1) {
            newArray.splice(index, 1);
        }
        setEspaces(newArray)
        console.log(espaces);
    }

    const createFestival = () => {
        axios.post('/api/festivals', {
            name: name,
            year: year,
            espaces: espaces,
        })
    }

    return (
        <div className="fullscreen">
            {console.log("espaces", espaces)}
            <div className="popup border p-4 text-center">
                <Form>
                    <div className="row">
                        <div className="col-xs">
                            <Form.Group controlId="formFestivalName">
                                <Form.Label>Nom du festival</Form.Label>
                                <Form.Control name="name" value={name} placeholder="Nouveau festival" onChange={handleChange} />
                            </Form.Group>

                            <Form.Group controlId="formFestivalYear">
                                <Form.Label>Année</Form.Label>
                                <Form.Control name="year" value={year} onChange={handleChange} />
                            </Form.Group>
                        </div>
                        <div className="cols-xs">
                            <Form.Group>
                                <div className="d-flex flex-row">
                                    <Form.Label>Espaces</Form.Label>
                                    <div className="ml-1">
                                        <Button variant="secondary" onClick={addEspace}>+</Button>
                                    </div>
                                </div>
                                <Table striped bordered hover size="sm" responsive="md">
                                    <thead>
                                        <tr>
                                            <th>Nom</th>
                                            <th>Nombre de tables</th>
                                            <th>Prix d'une table</th>
                                            <th>Prix du m²</th>
                                            <th>Supprimer</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            espaces.map((espace, key) => (
                                                <tr key={key}>
                                                    <td>
                                                        <Form.Control name="name" value={espace.name} placeholder="Nom espace" onChange={(e) => handleEspaceChange(e, key)}/>
                                                    </td>
                                                    <td>
                                                        <Form.Control name="nb_tables" value={espace.nb_tables} placeholder="0" onChange={(e) => handleEspaceChange(e, key)}/>
                                                    </td>
                                                    <td>
                                                        <Form.Control name="prix_table" value={espace.prix_table} placeholder="0" onChange={(e) => handleEspaceChange(e, key)}/>
                                                    </td>
                                                    <td>
                                                        <Form.Control name="prix_m2" value={espace.prix_m2} placeholder="0" onChange={(e) => handleEspaceChange(e, key)}/>
                                                    </td>
                                                    <td> <Button variant="danger" onClick={() => removeElement(espaces, key)}>X</Button> </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </Table>
                            </Form.Group>
                        </div>
                    </div>
                    <div className="d-flex flex-row-reverse w-100">
                        <div className="m-1">
                            <Button variant="danger" onClick={props.closePopup}>Annuler</Button>
                        </div>
                        <div className="m-1">
                            <Button variant="success" onClick={createFestival}>Valider</Button>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default FestivalCreationPopup;