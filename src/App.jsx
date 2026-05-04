import React, { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Setup CI/CD Pipeline', done: true },
    { id: 2, text: 'Deploy to Vercel', done: true },
    { id: 3, text: 'Add Code Coverage', done: false },
  ])
  const [input, setInput] = useState('')

  const addTask = () => {
    if (!input.trim()) return
    setTasks([...tasks, { id: Date.now(), text: input, done: false }])
    setInput('')
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  const done = tasks.filter(t => t.done).length

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🚀 CI/CD Task Manager</h1>
        <p style={styles.subtitle}>Deployed via GitHub Actions + Vercel</p>

        <div style={styles.stats}>
          <div style={styles.stat}>
            <strong>{tasks.length}</strong>
            <span>Total</span>
          </div>
          <div style={styles.stat}>
            <strong style={{color:'#2e7d32'}}>{done}</strong>
            <span>Done</span>
          </div>
          <div style={styles.stat}>
            <strong style={{color:'#c62828'}}>{tasks.length - done}</strong>
            <span>Pending</span>
          </div>
        </div>

        <div style={styles.inputRow}>
          <input
            style={styles.input}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && addTask()}
            placeholder="Add a new task..."
          />
          <button style={styles.addBtn} onClick={addTask}>Add</button>
        </div>

        <ul style={styles.list}>
          {tasks.map(task => (
            <li key={task.id} style={styles.item}>
              <span
                onClick={() => toggleTask(task.id)}
                style={{
                  ...styles.taskText,
                  textDecoration: task.done ? 'line-through' : 'none',
                  color: task.done ? '#aaa' : '#333',
                  cursor: 'pointer'
                }}
              >
                {task.done ? '✅' : '⭕'} {task.text}
              </span>
              <button
                style={styles.deleteBtn}
                onClick={() => deleteTask(task.id)}
              >✕</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const styles = {
  container: { minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', fontFamily: 'sans-serif' },
  card: { background: 'white', borderRadius: '16px', padding: '40px', width: '100%', maxWidth: '480px', boxShadow: '0 20px 60px rgba(0,0,0,0.2)' },
  title: { fontSize: '1.8rem', margin: '0 0 4px', color: '#1a1a2e', textAlign: 'center' },
  subtitle: { color: '#888', textAlign: 'center', marginBottom: '24px', fontSize: '0.85rem' },
  stats: { display: 'flex', justifyContent: 'space-around', background: '#f8f8ff', borderRadius: '10px', padding: '12px', marginBottom: '20px' },
  stat: { display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '0.85rem', color: '#555' },
  inputRow: { display: 'flex', gap: '8px', marginBottom: '20px' },
  input: { flex: 1, padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #ddd', fontSize: '0.95rem', outline: 'none' },
  addBtn: { padding: '10px 18px', background: 'linear-gradient(135deg, #667eea, #764ba2)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' },
  list: { listStyle: 'none', padding: 0, margin: 0 },
  item: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #f0f0f0' },
  taskText: { flex: 1, fontSize: '0.95rem' },
  deleteBtn: { background: 'none', border: 'none', color: '#e57373', cursor: 'pointer', fontSize: '1rem', marginLeft: '8px' }
}

export default App
