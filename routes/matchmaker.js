const matchmakerController=require("../controllers/matchmaker");
const useAllController=require("../controllers/matchmaker");
const router=require("express").Router();

router.get("",useAllController.getAllUsersCards);
router.delete("/:id", matchmakerController.deleteFromCart);
router.post("",matchmakerController.AddToCart);
router.post("",matchmakerController.enterWithNameAndPassword);
router.post("",matchmakerController.exitFromProfile);
router.post("",matchmakerController.printQuestionPage);
router.post("",matchmakerController.sendMessageToManager);
router.post("",matchmakerController.sendLinkOfWebsite);
router.post("",matchmakerController.sendQuestionPageToManager);

module.exports=router; 


