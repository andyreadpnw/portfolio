import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "null",
      email: "null",
      subject: "null",
      content: "null"
    };
  }

  updateNameValue = e => {
    const newValue = e.target.value;
    this.setState({
      name: newValue
    });
  };

  updateEmailValue = e => {
    const newValue = e.target.value;
    this.setState({
      email: newValue
    });
  };

  updateSubjectValue = e => {
    const newValue = e.target.value;
    this.setState({
      subject: newValue
    });
  };

  updateContentValue = e => {
    const newValue = e.target.value;
    this.setState({
      content: newValue
    });
  };

  submitMessage = () => {
    fetch("https://portfolio-messaging.herokuapp.com/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        subject: this.state.subject,
        message: this.state.message
      })
    }).then(resp => {
      if (Math.floor(resp.status / 200) === 1) {
        console.log("New Message submitted");
      } else {
        console.log("ERROR", resp);
      }
    });
  };

  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>

        <div className="row">
          <div className="eight columns">
            <form onSubmit={this.submitMessage}>
              <label>
                Name:
                <form>
                  <input
                    type="name"
                    name="name"
                    value={this.state.name}
                    onChange={this.updateNameValue}
                  />
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.updateEmailValue}
                  />
                  <input
                    type="subject"
                    name="subject"
                    value={this.state.subject}
                    onChange={this.updateSubjectValue}
                  />
                  <input
                    type="content"
                    name="content"
                    value={this.state.content}
                    onChange={this.updateContentValue}
                  />
                  <button onClick={this.submitMessage}> Submit </button>
                </form>
              </label>
            </form>
          </div>

          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                {name}
                <br />
                {street} <br />
                {city}, {state} {zip}
                <br />
                <span>{phone}</span>
              </p>
            </div>

            <div className="widget widget_tweets">
              <h4 className="widget-title">Latest Tweets</h4>
              <ul id="twitter">
                <li>
                  <span>
                    console.log("Hello Twitter") Looking for some hot takes from
                    the worlds developers on here.
                    <a href="#">
                      https://twitter.com/PolishSausage13/status/1232752093976334336?s=20
                    </a>
                  </span>
                  <b>
                    <a href="#">1 Days Ago</a>
                  </b>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}

export default Contact;
