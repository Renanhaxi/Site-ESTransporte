# 🚐 ES Transporte & Turismo - Portfolio & Agendamento Executivo

Landing page executiva e portfólio moderno desenvolvido sob medida para a empresa **ES Transporte & Turismo** (@es_transporteeturismo2023), atuante no nicho de transporte particular, translados, turismo e receptivo executivo em **Belém - PA**.

---

## 💎 Conceito Visual & Análise de Design (Sem Cara de IA)

- **Identidade Visual Autêntica**: A paleta de cores e o design foram extraídos diretamente da logo oficial da empresa:
  - **Azul Marinho Profundo Executivo (`#07192C` / `#0A213A`)**: Transmite autoridade, sobriedade, segurança e credibilidade corporativa.
  - **Dourado Ouro Rodoviário (`#C5972D` / `#DFB54B`)**: Inspirado nas faixas de traçado dinâmico da marca, simbolizando atendimento de primeira classe e sofisticação.
  - **Fundo Claro & Limpo (`#FBFAF8` / `#F5F2EB`)**: Foge dos clichês de IA (fundos escuros neon ou roxos genéricos), proporcionando leveza, transparência e elegância visual.
## 💎 Imagens Reais & Destinos Oficiais Aplicados

Todas as fotos enviadas foram tratadas e integradas nos locais exatos do site:
1. **Hero Section (Abertura):** `assets/images/frota-dupla-sede.jpg` — Mostra as duas vans executivas (Ford Transit e Mercedes-Benz Sprinter) em frente à fachada com o logotipo oficial da empresa.
2. **Viagens para Salinas & Resorts:** `assets/images/salinas-aqualand-resort.jpg` — Van oficial estacionada no conceituado **Aqualand Resort** em Salinópolis.
3. **Nossa Frota & Conforto (17 Lugares):** `assets/images/van-interior-17lugares.jpg` e `assets/images/interior-real-17lugares.jpg` — Destaque para a van de 17 passageiros com poltronas reclináveis, ar-condicionado duplo e acabamento executivo.
4. **Destinos & Roteiros Oficiais:**
   - **Mosqueiro:** `assets/images/destino-mosqueiro-real.jpg` (Portal de Mosqueiro)
   - **Salinas:** `assets/images/destino-salinas-real.jpg` (Praia do Atalaia)
   - **Marudá:** `assets/images/destino-maruda-real.jpg` (Praia de Marudá / Algodoal)
   - **Barcarena:** `assets/images/destino-barcarena-real.jpg` (Praia do Caripi)
   - **Banner Oficial:** `assets/images/destinos-missao.jpg` — *"Seu Destino, Nossa Missão! Conforto que você sente. Segurança que você confia."*
5. **Telefone Oficial Verificado:** **(91) 98028-2657** (já configurado em todos os botões e links de agendamento).

1. **Agendador Interativo Direto para o WhatsApp**:
   - Simulador onde o cliente escolhe a modalidade (Aeroporto Val-de-Cans, Salinas, Mosqueiro, Corporativo, Eventos), número de passageiros, origem, destino, data e horário.
   - Gera uma **prévia em tempo real** da mensagem e, ao clicar, abre o WhatsApp com a mensagem 100% preenchida e formatada!
2. **Atalhos Rápidos com 1 Clique**:
   - Botões instantâneos para destinos populares como *Salinópolis (Salinas)*, *Aeroporto de Belém*, *Estação das Docas*, *Mosqueiro* e *Barcarena*.
3. **100% Responsivo para Celular (Mobile-First)**:
   - Menu lateral retrátil (*Drawer*) suave para smartphones.
   - Botão flutuante de WhatsApp com balão de notificação para conversão imediata.
4. **Acordeão de Perguntas Frequentes (FAQ)**:
   - Esclarece atrasos de voo, emissão de nota fiscal para empresas e segurança da viagem.
5. **Integração com o Feed do Instagram**:
   - Link direto e banner promocional do perfil `@es_transporteeturismo2023`.

---

## 🛠️ Como Ajustar o Número do WhatsApp

Abra o arquivo [`script.js`](file:///c:/Site-ESTransporte/script.js) e altere a primeira linha:

```javascript
const CONFIG_WHATSAPP = {
  numero: "5591981144000", // Insira o DDI + DDD (91) + Número do WhatsApp da empresa
  empresaNome: "ES Transporte & Turismo",
  instagram: "@es_transporteeturismo2023"
};
```

---

## 📦 Como Subir no GitHub e na Vercel

### 1. Subindo para o GitHub
No terminal do seu computador (na pasta do projeto `c:\Site-ESTransporte`):

```bash
git init
git add .
git commit -m "feat: site executivo ES Transporte e Turismo"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
git push -u origin main
```

### 2. Publicando na Vercel
1. Acesse [vercel.com](https://vercel.com) e faça login com seu GitHub.
2. Clique em **"Add New..."** &rarr; **"Project"**.
3. Selecione o repositório que você acabou de subir.
4. Clique em **"Deploy"** (o projeto já possui o arquivo `vercel.json` configurado para deploy estático ultra-rápido).
5. Pronto! Você receberá um link `.vercel.app` para apresentar imediatamente aos clientes e parceiros!
