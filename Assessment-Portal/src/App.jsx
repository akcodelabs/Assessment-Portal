import React, { useState, useEffect } from 'react';
import './App.css';

const initialAssessments = [
  { name: "Backend", category: "java", difficulty: "Easy", status: "Not Started", date: "2024-05-01" },
  { name: "Frontend", category: "Html", difficulty: "Medium", status: "In Progress", date: "2024-06-01" },
  { name: "Frontend", category: "Html", difficulty: "Easy", status: "Completed", date: "2024-04-15" },
  { name: "Frontend", category: "Css", difficulty: "Hard", status: "Not Started", date: "2024-05-20" },
  { name: "Backend", category: "java", difficulty: "Easy", status: "Completed", date: "2024-06-10" }
];

function App() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [status, setStatus] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    filterAndRender();
  }, [search, category, difficulty, status, sortBy]);

  const filterAndRender = () => {
    let filtered = initialAssessments.filter(item => {
      return (
        item.name.toLowerCase().includes(search.toLowerCase()) &&
        (category === '' || item.category === category) &&
        (difficulty === '' || item.difficulty === difficulty) &&
        (status === '' || item.status === status)
      );
    });

    filtered.sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'date') return new Date(b.date) - new Date(a.date);
      if (sortBy === 'difficulty') return a.difficulty.localeCompare(b.difficulty);
      return 0;
    });

    setFilteredResults(filtered);
  };

  const clearFilters = () => {
    setSearch('');
    setCategory('');
    setDifficulty('');
    setStatus('');
    setSortBy('name');
  };

  return (
    <div className="container">
      <h2>Assessment Search & Filter</h2>

      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search assessments..."
        autoComplete="off"
      />

      <div className="filters">
        <select className="filter-category" value={category} onChange={e => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="java">java</option>
          <option value="Html">Html</option>
          <option value="Css">Css</option>
        </select>

        <select className="filter-difficulty" value={difficulty} onChange={e => setDifficulty(e.target.value)}>
          <option value="">All Difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <select className="filter-status" value={status} onChange={e => setStatus(e.target.value)}>
          <option value="">All Statuses</option>
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <select className="filter-sort" value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="name">Sort by Name</option>
          <option value="date">Sort by Date</option>
          <option value="difficulty">Sort by Difficulty</option>
        </select>

        <button onClick={clearFilters}>Clear Filters</button>
      </div>

      <div id="resultsCounter">{filteredResults.length} result(s) found</div>
      <ul className="results">
        {filteredResults.map((item, index) => {
          const categoryClass = `row-${item.category.toLowerCase()}`;
          const statusClass = item.status.replace(/\s/g, '').toLowerCase();
          return (
            <li key={index} className={categoryClass}>
              <strong>{item.name}</strong> –
              <span className={`category ${item.category.toLowerCase()}`}> {item.category}</span>,
              <span className={`difficulty ${item.difficulty.toLowerCase()}`}> {item.difficulty}</span>,
              <span className={`status ${statusClass}`}> {item.status}</span>,
              <span> {item.date}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
