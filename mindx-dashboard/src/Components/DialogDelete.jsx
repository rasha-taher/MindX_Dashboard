import React from 'react'

const DialogDelete = ({message,onDialog}) => {
    return (
      <div
        style={{
          position: "fixed",
          left: "0",
          top: "0",
          bottom: "0",
                right: "0",
          backgroundColor:"rgba(0,0,0,0.5)"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            transform: "translate(50%,50%)",
            padding: "50px",
            backgroundColor: "white",
          }}
        >
          <h3 style={{ color: "#111" }}>{message}</h3>
          <div style={{ display: "flex", alignItems: "center" }}>
                    <button onClick={() =>  onDialog(true) }
          
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "10px",
              }}
            >
              Yes
            </button>
                    <button onClick={() => onDialog(false)}
                        style={{
                            backgroundColor: "green",
                            color: "white",
                            padding: "10px",
                        }}
                        
                          
                     
            >
              No
            </button>
          </div>
        </div>
      </div>
    );
}

export default DialogDelete