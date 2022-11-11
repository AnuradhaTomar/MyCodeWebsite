import React,{ Component } from 'react';
import './App.css';
import Message from './Components/Message';
import Count from './Components/Count';
import Functionclick from './Components/functionclick';
import Condition from './Components/methodProp';
import Array from './Components/Namelist';
import Stylesss from './Components/Stylesheet';
import Form from './Components/Form';
import HookCounterArray from './Components/HookCounterArray';
import Datafetching from './Components/Datafetching';
import Context0 from './Components/Context';
// import ClassBind from './Components/Classbind';
import useReduce from './Components/useReducer';
import useRefHook1 from './Components/useRefHook1'

export const userContext = React.createContext()
export const channelContext = React.createChannel()

function App() {

  return (
    <div className='App'>
     {/* <Message/> */}
    {/* <Count /> */}
    {/* <Functionclick /> */}
    {/* <Condition /> */}
    {/* <Array /> */}
    {/* <Stylesss design={true}/> */}
    {/* <HookCounterArray /> */}
    {/* <Form /> */}
    {/* <Datafetching /> */}
    {/* <userContext.Provider value={'vishwas'}>
      <channelContext.Provider value={'leo'}>
        <Context0 />
      </channelContext.Provider>
    </userContext.Provider> */}
    {/* <useReduce /> */}
    {/* <useCallbacks /> */}
    {/* <useRefHook1 /> */}
    </div>
  )
}

export default App;
