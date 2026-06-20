CHIMERAX

An autonomous AI trading agent built for the CoinMarketCap × Trust Wallet × BNB Chain AI Trading Agent Hackathon.

Overview

CHIMERAX is a multi-agent crypto intelligence and trading system that:

* Ingests market intelligence from CoinMarketCap
* Uses a council of AI Elders to analyze markets
* Produces consensus trading decisions
* Executes trades through Trust Wallet Agent Kit (TWAK)
* Operates in Demo Mode or Live Mode

Core Architecture

Market Data
↓
Market Intelligence Layer
↓
Elder Council
↓
Consensus Engine
↓
Risk Engine
↓
Trade Execution
↓
Dashboard

Stack

* Next.js 15
* TypeScript
* Vercel
* OpenRouter
* CoinMarketCap Agent Hub
* Trust Wallet Agent Kit
* BNB Chain
* Supabase

Local Development

npm install

npm run dev

Production Deployment

Push to GitHub

Import into Vercel

Add Environment Variables

Deploy

Modes

APP_MODE=demo

or

APP_MODE=live

License

CHIMERAX Community License v1