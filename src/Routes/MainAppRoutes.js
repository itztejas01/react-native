import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListViewScreen  from '../Components/ListViewScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ImageDetailsScreen from '../Components/ImageDetailsScreen'
import NextScreen from '../Components/NextScreen';
import Tab1Screen from '../Components/Tab1Screen';
import Tab2Screen from '../Components/Tab2Screen';
import SplashScreen from '../Components/SplashScreen';



const Tab1StackNav = createNativeStackNavigator();
const Tab2StackNav = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tab1Stack(){
    return (

            <Tab1StackNav.Navigator
            screenOptions={{
                headerStyle:{backgroundColor:'yellow'},
            }}
            >
                <Tab1StackNav.Screen 
                name="Image Gallery" 
                component={ListViewScreen}
                options={({navigation,route}) => ({
                    headerTitle:'Home',
                    headerStyle:{backgroundColor:'yellow'},
                    headerTitleAlign:'center',
                    headerRight: () => (
                    <TouchableOpacity onPress={()=> navigation.navigate('Next Screen')}>

                        <Text style={{color:'black'}}>Next</Text>
                    </TouchableOpacity>
                    ),
                    
                
                })}
                />
                <Tab1StackNav.Screen name="Image Details" component={ImageDetailsScreen} />
                <Tab1StackNav.Screen name="Next Screen" component={NextScreen} />
                
            </Tab1StackNav.Navigator>
    );
}
function Tab2Stack(){
     return(
         
            <Tab2StackNav.Navigator>
            <Tab2StackNav.Screen name="Tab2 Screen1" component={Tab1Screen} />
            <Tab2StackNav.Screen name="Tab2 Screen2" component={Tab2Screen} />
            </Tab2StackNav.Navigator>
            
    )
}


function tabStack(){
    return(
            <Tab.Navigator screenOptions={{
                headerShown:false,
                headerStyle:{backgroundColor:'yellow'}
            }}>
                <Tab.Screen name="Image List" component={Tab1Stack} />
                <Tab.Screen name="Tab 2" component={Tab2Stack} />
            </Tab.Navigator>

    )
}

function MainAppRoutes(){
    return(
        <NavigationContainer>
            <MainStack.Navigator screenOptions={{
                headerShown:false,
            }}>
                <MainStack.Screen name='Splash Screen' component={SplashScreen} options={{
                    headerShown:false,
                }} />
                <MainStack.Screen name='HomeScreen' component={tabStack} />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}

export default MainAppRoutes;