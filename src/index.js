import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from './reducer';
import Routes from './routes'
import reportWebVitals from './reportWebVitals';
import './assets/style.css'

// if (process.env.NODE_ENV !== "development") {
//   Sentry.init({
//     dsn: "https://3dac2a2e75954f43b1415e5e768261e6@o1010649.ingest.sentry.io/5975243",
//     integrations: [new Integrations.BrowserTracing()],
//     tracesSampleRate: 1.0,
//   });
// }

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <BrowserRouter>
    <Fragment>
      <Provider store={store}>
        <Routes />
      </Provider>
    </Fragment>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
