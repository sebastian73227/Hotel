import { View } from 'react-native'
import React from 'react'

import RoomsList from '../components/RoomsList'
import Layout from '../components/Layout'

const HomeScreen = () => {
    return (
        <Layout>
            <RoomsList/>
        </Layout>
    );
};

export default HomeScreen