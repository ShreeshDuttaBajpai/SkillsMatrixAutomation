import { useEffect, useState } from 'react';
import {logout} from './Navbar/NavbarFunctions'
import configureStore from './../store/main'
import { useDispatch } from "react-redux";
import Cookies from 'universal-cookie';
import jwt_decode from 'jwt-decode';

const store = configureStore();

const events = [
  'load',
  'mousemove',
  'mousedown',
  'click',
  'scroll',
  'keypress'
];

// const getcurrentstate = store.getState();
// console.log(getcurrentstate);

const InactivityLogout = ({ children }) => {
    const cookies = new Cookies();
    let tokenData = cookies.get('my_cookie');
    const decoded_token = jwt_decode(tokenData);
    const Emp_id = decoded_token.Emp_id;
  
    const dispatch = useDispatch();

  // const currentStates = () => {
  //   console.log(store.getState());
  // }
  // // const { getState } = useStore();
 
  // // unsubscribe();
  // // console.log(unsubscribe);
  // useEffect(() => {
    
  //  const unsubs = store.subscribe(currentStates);
  //   return () => {
  //     unsubs(); 
  //   }
  // }, [])
  


  // const current_State = store.getState();
  // const [currentState, setCurrentState] = useState(current_State.authUser);
  // const [myDataState, setMyDataState] = useState();
  // console.log(currentState.authUser.myData);
 
  // const state = getState();
  // const myData = state.authUser.myData;
  // console.log(myData);
  // const authUser = useSelector((state) => state.authUser.myData);
  // console.log(authUser);
  // console.log(Emp_id);
  // const dispatch = useDispatch();
  let timer;

  const currentState = store.getState();
  console.log(currentState);

  const handleLogoutTimer = () => {
   
    
    timer = setTimeout(() => {
      resetTimer();
      Object.values(events).forEach(item => {
        window.removeEventListener(item, resetTimer);
      });
      // logs out user
      alert('You have been logged out due to inactivity!');
      logout(dispatch, Emp_id);
    }, 700000); // 10000ms = 10secs. You can change the time.
  };

  // this resets the timer if it exists.
  const resetTimer = () => {
    if (timer) clearTimeout(timer);
  };

  useEffect(() => {
    Object.values(events).forEach(item => {
      window.addEventListener(item, () => {
        resetTimer();
        handleLogoutTimer();
      });
    });
  }, []);

  return children;
};

export default InactivityLogout;
