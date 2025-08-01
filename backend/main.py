from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
import os
from dotenv import load_dotenv

load_dotenv()

BSCSCAN_API_KEY = os.getenv("BSCSCAN_API_KEY")
app = FastAPI()

# CORS liberado
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/token/{address}")
def analyze_token(address: str):
    result = {}

    # Dados do contrato
    contract_url = f"https://api.bscscan.com/api?module=contract&action=getsourcecode&address={address}&apikey={BSCSCAN_API_KEY}"
    r_contract = requests.get(contract_url).json()
    result["contract_info"] = r_contract.get("result", [{}])[0]

    # Verifica se é proxy
    result["is_proxy"] = result["contract_info"].get("Proxy") == "1"

    # Holders
    holders_url = f"https://api.bscscan.com/api?module=token&action=tokenholderlist&contractaddress={address}&page=1&offset=5&apikey={BSCSCAN_API_KEY}"
    r_holders = requests.get(holders_url).json()
    result["holders"] = r_holders.get("result", [])

    # Total de supply
    supply_url = f"https://api.bscscan.com/api?module=stats&action=tokensupply&contractaddress={address}&apikey={BSCSCAN_API_KEY}"
    r_supply = requests.get(supply_url).json()
    result["total_supply"] = r_supply.get("result", "0")

    return result
