import { useEffect } from "react";
import { io } from "socket.io-client";

function App() {
    useEffect(() => {
        const socket = io("http://localhost:5000");

        console.log(socket);

        return () => {
            socket.disconnect();
        };
    });

    return (
        <>
            <div>Hello World</div>
        </>
    );
}

export default App;
