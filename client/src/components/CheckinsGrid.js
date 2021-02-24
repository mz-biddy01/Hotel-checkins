import CheckinsCard from './CheckinsCard';

const CheckinsGrid = ({checkins, deleteCheckin}) => {
    return (
        <div className="checkin-grid">
            {checkins.map(checkin => {
                return (
                    <CheckinsCard
                    key={checkin.id}
                    checkin={checkin}
                    deleteCheckin={deleteCheckin}
                    />
                )
            })}
        </div>
    )
}

export default CheckinsGrid;