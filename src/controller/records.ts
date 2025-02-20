import { Request, Response } from "express";
import * as RecordsRepository from "../data/records.js";

export const getRecords = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userId = req.query.userId as string;

  const records = await (userId
    ? RecordsRepository.getAllByUserId(userId)
    : RecordsRepository.getAll());

  res.status(200).json(records);
};

export const getPublicRecords = async (
  req: Request,

  res: Response
): Promise<void> => {
  const records = await RecordsRepository.getAllPublic();

  res.status(200).json(records);
};

export const getRecord = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id as string;
  const record = await RecordsRepository.getById(id);
  if (!record) {
    res
      .status(404)
      .json({ message: `${id} id를 가진 record가 존재하지 않습니다.` });
  }

  res.status(200).json(record);
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
