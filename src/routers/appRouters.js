import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/Home";

const Tab = createNativeStackNavigator();

export default function AppRouters(){
   return(
    <Tab.Navigator>
        <Tab.Screen
          name="Login"
          component={Login}
          options={{title: 'Login acesso'}}
        />       
       <Tab.Screen 
            name="Registro"
            component={Register} 
            options={{title: 'Faça seu registro'}}
        />
         <Tab.Screen 
            name="Home"
            component={Home} 
            options={{title: 'Home'}}
        />
      </Tab.Navigator>
   )
}