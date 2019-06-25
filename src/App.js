import React from "react";
import marked from "marked";
// import "bootstrap/dist/css/bootstrap.min.css";

const placeholder =
  "# H1 Header\n## H2 Header\n[A link](http://www.google.com)\n`Inline code`\n```\nCode block\n```\n* List item\n\n> Blockquote\n\n![Cat photo](https://res.cloudinary.com/dphmoqr9f/image/upload/c_scale,w_200/v1560814963/FreeCodeCamp/Markdown%20Previewer/cat.jpg)\n\n**Strong text**";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onTextChange(event.target.value);
  }

  render() {
    return (
      <div className="col">
        <p>Enter markdown here:</p>
        <textarea
          id="editor"
          className="form-control"
          value={this.props.inputValue}
          onChange={this.handleChange}
          rows="10"
        />
      </div>
    );
  }
}

class Previewer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col">
        <p>Preview markdown here:</p>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: this.props.markdown }}
          className="p-2 bg-dark text-light"
          style={{
            minHeight: 250
          }}
        />
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: placeholder,
      markdown: marked(placeholder)
    };
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(newInput) {
    this.setState({
      textInput: newInput,
      markdown: marked(newInput)
    });
  }

  render() {
    return (
      <div className="container mb-5">
        <div className="row mb-4">
          <h1 className="mx-auto display-3">Markdown Previewer</h1>
        </div>
        <div className="row">
          <Editor
            inputValue={this.state.textInput}
            onTextChange={this.handleTextChange}
          />
          <Previewer markdown={this.state.markdown} />
        </div>
      </div>
    );
  }
}

export default App;
