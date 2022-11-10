# NextJS Introduction

# 0. npm run dev

# 1.0 Library vs Framework
1> library 
  - 개발자로써 내가 사용하는 프로그램
  - 내가 library를 불러와서 내가 library를 사용해서 무언가를 한다.(ex) react: 렌더링할 때 ReactDOM.render()를 불러와서 사용)
2> framework 
   - 개발자의 코드를 프로그램이 불러오는 것.
   - ex) nextjs: 정해진 규칙에 따라 코드를 작성하면 렌더링된다.
3> 차이점 
   - inversion of control(통제의 역전)
   - library에서 method를 호출하면 사용자가 제어할 수 있다.
   - framework는 제어가 역전되어 framework가 사용자를 호출한다.

# 1.1 Pages
1> pages에 있는 파일의 이름이 그대로 url로 들어간다.
2> pages의 파일에 있는 component의 이름은 중요하지 않다.
3> 이용자들에게 보여주고 싶은게 있다면, pages 폴더에서 export default function을 해야 한다.
4> pages의 파일에 있는 파일의 이름으로 url이 생성되지만, index.js는 기본적으로 /이후에 url이 없다.(/index 또한 없다.)
5> import react from 'react';를 쓸 필요는 없지만, usestate, useeffect, lifecycle method 등은 import를 꼭 해줘야 한다.

# 1.2 Static Pre Rendering
1> next.js는 앱에 있는 페이지들이 미리 렌더링이 된다.
2> create-react-app은 client-side-render를 하는 앱을 만든다.
3> 자바스크립트 비활성화하기
   - 보안 및 개인정보 보호 -> 사이트 및 방패 설정 -> 자바스크립트 -> 자바스크립트 비활성화