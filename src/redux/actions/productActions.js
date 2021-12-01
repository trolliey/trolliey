import {
    CREATE_PRODUCT_FAIL,
    CREATE_PRODUCT_REQUEST,
    CREATE_PRODUCT_SUCCESS,
    GET_ALL_PRODUCTS_FAIL,
    GET_ALL_PRODUCTS_REQUEST,
    GET_ALL_PRODUCTS_SUCCESS,
    GET_SINGLE_PRODUCT_FAIL,
    GET_SINGLE_PRODUCT_REQUEST,
    GET_SINGLE_PRODUCT_SUCCESS
} from "../constants/productConstants"
import firebase from "@firebase/app-compat"
import axios from 'axios'
import { apiUrl } from "../../utils/apiUrl"
import { storage } from "../../utils/firebase"

//create a product
export const create_product_Action = (token, values, additional_features, pictures) => (dispatch) => {

    dispatch({
        type: CREATE_PRODUCT_REQUEST,
        payload: token
    })

    //Firebase Storage Reference
    const storageRef = firebase.storage().ref();

    //Upload Image Function returns a promise  
    async function uploadImageAsPromise(imageFile) {
        return new Promise(function (resolve, reject) {
            const task = storage.ref().child(`products/-${Date.now()}`).put(imageFile);

            task.on(
                "state_changed",
                function progress(snapshot) {
                    const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                },

                function error(err) {
                    reject(err);
                },

                async function complete() {
                    //The getDownloadURL returns a promise and it is resolved to get the image url.
                    const imageURL = await task.snapshot.ref.getDownloadURL();
                    resolve(imageURL);
                }
            );
        });
    }

    //Handling the files
    const promises = [];
    for (const file of pictures) {//Instead of e.target.files, you could also have your files variable
        promises.push(uploadImageAsPromise(file))
    }

    //The Promise.all() will stop the execution, until all of the promises are resolved.
    Promise.all(promises).then((fileURLS) => {
        //Once all the promises are resolved, you will get the urls in a array.
        console.log(fileURLS)

        const product = {
            title: values.name,
            description: values.description,
            price: values.price,
            category: values.category,
            sub_category: values.sub_category,
            brand: values.brand,
            condition: values.condition,
            sub_title: values.sub_title,
            stock: values.in_stock,
            discount_price: values.discount,
            shipping_type: values.shipping_offered,
            shipping_area: values.shipping_radius,
            shipping_price: values.shipping_price,
            additional_features: additional_features,
            pictures: fileURLS
        }
        axios.post(`${apiUrl}/product/create`, {
            product,
        }, {
            headers: {
                Authorization: token
            }
        }).then(res => {
            dispatch({
                type: CREATE_PRODUCT_SUCCESS,
                payload: res.status
            })
        }).catch(error => {
            dispatch({
                type: CREATE_PRODUCT_FAIL,
                payload: error.response && error.response.data.error
                    ? error.response.data.error
                    : error.message,
            })
        })
    })

}

// get all products
export const get_all_products_Action = (query) => (dispatch) => {
    dispatch({
        type: GET_ALL_PRODUCTS_REQUEST,
    })
    axios.post(`${apiUrl}/product/all`, {
        search: query
    }).then(res => {
        dispatch({
            type: GET_ALL_PRODUCTS_SUCCESS,
            payload: res.data
        })
    }).catch(error => {
        dispatch({
            type: GET_ALL_PRODUCTS_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
}


// get single product actions
export const get_single_product_Action = (id) => (dispatch) => {
    dispatch({
        type: GET_SINGLE_PRODUCT_REQUEST,
        payload: id
    })
    axios.get(`${apiUrl}/product/single/${id}`).then(res => {
        dispatch({
            type: GET_SINGLE_PRODUCT_SUCCESS,
            payload: res.data
        })
    }).catch(error => {
        dispatch({
            type: GET_SINGLE_PRODUCT_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
}