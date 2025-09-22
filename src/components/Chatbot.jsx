import React, { useState } from "react";
import { getAI, getGenerativeModel, GoogleAIBackend } from "firebase/ai";
import app from "../firebase";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const ai = getAI(app, { backend: new GoogleAIBackend() });
  const model = getGenerativeModel(ai, { model: "gemini-1.5-flash" });

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);

    try {
      const result = await model.generateContent({
        contents: [
          ...messages.map((m) => ({
            role: m.role,
            parts: [{ text: m.content }],
          })),
          { role: "user", parts: [{ text: input }] },
        ],
      });
      const reply = result.response.text() || "No response";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      console.error("AI Error:", err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "⚠️ Error fetching response." },
      ]);
    }
    setInput("");
  };

  const newConversation = () => {
    setMessages([]);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className="btn rounded-circle shadow-lg d-flex justify-content-center align-items-center"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          fontSize: "24px",
          background: "linear-gradient(135deg, #ff9f0d, #1a1a1a)",
        }}
        onClick={() => setIsOpen(true)}
      >
        <i className="bi bi-discord text-light fs-1"></i>
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="modal fade show"
          style={{
            display: "block",
            background: "rgba(0,0,0,0.7)",
          }}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div
              className="modal-content text-light"
              style={{
                background: "linear-gradient(135deg, #0d0d0d, #1c1c1c, #ff9f0d)",
                borderRadius: "15px",
                overflow: "hidden",
                border: "1px solid #ff9f0d",
              }}
            >
              <div className="modal-header border-0">
                <h3 className="modal-title fw-bold text-light">
                  ⚡ Firebase AI Chatbot
                </h3>
                <button
                  className="btn-close btn-close-white"
                  onClick={() => setIsOpen(false)}
                ></button>
              </div>
              <div
                className="modal-body d-flex flex-column"
                style={{
                  height: "400px",
                  overflowY: "auto",
                }}
              >
                {messages.length === 0 ? (
                  <p className="text-muted">Start a new conversation...</p>
                ) : (
                  messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`d-inline-block p-2 mb-2 rounded shadow-sm ${
                        msg.role === "user"
                          ? "text-light align-self-end"
                          : "text-light align-self-start"
                      }`}
                      style={{
                        maxWidth: "75%",
                        background:
                          msg.role === "user"
                            ? "linear-gradient(135deg, #ff9f0d, #333333)"
                            : "linear-gradient(135deg, #2a2a2a, #1c1c1c)",
                        border: msg.role === "user" ? "1px solid #ff9f0d" : "1px solid #333",
                      }}
                    >
                      {msg.role === "user" ? (
                        <i className="bi bi-person-fill me-2"></i>
                      ) : (
                        <i className="bi bi-robot me-2"></i>
                      )}
                      {msg.content}
                    </div>
                  ))
                )}
              </div>
              <div
                className="modal-footer d-flex"
                style={{
                  backgroundColor: "#111",
                  borderTop: "1px solid #333",
                }}
              >
                <div className="input-group flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    style={{
                      borderRadius: "50px",
                      backgroundColor: "#1c1c1c",
                      color: "white",
                      border: "1px solid #ff9f0d",
                      padding: "12px 20px",
                      boxShadow: "inset 0 0 5px rgba(255, 159, 13, 0.5)",
                    }}
                  />
                  <button
                    className="btn"
                    onClick={sendMessage}
                    style={{
                      borderRadius: "50px",
                      marginLeft: "10px",
                      background:
                        "linear-gradient(135deg, #ff9f0d, #ff6f00, #222)",
                      color: "white",
                      fontWeight: "bold",
                      padding: "10px 20px",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background =
                        "linear-gradient(135deg, #ffb84d, #ff6f00)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background =
                        "linear-gradient(135deg, #ff9f0d, #ff6f00, #222)";
                    }}
                  >
                    Send
                  </button>
                </div>
                <button
                  className="btn ms-2 text-white"
                  onClick={newConversation}
                  style={{
                    borderRadius: "50px",
                    padding: "10px 20px",
                    fontWeight: "bold",
                    background: "linear-gradient(135deg, #2a2a2a, #1c1c1c)",
                    border: "1px solid #ff9f0d",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background =
                      "linear-gradient(135deg, #333, #222)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background =
                      "linear-gradient(135deg, #2a2a2a, #1c1c1c)";
                  }}
                >
                  New Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Scrollbar Style */}
      <style>{`
        .modal-body::-webkit-scrollbar {
          width: 8px;
        }
        .modal-body::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #ff9f0d, #333);
          border-radius: 10px;
        }
        .modal-body::-webkit-scrollbar-track {
          background: #1a1a1a;
        }
      `}</style>
    </>
  );
};

export default Chatbot;


//  <button
//         className="btn rounded-circle shadow-lg d-flex justify-content-center align-items-center"
//         style={{
//           position: "fixed",
//           bottom: "20px",
//           right: "20px",
//           width: "60px",
//           height: "60px",
//           fontSize: "24px",
//           background: "linear-gradient(135deg, #ff9f0d, #ff6f00, #e65100)",
//         }}
//         onClick={() => setIsOpen(true)}
//       >
//         <i className="bi bi-discord text-light fs-1"></i>
//       </button>