## NEXTJS DEMO
-----------

### 설치/시작
```shell
npm install
npm run dev # dev
```

### 폴더 구조
```
- src
  - __test__ # 테스트모음
  - api # api 관련 모음
  - assets # 정적파일 
    - images
    - svgs
  - components # 컴포넌트 모음
    - layout 
    - ...
  - config # 설정값 정의
  - hooks # 훅 모음
  - lib # 라이브러리 모음
    - ga # 구글에널리틱스 관련 
    - ...
  - pages # 페이지
  - reducers # 리덕스 관련 상태관리 파일들
  - store # 리덕스 스토어 세팅
```

### 구성 스택
- NextJs
- Redux ( Redux-thunk )
- redux-toolkit
- styled-componenets
- @testing-library + jest