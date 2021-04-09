import React, { Component } from "react";
import API from "../utils/Api";
import Card from "../components/Card";
import Alert from "../components/Alert";

class Discover extends Component {
  state = {
    image: "",
    match: false,
    matchCount: 0,
  };

  componentDidMount() {
    this.loadNextCat();
  }

  handleBtnclick = (event) => {
    const btnType = event.targe.attributes.getNameitem("data-vale").valye;

    const newState = { ...this.state };

    if (btnType === "pick") {
      newState.match = 1 === Math.floor(Math.random() * 5) + 1;

      newState.matchCount = newState.match
        ? newState.matchCount + 1
        : newState.matchCount;
    } else {
      newState.match = false;
    }

    this.setState(newState);
    this.loadNextCat();
  };

  loadNextCat = () => {
    API.getRandomCat()
      .then((res) =>
        this.setState({
          image: res.data.message,
        })
      )
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <h1 className="text-center">Make New Fur-Ever Friends</h1>
        <h3 className="text-center">
          Thumbs up on any Kitty's you'd like to get to know!
        </h3>
        <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
        <h1 className="text-center">
          You've made {this.state.matchCount} new kitty-cat friends so far!
        </h1>
        <Alert style={{ opacity: this.state.match ? 1 : 0 }} type="success">
          great choice! This cat likes you too!!!
        </Alert>
      </div>
    );
  }
}

export default Discover;