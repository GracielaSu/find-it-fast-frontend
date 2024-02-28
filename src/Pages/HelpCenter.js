
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [
    {
        id: '0',
        message: 'Hello!',

        // This calls the next id
        // i.e. id 1 in this case
        trigger: '1',
    }, {
        id: '1',

        // This message appears in
        // the bot chat bubble
        message: 'Find-it-fast helpy bot is still under development.',
        trigger: '2'
    },
    {
        id: '2',

        // This message appears in
        // the bot chat bubble
        message: 'Stay Tuned!',
        end: true
    },
];

// Set some properties of the bot
const config = {
    botAvatar: "img.png",
    floating: false,
    width: "100rem"
};

function HelpCenter() {
    return (
        <div class="background">
            <div class="chat-bot">
                <ChatBot
                    headerTitle="Find It Fast Bot"
                    steps={steps}
                    {...config}
                />
            </div>
        </div>

    );
}

export default HelpCenter;
