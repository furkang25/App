import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../components/Logo';

const Landing = () => {
  return (
    <StyledWrapper>
      <nav>
        <Logo/>
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Elevate your job search experience with our sleek and intelligent tracking system. 
            Real-time insights, AI-powered recommendations, and a futuristic interface designed for efficiency.
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn'>
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  nav {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(12px);
    padding: 1rem;
    border-radius: 12px;
    box-shadow: 0 6px 15px rgba(0, 255, 255, 0.3);
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
    position: relative;
    overflow: hidden;
  }
  h1 {
    font-weight: 900;
    font-size: 3.5rem;
    text-transform: uppercase;
    color: #fff;
    text-shadow: 0 0 20px cyan, 0 0 40px magenta;
    span {
      color: magenta;
    }
    margin-bottom: 1.5rem;
  }
  p {
    line-height: 2;
    color: rgba(255, 255, 255, 0.85);
    margin-bottom: 1.5rem;
    max-width: 42em;
    background: rgba(0, 0, 0, 0.6);
    padding: 1.2rem;
    border-radius: 10px;
    backdrop-filter: blur(6px);
  }
  .register-link {
    margin-right: 1.2rem;
  }
  .btn {
    padding: 0.8rem 1.7rem;
    border-radius: 10px;
    font-size: 1.1rem;
    text-transform: uppercase;
    transition: 0.4s;
    background: linear-gradient(45deg, cyan, magenta);
    color: #000;
    font-weight: bold;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.6);
  }
  .btn:hover {
    box-shadow: 0 0 30px rgba(255, 0, 255, 1);
    transform: scale(1.15);
  }
  .main-img {
    display: none;
    filter: drop-shadow(0 0 25px cyan);
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 420px;
      column-gap: 3.5rem;
    }
    .main-img {
      display: block;
      animation: float 3s infinite ease-in-out;
    }
  }
  @keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-12px); }
    100% { transform: translateY(0); }
  }
  body {
    background: radial-gradient(circle, rgba(3,0,45,1) 0%, rgba(0,0,0,1) 100%);
    color: #fff;
    font-family: 'Orbitron', sans-serif;
  }
`;

export default Landing;
