import { NextFunction, Request, Response } from "express";

export const searchBooks = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  /*  
      #swagger.tags = ['Books']
      #swagger.summary = '책 검색'
      #swagger.description = "검색어에 맞는 책 목록을 조회합니다."
      #swagger.response[200] = {
        description:"책 검색 성공",
        schema: {
    "lastBuildDate": "Tue, 11 Mar 2025 09:37:35 +0900",
    "total": 606,
    "start": 1,
    "display": 2,
    "items": [
        {
            "title": "1984",
            "link": "https://search.shopping.naver.com/book/catalog/32486053981",
            "image": "https://shopping-phinf.pstatic.net/main_3248605/32486053981.20230614072451.jpg",
            "author": "조지 오웰",
            "discount": "6300",
            "publisher": "민음사",
            "pubdate": "20070330",
            "isbn": "9788937460777",
            "description": "21세기, 고도의 정보화 사회에 던지는 조지 오웰의 경고\n거대 지배 체제하에 놓인 개인은 어떻게 저항하고 어떻게 시스템에 의해 파멸되는가\n세계가 나아갈 방향을 제시하는 탁월한 통찰\n\n“과거를 지배하는 자는 미래를 지배한다. 현재를 지배하는 자는 과거를 지배한다.”\n\n조지 오웰 탄생 100주년, 그의 작품을 통해 오늘을 되돌아보다\n\n조지 오웰의 대표작 『1984』는 1949년에 발표된 디스토피아 소설로 『동물농장』과 함께 60여 개국의 언어로 번역된 작품이다."
        },
        {
            "title": "동물농장",
            "link": "https://search.shopping.naver.com/book/catalog/32438186724",
            "image": "https://shopping-phinf.pstatic.net/main_3243818/32438186724.20230313185126.jpg",
            "author": "조지 오웰",
            "discount": "7200",
            "publisher": "민음사",
            "pubdate": "20090107",
            "isbn": "9788937460050",
            "description": "풍자 우화를 통한 사회 비판을 담은 기념비적 소설\n \n“모든 동물은 평등하다. 그러나 어떤 동물은 다른 동물들보다 더 평등하다.”\n\n우화 형식으로 당대의 정치적 현실을 날카롭게 묘파한 『동물농장』은 『1984』, 『카탈로니아 찬가』와 함께 조지 오웰이 47세의 나이로 갑작스레 사망하기 전 짧은 작가 생활 동안 남긴 영국 문학의 위대한 결실이다. 이 작품이 영국에서 처음 출간된 것은 2차 세계 대전이 갓 끝난 1945년이었다."
        },
    ]
}
      } 
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
  next();
};
