const API = 'http://10.0.2.2:3000/rooms'
//'us-cdbr-east-06.cleardb.net'

export const  getRooms = async () => {
    const res = await fetch(API)
    return await res.json()
}

export const getRoom = async (id) => {
    const res = await fetch(`${API}/${id}`)
    return await res.json()
}

export const saveRoom = async (newRoom) => {
    const res = await fetch(API, {
        method: "POST",
        headers: { Accept: "application/json","Content-Type": "application/json"},
        body: JSON.stringify(newRoom)
    });
    return await res.json();
}

export const deleteRoom = async (id, newRoom) => {//es update pero me da flojera cambiarlo
    // await fetch(`${API}/${id}`, {
    //     method: "DELETE",
    // })
    const res = await fetch(`${API}/clear/${id}`, {//acuerdate de la ruta, menso
        method: "PUT",
        headers: { Accept: "application/json","Content-Type": "application/json"},
        body: JSON.stringify(newRoom)
    })
    return res;
};

export const updateRoom = async (id, newRoom) => {
    const res = await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: { Accept: "application/json","Content-Type": "application/json"},
        body: JSON.stringify(newRoom)
    })
    return res;
}