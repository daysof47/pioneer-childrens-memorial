import React from "react";
import { navigate } from "gatsby-link";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class ContactForm extends React.Component {
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
    const { name, email, message } = this.state;
    return (
      <form
        name="contact"
        method="post"
        action="/contact/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <div hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={this.handleChange} />
          </label>
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={this.handleChange}
            required={true}
            style={{
              borderBottomWidth: "2px",
              borderBottomColor: "#ccc",
              display: "block",
              padding: "8px",
              width: "100%",
              background: "transparent"
            }}
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
            required={true}
            style={{
              borderBottomWidth: "2px",
              borderBottomColor: "#ccc",
              display: "block",
              padding: "8px",
              width: "100%",
              background: "transparent"
            }}
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            placeholder="Message"
            value={message}
            onChange={this.handleChange}
            required={true}
            rows="5"
            style={{
              borderBottomWidth: "2px",
              borderBottomColor: "#ccc",
              display: "block",
              padding: "8px",
              width: "100%",
              background: "transparent"
            }}
          />
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="text-green uppercase font-bold tracking-wide"
          >
            SEND
          </button>
        </div>
      </form>
    );
  }
}

export default ContactForm;
