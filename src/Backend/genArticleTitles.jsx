import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/dist/prompts";
import { LLMChain } from "langchain/chains";
import userdata from "./userdata.json";

const template =
  "Create a short title for an article taylored for a {Age} year old that wants to {Goal}.";

const promptTemplate = new PromptTemplate({
  template: template,
  inputVariables: ["Age", "Goal"],
});

const model = new OpenAI({
  tempurature: 0,
  openAIApiKey: "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",
  model: "gpt-3.5-turbo",
});

const chain = new LLMChain({
  llm: model,
  prompt: promptTemplate,
});

export default async function genArticleTitles(n) {
  return await chain.call({
    Age: userdata.Age,
    Goal: userdata.Goal,
  });
}
