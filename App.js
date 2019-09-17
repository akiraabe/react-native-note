import MemoListScreen from "./src/screens/MemoListScreen";
import MemoDetailScreen from "./src/screens/MemoDetailScreen";
import MemoEditScreen from "./src/screens/MemoEditScreen";
import { createAppContainer, createStackNavigator } from 'react-navigation';
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import firebase from 'firebase';

import EVN from './env.json';
 
const firebaseConfig = {
  apiKey: EVN.FIREBASE_API_KEY,
  authDomain: EVN.FIREBASE_AUTH_DOMAIN,
  databaseURL: EVN.FIREBASE_DB_URL,
  projectId: EVN.FIREBASE_PRJ_ID,
  storageBucket: EVN.FIREBASE_STORAGE,
  messagingSenderId: EVN.FIREBASE_SENDER_ID,
};
firebase.initializeApp(firebaseConfig);

const App = createStackNavigator({
  Signup: { screen: SignupScreen },
  Login: { screen: LoginScreen },
  Home: { screen: MemoListScreen },
  MemoDetail: { screen: MemoDetailScreen },
  MemoEdit: { screen: MemoEditScreen },
}, {

    defaultNavigationOptions: {
      headerTitle: 'Memot',
      headerTintColor: '#fff',
      headerBackTitle: null,
      headerStyle: {
        backgroundColor: '#265366',
      },
      headerTitleStyle: {
        color: '#fff',
      },
    },
  });

export default createAppContainer(App);