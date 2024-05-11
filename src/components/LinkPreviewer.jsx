import React, { useState } from "react";
import Microlink from "@microlink/react";

function LinkPreviewer() {
  const [showSoundcloud, setShowSoundcloud] = useState(false);
  const [showMixcloud, setShowMixcloud] = useState(false);
  const [showFacebook, setShowFacebook] = useState(false);

  return (
    <>
      <h2>Link Previewer</h2>
      <div className="container">
        <div>
          <p>
            {" "}
            Check out my
            <span
              style={{
                fontWeight: "800",
                width: "100px",
                height: "150px",
                justifyContent: "center",
                alignItems: "center",
              }}
              onMouseEnter={() => setShowSoundcloud(true)}
              onMouseLeave={() => setShowSoundcloud(false)}
            >
              {" "}
              SoundCloud{" "}
            </span>
            profile
          </p>
          {showSoundcloud && (
            <Microlink url="https://soundcloud.com/dj-jasmine-palavra" />
          )}
        </div>
        <div>
          <p>
            And my
            <span
              style={{
                fontWeight: "800",
                width: "100px",
                height: "150px",
                justifyContent: "center",
                alignItems: "center",
              }}
              onMouseEnter={() => setShowMixcloud(true)}
              onMouseLeave={() => setShowMixcloud(false)}
            >
              {" "}
              Mixcloud {" "}
            </span>
            profile
          </p>
          {showMixcloud && (
            <Microlink url="https://www.mixcloud.com/dj-jasmine-palavra" />
          )}
        </div>

        <div>
          <p>
            And my
            <span
              style={{
                fontWeight: "800",
                width: "100px",
                height: "150px",
                justifyContent: "center",
                alignItems: "center",
              }}
              onMouseEnter={() => setShowFacebook(true)}
              onMouseLeave={() => setShowFacebook(false)}
            >
              {" "}
              Facebook{" "}
            </span>
          </p>
          {showFacebook && (
            <Microlink url="https://www.facebook.com/jasminepalavra" />
          )}
        </div>
      </div>
    </>
  );
}

export default LinkPreviewer;
