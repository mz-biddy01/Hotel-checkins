import {useState, useEffect} from 'react';
import CheckinsForm from "../components/CheckinsForm";
import CheckinsGrid from "../components/CheckinsGrid";
import CheckinService from "../services/CheckinService";

const CheckinsContainer = () => {
    
    const [checkins, setCheckins] = useState([])

    useEffect(() => {
        CheckinService.getCheckins()
        .then(checkins => setCheckins(checkins))
    }, [])

    const createCheckin = newCheckin => {
        CheckinService.postCheckin(newCheckin)
        .then(savedCheckin => setCheckins([...checkins, savedCheckin]))
    }

    const deleteCheckin = idToDelete => {
        CheckinService.deleteCheckin(idToDelete)
        .then(() => {
            setCheckins(checkins.filter(checkin => checkin._id !== idToDelete))
        })
    }

    return (
        <>
        <CheckinsForm createCheckin={createCheckin} />
        <CheckinsGrid checkins={checkins} deleteCheckin={deleteCheckin} />
        </>
    )
}

export default CheckinsContainer;