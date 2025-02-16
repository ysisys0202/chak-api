import { Request, Response, NextFunction } from "express";

export const signup = (req: Request, res: Response, next: NextFunction) => {
  /* 
      #swagger.tags = ['Auth']
      #swagger.summary = '회원가입'
      #swagger.description = '회원가입'
      #swagger.parameters['body'] = {
           in: 'body',
           description: '회원가입 요청 데이터',
           schema: {
                "nickname": "넷째유저",
                "loginId": "user4",
                "email": "hello4@mail.com",
                "password": "password"
           }                  
      #swagger.responses[201] = {
        description: '회원가입 성공',
        schema: {
            "token": "생성된 토큰 값",
            "loginId": "user4"
        },
      } 
      */

  next();
};

export const login = (req: Request, res: Response, next: NextFunction) => {
  /* 
      #swagger.tags = ['Auth']
      #swagger.summary = '로그인'
      #swagger.description = '로그인'
      #swagger.parameters['body'] = {
           in: 'body',
           description: '로그인 요청 데이터',
           schema: {
                "loginId": "user4",
                "password": "password"
           }                  
      #swagger.responses[200] = {
        description: '로그인 성공',
        schema: {
            "token": "생성된 토큰 값",
            "loginId": "user4"
        },
      } 
      */
  next();
};

export const me = (req: Request, res: Response, next: NextFunction) => {
  /* 
      #swagger.tags = ['Auth']
      #swagger.summary = '로그인 확인'
      #swagger.description = '현재 로그인한 사용자의 정보를 반환합니다.'
      #swagger.parameters['body'] = {
           in: 'body',
           description: '로그인 요청 데이터',
           schema: {
                "loginId": "user4",
                "password": "password"
           }                  
      #swagger.responses[200] = {
        description: '로그인 확인 성공',
        schema: {
            "token": "생성된 토큰 값",
            "loginId": "user4"
        },
      } 
      */
  next();
};
