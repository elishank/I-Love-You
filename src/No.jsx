import './No.css'
import { useNavigate } from 'react-router-dom'

function No() {
  const navigate = useNavigate()

  return (
    <div className="no-page">
      <button className="back-btn" onClick={() => navigate('/')}>← Back</button>
      <div className="no-content">
        <img src="/20240628_134031.jpg" alt="Top" className="no-image" />
        <p className="no-text">WRONG ANSWER... Stop playin w me :\</p>
        <img src="/20241116_112333.jpg" alt="Bottom" className="no-image" />
      </div>
    </div>
  )
}

export default No
