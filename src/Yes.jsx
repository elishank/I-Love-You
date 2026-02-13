import './Yes.css'
import { useNavigate } from 'react-router-dom'

function Yes() {
  const navigate = useNavigate()

  return (
    <div className="yes-page">
      <button className="back-btn" onClick={() => navigate('/')}>← Back</button>
      <div className="yes-content">
        <div className="yes-text-box">
          <p className="yes-text">
            Happy Valentine's beautiful girl I love you so so so so so much! You are the most important person in my life and I am extremely blessed and lucky to have you in my life. Now, I'm not so sure how happy this valentine's day can really be considering I'm currently not there with you but I just want you to know how much I care for you and think of you endlessly everyday. I miss you so much cherie, I promise we will be together again very soon, nothing can keep me away from you too long. Je t'aime plus que tout mon bébé
          </p>
        </div>
        <img src="/SAVE_20251003_164406.jpg" alt="Yes" className="yes-image" />
      </div>
    </div>
  )
}

export default Yes
