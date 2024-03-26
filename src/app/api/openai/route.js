export async function POST(req, res) {
    const apiKey = process.env.OPENAI_API_KEY

    const response = await fetch ('https://api.openai.com/v1/images/generations', {
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: 'dall-e-3',
            prompt: inputText,
            n: 1,
            size: '1024x1024',
        }),
    });

    const data = await response.json();

    res.status(200).json(data)
}
