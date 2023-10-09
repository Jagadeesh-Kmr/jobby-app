import {Component} from 'react'

import Header from '../Header'

import './index.css'

class ApplicationForm extends Component {
  renderApplicationForm = () => (
    <div className="application-form-container">
      <h1 className="application-form-hd">Application Form</h1>
    </div>
  )

  render() {
    return (
      <>
        <Header />
        {this.renderApplicationForm()}
      </>
    )
  }
}

export default ApplicationForm
