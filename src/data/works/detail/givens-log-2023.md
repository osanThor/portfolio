## 기술 스택: Next.js, TypeScript, firebase, Tailwind CSS, SWR, quill,

---

### 🔥 필수 기능(우선 구현)

- 메인페이지(homepage), developer, life, about, contact 페이지 구성
- 메인페이지 feature, 카라솔(난 swiper)
- tag 박스 클릭 시 해당 태그 포함한 포스팅 리스트 불러오기
- developer, life 페이지는 블로그 레이아웃
- contact → email 보내기 구현, nodeMailer 사용
- admin 페이지 로그인
- admin 페이지에서 블로그 포스트 에디팅 기능

### 경험

드림코딩 엘리의 Next.js(13+) 강의 중 블로그 제작을 듣고, 나만의 블로그를 만들어야겠다 생각.
기존 강의의 정적으로 매번 빌드를 해줘야하는 SSG 방식이 아니라, 원할 때마다 HTML을 요청하는 SSR 방식으로 만들기.
DB는 기존에 portfolio로 사용중이었던, firebase의 firestore를 사용,  
무료에다가 DOC도 javascript 친화적으로 잘 설명이 되어있어서 사용하게 되었다.
컬렉션에 blog를 추가하여 category 필드를 'develop'과 'life'로 나누어 제작.
마크다운 에디터보다는 네이버같은 블로그의 에디터를 사용하고 싶어서 quill 에디터 사용.

> **여담** - firebase 서버를 아시아로 해놓지 않으면 매우매우 느려진다.
