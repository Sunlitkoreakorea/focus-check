// Firebase 콘솔 > 프로젝트 설정 > 내 앱(웹)에서 보이는 firebaseConfig 값을 그대로 붙여 넣으세요.
// 이 값은 공개돼도 괜찮습니다 (누가 무엇을 읽고 쓸지는 firestore.rules 가 정합니다).
export const firebaseConfig = {
  apiKey: "여기에_apiKey",
  authDomain: "여기에_authDomain",
  projectId: "여기에_projectId",
  storageBucket: "여기에_storageBucket",
  messagingSenderId: "여기에_messagingSenderId",
  appId: "여기에_appId"
};

// 위 값을 다 채우면 자동으로 true 가 됩니다. false 면 화면 미리보기만 되고 저장은 안 됩니다.
export const configReady = !Object.values(firebaseConfig).some((v) => String(v).startsWith("여기에"));
