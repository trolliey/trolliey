import axios from "axios"
import { apiUrl } from "../../utils/apiUrl"
import { ADD_NEW_AD_FAIL, ADD_NEW_AD_REQUEST, ADD_NEW_AD_SUCCESS } from "../constants/adConstants"
import firebase from "@firebase/app-compat"

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