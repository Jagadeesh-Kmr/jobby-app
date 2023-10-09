import {Component} from 'react'
import {Link} from 'react-router-dom'

import {BiUpload} from 'react-icons/bi'

import CreateContext from '../../Context/CreatContext'

import Header from '../Header'

import './index.css'

class ApplicationForm extends Component {
  state = {
    nameInput: '',
    name: '',
    emailInput: '',
    email: '',
    coverLetterInput: '',
    coverLetter: '',
  }

  onClickNameInput = event => {
    this.setState({nameInput: event.target.value})
  }

  onClickEmailInput = event => {
    this.setState({emailInput: event.target.value})
  }

  onClickCvInput = event => {
    this.setState({coverLetterInput: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {nameInput, emailInput, coverLetterInput} = this.state

    this.setState({
      name: nameInput,
      nameInput: '',
      email: emailInput,
      emailInput: '',
      coverLetter: coverLetterInput,
      coverLetterInput: '',
    })
  }

  renderApplicationForm = () => {
    const {nameInput, emailInput, coverLetterInput} = this.state

    return (
      <>
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="input"
            value={nameInput}
            onChange={this.onClickNameInput}
          />
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="input"
            value={emailInput}
            onChange={this.onClickEmailInput}
          />
          <label htmlFor="cover-letter" className="label">
            Cover Letter
          </label>
          <textarea
            id="cover-letter"
            className="input text-area"
            onChange={this.onClickCvInput}
            value={coverLetterInput}
          />
          <div className="upload-box-container">
            <BiUpload className="upload-icon" />
            <p className="upload-cover-desc">Upload cover image</p>
            <p className="upload-cover-details">
              16:9 ratio is recommended. Max image size 1mb
            </p>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </>
    )
  }

  renderApplicationDetails = () => {
    const {name, email, coverLetter} = this.state

    return (
      <div className="details-view-container">
        <h1>{name}</h1>
        <p>{email}</p>
        <p>{coverLetter}</p>
      </div>
    )
  }

  renderSubmit = () => (
    <CreateContext.Consumer>
      {value => {
        const {submit, toggleSubmit} = value

        const onClickSubmitBtn = () => {
          toggleSubmit()
        }

        return (
          <>
            {submit ? (
              <button
                type="button"
                className="submit-btn"
                onClick={onClickSubmitBtn}
              >
                Submit
              </button>
            ) : (
              <Link to="/application-success" className="link-check">
                Check out
              </Link>
            )}
          </>
        )
      }}
    </CreateContext.Consumer>
  )

  render() {
    return (
      <>
        <Header />

        <div className="application-form-container">
          <h1 className="application-form-hd">Application Form</h1>
          <div className="application-details-container">
            {this.renderApplicationForm()}
            <div>{this.renderApplicationDetails()}</div>
          </div>
          {this.renderSubmit()}
        </div>
      </>
    )
  }
}

export default ApplicationForm
