# React + TypeScript + Vite + Express + Socket.IO

간단한 채팅 프로젝트

### 실행 명령어

```shell
# server

cd /server
npm install
npm run server


# client (socket.ts에 도메인 로컬로 변경)

cd /client
npm install
npm run dev
```

### 동작

-   localhost:4000 URL로 브라우저를 두 개 띄운다음, input 창에 메시지를 입력해서 채팅 즐기기

### 알게된 것

-   common.js 형식으로 express 파일을 구성하고 createServer 객체를 export하면은 Vercel에서 Serverless Funcions 사용 가능
-   Socket.IO를 사용해서 웹소켓 서버를 구성해서 올렸지만 Vercel은 서버 최대 실행 시간이 있어서 웹소켓 서버를 지원해주지 않는다
-   Socket 기본 기능
