import React from 'react';
import spock from './spock.gif';

const text = "That gif is from an episode called: The Corbomite Maneuver. It was one of the earliest episodes where the Spock character had not yet been established. The Enterprise had encountered a ship of tremendous size. There were various reaction fear shots of the characters. The director was conflicted because Spock would show no emotion. Leonard Nimoy simply said, Mr. Spock is a scientist. He would respond with a scientific reaction.....thus fascinating was used for the very first time with Mr. Spock"

function Fascinating() {
  return (
    <div>
      <h2>Fascinating</h2>
      <div className="rowParent wrap">
        <div className="imageBox">
          <img className="image" src={spock} />
        </div>
        <div className="bodyText">{text}</div>
      </div>
    </div>
  );
}

export default Fascinating;
