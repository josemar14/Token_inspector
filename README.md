# Token Inspector

Ferramenta para analisar tokens na BNB Chain.

## Instalação

1. Clone o repositório
2. Renomeie `.env.example` para `.env` e adicione sua API KEY da BSCScan.
3. Instale dependências:

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
