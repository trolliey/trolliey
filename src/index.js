import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ChakraProvider } from "@chakra-ui/react"
// 1. import `PaynowReactWrapper` component
import PaynowReactWrapper  from 'paynow-react';



// 2. Use at the root of your app
const paynow_config = {
  integration_id: '13177',
  integration_key: '08b43090-68db-4674-becb-2bc51a88bb18',
  result_url: 'http://localhost:3000/payment',
  return_url: 'http://localhost:3000/payment',
};
ReactDOM.render(

  <PaynowReactWrapper {...paynow_config}>
    <Provider store={store}>
      <ChakraProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ChakraProvider>
    </Provider>
  </PaynowReactWrapper>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
