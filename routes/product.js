const express=require("express")
const router=express.Router();

const {getallproduct,getalltestingproducts}=require("../controller/product")

router.route("/").get(getallproduct);
router.route("/testing").get(getalltestingproducts);

module.exports=router;