# Vue_airplane 프로젝트

## 개요

Vue_airplane 프로젝트는 Vue.js를 사용하여 항공편 검색 및 예약 시스템을 구현한 웹 애플리케이션입니다. 이 프로젝트는 사용자에게 항공편 검색, 결과 조회 등의 기능을 제공합니다.

## 기능

- **항공편 검색**
  - 출발지 및 도착지 설정
  - 날짜 및 시간 설정
  - 항공사 필터링

- **검색 결과 조회**
  - 항공편 리스트 보기
  - 가격 및 시간대별 정렬

- **항공편 예약**
  - 예약 상세 정보 입력
  - 예약 확인 및 결제

## 아키텍처

Vue_airplane 프로젝트의 아키텍처는 Vue.js 프레임워크를 기반으로 하고 있습니다.

### 주요 구성 요소

- **Vue Components**: 재사용 가능한 UI 컴포넌트들 (`HelloWorld.vue`, `SearchForm.vue`, `ResultForm.vue` 등)
- **Vue Router**: 페이지 간 네비게이션을 위한 라우팅 설정 (`router/index.js`)
- **Vuex**: 애플리케이션의 상태 관리를 위한 상태 관리 라이브러리 (사용 시)
- **Axios**: HTTP 요청을 보내기 위한 라이브러리 (API 통신 시)

### 주요 파일 설명

- `src/main.js`: 애플리케이션의 진입점, Vue 인스턴스를 생성하고 설정
- `src/App.vue`: 최상위 애플리케이션 컴포넌트
- `src/router/index.js`: Vue Router 설정, 라우트 정의
- `src/components/HelloWorld.vue`: 예제 컴포넌트
- `src/views/`: 각 페이지에 해당하는 뷰 컴포넌트들
- 
### 프론트엔드

- **Vue.js**: 사용자 인터페이스를 구축하기 위한 JavaScript 프레임워크
- **Vue Router**: Vue.js 애플리케이션의 라우팅을 관리
- **Vuex**: 상태 관리를 위한 라이브러리 (필요 시 사용)
- **Axios**: HTTP 클라이언트로, API와 통신하기 위해 사용
- **Tailwind CSS**: 유틸리티-퍼스트 CSS 프레임워크로, 빠르고 효율적인 스타일링을 지원

### 빌드 도구

- **Webpack**: 모듈 번들러로, 프로젝트의 자원을 번들링
- **Babel**: 최신 JavaScript 코드를 구형 브라우저에서도 호환되게 변환

### 기타

- **PostCSS**: CSS 전처리기
- **ESLint**: 코드 품질 및 일관성을 위한 린터
- **Prettier**: 코드 포매터로, 일관된 코드 스타일 유지
