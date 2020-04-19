import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.scss';
import { fetchData } from './api';

class App extends React.Component {

  state = {
    data: {}
  }

  async componentDidMount() {
    const FetchedData = await fetchData();

    this.setState({
      data: FetchedData
    })
  }

  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;