
import db from '../models/index';
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findALL();
        console.log('------------------')
        console.log('data')
        console.log('------------------')
        // return res.send("Hello world from controller")
        return res.render("homepage.ejs")
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
module.exports = {
    getHomePage: getHomePage,
}