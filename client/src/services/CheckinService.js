const baseURL = 'http://localhost:5000/api/checkins/'

const CheckinService = {
    getCheckins() {
        return fetch(baseURL)
        .then(res => res.json())
    },

    postCheckin(payload) {
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
    },

    deleteCheckin(id) {
      return fetch(baseURL + id, {
        method: 'DELETE'
        })
    },
    

}

export default CheckinService;