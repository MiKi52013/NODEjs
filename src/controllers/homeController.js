
import db from '../models/index';
import CRUDService from "../services/CRUDService";

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        // console.log('------------------')
        // console.log(data)
        // console.log('------------------')
        // return res.send("Hello world from controller")
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e)
    }
}
//funtion
// cấu trúc JS:
// object:{
//     key: ''
//     value: ''
// }
let getCRUD = (req, res) => {
    // return res.send('get CRUD with Movex')
    return res.render('crud.ejs')
}
let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send('post crud from server');
}
let displayGetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    // console.log('------------------')
    // console.log(data) //kiểm tra
    // console.log('------------------')
    // return res.send('display get crud from controller');
    return res.render('displayCRUD.ejs', {
        dataTable: data
    });

}
let getEditCRUD = async (req, res) => {
    // console.log(req.query.id);
    let userId = req.query.id;
    // console.log(userId);
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId);
        //check user data not found
        // let userData
        return res.render('editCRUD.ejs', {
            user: userData
        });
    }
    else {
        return res.send('Users not found!');

    }
}
let putCRUD = async (req, res) => {
    let data = req.body;
    let allUsers = await CRUDService.updateUserData(data);
    // return res.send('update done!');
    return res.render('displayCRUD.ejs', {
        dataTable: allUsers
    });
}
let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDService.deleteUserById(id);
        return res.send('Delete the user succeed!')
    }
    else {
        return res.send('User not found!')
    }

}
module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD
}