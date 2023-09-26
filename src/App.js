import React, { useState } from 'react';
import CustomPlyrPlayer from './CustomPlyrPlayer';

function App() {
  const [currentPlayerID, setCurrentPlayerID] = useState(null);
  return (
    <div>
      <div className="mt-3">
        <CustomPlyrPlayer
          source={{
            type: 'video',
            sources: [
              {
                src: 'yWtFb9LJs3o',
                provider: 'youtube'
              }
            ]
          }}
          playerID="yWtFb9LJs3o"
          setCurrentPlayerID={setCurrentPlayerID}
          currentPlayerID={currentPlayerID}
        />
      </div>
      <div className="mt-3">
        <CustomPlyrPlayer
          source={{
            type: 'video',
            sources: [
              {
                src: '-bt_y4Loofg',
                provider: 'youtube'
              }
            ]
          }}
          playerID="-bt_y4Loofg"
          setCurrentPlayerID={setCurrentPlayerID}
          currentPlayerID={currentPlayerID}
        />
      </div>

      <div className="mt-3">
        <CustomPlyrPlayer
          source={{
            type: 'video',
            sources: [
              {
                src: '9rlGFeubvSI',
                provider: 'youtube'
              }
            ]
          }}
          playerID="9rlGFeubvSI"
          setCurrentPlayerID={setCurrentPlayerID}
          currentPlayerID={currentPlayerID}
        />
      </div>
      

    </div>
  );
}
export default App;
