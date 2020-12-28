import React from "react";
import ReactDOM from 'react-dom';

export default function NewPost({setModalOpen, modalOpen}) {

    function publishNewRecipe(){
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
    }

    function onSave(e){
        e.preventDefault();
        publishNewRecipe();
    }

    return ReactDOM.createPortal((
        <div className='Modal' style={{position: "absolute", top: '50px', left: '50px', backgroundColor: '#F2F2F2', listStyle: 'none', cursor: 'pointer', width: '500px', height: '300px', borderRadius:'5px'}}>
                <div style = {{display: 'flex', flexDirection: 'row'}}>
                <button onClick={onSave}
                    style={{
                        margin: '5px', 
                        borderRadius:'5px', 
                        width: '150px', 
                        height: '30px',
                        backgroundColor: '#DCDCDC',
                        border: 'none',
                    }}
                    >Spara
                </button>
                <button onClick={() => setModalOpen(false)}
                    style={{
                        margin: '5px', 
                        borderRadius:'5px', 
                        width: '150px', 
                        height: '30px',
                        backgroundColor: '#DCDCDC',
                        border: 'none',
                    }}
                    >Stäng
                </button>
                </div>
                
        </div>
    ), document.body);
}