import { inngest } from "./client";
import { openai, createAgent } from "@inngest/agent-kit";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {
    // Create a new agent with a system prompt (you can add optional tools, too)
    const summarizer = createAgent({
      name: "summarizer",
      system:
        "You are an expert summarizer.  You summarizer in 2 words nice and clean.",
      model: openai({ model: "gpt-3.5-turbo" }),
    });

    const { output } = await summarizer.run(
      `Summarize the following text ${event.data.value}`,
    );
    console.log(output);
    return { output };
  },
);
