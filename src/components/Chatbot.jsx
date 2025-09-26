import React, { useState, useRef, useEffect } from "react";
import { getAI, getGenerativeModel, GoogleAIBackend } from "firebase/ai";
import app from "../firebase";
import botimage from "../assets/friendlyrobo.png";
import TextField from "@mui/material/TextField";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const ai = getAI(app, { backend: new GoogleAIBackend() });
  const model = getGenerativeModel(ai, { model: "gemini-2.5-flash" });

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);

    setInput("");
    setLoading(true);

    try {
      const prompt = `
The following is a conversation with an AI assistant for Fulton Foods, a fast food restaurant. 
The assistant is helpful, creative, clever, and very friendly. 
It should always answer concisely and accurately about food, service, and Fulton Foods. 

Brand Intro:  
"Extra Ordinary Taste and Experience. We take pride in serving fresh, high-quality meals crafted with the finest ingredients, ensuring every dish is full of flavor. With a passion for taste and a commitment to exceptional service, we make every dining experience truly special. 5+ Years Of Experience. This is our phone number: 123-456-7890." 

Now the user says: "${input}"
`;

      const formattedMessages = messages.map((m) => ({
        role: m.role === "user" ? "user" : "model",
        parts: [{ text: m.content }],
      }));

      const result = await model.generateContent({
        contents: [
          ...formattedMessages,
          { role: "user", parts: [{ text: prompt }] },
        ],
      });

      const reply = result.response.text() || "No response";

      setMessages((prev) => [...prev, { role: "model", content: reply }]);
    } catch (err) {
      console.error("AI Error:", err);
      setMessages((prev) => [
        ...prev,
        { role: "model", content: "⚠️ Error fetching response." },
      ]);
    }

    setLoading(false);
  };

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <>
      <button
        className="btn rounded-circle d-flex justify-content-center align-items-center chatbot-float-btn"
        onClick={() => setIsOpen(true)}
      >
        <img
          src={botimage}
          alt="Chatbot"
          style={{ width: "65px", height: "65px" }}
        />
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
              <div className="modal-header border-0">
                <h2 className="modal-title  fw-bold theme-color slug-desc">
                  Fulton Foods Chatbot
                </h2>
                <button
                  className="btn-close btn-close-white"
                  onClick={() => setIsOpen(false)}
                ></button>
              </div>
              <div className="modal-body d-flex flex-column chatbot-body">
                {messages.length === 0 ? (
                  <div className="d-flex flex-column justify-content-center align-items-center h-100 text-center">
                    <img
                      src={botimage}
                      alt="Chatbot"
                      style={{ width: "150px", height: "190px" }}
                    />
                    <h5 className="mt-3 theme-color slug-desc">
                      Hello! I'm your friendly chatbot.
                    </h5>
                  </div>
                ) : (
                  <>
                    {messages.map((msg, i) => (
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
                              ? "linear-gradient(135deg, #2e2e2dff, #212022ff)"
                              : "linear-gradient(135deg, #212022ff, #2e2e2dff)",
                        }}
                      >
                        {msg.role === "user" ? (
                          <i className="bi bi-person-fill me-2"></i>
                        ) : (
                          <i className="bi bi-robot me-2"></i>
                        )}
                        {msg.content}
                      </div>
                    ))}
                    {loading && (
                      <div
                        className="d-inline-block p-2 mb-2 rounded shadow-sm text-light align-self-start"
                        style={{
                          maxWidth: "75%",
                          background:
                            "linear-gradient(135deg, #212022ff, #2e2e2dff)",
                          fontStyle: "italic",
                          opacity: 0.8,
                        }}
                      >
                        <i className="bi bi-robot me-2"></i>
                        Bot is thinking…
                      </div>
                    )}
                  </>
                )}
                <div ref={messagesEndRef} />
              </div>
              <div className="modal-footer d-flex chatbot-footer">
                <div className="d-flex w-100 align-items-center">
                  <div style={{ flex: "0 0 90%" }}>
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      label="Chat with AI"
                      variant="filled"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Type a message..."
                      onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                      InputProps={{
                        style: {
                          borderRadius: "8px",
                          background: "#1c1c1c",
                          color: "white",
                        },
                      }}
                      InputLabelProps={{
                        style: { color: "#aaa" },
                      }}
                      disabled={loading}
                    />
                  </div>
                  <div
                    style={{
                      flex: "0 0 10%",
                      marginLeft: "10px",
                      paddingVertical: "25px",
                    }}
                  >
                    <button
                      className="btn w-100 "
                      onClick={sendMessage}
                      disabled={loading}
                      style={{
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, #ff9f0d, #fff)",
                        color: "black",
                        fontWeight: "bold",
                        padding: "10px 0",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
                        transition: "0.3s",
                        opacity: loading ? 0.6 : 1,
                        cursor: loading ? "not-allowed" : "pointer",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.background =
                          "linear-gradient(135deg, #fff, #ff9f0d)")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.background =
                          "linear-gradient(135deg, #ff9f0d, #fff)")
                      }
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      ;
      <style>{`
        .chatbot-float-btn {
          position: fixed;
          bottom: 40px;
          right: 50px;
          width: 80px;
          height: 80px;
          font-size: 24px;
          background: linear-gradient(135deg, #ff9f0d, #ff6f00, #e65100);
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .chatbot-modal {
  border: 3px solid transparent; /* make border visible but transparent */
  background: 
    linear-gradient(135deg, #1c1c1c, #0d0d0d, #1c1c1c) padding-box, /* inner bg */
    linear-gradient(135deg, #ff9f0d, red) border-box; /* gradient border */
}
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
        .chatbot-footer {
          background-color: #111;
          border-top: 1px solid #333;
        }
        .chatbot-input {
       
       
       
          // border: 1px solid #ff9f0d;
       background: #1c1c1c;
          // box-shadow: inset 0 0 5px rgba(241, 238, 234, 0.5);
        }
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
