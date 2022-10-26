import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import { store } from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

function getCookie(name:string) {
  let cookieValue = null;
  if(document.cookie && document.cookie !== ''){
    const cookies = document.cookie.split(';');
    for (let i = 0; i< cookies.length; i++){
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length +1)===(name+ '=')){
        cookieValue=decodeURIComponent(cookie.substring(name.length+1));
        break;
      }
    }
  }
  return cookieValue;
}
const csrftoken = getCookie('csrftoken')