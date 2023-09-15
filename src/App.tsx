import { useEffect, KeyboardEvent, useState } from "react";
import styled from "@emotion/styled";
import { socket } from "./socket";

const InputStyled = styled.input`
    border: 1px solid #000;
    padding: 4px 12px;
    border-radius: 4px;
`;

type Chat = {
    id: string;
    message: string;
};

function App() {
    const [chat, setChat] = useState<Chat[]>([]);

    useEffect(() => {
        socket.on("RESPONSE MESSAGE", (response: Chat[]) => {
            setChat(response);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
        const { key, target } = event;

        if (key === "Enter") {
            socket.emit("REQUEST MESSAGE", (target as HTMLInputElement).value);

            (target as HTMLInputElement).value = "";
        }
    }

    return (
        <>
            <div>Hello World</div>
            <br />
            <ul>
                {chat.map(({ id, message }, index) => (
                    <li key={index}>
                        {id}: {message}
                    </li>
                ))}
            </ul>
            <InputStyled type="text" onKeyDown={handleKeyDown} />
        </>
    );
}

export default App;
