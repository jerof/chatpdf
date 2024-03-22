import {OpenAIApi, Configuration} from 'openai-edge';

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(config)

export async function getEmbeddings(text: string) {
  try {
    const response = await openai.createEmbedding({
      model: 'text-embedding-ada-002',
      input: text.replace(/\n/g, '')
    });
    // Assuming response.json() correctly returns the JSON object.
    const result = await response.json();
    
    // Correctly accessing the embedding.
    // Adjust this path based on the actual response structure.
    // This is just an example based on common structures.
    if (result && result.data && result.data.length > 0) {
      return result.data[0].embedding as number[];
    } else {
      console.log('Unexpected result structure:', result);
      throw new Error('Unexpected result structure');
    }
    
  } catch (error) {
    console.log('error calling openai embeddings api', error);
    throw error;
  }
}