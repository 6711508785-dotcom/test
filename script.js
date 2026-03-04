:root {
    --pink: #ffafcc;
    --purple: #cdb4db;
    --blue: #a2d2ff;
    --cyan: #bde0fe;
    --glass: rgba(255, 255, 255, 0.8);
}

body {
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    min-height: 100vh;
    font-family: 'Kanit', sans-serif; /* แนะนำให้ใช้ Font Kanit */
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
}

.container {
    background: var(--glass);
    backdrop-filter: blur(10px);
    padding: 2.5rem;
    border-radius: 25px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    width: 90%;
    max-width: 450px;
    border: 1px solid rgba(255,255,255,0.3);
}

h2 { color: #6a5acd; text-shadow: 1px 1px 2px white; }

.input-group { gap: 15px; display: flex; flex-direction: column; }

.form-row { display: flex; gap: 10px; }

input, select {
    padding: 12px;
    border: 2px solid transparent;
    border-radius: 12px;
    background: white;
    transition: all 0.3s ease;
}

input:focus, select:focus {
    border-color: var(--purple);
    outline: none;
    box-shadow: 0 0 10px rgba(205, 180, 219, 0.5);
}

button {
    background: linear-gradient(to right, #ffafcc, #cdb4db);
    color: white;
    padding: 12px;
    border-radius: 15px;
    border: none;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
}

button:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 175, 204, 0.4);
}

/* ตกแต่ง List Item ตามสีวิชา */
li {
    margin-bottom: 15px;
    padding: 15px;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    animation: fadeIn 0.5s ease forwards;
    transition: transform 0.2s;
}

li:hover { transform: scale(1.02); }

/* Class สำหรับสีต่างๆ */
.card-pink { background-color: #ffe5ec; border-left: 8px solid var(--pink); }
.card-purple { background-color: #f2e9f7; border-left: 8px solid var(--purple); }
.card-blue { background-color: #eaf4ff; border-left: 8px solid var(--blue); }

.delete-btn {
    background: #ff8fa3;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}
