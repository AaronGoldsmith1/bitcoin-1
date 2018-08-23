import React from 'react';
import { connect } from 'react-redux';

// Actions
import { getCoin } from '../actions';

// Components
// import SquareEdit from 'components/Squares/squareEdit';

class BitcoinContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      coin: undefined
    };

    const { coin } = this.state;

    if (!coin) {
      this.props.getCoin('BTC');
    }

    // this.handleSearchButton = this.handleSearchButton.bind(this);
  }

  componentWillReceiveProps({ price }) {
    this.setState({
      coin: price
    });
  }

  // handleSearchButton(e, bool = null) {
  //   if (bool) {
  //     this.setState({ search: false });
  //   } else {
  //     this.setState({ search: !this.state.search });
  //   }
  // }

  render() {
    const { coin } = this.state;

    // If no price, return null.
    if (!coin || !coin.price) return null;

    return (
      <div id="board">
        Bitcoin
        {coin.price}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getCoin: (...args) => dispatch(getCoin(...args))
});

const mapStateToProps = ({ price }) => ({
  price
});

export const BitcoinContainerJest = BitcoinContainer;

export default connect(mapStateToProps, mapDispatchToProps)(BitcoinContainer);
