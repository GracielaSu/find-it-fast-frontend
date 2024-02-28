
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import SmartToyIcon from '@mui/icons-material/SmartToy';

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

// Creating our own theme
const theme = {
    background: '#5a3d7fd7',
    headerBgColor: '#d8baff',
    headerFontSize: '20px',
    botBubbleColor: '#d83346b3',
    headerFontColor: 'Black',
    botFontColor: 'white',
    userBubbleColor: '#d83346b3',
    userFontColor: 'white',
};

// Set some properties of the bot
const config = {
    botAvatar: "/photos/bot.png",
    floating: false,
    width: "100rem",
    height: "50rem",
};

function HelpCenter() {
    return (
        <div class="background chat-bot">
            <ThemeProvider theme={theme}>
                <ChatBot
                    headerTitle="Find It Fast Bot"
                    steps={steps}
                    {...config}

                />
            </ThemeProvider>
        </div>
    );
}

export default HelpCenter;
