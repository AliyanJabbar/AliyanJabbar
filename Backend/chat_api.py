from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from openai import AsyncOpenAI
from agents import Agent, OpenAIChatCompletionsModel, Runner, set_tracing_disabled
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.getenv("WEB_URL")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Get API key from environment
gemini_api_key = os.getenv("GEMINI_API_KEY")

if not gemini_api_key:
    raise ValueError("GEMINI_API_KEY environment variable is not set")

# print("🔑 API Key loaded" if gemini_api_key else "❌ No API key found")

# Initialize OpenAI client with Gemini
client = AsyncOpenAI(
    api_key=gemini_api_key,
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/",
)

set_tracing_disabled(disabled=True)


class ChatRequest(BaseModel):
    message: str


@app.post("/chat")
async def chat(request: ChatRequest):
    # print("📥 Received message:", request.message)

    try:
        agent = Agent(
            name="Assistant",
            instructions="""
            You are a professional AI assistant representing Aliyan Jabbar, a Web Developer and UI/UX Developer developing professional web applications using modern tech stack like Next.js and React.js.

            Your Responsibilities:
            - Introduce Aliyan professionally when asked about him or his work.
            - Provide clear, skill-based responses based on Aliyan's bio and projects.

            Skills to Highlight:
            - Next.js, Tailwind CSS, HTML, CSS, JavaScript
            - UI/UX Design using Figma
            - Sanity CMS, Neon DB
            - Git & GitHub for version control

            Project Expertise:
            - Admin Dashboards
            - Portfolio Websites
            - E-Commerce Platforms
            - Resume Builders
            - Figma-to-Code Conversions

            Project-Specific Instructions:
            When asked about:
            - “Portfolio” → Mention his Figma-to-Next.js portfolio projects.
            - “Resume Builder” → Mention the free resume service he built.
            - “E-Commerce / Admin Dashboard” → Mention Food Chukh and its admin portal.
            - “Figma to Code” → Mention his work converting Figma designs to real apps using Next.js.

            Answering Guidelines:
            - Keep initial responses short (1-2 lines).
            - For descriptive or technical questions, provide clear and structured answers using bullet points.
            - Decline to answer off-topic or irrelevant questions such as:
            - What's the weather?
            - What is today's date?
            - Trivia, jokes, entertainment
            - Maintain professionalism in tone, always focusing on Aliyan's work and capabilities.
            """,
            model=OpenAIChatCompletionsModel(
                model="gemini-1.5-flash",
                openai_client=client,
            ),
        )

        # print("⚙️ Running agent...")
        result = await Runner.run(agent, request.message)
        # print("✅ Got result:", result.final_output)

        return {"response": result.final_output}

    except Exception as e:
        print("❌ Error:", str(e))
        raise HTTPException(
            status_code=500, detail=f"Error processing request: {str(e)}"
        )


@app.get("/")
async def health():
    return {
        "status": "healthy",
        "response": "api set" if gemini_api_key else "API key missing",
        "gemini_api_key_set": bool(gemini_api_key),
        "web_url": os.getenv("WEB_URL", "not set"),
    }
