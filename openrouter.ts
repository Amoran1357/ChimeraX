export async function callOpenRouter(system: string, user: string) {
const res = await fetch(“https://openrouter.ai/api/v1/chat/completions”, {
method: “POST”,
headers: {
Authorization: Bearer ${process.env.OPENROUTER_API_KEY},
“Content-Type”: “application/json”
},
body: JSON.stringify({
model: “deepseek/deepseek-chat”,
messages: [
{ role: “system”, content: system },
{ role: “user”, content: user }
]
})
});

const data = await res.json();
return data.choices[0].message.content;
}