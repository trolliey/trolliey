import axios from 'axios'
import { apiUrl } from '../../utils/apiUrl'
import { CREATE_SUBCATEGORY_FAIL, CREATE_SUBCATEGORY_REQUEST, CREATE_SUBCATEGORY_SUCCESS, GET_SUBCATEGORIES_FAIL, GET_SUBCATEGORIES_REQUEST, GET_SUBCATEGORIES_SUCCESS } from '../constants/getSubCategoryConstants'
import { storage } from '../../utils/firebase'

//GET ALL SUBCATEGORIRES FOR A CAEGORY
export const get_subcategories_Action = (category) => (dispatch) => {
    dispatch({
        type: GET_SUBCATEGORIES_REQUEST,
        payload: category
    })
    axios.get(`${apiUrl}/sub_category/all/${category}`).then(res => {
        dispatch({
            type: GET_SUBCATEGORIES_SUCCESS,
            payload: res.data
        })
    }).catch(error => {
        dispatch({
            type: GET_SUBCATEGORIES_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
}

//create sub category action
export const add_subcategory_Action = (sub_cat, pictures, category_slug) => async (dispatch) => {
    dispatch({
        type: CREATE_SUBCATEGORY_REQUEST,
        payload: { sub_cat, pictures, category_slug }
    })
    const uploads = [];
    const promises = [];
    const now = Date.now()

    pictures.forEach(file => {
        const path = storage.ref().child(`properties/${file.name}-${now}`);
        const uploadPromise = path.put(file).then(async snapshot => {
            /** @TODO it's a good idea to do some error handling here */
            const downloadURL = await path.getDownloadURL();
            uploads.push(downloadURL);
        });
        promises.push(uploadPromise);
    })

    await Promise.all(promises); // Wait for all promises to complete
    // console.log(uploads)

    axios.post(`${apiUrl}/sub_category/create/${category_slug}`, {
        sub_category: sub_cat,
        sub_category_picture: uploads,
        description: ''
    }).then(res => {
        dispatch({
            type: CREATE_SUBCATEGORY_SUCCESS,
            payload: res.data
        })
    }).catch(error => {
        dispatch({
            type: CREATE_SUBCATEGORY_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
    // console.log(urls)



}