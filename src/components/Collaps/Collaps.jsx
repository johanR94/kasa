/* eslint-disable react/prop-types */
export default function Collaps({description,equipments}){
    return(
        <>
        <section className="details">
            <div className="details_description">
                <h3 className="details_description_title">Descriptions</h3>
                <p className="detail_description_text">{description}</p>
            </div>
            <div className="details_equipement">
                <h3 className="details_equipement_title">Équipements</h3>

                <ul className='detail_equipement_liste'>
                        {equipments?.map((equipment, index) => (
                            <li key={index} className='equipments'>{equipment}</li> 
                        ))}
                    </ul>
            </div>
        </section>
        </>
    )
}

