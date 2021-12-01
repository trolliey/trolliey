import axios from "axios"
import { apiUrl } from "../../utils/apiUrl"
import {
    ADD_NEW_AD_FAIL,
    ADD_NEW_AD_REQUEST,
    ADD_NEW_AD_SUCCESS,
    EDIT_SINGLE_AD_REQUEST,
    GET_ALL_ADS_FAIL,
    GET_ALL_ADS_REQUEST,
    GET_ALL_ADS_SUCCESS
} from "../constants/adConstants"
import firebase from "@firebase/app-compat"

//create a new add to the six already available
export const create_new_add_Action = (picture, name, link_to, delete_at) => (dispatch) => {
    dispatch({
        type: ADD_NEW_AD_REQUEST,
        payload: { picture, name, link_to, delete_at }
    })
    // Create a root reference
    var storageRef = firebase.storage().ref();
    // Create the file metadata
    var metadata = {
        contentType: 'image/jpeg'
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    var uploadTask = storageRef.child('images/' + Date.now()).put(picture, metadata);

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
            }
        },
        () => {
            // Upload completed successfully, now we can get the download URL
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                console.log('File available at', downloadURL);
                axios.post(`${apiUrl}/ads/create`, {
                    picture: downloadURL,
                    name,
                    link_to,
                    delete_at
                }).then(res => {
                    dispatch({
                        type: ADD_NEW_AD_SUCCESS,
                        payload: res.data
                    })
                }).catch(error => {
                    dispatch({
                        type: ADD_NEW_AD_FAIL,
                        payload: error.response && error.response.data.error
                            ? error.response.data.error
                            : error.message,
                    })
                })
            });
        }
    );
}

// get all ads for both home page and admi dashboard
export const get_all_ads_Action = () => (dispatch) => {
    dispatch({
        type: GET_ALL_ADS_REQUEST
    })
    axios.get(`${apiUrl}/ads/all`).then(res => {
        dispatch({
            type: GET_ALL_ADS_SUCCESS,
            payload: res.data.ads
        })
    }).catch(error => {
        dispatch({
            type: GET_ALL_ADS_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
}

//edit single ad action 
export const edit_single_ad_Action = (id, picture, name, link_to, delete_at) => (dispatch) => {
    dispatch({
        type: EDIT_SINGLE_AD_REQUEST,
        payload: { id, name, link_to, delete_at }
    })

    // Create a root reference
    var storageRef = firebase.storage().ref();

    // Create the file metadata
    var metadata = {
        contentType: 'image/jpeg'
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    var uploadTask = storageRef.child('images/' + Date.now()).put(picture, metadata);

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
            }
        },
        () => {
            // Upload completed successfully, now we can get the download URL
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                console.log('File available at', downloadURL);
                axios.patch(`${apiUrl}/ads/edit/${id}`, {
                    picture: downloadURL,
                    name,
                    link_to,
                    delete_at
                }).then(res => {
                    dispatch({
                        type: ADD_NEW_AD_SUCCESS,
                        payload: res.data
                    })
                }).catch(error => {
                    dispatch({
                        type: ADD_NEW_AD_FAIL,
                        payload: error.response && error.response.data.error
                            ? error.response.data.error
                            : error.message,
                    })
                })
            });
        }
    );
}