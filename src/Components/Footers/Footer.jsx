import React from 'react'
import '../../CSS/Footers/Footer.css'
import facebook from '../../assets/IMG/icons/facebook.png'
import instagram from '../../assets/IMG/icons/instagram.png'
import github from '../../assets/IMG/icons/github.png'
import linkedin from '../../assets/IMG/icons/linkedin.png'


export const Footer = () => {
  return (
    <>
        <div className="Footer">
            <div className="icons">
                <button>
                    <img src={facebook} alt="Facebook" />
                </button>

                <button>
                    <img src={instagram} alt="Instagram" />
                </button>

                <button>
                    <img src={github} alt="GitHub" />
                </button>

                <button>
                    <img src={linkedin} alt="Linkedin" />
                </button>
            </div>
            <div className="copyrigth-content">
                <small>Copyright &copy; 2023</small>
            </div>
        </div>
    </>
  )
}
