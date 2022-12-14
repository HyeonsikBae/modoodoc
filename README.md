# modoodoc

## 프로젝트 소개

모두닥 프론트엔드 엔지니어 인턴 과제 전형<br>

<br>

## 폴더 구조

```
modoodoc
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── public
│   ├── images
├── src
│   ├── App.tsx
│   ├── components
│   │   ├── cleans
│   │   ├── commons
│   │   ├── filters
│   │   ├── pages
│   │   ├── reviews
│   │   │   ├── review
│   │   │   └── summary
│   │   └── utils
│   ├── main.tsx
│   ├── network
│   ├── store
│   │   ├── slices
│   ├── styles
│   ├── types
│   └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

##

<br>

## 사용 기술

<div>

<table border="1">
  <th align="center">카테고리</th>
  <th align="center">사용 기술</th>
  <th align="center">선정이유</th>
  <tr>
    <td>언어</td>
    <td>TypeScript</td>
    <td>사용 권장 언어<br>컴파일 타임에 에러를 검출하여 서비스 과정에서 발생할 수 있는 오류를 최소화</td>
  </tr>
  <tr>
    <td>컨벤션 도구</td>
    <td>ESLint</td>
    <td>코딩 컨벤션에 위배되거나 안티 패턴을 미리 검출하여 에러 발생 요소를 최소화</td>
  </tr>
  <tr>
    <td>컨벤션 도구</td>
    <td>Prettier</td>
    <td>코딩 컨벤션 적용으로 가독성 향상</td>
  </tr>
  <tr>
    <td>SPA 라이브러리</td>
    <td>React</td>
    <td>사용 권장 라이브러리<br>컴포넌트 기반의 UI 구현으로 재사용성 향상</td>
  </tr>
  <tr>
    <td>CSS-in-JS</td>
    <td>styled-components</td>
    <td>컴포넌트와 스타일 간의 의존성을 제거하여 컴포넌트 단위의 재사용성 향상</td>
  </tr>
  <tr>
    <td>빌드 도구</td>
    <td>Vite</td>
    <td>esbuild를 통한 빠른 번들링</td>
  </tr>
  <tr>
    <td>UI 라이브러리</td>
    <td>material-UI</td>
    <td>안드로이드 시스템에서 검증된 신뢰성과 리액트와 호환성을 바탕으로 Rating 등의 구현 생산성 향상</td>
  </tr>
  
</table>

</div>

<br>

<br>

## 중점적으로 고려했던 부분

<br>

### 재사용성

- 재사용성을 고려하기 위해 여러 코드에서 공통적으로 사용되는 컴포넌트는 다양한 프로퍼티를 선택적으로 적용할 수 있도록 생성하려고 하였습니다.

<br>

### 유지보수

- 기존 코드의 유지보수를 대비하여 도메인 기반으로 폴더 구조를 작성하려고 고민하였습니다.

<br>

### 성능

- 리렌더링으로 인한 성능 저하를 방지하기 위해 컴포넌트를 최대한 잘게 나누고 필요한 프로퍼티만 전달하려고 하였습니다.

<br>

### 협업

- 협업 시 혼선이 생기지 않도록 하기 위해 컨벤션 도구인 ESLint, Prettier를 적용하였습니다.
- 커밋 메세지 및 코드의 순서를 통일시켰습니다.

<br>
