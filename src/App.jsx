import './App.css'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()

  const handleNoClick = () => {
    navigate('/no')
  }

  const handleYesClick = () => {
    navigate('/yes')
  }

  return (
    <div className="App">
      <div className="button-container">
        <button className="btn yes-btn" onClick={handleYesClick}>YES!!</button>
        <button className="btn no-btn" onClick={handleNoClick}>No</button>
      </div>
    </div>
  )
}

export default App
