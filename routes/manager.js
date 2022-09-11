const managerController=require("../controllers/manager");
const useAllController=require("../controllers/matchmaker");
const router=require("express").Router();

router.get("",useAllController.getAllUsersCards);
router.get("",managerController.getAllNewRegisters);
router.delete("/:id", managerController.deleteUsers);
router.get("",managerController.getAllMassagesFromUsers);
router.get("",managerController.getAllMassagesFromMatchmakers);

module.exports=router; 
