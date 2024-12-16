import { Injectable, OnModuleInit } from '@nestjs/common';
import { OpenAI } from '@langchain/openai';

@Injectable()
export class TavilyService implements OnModuleInit {
  agent: any;
  constructor() {}

  onModuleInit() {
    this.agent = new OpenAI({
      temperature: 0.9,
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async searchProduct(query: string): Promise<string> {
    return await this.agent.invoke(query);
  }
}
