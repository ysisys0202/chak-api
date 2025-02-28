import { Request, Response } from "express";
import * as RecordsRepository from "../data/records.js";
import { ReadingState } from "../data/records.js";

export const getRecords = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userId = req.query.userId as string;
  const start = req.query.start ? Number(req.query.start) : 0;
  const display = req.query.display ? Number(req.query.display) : 10;
  const readingState = req.query.readingState as ReadingState;
  const items = await RecordsRepository.getAll({
    userId,
    start,
    display,
    readingState,
  });
  const total = await RecordsRepository.getTotalCount({ userId, readingState });

  res.status(200).json({
    items,
    display,
    total,
    start,
  });
};

export const getRecord = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id as string;
  const record = await RecordsRepository.getById(id);
  if (!record) {
    res
      .status(404)
      .json({ message: `${id} id를 가진 record가 존재하지 않습니다.` });
    return;
  }

  if (record?.userId !== req.userId) {
    res.status(403).json({ message: "해당 페이지에 접근 권한이 없습니다." });
    return;
  }

  res.status(200).json(record);
};

export const getRecordCountByReadingState = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = req.userId;

  if (!id) {
    res
      .status(401)
      .json({ message: `${id}를 가진 사용자는 존재하지 않습니다.` });
    return;
  }
  const preReadingCount = await RecordsRepository.getTotalCount({
    userId: String(id),
    readingState: "pre-reading",
  });
  const readingCount = await RecordsRepository.getTotalCount({
    userId: String(id),
    readingState: "reading",
  });
  const stopCount = await RecordsRepository.getTotalCount({
    userId: String(id),
    readingState: "stop",
  });
  const doneCount = await RecordsRepository.getTotalCount({
    userId: String(id),
    readingState: "done",
  });

  res.status(200).json({
    "pre-reading": preReadingCount,
    reading: readingCount,
    stop: stopCount,
    done: doneCount,
  });
};

export const createRecord = async (req: Request, res: Response) => {
  const data = req.body;
  const record = await RecordsRepository.create({
    ...data,
  });
  res.status(201).json(record);
};

export const updateRecord = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = req.body;
  const record = await RecordsRepository.update(id, data);
  if (!record) {
    res
      .status(404)
      .json({ message: `${id} id를 가진 리뷰가 존재하지 않습니다.` });
    return;
  }

  if (record?.userId !== req.userId) {
    res.status(403).json({ message: "기록 수정 권한이 없습니다." });
    return;
  }

  res.status(200).json(record);
};

export const removeRecord = async (req: Request, res: Response) => {
  const id = req.params.id;
  await RecordsRepository.remove(id);

  res
    .status(204)
    .json({ message: `${id} id 리뷰가 성공적으로 삭제되었습니다.` });
};
