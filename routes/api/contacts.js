const express = require("express");
const ctrl = require("../../controllers/contacts");
const { validateBody, isValidId, authenticate } = require("../../middlewars");
const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", authenticate, ctrl.getAll);

router.get("/:contactId", authenticate, isValidId, ctrl.getById);

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema, "missing required name field"),
  ctrl.add
);

router.delete("/:contactId", authenticate, isValidId, ctrl.remove);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema, "missing fields"),
  ctrl.update
);

module.exports = router;
