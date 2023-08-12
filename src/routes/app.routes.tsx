import { Platform } from 'react-native'

import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

import { useTheme } from 'native-base';

import { House, Tag, SignOut } from 'phosphor-react-native';

import { Home } from '@screens/Home';
import { AdActivated } from '@screens/AdActivated';
import { AdDetails } from '@screens/AdDetails';
import { AdDisabled } from '@screens/AdDisabled';
import { CreatingAd } from '@screens/CreatingAd';
import { MyAnnouncements } from '@screens/MyAnnouncements';
import { Profile } from '@screens/Profile';
import { Logout } from '@screens/Logout';

type AppRoutes = {
    home: undefined;
    myAnnouncements: undefined;
    logout: undefined;
    adActivated: undefined;
    adDisabled: undefined;
    creatingAd: undefined;
    profile: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;


const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
    const {colors, sizes} = useTheme()
    // const iconsSize = sizes[6]

    return (
        <Navigator 
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: colors.gray[600],
                tabBarInactiveTintColor: colors.gray[400],
                tabBarStyle:{
                    backgroundColor: colors.gray[100],
                    borderTopWidth: 0,
                    height: Platform.OS === 'android' ? 'auto' : 96,
                    paddingBottom: sizes[8],
                    paddingTop: sizes[7]
                }
            }}

        >
            <Screen
                name='home'
                component={Home}
                options={{
                    tabBarIcon: ({color}) => (
                        <House color={color} weight='bold' size={24}/>
                    )
                }}
            />

            <Screen
                name='myAnnouncements'
                component={MyAnnouncements}
                options={{
                    tabBarIcon: ({color}) => (
                        <Tag color={color} weight='bold' size={24}/>
                    )
                }}
            />

            <Screen
                name='logout'
                component={Logout}
                options={{
                    tabBarIcon: () => (
                    <SignOut color='#EE7979' size={24} weight='bold'/>
                    )
                }}
            />

            <Screen
                name='adActivated'
                component={AdActivated}
                options={{tabBarButton: () => null}}
            />

            <Screen
                name='adDisabled'
                component={AdDisabled}
                options={{tabBarButton: () => null}}
            />

            <Screen
                name='creatingAd'
                component={CreatingAd}
                options={{tabBarButton: () => null}}
            />

            <Screen
                name='profile'
                component={Profile}
                options={{tabBarButton: () => null}}
            />
        </Navigator>
    )
}