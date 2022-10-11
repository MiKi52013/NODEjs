import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();
let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/movex', (req, res) => {
        return res.send('Movex')
    });
    //rest api: test: http://localhost:8080/movex
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displayGetCRUD);


    return app.use("/", router)
}
module.exports = initWebRoutes;