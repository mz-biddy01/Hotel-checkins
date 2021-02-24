const CheckinsCard = ({ checkin, deleteCheckin}) => {

    const handleDeleteClick = () => {
        deleteCheckin(checkin._id)
    }
    console.log('checkin', checkin)

    return (
         <div className="checkin-card">
            <h3>{checkin.name}</h3>
            <p>email address: {checkin.email}</p>
            <p>status: {checkin.status}</p>
            <button 
               type="button"
               classname="delete-btn"
               onClick={handleDeleteClick}
            >
            </button>
         </div>
    )
}

export default CheckinsCard;