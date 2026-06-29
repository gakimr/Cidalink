const Routes = require("express");
const occurrencesControllers = require("../controller/occurrencesControllers.js");
const upload = require("../utils/upload.js");

const routes = Routes();


const endPoint = `/${occurrencesControllers.EndPointName()}`;

routes.get(endPoint, async (req, res) => {
await occurrencesControllers.Get(req, res);
  
});

routes.post(endPoint, upload.single("uploadFoto"), async (req, res) => {
 await occurrencesControllers.Post(req, res);
});


routes.put(`${endPoint}/:id`, async (req, res) => {
    const responseData = await occurrencesControllers.Put(req, res);
});

routes.delete(`${endPoint}/:id`, async (req, res) => {
   const responseData = await occurrencesControllers.Delete(req, res);
   res.status(201).json(responseData);
});



routes.put(`${endPoint}/:id`, async (req, res) => {
   //mudança da nilce
    const responseData = await occurrencesControllers.Put(req, res);
});

routes.delete(`${endPoint}/:id`, async (req, res) => {
   const responseData = await occurrencesControllers.Delete(req, res);
   res.status(201).json(responseData);
});


module.exports = routes;