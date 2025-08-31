"use client"

import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    // Create floating particles
    function createParticles() {
      const particlesContainer = document.getElementById("particles")
      if (!particlesContainer) return

      const particleCount = 50

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div")
        particle.className = "particle"
        particle.style.left = Math.random() * 100 + "%"
        particle.style.animationDelay = Math.random() * 8 + "s"
        particle.style.animationDuration = Math.random() * 3 + 5 + "s"
        particlesContainer.appendChild(particle)
      }
    }

    // Initialize particles
    createParticles()

    // Add smooth scrolling and button interactions
    const ctaButton = document.querySelector(".cta-button")

    if (ctaButton) {
      ctaButton.addEventListener("click", (e) => {
        e.preventDefault()
        // Add your registration logic here
        console.log("Registering user...")
      })
    }

    // Add parallax effect to floating shapes
    const handleMouseMove = (e: MouseEvent) => {
      const shapes = document.querySelectorAll(".floating-shape")
      const mouseX = e.clientX / window.innerWidth
      const mouseY = e.clientY / window.innerHeight

      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5
        const x = mouseX * speed * 10
        const y = mouseY * speed * 10
        ;(shape as HTMLElement).style.transform = `translate(${x}px, ${y}px)`
      })
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          overflow-x: hidden;
        }

        .hero-section {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(135deg, #0f1729 0%, #1e2a5e 40%, #2563eb 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 70% 30%, rgba(30, 58, 138, 0.6) 0%, transparent 60%),
                      radial-gradient(circle at 20% 80%, rgba(15, 23, 42, 0.8) 0%, transparent 55%),
                      radial-gradient(circle at 90% 10%, rgba(37, 99, 235, 0.4) 0%, transparent 50%),
                      radial-gradient(circle at 10% 20%, rgba(51, 65, 85, 0.5) 0%, transparent 45%),
                      radial-gradient(circle at 80% 90%, rgba(15, 23, 42, 0.7) 0%, transparent 50%);
          pointer-events: none;
        }

        .hero-section::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/charging-bull-stock-market-rally-3600yg7x2sjk7xvb.jpg-VktP75CFzCVV29ekls9utdQbZ2b6lJ.jpeg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          opacity: 0.3;
          filter: hue-rotate(200deg) saturate(1.2) brightness(0.8);
          mix-blend-mode: overlay;
          pointer-events: none;
          z-index: 1;
        }

        .floating-elements {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }

        .floating-shape {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, rgba(30, 58, 138, 0.3), rgba(15, 23, 42, 0.1));
          animation: float 6s ease-in-out infinite;
        }

        .floating-shape:nth-child(1) {
          width: 200px;
          height: 200px;
          top: 10%;
          right: 10%;
          animation-delay: 0s;
        }

        .floating-shape:nth-child(2) {
          width: 150px;
          height: 150px;
          bottom: 20%;
          left: 5%;
          animation-delay: 2s;
        }

        .floating-shape:nth-child(3) {
          width: 100px;
          height: 100px;
          top: 60%;
          right: 15%;
          animation-delay: 4s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        .welcome-banner {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          background: linear-gradient(90deg, #1e40af, #1e2a5e, #1e40af);
          background-size: 200% 100%;
          animation: shimmer 3s ease-in-out infinite;
          padding: 12px 0;
          text-align: center;
          color: white;
          font-size: 14px;
          font-weight: 500;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .container {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          text-align: center;
          z-index: 10;
        }

        .logo {
          margin-bottom: 40px;
          margin-top: 60px;
          animation: fadeInDown 1s ease-out;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .logo img {
          height: 60px;
          filter: brightness(1.1);
          display: block;
        }

        .hero-content {
          animation: fadeInUp 1s ease-out 0.3s both;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 800;
          color: white;
          line-height: 1.1;
          margin-bottom: 30px;
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
        }

        .hero-title .highlight {
          background: linear-gradient(135deg, #60a5fa, #a78bfa, #34d399);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 4s ease-in-out infinite;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .hero-subtitle {
          font-size: clamp(1.1rem, 2vw, 1.4rem);
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 50px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
          font-weight: 400;
        }

        .cta-button {
          display: inline-block;
          background: linear-gradient(135deg, #1e40af, #1e2a5e);
          color: white;
          padding: 18px 40px;
          font-size: 18px;
          font-weight: 700;
          text-decoration: none;
          border-radius: 50px;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(30, 64, 175, 0.4);
          position: relative;
          overflow: hidden;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          border: none;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(30, 64, 175, 0.6);
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .stats-container {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin-top: 80px;
          flex-wrap: wrap;
          animation: fadeInUp 1s ease-out 0.6s both;
        }

        .stat-item {
          text-align: center;
          padding: 20px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          min-width: 150px;
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .stat-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.6s ease;
        }

        .stat-item:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(96, 165, 250, 0.4);
          box-shadow: 0 15px 35px rgba(30, 64, 175, 0.3);
        }

        .stat-item:hover::before {
          left: 100%;
        }

        .stat-item:hover .stat-number {
          color: #34d399;
          transform: scale(1.1);
        }

        .stat-item:hover .stat-label {
          color: rgba(255, 255, 255, 0.9);
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: #60a5fa;
          margin-bottom: 5px;
          transition: all 0.3s ease;
        }

        .stat-label {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.1rem;
            margin-bottom: 40px;
          }
          
          .cta-button {
            padding: 16px 32px;
            font-size: 16px;
          }
          
          .stats-container {
            gap: 20px;
            margin-top: 60px;
          }
          
          .stat-item {
            min-width: 120px;
            padding: 15px;
          }
        }

        /* Particles effect */
        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          animation: particleFloat 8s linear infinite;
        }

        @keyframes particleFloat {
          0% {
            transform: translateY(100vh) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-10vh) translateX(100px);
            opacity: 0;
          }
        }
      `}</style>

      <section className="hero-section">
        <div className="welcome-banner">Bem-vindo! Cadastre-se agora e receba seu bônus exclusivo de boas-vindas!</div>

        <div className="floating-elements">
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
        </div>

        <div className="particles" id="particles"></div>

        <div className="container">
          <div className="logo">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vollax%20logo-DiJMez3aPZaBK3sUnGLN6yIMBIhoAI.png"
              alt="Vollax Invest"
            />
          </div>

          <div className="hero-content">
            <h1 className="hero-title">
              Opere de forma <span className="highlight">simplificada</span> em
              <br />
              ações, criptos e câmbios!
            </h1>

            <p className="hero-subtitle">
              Registe-se e receba R$ 10.000 na sua conta demo para aprender a negociar com segurança e confiança
            </p>

            <button className="cta-button">Abra sua conta gratuita</button>

            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-number">1M+</div>
                <div className="stat-label">Usuários</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Suporte</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">0%</div>
                <div className="stat-label">Taxas</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
