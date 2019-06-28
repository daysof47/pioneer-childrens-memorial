import React from "react";
import { navigate } from "gatsby-link";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class SubscribeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: true };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const body = encode({
      "form-name": form.getAttribute("name"),
      ...this.state
    });
    // console.log(body);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body
    })
      .then(res => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    const { email } = this.state;
    return (
      <form
        name="subscribe"
        method="post"
        action="/contact/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        <input type="hidden" name="form-name" value="subscribe" />
        <div hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={this.handleChange} />
          </label>
        </div>
        <div className="flex flex-wrap w-full mt-12">
          <div className="w-full lg:w-auto lg:flex-grow py-2 mr-4 lg:mr-8 mb-4 lg:mb-0">
            <input
              type="email"
              name="email"
              placeholder="Enter your email Address"
              value={email}
              onChange={this.handleChange}
              required={true}
              style={{
                borderBottomWidth: "2px",
                display: "block",
                padding: "8px",
                width: "100%",
                background: "transparent"
              }}
            />
          </div>
          <div className="w-full lg:flex-1 mx-3 text-center">
            <button
              type="submit"
              className="w-48 lg:w-auto py-4 px-8 lg:px-16 bg-green text-white uppercase tracking-widest text-sm"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default SubscribeForm;
