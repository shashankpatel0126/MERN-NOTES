const express = require("express");
const route= express.Router();

const stuControllers=require("../controllers/studentControllers");



route.post("/stusave", stuControllers.stuDataSave);

route.get("/studisplay", stuControllers.stuDisplay);

route.post("/stusearch", stuControllers.stuSearch);

route.get("/updatedisplay", stuControllers.updateDisplay);

route.post("/updatedatadelete", stuControllers.updateDataDelete);

route.post("/editdisplay", stuControllers.editDisplay);

route.post("/editsave", stuControllers.editDataSave);


module.exports = route;
