import React from 'react'
import "./Festival.css"

function Festival(props) {
    return (
        
          <div className="content">
           <h1> {props.name}</h1>  
           <h2>Année *AnnéeDuFestivalBDD*</h2>  
            Nombre d'emplacement Total *nbEmplTotalDuFestivalBDD*
            <br/>
            Prix Emplacement Premium *prix*  
            <br/>
            Nombre de m² *nbm2*
            <br/>
          Nombre de m² buvette *nbm2buvette*
          <br/>
            Nombre d'emplacement Premium *nbEmplTotalDuFestivalBDD*
            <br/>
            Prix Emplacement Premium *prix* 
            <br/> 
            Nombre de m² premium *nbm2p*
            <br/>
       
            Nombre d'emplacement Promo *nbEmplTotalDuFestivalBDD*  
            <br/>
            Prix Emplacement Premium *prix*  
          </div>

        
        
    )
}

export default Festival