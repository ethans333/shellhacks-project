import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanChatMessage, SystemChatMessage } from "langchain/schema";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";

const model = new ChatOpenAI({
  tempurature: 0,
  openAIApiKey: "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",
  model: "gpt-3.5-turbo",
});

const memory = new BufferMemory();

const chain = new ConversationChain({ llm: model, memory: memory });

export default async function chat(input) {
  return await chain.call({ input: input });
}
