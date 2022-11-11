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

# 1.3 Routing
1> link 태그 안에는 a 태그를 사용하면 안 된다.
2> 상단바 파일을 만들어서 이용자들이 보는 각각의 페이지에 import로 적용시키기

# 1.4 CSS Modules
1> 직접 태그에 style을 먹이기
2> CSS Module 사용하기
  - className={`${styles.link} ${router.pathname === "/" ? styles.active : ""}`}
  - [styles.link, router.pathname === "/" ? styles.active : ""].join(" ")
3> Array.prototype.join()
  - join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.
  - const elements = ['Fire', 'Air', 'Water'];
  - console.log(elements.join()); // expected output: "Fire,Air,Water"
  - console.log(elements.join('-')); // expected output: "Fire-Air-Water"
4> Next.js는[name].module.css 파일 명명 규칙을 사용하여 CSS Module을 지원합니다.


# 1.5 Styles JSX
1> styles를 추가하는 또 다른 방법 - Built-In CSS Support(내장 CSS 지원)
2> Next.js를 사용하면 JavaScript 파일에서 CSS 파일을 가져올 수 있다. 
   이것은 Next.js가 import 개념을 JavaScript 이상으로 확장하기 때문에 가능하다.
3> CSS-in-JS
  - 격리된 범위 CSS에 대한 지원을 제공하기 위해 styled-jsx를 번들로 제공한다. 목표는 불행히도 서버 렌더링을 지원하지 않고 JS 정요인 Web Components와 유사한 "Shadow CSS"를 지원하는 것이다.
4> styled-jsx를 사용하는 컴포넌트
  - < style jsx>{`
       CSS 스타일..
    `}< /style>
5> Sass Support
  - Next.js를 사용하면.scss 및.sass 확장자를 모두 사용하여 Sass를 가져올 수 있습니다.

# 1.6 Custom App
1> 애플리케이션에 Global Styles를 추가하는 법을 배우기
2> Custome App
 - Next.js는 App 컴포넌트를 사용하여 page를 초기화한다. 이를 재정의하고 페이지 초기화를 제어할 수 있다. 이를 통해 다음과 같은 일을 할 수 있다
 => 페이지 변경 간에 레이아웃 유지
 => 페이지 탐색 시 state 유지
 => componentDidCatch를 사용한 Custom 에러 처리
 => 페이지에 추가 데이터 삽입
 => Global CSS 추가
3> 기본 App을 재정의하려면 ./pages/_app.js 파일을 만든다.
4> 파일명.module.css 파일 형태를 제외한 모든 나머니 css 파일들은 _app.js에서만 import해서 사용해야 한다. 글로벌 css간의 충돌을 피하기 위해서이다.

# 2.0 Patterns
1> 미니 무니 앱 만들기
2> Layouts
  - react 모델을 사용하면 페이지를 일련의 컴포넌트로 분해할 수 있다. 이러한 컴포넌트 중 많은 부분이 페이지 간에 재사용되는 경우가 많다. 예를 들어, 모든 페이지에 동일한 navigation과 footer가 있을 수 있다.
3> Head(next/head)
  - 페이지 head에 엘리멘트를 추가하기 위한 내장 컴포넌트를 노출한다. head에 태그가 중복되지 않도록 하려면 다음 예제와 같이 태그가 한 번만 렌더링되도록 하는 key 속성을 사용할 수 있다.
4> const obj = { '/': 'Home, 'about': 'About' }로 선언하고 obj[router.pathname]으로 할당해주면 props로 넘겨주지 않고 사용가능하다. 
  => {obj[router.pathname}}
5> import Navbar from "./Navbar";
    export default function Layout({children}: React.PropsWithChildren) {
      return (
        <>
          {children}
        </>
      );
    }
6> children : react.js가 제공하는 prop으로, 하나의 component를 또 다른 component 안에 넣을 때 쓸 수 있다.

# 2.1 Fetching Data
1> npm run dev 후, 2번씩 실행이 된다면, next.config.js 내에세 reactStrictMode를 false 시켜주기
2> public 폴더는 이미지를 넣는 곳