import axios from "axios"
import { apiUrl } from "../../utils/apiUrl"
import {
    CREATE_SINGLE_STORE_INFO_FAIL,
    CREATE_SINGLE_STORE_INFO_REQUEST,
    CREATE_SINGLE_STORE_INFO_SUCCESS,
    GET_STORE_PRODUCTS_FAIL,
    GET_STORE_PRODUCTS_REQUEST,
    GET_STORE_PRODUCTS_SUCCESS,
} from "../constants/storeConstants"
import firebase from "@firebase/app-compat"


//get all products for a single store
export const get_store_products_Actions = (id) => (dispatch) => {
    dispatch({
        type: GET_STORE_PRODUCTS_REQUEST,
        payload: id // id of the user
    })
    axios.get(`${apiUrl}/store/single/${id}`).then(res => {
        dispatch({
            type: GET_STORE_PRODUCTS_SUCCESS,
            payload: res.data
        })
    }).catch(error => {
        dispatch({
            type: GET_STORE_PRODUCTS_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
}
//edit single store actions
export const create_single_store_Actions = (name, description, logo, token) => (dispatch) => {
    dispatch({
        type: CREATE_SINGLE_STORE_INFO_REQUEST,
        payload: { name, description, logo, token }
    })

    // Create a root reference
    var storageRef = firebase.storage().ref();
    // Create the file metadata
    var metadata = {
        contentType: 'image/jpeg'
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    var uploadTask = storageRef.child('logos/' + Date.now()).put(logo, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
                default:
                    return snapshot.state
            }
        },
        (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;
                case 'storage/canceled':
                    // User canceled the upload
                    break;

                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
                default:
                    return error.code
            }
        },
        () => {
            // Upload completed successfully, now we can get the download URL
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                console.log('File available at', downloadURL);
                axios.post(`${apiUrl}/store/create`, {
                    name: name,
                    logo: downloadURL,
                    banner: 'no baner',
                    description: description

                }, {
                    headers: {
                        Authorization: token
                    }
                }).then(res => {
                    dispatch({
                        type: CREATE_SINGLE_STORE_INFO_SUCCESS,
                        payload: res.data
                    })
                }).catch(error => {
                    dispatch({
                        type: CREATE_SINGLE_STORE_INFO_FAIL,
                        payload: error.response && error.response.data.error
                            ? error.response.data.error
                            : error.message,
                    })
                })
            });
        }
    );


}