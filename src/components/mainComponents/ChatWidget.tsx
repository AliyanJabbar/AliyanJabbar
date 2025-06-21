"use client";
import { useState, useRef, useEffect } from "react";
import type React from "react";

import { motion, AnimatePresence } from "framer-motion";
import { FaRegPaperPlane } from "react-icons/fa";
import { BsRobot } from "react-icons/bs";
import { LuMaximize2 } from "react-icons/lu";
import { IoMdRefresh } from "react-icons/io";
import { RiCloseLargeLine } from "react-icons/ri";
import { LuMinimize2 } from "react-icons/lu";

import sanitizeInput from "../utils/sanitizeInput";
import styles from "../moduleCSS/upAdown.module.css";

export default function AIAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; text: string }[]>(
    []
  );
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isChatIconHovered, setIsChatIconHovered] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [isLarge, setIsLarge] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContentRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    "What are your key skills and areas of expertise?",
    "What are some of your notable projects?",
    "How much time will it require to make a website?",
  ];

  const scrollToBottom = () => {
    if (messagesEndRef.current && chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const sendMessage = async (messageText?: string) => {
    const messageToSend = messageText || input.trim();
    if (!messageToSend || isLoading) return;

    const newMessages = [...messages, { role: "user", text: messageToSend }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);
    setShowWelcome(false);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageToSend }),
      });

      const data = await res.json();
      setMessages([...newMessages, { role: "bot", text: data.response }]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages([
        ...newMessages,
        { role: "bot", text: "❌ Sorry, something went wrong. Try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    sendMessage(question);
  };

  const handleRefresh = () => {
    setMessages([]);
    setShowWelcome(true);
    setInput("");
  };

  const handleLarge = () => {
    setIsLarge(!isLarge);
  };

  const handleChatClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleChatWheel = (e: React.WheelEvent) => {
    e.stopPropagation();
  };

  return (
    <main>
      {/* Floating Chat Button */}
      <motion.button
        whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        onHoverStart={() => setIsChatIconHovered(true)}
        onHoverEnd={() => setIsChatIconHovered(false)}
        className="fixed bottom-5 right-8 xs:bottom-4 xs:right-4 z-50 bg-dark dark:bg-light p-4 rounded-full shadow-lg border"
      >
        <BsRobot
          size={23}
          className={`${
            isChatIconHovered && styles["upAdown"]
          } text-light dark:text-dark`}
        />
      </motion.button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chatbox"
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.95,
            }}
            transition={{ duration: 0.2 }}
            onClick={handleChatClick}
            onWheel={handleChatWheel}
            className={`${
              isLarge ? "w-[45vw] h-[80vh]" : "w-[35vw] h-[70vh]"
            } fixed bottom-24 lg:w-[45vw] md:w-[98vw] md:h-[80vh] md:right-[6px] right-8 border dark:border-grayish border-lightGray dark:bg-dark/80 bg-light/80 backdrop-blur-sm flex flex-col rounded-3xl z-40 transition-all duration-200`}
          >
            {/* Header */}
            <div className="pointer-events-auto relative w-full flex items-center justify-between p-4 border-b dark:border-grayish border-lightGray rounded-tl-3xl rounded-tr-3xl dark:bg-dark bg-light ">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 dark:bg-white bg-dark rounded-full flex items-center justify-center">
                  <BsRobot className="w-6 h-6 dark:text-dark text-light" />
                  <div className="w-2 h-2 rounded-full absolute bottom-[1px] right-[2px] bg-primary dark:bg-primaryDark border border-dark" />
                </div>
                <div>
                  <h2 className="text-dark dark:text-light font-semibold text-lg">
                    AI Assistant
                  </h2>
                  <p className="text-sm font-light dark:text-lightGray text-grayish">
                    Built by Aliyan Jabbar
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2">
                <motion.button
                  whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
                  onClick={handleRefresh}
                  className="text-grayish dark:text-lightGray hover:text-dark hover:bg-lightGray dark:hover:bg-grayish dark:hover:text-light p-2 rounded"
                >
                  <IoMdRefresh size={22} />
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
                  onClick={handleLarge}
                  className="text-grayish dark:text-lightGray hover:text-dark hover:bg-lightGray dark:hover:bg-grayish dark:hover:text-light p-2 rounded sm:hidden"
                >
                  {isLarge ? (
                    <LuMinimize2 size={20} />
                  ) : (
                    <LuMaximize2 size={20} />
                  )}
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                  }}
                  className="text-grayish dark:text-lightGray hover:text-dark hover:bg-lightGray dark:hover:bg-grayish dark:hover:text-light p-2 rounded"
                >
                  <RiCloseLargeLine size={20} />
                </motion.button>
              </div>
            </div>

            {/* Chat Content */}
            <div className="flex-1 flex flex-col min-h-0">
              <div
                ref={chatContentRef}
                onWheel={handleChatWheel}
                className="flex-grow overflow-y-auto scrollbar-thin px-4 space-y-3"
                style={{
                  WebkitOverflowScrolling: "touch",
                  transform: "translateZ(0)",
                  willChange: "scroll-position",
                }}
              >
                {showWelcome && messages.length === 0 ? (
                  /* Welcome Screen */
                  <div className="flex flex-col items-center justify-start min-h-full p-6 space-y-4">
                    {/* robot */}
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center relative z-20">
                      <BsRobot
                        className="dark:text-light text-dark"
                        size={40}
                      />
                    </div>
                    {/* text intro */}
                    <div className="text-center">
                      <p className="text-grayish dark:text-lightGray text-sm leading-relaxed">
                        Hi! I'm Aliyan's personal assistant. Ask me anything
                        about his work, experience, skills, or projects, or
                        choose from the suggested questions!
                      </p>
                    </div>
                    {/* suggestions */}
                    <div className="space-y-3 w-full">
                      {suggestedQuestions.map((question, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestedQuestion(question)}
                          className="w-full p-2 dark:bg-grayish bg-lightGray dark:hover:bg-[#2b2b2b] hover:bg-gray-300 dark:text-white text-black rounded-full transition-colors duration-150 text-sm font-light text-center select-none"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Messages */
                  <div className="p-4 space-y-3">
                    {messages.map((msg, ind) => (
                      <div
                        key={ind}
                        className={`flex ${
                          msg.role === "user" ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`px-5 py-3 text-sm rounded-2xl max-w-[75%] ${
                            msg.role === "user"
                              ? "dark:bg-light bg-dark rounded-tr-none dark:text-dark text-light"
                              : "dark:bg-grayish bg-lightGray dark:text-light text-dark rounded-tl-none"
                          }`}
                        >
                          {msg.text}
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex justify-start">
                        <div className="bg-grayish text-white px-4 py-2 rounded-lg text-sm">
                          Typing...
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                )}
              </div>
            </div>

            {/* Input */}
            <div className="flex gap-2 py-4 px-6 relaive w-full">
              <input
                className="relative flex-1 px-4 py-4 w-full text-sm border dark:bg-grayish bg-lightGray dark:border-grayish border-lightGray outline-none dark:focus:border-lightGray focus:border-grayish text-white placeholder:select-none dark:placeholder:text-lightGray placeholder:text-grayish rounded-full"
                placeholder="Ask me anything..."
                value={input}
                onChange={(e) => setInput(sanitizeInput(e.target.value))}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                disabled={isLoading}
              />
              <motion.button
                whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
                onClick={() => sendMessage()}
                disabled={isLoading}
                className={`${
                  isLoading
                    ? "bg-dark/70 dark:bg-light/70"
                    : "dark:bg-light bg-dark"
                } absolute bottom-[23px] right-8  hover:bg-dark/70 dark:hover:bg-light/70 p-3 rounded-full transition-colors`}
              >
                <FaRegPaperPlane className="w-4 h-4 text-light dark:text-dark" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
