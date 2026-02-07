# pip install google-genai
from google import genai

client = genai.Client(api_key="AIzaSyAPhA46nbIigRA5aPbais-8LIwXjoasT04")

question=input("What do you want to ask? ")
response = client.models.generate_content(

    model="gemini-3-flash-preview", contents=question
)
print(response.text)