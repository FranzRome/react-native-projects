import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {MainStack} from "./MainStack";

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <MainStack/>
        </NavigationContainer>
    );

}

export default AppNavigation;