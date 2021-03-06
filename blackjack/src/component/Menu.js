import React from "react";

class Menu extends React.Component {
  render() {
    return (
      <div>
        <h1>Blackjack</h1>
        <button onClick={this.props.generateDeck}>Generate Deck</button>
        <form
          onSubmit={e => {
            this.props.drawCards(e.target.elements[0].value);
          }}
        >
          <label>
            Input Existing Deck
            <input type="text" onChange={this.props.handleChange}></input>
          </label>
          <button>Draw</button>
        </form>
      </div>
    );
  }
}

export default Menu;
