import React from "react";
import "../../assets/css/waitingroom.css";

export function Waitingroom({ handleGoToMainpage, handleCreateGameclick }) {
  return (
    <div className="pusher">
      <div className="pusher bgimage">
        <div className="pushable bgimage">
          <div className="volume">
            <i className="volume up icon big volumeicon"> </i>
            <i className="volume off icon volumeicon big"> </i>
          </div>
          <div className="ui huge black header title">
            <b>
              Üdvözöllek a várószobában, <br />
              hamarosan kezdődik a csata!
            </b>
          </div>
          <div className="ui very padded center aligned segment">
            <h2 className="ui huge header roomid-title">Szoba azonosító</h2>
            <h2 className="ui huge header roomid">#12345</h2>
            <button
              className="ui button primary big btnfont"
              onClick={() => {
                handleGoToMainpage(true);
                handleCreateGameclick(false);
              }}
            >
              Vissza a főoldalra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
