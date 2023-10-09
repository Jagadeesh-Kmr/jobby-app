import {Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const ApplicationSuccess = () => (
  <>
    <div>
      <Header />
      <div className="order-success-container">
        <img
          src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1689438440/VectorgreenTick_ooyohn.png"
          alt="order success"
          className="green-tick"
        />
        <p className="order-success-para">Application Successful</p>

        <Link to="/">
          <button type="button" className="got-to-home-page-btn">
            Go To Home Page
          </button>
        </Link>
      </div>
    </div>
  </>
)

export default ApplicationSuccess
