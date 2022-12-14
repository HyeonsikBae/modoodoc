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

## 회고

주어진 기간 내에 요구사항을 모두 해결하지 못한 점이 제일 아쉽습니다.

그만큼 다른 회사의 과제전형보다 난이도가 있었고 모두닥의 과제전형을 진행하며 좋은 고민을 많이 해 볼 수 있었던 시간이었습니다.

초기에 스토리북이나 제스트 등의 도구를 통한 테스트나 프로퍼티 구조에 고민을 조금 더 했다면 비교적 수월한 개발을 할 수 있지 않았을까 생각이 듭니다.

페이지를 이동해도 유지되는 좋아요 기능, 이전/다음 상세 리뷰로 이동하고 뒤로가면 리뷰 목록 페이지 등으로 이동하기 위해 상태 관리 도구를 이용하려 했는데 이 부분도 필요한 프로퍼티를 고려했다면 구현할 수 있지 않았을까 싶습니다.

여러 번 사용되는 컴포넌트를 모두 분리하지 못한 점, 커스텀 훅이나 로직 부분을 분리하지 못한 점을 더 고려할 수 있었다면 재사용성이 올라갈 거라고 생각합니다.

그리고 컴포넌트 호출 시 새로 메모리에 할당 될 변수나 함수를 useMemo, useHooks으로 적절히 처리했다면 성능 면에서도 이점이 있다고 판단됩니다.

api 호출의 경우 API Cache를 적용하고 Pending이 되는 기간 동안 스켈레톤 컴포넌트를 렌더링한다면 더 좋은 사용자 경험을 제공할 수 있을 것 같습니다.

