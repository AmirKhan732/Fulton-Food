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

  const newConversation = () => setMessages([]);

  return (
    <>
      {/* Floating Button */}
      <button
        className="btn rounded-circle shadow-lg d-flex justify-content-center align-items-center chatbot-float-btn"
        onClick={() => setIsOpen(true)}
      >
        <i className="bi bi-discord text-light fs-1"></i>
      </button>

      {isOpen && (
        <div
          className="modal fade show"
          style={{
            display: "block",
            background: "rgba(0,0,0,0.7)",
          }}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content text-light chatbot-modal">
              {/* Header */}
              <div className="modal-header border-0">
                <h3 className="modal-title fw-bold">⚡ Firebase AI Chatbot</h3>
                <button
                  className="btn-close btn-close-white"
                  onClick={() => setIsOpen(false)}
                ></button>
              </div>

              {/* Body */}
              <div className="modal-body d-flex flex-column chatbot-body">
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
                            ? "linear-gradient(135deg, #1b1a19, #333)"
                            : "linear-gradient(135deg, #2a2a2a, #1c1c1c)",
                        border:
                          msg.role === "user"
                            ? "1px solid #1b1a19"
                            : "1px solid #333",
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

              {/* Footer */}
              <div className="modal-footer d-flex chatbot-footer">
                <div className="input-group flex-grow-1">
                  <input
                    type="text"
                    className="form-control chatbot-input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  />
                  <button
                    className="btn chatbot-send-btn"
                    onClick={sendMessage}
                  >
                    Send
                  </button>
                </div>
                <button
                  className="btn chatbot-new-btn ms-2"
                  onClick={newConversation}
                >
                  New Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style>{`
        /* Floating Button Animation */
        .chatbot-float-btn {
          position: fixed;
          bottom: 40px;
          right: 50px;
          width: 60px;
          height: 60px;
          font-size: 24px;
          background: linear-gradient(135deg, #ff9f0d, #ff6f00, #e65100);
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        /* Modal */
        .chatbot-modal {
          background: linear-gradient(135deg, #1c1c1c, #0d0d0d, #1c1c1c);
          border-radius: 15px;
          border: 1px solid #ff9f0d;
          overflow: hidden;
        }

        /* Body */
        .chatbot-body {
          height: 400px;
          overflow-y: auto;
        }
        .chatbot-body::-webkit-scrollbar {
          width: 8px;
        }
        .chatbot-body::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #ff9f0d, #333);
          border-radius: 10px;
        }
        .chatbot-body::-webkit-scrollbar-track {
          background: #1a1a1a;
        }

        /* Footer */
        .chatbot-footer {
          background-color: #111;
          border-top: 1px solid #333;
        }

        /* Input */
        .chatbot-input {
          border-radius: 50px;
          background-color: #1c1c1c;
          color: white;
          border: 1px solid #ff9f0d;
          padding: 12px 20px;
          box-shadow: inset 0 0 5px rgba(255, 159, 13, 0.5);
        }

        /* Buttons */
        .chatbot-send-btn {
          border-radius: 50px;
          margin-left: 10px;
          background: linear-gradient(135deg, #ff9f0d, #ff6f00, #222);
          color: white;
          font-weight: bold;
          padding: 10px 20px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.4);
          transition: all 0.3s ease;
        }
        .chatbot-send-btn:hover {
          background: linear-gradient(135deg, #ffb84d, #ff6f00);
        }

        .chatbot-new-btn {
          border-radius: 50px;
          padding: 10px 20px;
          font-weight: bold;
          color: white;
          background: linear-gradient(135deg, #2a2a2a, #1c1c1c);
          border: 1px solid #ff9f0d;
          transition: all 0.3s ease;
        }
        .chatbot-new-btn:hover {
          background: linear-gradient(135deg, #333, #222);
        }
      `}</style>
    </>
  );
};

export default Chatbot;
