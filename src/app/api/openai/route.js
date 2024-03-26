import OpenAI from 'openai';

export async function POST(req, res) {
    try {
        console.log('Request Body:', req.body); // This should now log the parsed body

        const { prompt } = req.body;

        if (!prompt) {
            console.log('Prompt is missing in the request body');
            return res.status(400).json({ message: "Prompt is required" });
        }

        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });

        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt: prompt,
            n: 1,
            size: "1024x1024",
        });

        return res.status(200).json({ data: response.data });
    } catch (error) {
        console.error('OpenAI API request failed:', error);
        return res.status(500).json({ message: 'Error generating image' });
    }
}
