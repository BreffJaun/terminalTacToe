// P A C K A G E   I M P O R T S
import promptSync from 'prompt-sync'; const prompt = promptSync();

// C O D E
const multiLinePrompt = ask => {
    const lines = ask.split(/\r?\n/);
    const promptLine = lines.pop();
    console.log(lines.join('\n'));
    return prompt(promptLine);
};

export default multiLinePrompt;