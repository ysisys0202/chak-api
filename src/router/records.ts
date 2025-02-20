import express from "express";
import * as recordsController from "../controller/records.js";
import { validate } from "../middleware/validators/index.js";
import { RecordSchema } from "../middleware/validators/records.js";
import * as recordDocs from "../middleware/docs/record.js";

const router = express.Router();

router.get("/", recordDocs.getRecords, recordsController.getRecords);

router.get(
  "/public",
  recordsController.getPublicRecords,
  recordDocs.getPublicRecords
);

router.get("/:id", recordDocs.getRecord, recordsController.getRecord);

router.post(
  "/",
  validate(RecordSchema),
  recordDocs.createRecord,
  recordsController.createRecord
);

router.put(
  "/:id",
  validate(RecordSchema),
  recordDocs.updateRecord,
  recordsController.updateRecord
);

router.delete("/:id", recordDocs.removeRecord, recordsController.removeRecord);

export default router;
