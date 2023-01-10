import { connect } from '../database'


export const getRooms = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM rooms");
    res.json(rows)
}

export const getRoom = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM rooms WHERE room =?", [
        req.params.room
    ]);
    res.send(rows)
}

export const getRoomCount = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT COUNT(*) FROM rooms");
    res.json(rows[0]["COUNT(*)"])
}

export const saveRoom = async (req, res) => {
    const connection = await connect();
    const [results] = await connection.query(
        "INSERT INTO rooms(room, name, numberPeople, entryDate, outputDate) VALUES (?,?,?,?,?)", [
        req.body.room,
        req.body.name,
        req.body.numberPeople,
        req.body.entryDate,
        req.body.outputDate
    ])
    res.json({
        ...req.body
    });
}

export const deleteRoom = async (req, res) => {
    const connection = await connect();
    await connection.query("DELETE FROM rooms WHERE room =?", [
        req.params.room
    ])
    res.sendStatus(204);
    // res.json({
    //     id: results.affectedRows,
    // });
}

export const updateRoom = async (req, res) => {
    const connection = await connect();
    await connection.query("UPDATE rooms SET ? WHERE room = ?", [
        req.body,
        req.params.room
    ])

    res.sendStatus(204);
}

export const clearRoom = async (req, res) => {
    const connection = await connect();
    await connection.query("UPDATE rooms SET name = '', numberPeople = '', entryDate = '', outputDate = '' WHERE room = ?", [
        req.params.room
    ])
    res.sendStatus(204);
}