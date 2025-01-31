import { NextFunction, Request, Response } from "express";

export const getBooks = (req: Request, res: Response, next: NextFunction) => {
  /* 

    #swagger.tags = ['Books']
    #swagger.summary = '책 목록 조회'
    #swagger.description = '책 목록을 조회합니다.'    
    */

  next();
};

export const getBook = (req: Request, res: Response, next: NextFunction) => {
  /*  
      #swagger.tags = ['Books']
      #swagger.summary = '책 단일 데이터 조회'
      #swagger.description = "경로 파라미터로 전달한 isbn을 가진 책을 조회합니다."
      } 
  */

  next();
};

export const createBook = (req: Request, res: Response, next: NextFunction) => {
  /*  
      #swagger.tags = ['Books']
      #swagger.summary = '책 데이터 생성'
      #swagger.description = "책 데이터를 생성합니다."
      } 
  */
};
