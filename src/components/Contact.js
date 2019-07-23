import React from "react";

export default class ReactForms extends React.Component {
  constructor() {
    super();
    this.form = React.createRef();
    this.validate = this.validate.bind(this);
  }
  validate() {
    this.form.current.reportValidity();
  }
  render() {
    return (
      <div className="formsize">
        <h1 id="Text-Style-1" className="contactheader">
          WE WOULD LOVE TO HEAR FROM YOU
        </h1>
        <form
          className="inputform"
          ref={this.form}
          onSubmit={e => e.preventDefault()}
        >
          <input
            placeholder="*First name"
            required
            pattern="^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"
          />
          <input
            placeholder="*Last name"
            required
            pattern="^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"
          />
          <input
            placeholder="*Your e-mail address"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}"
          />
          <input placeholder="Your phone number" required />
          <input id="ms" placeholder="Your message here..." />
          <div className="btnwrapper">
            <button className="sendbtn" onClick={this.validate}>
              Send
            </button>
          </div>
        </form>
      </div>
    );
  }
}
