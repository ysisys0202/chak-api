import { NextFunction, Request, Response } from "express";

export const getRecords = (req: Request, res: Response, next: NextFunction) => {
  /* 

    #swagger.tags = ['Record']
    #swagger.summary = '리뷰 목록 조회'
    #swagger.description = '리뷰 목록을 조회합니다. userId 쿼리 파라미터를 전달하여 특정 유저가 작성한 리뷰 목록을 조회할 수도 있습니다.'
    #swagger.parameters['userId'] = {
        in: query,                            
        description: 유저 아이디,                   
        required: false,                     
        type: 'integer',    
    }    
    #swagger.responses[200] = {
        description: '리뷰 조회 성공',
        schema: 
           [
                {
                  "id": 1,
                  "userId": 10,
                  "userNickname": "LiteraryLover",
                  "userProfileImage": "https://example.com/profiles/user10.jpg",
                  "readingState": "completed",  
                  "startDate": "2023-02-15", 
                  "endDate": "2023-03-01", 
                  "rating": 9,
                  "title": "1984",
                  "recordDetail": "A chilling dystopian novel that remains relevant today. Orwell's vision of a totalitarian future is both terrifying and thought-provoking.",
                  "isPublic": true,
                  "createdAt": "2023-03-01T12:00:00Z",
                  "updatedAt": "2023-03-05T15:30:00Z",
                  "bookId": 101,
                  "bookTitle": "1984",
                  "bookAuthor": "George Orwell",
                  "bookPublisher": "Secker & Warburg",
                  "bookThumbnailImage": "https://example.com/1984.jpg"
                }
            ]
        
    } 
    */

  next();
};

export const getPublicRecords = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  /* 
  
      #swagger.tags = ['Record']
      #swagger.summary = '공개 리뷰 목록 조회'
      #swagger.description = '공개 상태인 리뷰 목록을 조회합니다. userId 쿼리 파라미터를 전달하여 특정 유저가 작성한 리뷰 목록을 조회할 수도 있습니다.'
      #swagger.parameters['userId'] = {
          in: query,                            
          description: 유저 아이디,                   
          required: false,                     
          type: number,   
      }       
      #swagger.responses[200] = {
          description: '리뷰 조회 성공',
          schema: 
             [
                  {
                    "id": 1,
                    "userId": 10,
                    "userNickname": "LiteraryLover",
                    "userProfileImage": "https://example.com/profiles/user10.jpg",
                    "readingState": "completed",  
                    "startDate": "2023-02-15", 
                    "endDate": "2023-03-01", 
                    "rating": 9,
                    "title": "1984",
                    "recordDetail": "A chilling dystopian novel that remains relevant today. Orwell's vision of a totalitarian future is both terrifying and thought-provoking.",
                    "recordOneline": "A must-read classic that warns of the dangers of unchecked power.",
                    "isPublic": true,
                    "createdAt": "2023-03-01T12:00:00Z",
                    "updatedAt": "2023-03-05T15:30:00Z",
                    "bookId": 101,
                    "bookTitle": "1984",
                    "bookAuthor": "George Orwell",
                    "bookPublisher": "Secker & Warburg",
                    "bookThumbnailImage": "https://example.com/1984.jpg"
                  },
              ]
      } 
      */

  next();
};

export const getRecord = (req: Request, res: Response, next: NextFunction) => {
  /* 
      #swagger.tags = ['Record']
      #swagger.summary = '단일 리뷰 조회'
      #swagger.description = '단일 리뷰를 조회합니다.'
      #swagger.parameters['body'] = {
        in: 'body',
        description: '경로 파라미터로 전달받은 record id를 가진 리뷰를 조회합니다.', 
      }                  
      #swagger.responses[200] = {
        description: '리뷰 조회 성공',
        schema: {
              "id": 1,
              "userId": 10,
              "userNickname": "LiteraryLover",
              "userProfileImage": "https://example.com/profiles/user10.jpg",
              "readingState": "completed",
              "startDate": "2023-02-15",
              "endDate": "2023-03-01",
              "rating": 9,
              "title": "1984",
              "recordDetail": "A chilling dystopian novel that remains relevant today. Orwell's vision of a totalitarian future is both terrifying and thought-provoking.",
              "recordOneline": "A must-read classic that warns of the dangers of unchecked power.",
              "isPublic": true,
              "createdAt": "2023-03-01T12:00:00Z",
              "updatedAt": "2023-03-05T15:30:00Z",
              "bookId": 101,
              "bookTitle": "1984",
              "bookAuthor": "George Orwell",
              "bookPublisher": "Secker & Warburg",
              "bookThumbnailImage": "https://example.com/1984.jpg"
        },
      } 
      */

  next();
};

export const createRecord = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  /* 
      #swagger.tags = ['Record']
      #swagger.summary = '리뷰 생성'
      #swagger.description = '리뷰를 생성합니다.'
      #swagger.parameters['body'] = {
           in: 'body',
           description: '리뷰 생성 body 값',
           schema: {
                "userId": 10,
                "readingState": "completed",
                "startDate": "2023-02-15",
                "endDate": "2023-03-01",
                "rating": 9,
                "title": "1984",
                "recordDetail": "A chilling dystopian novel that remains relevant today. Orwell's vision of a totalitarian future is both terrifying and thought-provoking.",
                "recordOneline": "A must-read classic that warns of the dangers of unchecked power.",
                "isPublic": true,
                "bookId": 101,
           }
      #swagger.responses[201] = {
          description: '리뷰 생성 성공 후 응답 값.',
          schema:  {
              "id": 1,
              "userId": 10,
              "userNickname": "LiteraryLover",
              "userProfileImage": "https://example.com/profiles/user10.jpg",
              "readingState": "completed",
              "startDate": "2023-02-15",
              "endDate": "2023-03-01",
              "rating": 9,
              "title": "1984",
              "recordDetail": "A chilling dystopian novel that remains relevant today. Orwell's vision of a totalitarian future is both terrifying and thought-provoking.",
              "recordOneline": "A must-read classic that warns of the dangers of unchecked power.",
              "isPublic": true,
              "createdAt": "2023-03-01T12:00:00Z",
              "updatedAt": "2023-03-05T15:30:00Z",
              "bookId": 101,
              "bookTitle": "1984",
              "bookAuthor": "George Orwell",
              "bookPublisher": "Secker & Warburg",
              "bookThumbnailImage": "https://example.com/1984.jpg"
            },
        } 
      */

  next();
};

export const updateRecord = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  /* 
    
        #swagger.tags = ['Record']
        #swagger.summary = '리뷰 수정'
        #swagger.description = '경로 파라미터로 전달된 id를 가진 리뷰를 수정합니다.'
        #swagger.parameters['body'] = {
             in: 'body',
             description: '리뷰 수정 body 값',
             schema: {
                  "readingState": "completed",
                  "startDate": "2023-02-15",
                  "endDate": "2023-03-01",
                  "rating": 9,
                  "title": "1984",
                  "recordDetail": "A chilling dystopian novel that remains relevant today. Orwell's vision of a totalitarian future is both terrifying and thought-provoking.",
                  "recordOneline": "A must-read classic that warns of the dangers of unchecked power.",
                  "isPublic": true,
             }
        #swagger.responses[200] = {
            description: '리뷰 수정 성공 후 응답 값.',
            schema:  {
                "id": 1,
                "userId": 10,
                "userNickname": "LiteraryLover",
                "userProfileImage": "https://example.com/profiles/user10.jpg",
                "readingState": "completed",
                "startDate": "2023-02-15",
                "endDate": "2023-03-01",
                "rating": 9,
                "title": "1984",
                "recordDetail": "A chilling dystopian novel that remains relevant today. Orwell's vision of a totalitarian future is both terrifying and thought-provoking.",
                "recordOneline": "A must-read classic that warns of the dangers of unchecked power.",
                "isPublic": true,
                "createdAt": "2023-03-01T12:00:00Z",
                "updatedAt": "2023-03-05T15:30:00Z",
                "bookId": 101,
                "bookTitle": "1984",
                "bookAuthor": "George Orwell",
                "bookPublisher": "Secker & Warburg",
                "bookThumbnailImage": "https://example.com/1984.jpg"
              },
          } 
        */

  next();
};

export const removeRecord = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  /* 
  
      #swagger.tags = ['Record']
      #swagger.summary = '리뷰 삭제'
      #swagger.description = '경로 파라미터로 전달받은 id를 가진 리뷰를 삭제합니다.'                   
      #swagger.responses[204] = {
          description: '성공적으로 리뷰가 삭제됨.',   
      } 
      */

  next();
};
