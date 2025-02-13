// 자바스크립트 기본적으로 내장되어있는 객체
// Math() => 수학객체
// Date() => 날짜객체

// class
// 자주, 반복적으로 빈번하게 유사한 형태의 객체를 만들어서 사용해야하는 경우, 일일히 그때마다 객체를 생성해야하는 비효율성을 개선하기 위해서 class를 사용한다!

// Class를 통해서 객체의 모델을 하나 생성하게 됨

// 모델 => 실제 객체로서의 역할은 x

// 단, 해당 모델을 가져다가 사용을 하면, 객체(*최초에 설정해놓은 모델이 가지고 있는 속성 & 메서드 함수를 그대로 상속받아서 사용할 수 있는)가 탄생

// Class를 통해서 만들어진 모델을 가져다가 사용할 때에는 규칙?
// new라는 예약어를 사용하기로 약속!!!

// Class를 통해서 만들어진 모델은 Prototype이라 부름

// new Date();
//new + 내장되어저 있는 객체
let arr = new Array();
console.log(arr);

const arr01 = [1, 2, 3];
