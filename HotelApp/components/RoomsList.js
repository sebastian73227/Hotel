import React, {useState, useEffect} from 'react'
import { RefreshControl, FlatList } from 'react-native'
import { useIsFocused } from '@react-navigation/native'

import RoomsItem from './RoomsItem'
import { getRooms, deleteRoom } from '../api'

const RoomsList = () => {

    const[rooms, setRooms] = useState([]);
    const[refresing, setRefresing] = useState(false);

    const isFocused = useIsFocused()

    const loadRooms = async () => {
        const data = await getRooms();
        setRooms(data);
    };

    useEffect(() => {
        loadRooms();
    }, [isFocused]);

    const handleDelete = async (id) => {
        await deleteRoom(id);
        await loadRooms();
    }


    const renderItem = ({ item }) => {
        return <RoomsItem room={item} handleDelete={handleDelete}/>;
    };

    const onRefresh = React.useCallback( async () => {
        setRefresing(true);
        await loadRooms();
        setRefresing(false);
    });


    return (
        <FlatList
        style={{width: '100%'}}
            data={rooms}
            keyExtractor={(item) => item.id + ''}
            renderItem={renderItem}
            refreshControl={
                <RefreshControl
                refreshing = {refresing}
                onRefresh = {onRefresh}
                />
            }
        />
    );
};

export default RoomsList;