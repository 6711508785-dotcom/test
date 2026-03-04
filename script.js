import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, onSnapshot, query, orderBy } 
       from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Firebase Configuration จากที่คุณให้มา
const firebaseConfig = {
  apiKey: "AIzaSyCBSIWMIxzmwD17hdyBwDXMksv3dAJR92M",
  authDomain: "chotimaapp.firebaseapp.com",
  projectId: "chotimaapp",
  storageBucket: "chotimaapp.firebasestorage.app",
  messagingSenderId: "986266813051",
  appId: "1:986266813051:web:f53384cb8906240c7398de",
  measurementId: "G-X1QQT6ZJYZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const colRef = collection(db, "assignments");

// อ้างอิง HTML Elements
const subjectInput = document.getElementById('subject');
const taskInput = document.getElementById('task');
const deadlineInput = document.getElementById('deadline');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// ฟังก์ชันเพิ่มข้อมูลลง Firebase
addBtn.addEventListener('click', async () => {
    if (subjectInput.value && taskInput.value && deadlineInput.value) {
        await addDoc(colRef, {
            subject: subjectInput.value,
            task: taskInput.value,
            deadline: deadlineInput.value,
            createdAt: new Date()
        });
        // ล้างค่าในช่อง Input
        subjectInput.value = '';
        taskInput.value = '';
        deadlineInput.value = '';
    } else {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
});

// ดึงข้อมูลแบบ Real-time (OnSnapshot)
const q = query(colRef, orderBy("deadline", "asc"));
onSnapshot(q, (snapshot) => {
    taskList.innerHTML = '';
    snapshot.docs.forEach(docData => {
        const item = docData.data();
        const li = document.createElement('li');
        li.innerHTML = `
            <div>
                <strong>[${item.subject}]</strong> ${item.task} <br>
                <small>📅 กำหนดส่ง: ${item.deadline}</small>
            </div>
            <button class="delete-btn" onclick="deleteTask('${docData.id}')">ลบ</button>
        `;
        taskList.appendChild(li);
    });
});

// ฟังก์ชันลบงาน (ทำเป็น Global เพื่อให้ปุ่มใน HTML เรียกใช้ได้)
window.deleteTask = async (id) => {
    const docRef = doc(db, "assignments", id);
    await deleteDoc(docRef);
};
