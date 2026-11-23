// Firebase 콘솔 > 프로젝트 설정 > 내 앱(웹)에서 보이는 firebaseConfig 값.
// 이 값은 공개돼도 괜찮습니다 (누가 무엇을 읽고 쓸지는 firestore.rules 가 정합니다).
export const firebaseConfig = {
  apiKey: "AIzaSyDDq2bUrMA3nv_Hj9b4xsrC7l9iQYlMhWg",
  authDomain: "piturearplugfkon.firebaseapp.com",
  projectId: "piturearplugfkon",
  storageBucket: "piturearplugfkon.firebasestorage.app",
  messagingSenderId: "293015680602",
  appId: "1:293015680602:web:22e99006793187adc48a63",
  measurementId: "G-ZYKM3PMJZV"
};

// 값이 다 채워져 있으면 true. false 면 화면 미리보기만 되고 저장은 안 됩니다.
export const configReady = !Object.values(firebaseConfig).some((v) => String(v).startsWith("여기에"));
