import React from "react";

class ListOfNames extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newFirstInput: "",
      newLastInput: "",
    };
  }

  componentDidMount = () => {};

  handleChange = (e) => {
    var id = e.target.getAttribute("id");
    if (id == "newFirst") {
      this.setState({ newFirstInput: e.target.value });
    }
    if (id == "newLast") {
      this.setState({ newLastInput: e.target.value });
    }
  };

  render() {
    // console.log(this.state);
    // console.log(this.props);
    return (
      <div className="border">
        <span style={{ fontSize: "16pt" }}>{this.props.combinedName}</span>
        <br />
        <button onClick={() => this.props.deleteName(this.props.id)}>
          Delete
        </button>
        <br />
        <button
          onClick={() =>
            this.props.updateName(
              this.props.id,
              this.state.newFirstInput,
              this.state.newLastInput
            )
          }
        >
          Update
        </button>{" "}
        <input
          onChange={this.handleChange}
          value={this.state.newFirstInput}
          id="newFirst"
        ></input>{" "}
        <input
          onChange={this.handleChange}
          value={this.state.newLastInput}
          id="newLast"
        ></input>
        <br />
        <br />
      </div>
    );
  }
}

export default ListOfNames;
