import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.jsx'
import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";
import {ApolloProvider} from "@apollo/client/react";
import {RecoilRoot} from "recoil";

const client = new ApolloClient({
    link: new HttpLink({ uri: "http://localhost:3000/" }),
    cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <ApolloProvider client={client}>
        <RecoilRoot>
            <App />
        </RecoilRoot>
    </ApolloProvider>
);
