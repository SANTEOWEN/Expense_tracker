import { Tabs } from 'expo-router'
import React from 'react'

const TabLayout = () => (
    <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen name='index'
            options={{
                title: 'Home',
            }} />
        <Tabs.Screen name='Transactions'
            options={{
                title: 'Transactions'
            }} />
        <Tabs.Screen name='Goals'
            options={{
                title: 'Goals'
            }} />
        <Tabs.Screen name='Analytics'
            options={{
                title: 'Analytics'
            }} />
    </Tabs>
)

export default TabLayout
