import React, {useEffect, useState} from 'react'
import './Exposant.css'
import Table from 'react-bootstrap/Table'
import BootStrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import {Modal,Button} from 'react-bootstrap'


const Exposant = (props) => {
    const [exposants,setExposants]=useState([]);
    const [contacts,setcontacts]=useState([]);
    const [modalInfo, setModalInfo] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getExposants = async()=>{
        try{
            const response = await fetch("http://localhost:8080/api/exposant");
            const jsonData = await response.json();
            setExposants(jsonData);

        }catch(err){
            console.error(err.message)
        }
    }
    useEffect(()=>{
        getExposants();
    },[]);
    console.log(exposants)

    const getContacts = async()=>{
        try{
            const response = await fetch("http://localhost:8080/api/contact");
            const jsonData = await response.json();
            setExposants(jsonData);

        }catch(err){
            console.error(err.message)
        }
    }
    useEffect(()=>{
        getContacts();
    },[]);
    console.log(contacts)

    const columns = [
        {dataField : "id_exposant", text : "Numero id"},
        {dataField : "nom_exposant", text : "Nom exposant"}
    ]
   
    const rowEvents = {
        onClick : (e,row) =>{
            console.log(row)
            setModalInfo(row)
            toggleTrueFalse()
        }
    }

    const toggleTrueFalse = () =>{
        setShowModal(handleShow)
    };

    const ModalContent = () => {
        return(
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalInfo.nom_exposant}</Modal.Title>
                    
                </Modal.Header>
                <Modal.Body>
                <h1>Liste de contacts</h1> 
                    {
                        contacts.map((contact, id) =>{
                            return(
                            <div>
                                AAA
                                <div>AAAAAAAAAAAAAAAAAAAAAA</div>
                                <div>AAAAAAAAAAAAAAAAAAAAAA</div>

                                <div>AAAAAAAAAAAAAAAAAAAAAA</div>

                                </div>)
                        })
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Fermer</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    return(
        <div>
            <h2> Liste d'exposant </h2>
            
                <BootStrapTable
                    keyField="id_exposant"
                    data={exposants}
                    columns={columns}
                    pagination={paginationFactory()}
                    rowEvents={rowEvents}
                />
                
            
            {show ? <ModalContent/> : null}
        </div>
    );
}

export default Exposant
