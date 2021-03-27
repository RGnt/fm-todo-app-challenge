import React from 'react'

const defaultVal: any[] = [];
export const ToDosContext = React.createContext(defaultVal);

function CountProvider(props: any) {
    const {children} = props;
//   const [state, dispatch] = React.useReducer(countReducer, {count: 0})
  const value: any[] = [];
  return (
      <ToDosContext.Provider value={value}>
          {children}
        </ToDosContext.Provider>
        )
}
export {CountProvider}