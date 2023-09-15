import { io } from "socket.io-client";

function App() {
    const socket = io("http://localhost:5000");

    console.log(socket);

    return (
        <>
            <div>Hello World</div>
        </>
    );
}

export default App;
