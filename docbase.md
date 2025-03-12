# React Setup

0. vite 이용해서 리액트 앱 설치

- pnpm create vite@latest

1. import alias

- tsconfig.ts 설정
- vite-tsconfig-paths 설치

2. vitest

- 아래 모듈 설치
    - @testing-library/react
    - @testing-library/jest-dom
    - @testing-library/user-event
    - @vitest/coverage-v8
    - happy-dom
    - vitest

- vitest-setup.ts 파일 추가 - import '@testing-library/jest-dom/vitest';

- vite config 설정 추가


3. eslint

- pnpm add -D eslint
- pnpm dlx eslint --init
- eslint.config 파일 설정

4. prettier

- pnpm add -D prettier
- prettier.config 파일 설정

5. husky, lint-staged

- pnpm add -D husky lint-staged
- husky init & pre-commit 에 lint-staged 추가

6. storybook 

- storybook 설치
- 테스팅 기능 추가 시 vitest와 충돌 가능성 있었다.

7. tailwindcss
- tailwindcss 설치 후 설정

8. github action
- .github/workflow에 액션위한 yml파일 작성
