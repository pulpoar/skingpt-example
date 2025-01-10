import './App.css';
import {useEffect, useState} from "react";
import {ChatIcon} from "./ChatIcon.tsx";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    useEffect(() => {
        // Dynamically load the Pulpoar SDK script
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/@pulpoar/plugin-sdk@latest/dist/index.iife.js";
        script.async = true;

        script.onload = () => {
            if (window.pulpoar) {
                window.pulpoar.onReady((payload) => {
                    console.log("ready", payload);
                });
                window.pulpoar.onClose(() => {
                    setIsOpen(false)
                });
                window.pulpoar.onHide(() => {
                    setIsHidden(true)
                });
            }
        };

        document.body.appendChild(script);

        // Cleanup script on unmount
        return () => {
            document.body.removeChild(script);
        };
    }, []);
    const toggleChat = () => {
        setIsHidden(false)

        setIsOpen(true);
    };

    const isMobile = window.innerWidth <= 768; // Check if the device is mobile

    return (
        <div>
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#333',
                }}
            >
                PulpoAR SkinAI Assistant Demo
            </div>            <div
                onClick={toggleChat}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: '#5E7300',
                    color: 'white',
                    border: 'none',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    cursor: 'pointer',
                    zIndex: 1000,
                    alignContent: 'center',
                }}
            >
                <ChatIcon/>
            </div>

            {/* Chat Popup */}
            {isOpen && (
                <div
                    style={{
                        display: isHidden ? 'none' : 'block',
                        position: 'fixed',
                        bottom: isMobile ? 0 : '80px',
                        right: isMobile ? 0 : '20px',
                        width: isMobile ? '100%' : '400px',
                        height: isMobile ? '100%' : '600px',
                        backgroundColor: 'white',
                        boxShadow: isMobile ? 'none' : '0 4px 6px rgba(0, 0, 0, 0.1)',
                        borderRadius: isMobile ? '0' : '10px',
                        overflow: 'hidden',
                        zIndex: 1000,
                    }}
                >
                    <iframe
                        src="https://skingpt.pulpoar.com"
                        style={{
                            width: '100%',
                            height: '100%',
                            border: 'none',
                        }}
                        title="SkinGPT"
                        allow="clipboard-write; clipboard-read; fullscreen; camera *; encrypted-media; gyroscope; picture-in-picture"
                    />

                </div>
            )}
        </div>
    );
}

export default App;

declare global {
    export interface Window {
        pulpoar: any;
    }
}
