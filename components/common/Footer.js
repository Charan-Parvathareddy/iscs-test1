import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { useRouter } from "next/router"

const Footer = () => {
  const handleClick = () => {
    router.push('/contact');
  };
 const router = useRouter()
 return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
              <TitleLogo caption='ISCS ' title=''  className='logobg' />
              <br />
              <span>
                 Reach us <br /> Monday – Friday from 9 am to 6 pm
              </span>
              <br />
              <br />
              <h3> India</h3>
<h3>Corporate Office & Delivery Center
Level 4, Gumidelli Towers, Old Airport Rd, Begumpet, Hyderabad, TS- 500016, India.</h3>

<h3>E-mail info@iscstech.com</h3>

              <h3> Phone +91 75695 38823</h3>
              <br />
              <button className='button-primary'  onClick={handleClick} >Request for quote</button>
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href='/'>About ISCS</Link>
              </li>
              <li>
                <Link href='/'>Core Competencies</Link>
              </li>
              <li>
                <Link href='/'>Centre of Excellence</Link>
              </li>
              <li>
                <Link href='/'>Strategic Technology Consulting</Link>
              </li>
              <li>
                <Link href='/'>Talent Management Services</Link>
              </li>
              <li>
                <Link href='/'>Industries</Link>
              </li>
              <li>
                <Link href='/'>Insights</Link>
              </li>
              <li>
                <Link href='/'>Careers</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href='/'>TIBCO-Middleware And Integration</Link>
              </li>
              <li>
                <Link href='/'>Oracle Solutions Practice</Link>
              </li>
              <li>
                <Link href='/'>Talent Management Services</Link>
              </li>
              <li>
                <Link href='/'>Salesforce Solution Practice</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className='connect'>
                <li>
                  <Link href='/'>
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillBehanceCircle size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© 2023 ISCS TECHNOLOGIES. ALL RIGHTS RESERVED.</span>
            </div>
            <div className='connect'>
              
              <span> &nbsp; | &nbsp; </span>
              <span>TERMS & CONDITIONS</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
