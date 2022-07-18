import React from 'react';
import './DescriptionCard.css'

const DescriptionCard = ({book}) => {
    return ( 
        <div className='description-card container-fluid'>
            <h3>Descrição</h3>
            <p>{book.description}</p>

        </div>
     );
}
 
export default DescriptionCard;