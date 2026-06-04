/*
  ============================================================================================================
  [ Credits & License ]
  
  - Project:    도로랜드 정보국 훈련소
  - Creator:    XYLO
  - Powered by: DORO Inc.
  - Version:    1.7.1 (2026.06.04.)
  - Source:     https://github.com/xylito/doroland-smart-guide
  - License:    CC BY-SA 4.0 (상업적 이용 가능 / 동일 조건 변경 허락 / 저작자 표시)
  
  이 저작물은 공공데이터를 활용한 웹 개발 교육용 실습 자료로 제작되었습니다.
  미래의 훌륭한 웹 마스터가 될 여러분을 응원합니다!
  ============================================================================================================
*/
/*
  ============================================================================================================
  [ Codewhisper - Encyclopedia Dump Data (Offline Fallback) ]
  
  - 이 파일은 서버 없이(file:// 프로토콜) 실행할 때 백과사전을 불러올 수 없는 문제를 해결하기 위한 백업 데이터입니다.
  - 실제 백과사전 HTML 파일들의 핵심 내용을 담고 있습니다.
  ============================================================================================================
*/

window.CodewhisperDump = {
    // HTML 핵심 데이터
    html: `
        <li><code>&lt;html&gt;</code> <b>문서 정의 태그</b></li>
        <li><code>&lt;head&gt;</code> <b>머리말 태그</b></li>
        <li><code>&lt;body&gt;</code> <b>본문 내용 구역</b></li>
        <li><code>&lt;h1&gt;</code> <b>가장 큰 제목</b></li>
        <li><code>&lt;p&gt;</code> <b>일반 문단</b></li>
        <li><code>&lt;a&gt;</code> <b>하이퍼링크 태그</b></li>
        <li><code>href</code> <b>연결 주소 (URL)</b></li>
        <li><code>target="_blank"</code> <b>새 창에서 열기</b></li>
        <li><code>&lt;img&gt;</code> <b>이미지 삽입 태그</b></li>
        <li><code>src</code> <b>이미지/파일 경로</b></li>
        <li><code>alt</code> <b>이미지 대체 설명</b></li>
        <li><code>&lt;input&gt;</code> <b>입력창 생성 태그</b></li>
        <li><code>type="text"</code> <b>텍스트 입력창</b></li>
        <li><code>type="password"</code> <b>비밀번호 입력창</b></li>
        <li><code>type="checkbox"</code> <b>체크박스</b></li>
        <li><code>type="radio"</code> <b>라디오 버튼</b></li>
        <li><code>&lt;button&gt;</code> <b>클릭 버튼 태그</b></li>
        <li><code>&lt;div&gt;</code> <b>상자 구역 나누기</b></li>
        <li><code>&lt;span&gt;</code> <b>인라인 범위 지정</b></li>
        <li><code>class</code> <b>그룹 스타일 이름</b></li>
        <li><code>id</code> <b>고유 식별 이름</b></li>
    `,
    
    // CSS 핵심 데이터
    css: `
        <li><code>color</code> <b>글자 색상 지정</b></li>
        <li><code>background-color</code> <b>배경 색상 지정</b></li>
        <li><code>font-size</code> <b>글자 크기 조절</b></li>
        <li><code>width</code> <b>가로 너비 지정</b></li>
        <li><code>height</code> <b>세로 높이 지정</b></li>
        <li><code>padding</code> <b>안쪽 여백 설정</b></li>
        <li><code>margin</code> <b>바깥 여백 설정</b></li>
        <li><code>border</code> <b>테두리 종합 설정</b></li>
        <li><code>display="flex"</code> <b>유연한 박스 레이아웃</b></li>
        <li><code>justify-content="center"</code> <b>가운데 정렬</b></li>
        <li><code>position="absolute"</code> <b>절대 위치 설정</b></li>
        <li><code>cursor="pointer"</code> <b>손가락 커서 모양</b></li>
    `,
    
    // JS 핵심 데이터
    js: `
        <li><code>const</code> <b>상수 선언</b></li>
        <li><code>let</code> <b>변수 선언</b></li>
        <li><code>document</code> <b>문서 객체</b></li>
        <li><code>getElementById()</code> <b>ID로 요소 가져오기</b></li>
        <li><code>getElementsByTagName()</code> <b>태그로 모든 요소 가져오기</b></li>
        <li><code>getElementsByClassName()</code> <b>클래스로 모든 요소 가져오기</b></li>
        <li><code>querySelector()</code> <b>선택자로 첫 번째 요소 가져오기</b></li>
        <li><code>querySelectorAll()</code> <b>선택자로 모든 요소 가져오기</b></li>
        <li><code>addEventListener()</code> <b>이벤트 감지</b></li>
        <li><code>innerHTML</code> <b>내부 HTML 변경</b></li>
        <li><code>style</code> <b>실시간 디자인 변경</b></li>
        <li><code>style.transform</code> <b>회전/크기 등 형태 변형</b></li>
        <li><code>style.transition</code> <b>디자인 변화 애니메이션(전환)</b></li>
        <li><code>style.cursor</code> <b>마우스 포인터 모양 변경</b></li>
        <li><code>fetch()</code> <b>외부 데이터 요청</b></li>
        <li><code>fetch()</code> <b>외부 서버로 통신 요원(요청) 파견하기</b></li>
        <li><code>.then()</code> <b>요원이 성공적으로 돌아왔을 때 할 일 예약하기</b></li>
        <li><code>.catch()</code> <b>통신 중 에러(문제)가 발생했을 때 낚아채서 처리하기</b></li>
        <li><code>response</code> <b>서버가 돌려준 응답 배낭 (상태 코드 등 포함)</b></li>
        <li><code>response.status</code> <b>서버 응답 상태 번호 (200은 성공!)</b></li>
        <li><code>response.json()</code> <b>암호화된 응답 배낭을 자바스크립트 객체로 번역(해독)하기</b></li>
        <li><code>return</code> <b>번역된 결과물을 다음 예약된 작업(.then)으로 토스(전달)하기</b></li>
    `};
