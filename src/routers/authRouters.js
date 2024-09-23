
import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createBottomTabNavigator();

export default function AuthRouters(){
   return(
    <Stack.Navigator>
         <Stack.Screen 
            name="Home"
            component={Home} 
            options={{title: 'Home'}}
        />
        <Stack.Screen 
            name="Registro"
            component={Register} 
            options={{title: 'Registro'}}
        />
      </Stack.Navigator>
   )
}