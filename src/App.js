import React from 'react';
import './App.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Recipes from './components/Recipes';
import Main from './components/Main'
import { BrowserRouter as Router, Route} from "react-router-dom";
import SingleRecipe from './components/SingleRecipe';


export default function App() {
  return (
    <Router>
      <div className="App" style={{width: "100vw", height: '90vh'}}>
        <Route exact path="/" component={Main}></Route>
        <Route path="/singleRecipe" component={SingleRecipe}></Route>
        {/* <Header />
        <Recipes />
        <Footer /> */}
      </div>
    </Router>
  );
}



//   const contentful = require('contentful-management')

// const client = contentful.createClient({
//   accessToken: '<content_management_api_key>'
// })

// client.getSpace('<space_id>')
// .then((space) => space.getEnvironment('<environment_id>'))
// .then((environment) => environment.createAsset({
//   fields: {
//     title: {
//       'en-US': 'Playsam Streamliner'
//     },
//     description: {
//       'en-US': 'Streamliner description'
//     },
//     file: {
//       'en-US': {
//         contentType: 'image/jpeg',
//         fileName: 'example.jpeg',
//         upload: 'https://example.com/example.jpg'
//       }
//     }
//   }
// }))
// .then((asset) => asset.processForAllLocales())
// .then((asset) => console.log(asset))
// .catch(console.error)