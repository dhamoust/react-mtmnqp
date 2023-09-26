import React from 'react';
import Plyr from 'plyr-react';
import { Waypoint } from 'react-waypoint';
import 'plyr-react/dist/plyr.css';
import './customPlyr.css';

class CustomPlyrPlayer extends React.Component {
  constructor() {
    super();
    this.ref = React.createRef();
    this.state = { playState: false };
  }

  onPlay = event => {
    const { setCurrentPlayerID, playerID } = this.props;
    this.setState({ playState: true });
    setCurrentPlayerID(playerID);
  };

  onPause = event => {
    console.log('onPause');
    this.setState({ playState: false });
  };

  onEnded = event => {
    console.log('onEnded');
    this.setState({ playState: false });
  };

  componentDidMount() {
    setTimeout(() => {
      if (this.ref) {
        const node = this.ref.current;
        node?.plyr?.on('play', this.onPlay);
        node?.plyr?.on('pause', this.onPause);
        node?.plyr?.on('ended', this.onEnded);
      }
    }, 0);
  }

  componentWillUnmount() {
    console.log('unmount');
    const node = this.ref.current;
    node?.plyr?.off('play', this.onPlay);
    node?.plyr?.off('pause', this.onPause);
    node?.plyr?.off('ended', this.onEnded);
  }

  shouldComponentUpdate(nextProps) {
    const { playerID } = this.props;
    const { currentPlayerID } = nextProps;
    const { playState } = this.state;
    if (playerID !== currentPlayerID && playState) {
      const node = this.ref.current;
      node?.plyr?.pause();
    }
    return false;
  }

  handleExitViewport = () => {
    const node = this.ref.current;
    node?.plyr?.pause();
  };

  render() {
    const { source } = this.props;
    return (
      <div>
        <Plyr
          ref={this.ref}
          options={{
            controls: [
              'play-large',
              'play',
              'progress',
              'current-time',
              'mute',
              'volume',
              'captions',
              'settings',
              'airplay',
              'fullscreen',
              'autopause'
            ],
            settings: ['captions', 'quality', 'speed', 'loop', 'autopause'],
            autoplay: false,
            autopause: true,
            tooltips: { controls: true, seek: true }
          }}
          source={source}
        />
        <Waypoint onLeave={this.handleExitViewport} />
      </div>
    );
  }
}

export default CustomPlyrPlayer;
