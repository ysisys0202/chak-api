import express from "express";
import * as recordsController from "../controller/records.js";
import { validate } from "../middleware/validators/index.js";
import { RecordSchema } from "../middleware/validators/records.js";
import * as recordDocs from "../middleware/docs/record.js";
import { isAuth } from "../middleware/auth/index.js";

const router = express.Router();

router.get("/", isAuth, recordDocs.getRecords, recordsController.getRecords);

router.get(
  "/public",
  recordsController.getPublicRecords,
  recordDocs.getPublicRecords
);

router.get("/:id", isAuth, recordDocs.getRecord, recordsController.getRecord);

router.post(
  "/",
  isAuth,
  validate(RecordSchema),
  recordDocs.createRecord,
  recordsController.createRecord
);

router.put(
  "/:id",
  isAuth,
  validate(RecordSchema),
  recordDocs.updateRecord,
  recordsController.updateRecord
);

router.delete(
  "/:id",
  isAuth,
  recordDocs.removeRecord,
  recordsController.removeRecord
);

export default router;
