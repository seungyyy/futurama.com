## Description

[Sample APIs](https://sampleapis.com/api-list/futurama)의  futurama api를 사용하여 만든 사이트입니다.
  * 페이지네이션을 이용하여 futurama 반응형 웹 사이트 구현
    * **Info Page** : futurama 줄거리 페이지 
    * **Characters Page** : futurama 캐릭터 소개 페이지 
    * **Cast Page** : futurama 성우 페이지 
    * **Episodes Page** : futurama 에피소드 페이지 
    * **Quiz Page** : futurama 퀴즈 페이지 
    * **Inventory Page** : futurama 제품 페이지 

<img width="500" src="https://user-images.githubusercontent.com/54584337/163677123-fe10bf64-3481-4f3a-bad3-569e0d2e6c0d.png" alt="index page">
<img width="200" src="https://user-images.githubusercontent.com/54584337/163677202-9a529e03-7b9e-4e21-82bc-1c27c868d914.png" alt="mobile page">
  
# 배포 링크

https://futurama-com.vercel.app/
## Usage(자세한 실행 방법)

1. git clone

```
git clone https://github.com/seungyyy/futurama.com.git
```

2. futurama.com 폴더를 인터프린터나 컴파일러로 열기
3. 필요한 라이브러리 설치

```
yarn add
```

4. 실행

```bash
npm run dev
# or
yarn dev
```

기술스택

- React.js
- TypeScript
- Next.js
- styled-components @emotion/styled
- axios  
- swr

<br>
<br>

# 구현한 방법과 설명
## Info Page 

<img width="500" src="https://user-images.githubusercontent.com/54584337/163674350-12a756d3-525b-4cbd-9480-ecee63e00931.png" alt="info page">

<br>

- futurama 줄거리를 알려주는 페이지입니다. `줄거리` 버튼을 누르면 한글 줄거리를 알려줍니다. 

<br>
<br>

## Characters Page
<img width="500" src="https://user-images.githubusercontent.com/54584337/163675176-f61486f0-1704-4a2d-a914-fa0ff09e2a6f.gif" alt="Characters Page gif">

<br>

- 캐릭터 정보(이미지, 성별)를 알려주는 페이지입니다.
- 더보기 버튼 클릭 시 해당 캐릭터의 상세 정보를 알려줍니다.

<br>
<br>

## Episodes Page, Inventory Page

<img width="500" src="https://user-images.githubusercontent.com/54584337/163676895-32839543-bf7a-48d8-a1be-6bff14adc2e8.gif" alt="Episodes Page gif">

<br>

- 에피소드 페이지는 시즌별로 정렬이 가능한 페이지입니다.
- 인벤토리 페이지는 카테고리별로 정렬이 가능한 페이지입니다.

<br>
<br>

## Quiz Page

<img width="500" src="https://user-images.githubusercontent.com/54584337/163677238-58a6d326-43d1-4151-9c49-6be69e363c47.gif" alt="Quiz Page gif">

- futurama 퀴즈를 풀 수 있는 페이지입니다. 결과확인 버튼을 누르면 몇 개를 맞췄는지 알려줍니다.

### 개발 중 어려웠던 점 && 해결
- 캐릭터 상세 페이지를 만드는 것이 어려웠지만 동적라우팅을 사용하여 캐릭터 상세페이지를 만들어 해결하였습니다.
- 퀴즈 페이지에서 해당 문제를 맞췄는지 확인하고 맞춘 개수를 저장해야하는 것이 어려웠습니다. 데이터에서 해당배열의 정답을 확인해서 문제의 정답을 확인하고 객체에 답을 저장하여 마지막에 확인할 수 있도록 하여 해결하였습니다.
