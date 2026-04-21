// 班级工具通用 Firebase 入口
// 其他 tools/* 里的 index.html 或 teacher.html 都可以这样用：
//   <script type="module">
//     import { ensureAuth, col, addDoc, updateDoc, onSnapshot, doc, serverTimestamp, getDocs, query, orderBy } from '../_shared/firebase.js';
//   </script>
//
// 新增集合 → 需要在 Firebase/firestore.rules 里加对应 match 区块并重新部署。

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
import {
  getFirestore, collection, doc, addDoc, setDoc, updateDoc,
  onSnapshot, getDocs, query, orderBy, serverTimestamp, deleteDoc
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';
import {
  getAuth, signInAnonymously, onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: 'AIzaSyDTJvkp3hCFToJ5Pzz1E7p9jS5QH4RQCHo',
  authDomain: 'my-teaching-tools-ab8b0.firebaseapp.com',
  projectId: 'my-teaching-tools-ab8b0',
  storageBucket: 'my-teaching-tools-ab8b0.firebasestorage.app',
  messagingSenderId: '1004771212155',
  appId: '1:1004771212155:web:df71fa935029136dbc1bde'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// 匿名登录：返回 Promise<{uid}>
let _authPromise = null;
export function ensureAuth(){
  if(_authPromise) return _authPromise;
  _authPromise = new Promise((resolve, reject)=>{
    const unsub = onAuthStateChanged(auth, (user)=>{
      if(user){ unsub(); resolve(user); }
    });
    signInAnonymously(auth).catch(reject);
  });
  return _authPromise;
}

export function col(name){ return collection(db, name); }

export {
  db, auth,
  doc, addDoc, setDoc, updateDoc, deleteDoc,
  onSnapshot, getDocs, query, orderBy, serverTimestamp
};
