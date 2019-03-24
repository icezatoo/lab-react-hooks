import React, { PureComponent } from 'react';
import Herder from '../components/Herder';
import BoxCat from '../components/ฺBoxCat';
import './App.scss';

class App extends PureComponent {
  render() {
    return (
      <main>
        <Herder title="Hello Cat" />
        <div className="App">
          <section>
            <BoxCat />
          </section>
        </div>
      </main>
    );
  }
}

export default App;
