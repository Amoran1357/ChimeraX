// ===================================================
// ChimeraX OpenRouter Gateway
// All Elders communicate through this service
// ===================================================

export interface AIRequest {
  system: string;
  prompt: string;
  temperature?: number;
  model?: string;
}

export interface AIResponse {
  success: boolean;
  model: string;
  content: string;
  tokens?: number;
}

class OpenRouterGateway {
  private apiKey = process.env.OPENROUTER_API_KEY || "";

  private endpoint = "https://openrouter.ai/api/v1/chat/completions";

  async chat(request: AIRequest): Promise<AIResponse> {
    try {
      const response = await fetch(this.endpoint, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://chimerax.ai",
          "X-Title": "ChimeraX",
        },
        body: JSON.stringify({
          model:
            request.model ||
            "anthropic/claude-sonnet-4",

          temperature:
            request.temperature ?? 0.2,

          messages: [
            {
              role: "system",
              content: request.system,
            },
            {
              role: "user",
              content: request.prompt,
            },
          ],
        }),
      });

      const json = await response.json();

      return {
        success: true,
        model:
          json.model ??
          request.model ??
          "unknown",

        content:
          json.choices?.[0]?.message?.content ??
          "",

        tokens: json.usage?.total_tokens,
      };
    } catch (error) {
      console.error(error);

      return {
        success: false,
        model: "offline",
        content: "",
      };
    }
  }

  // ===========================================
  // Reflection Elder
  // ===========================================

  reflection(prompt: string) {
    return this.chat({
      system:
        "You are the Reflection Elder of ChimeraX. Critique every proposed trade objectively.",
      prompt,
    });
  }

  // ===========================================
  // Strategy Elder
  // ===========================================

  strategy(prompt: string) {
    return this.chat({
      system:
        "You are the Strategy Elder responsible for profitable long-term trading.",
      prompt,
    });
  }

  // ===========================================
  // Liquidity Elder
  // ===========================================

  liquidity(prompt: string) {
    return this.chat({
      system:
        "You analyse liquidity, order books and market depth.",
      prompt,
    });
  }

  // ===========================================
  // Macro Elder
  // ===========================================

  macro(prompt: string) {
    return this.chat({
      system:
        "You analyse macroeconomic conditions affecting crypto markets.",
      prompt,
    });
  }

  // ===========================================
  // Portfolio Elder
  // ===========================================

  portfolio(prompt: string) {
    return this.chat({
      system:
        "You optimise portfolio allocation and diversification.",
      prompt,
    });
  }

  // ===========================================
  // Risk Elder
  // ===========================================

  risk(prompt: string) {
    return this.chat({
      system:
        "You minimise downside risk and preserve capital.",
      prompt,
    });
  }

  // ===========================================
  // Security Elder
  // ===========================================

  security(prompt: string) {
    return this.chat({
      system:
        "You inspect smart contracts and blockchain security risks.",
      prompt,
    });
  }

  // ===========================================
  // Execution Elder
  // ===========================================

  execution(prompt: string) {
    return this.chat({
      system:
        "You optimise transaction execution and slippage.",
      prompt,
    });
  }
}

export const openRouter = new OpenRouterGateway();
