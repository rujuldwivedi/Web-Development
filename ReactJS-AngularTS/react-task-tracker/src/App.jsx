import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTasks([...tasks, input.trim()]);
    setInput("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.container}>
      <h1>React Task Tracker</h1>
      <form onSubmit={addTask} style={styles.form}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task"
          style={styles.input}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>
            {task} <button onClick={() => deleteTask(i)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: { fontFamily: "sans-serif", padding: 20 },
  form: { display: "flex", gap: 10 },
  input: { padding: 8, flex: 1 },
};

export default App;
