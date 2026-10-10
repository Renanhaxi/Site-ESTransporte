/**
 * ==============================================================================
 * ES TRANSPORTE & TURISMO - JAVASCRIPT DE INTERATIVIDADE & AGENDAMENTO WHATSAPP
 * ==============================================================================
 */

// ==========================================
// 1. CONFIGURAÇÃO GERAL
// ==========================================
// Número padrão do WhatsApp comercial (Belém - DDD 91).
// Caso o proprietário queira alterar para outro número, basta atualizar a constante abaixo:
const CONFIG_WHATSAPP = {
  numero: "5591980282657", // Número oficial ES Transporte & Turismo: (91) 98028-2657
  empresaNome: "ES Transporte & Turismo",
  instagram: "@es_transporteeturismo2023"
};

// ==========================================
// 2. INICIALIZAÇÃO AO CARREGAR O DOM
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initFormBooking();
  initMobileDrawer();
  initFaqAccordion();
  initSmoothScroll();
  setCurrentYear();
  setDefaultDate();
});

// ==========================================
// 3. AGENDADOR & PREVIEW DINÂMICO DE WHATSAPP
// ==========================================
function setDefaultDate() {
  const dataInput = document.getElementById("dataViagem");
  if (dataInput) {
    const hoje = new Date();
    // Próximo dia útil como padrão amigável
    hoje.setDate(hoje.getDate() + 1);
    const ano = hoje.getFullYear();
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');
    const dia = String(hoje.getDate()).padStart(2, '0');
    dataInput.value = `${ano}-${mes}-${dia}`;
    dataInput.min = new Date().toISOString().split("T")[0];
  }
}

function initFormBooking() {
  const form = document.getElementById("bookingForm");
  const inputs = [
    "tipoServico", "qtdPassageiros", "localOrigem", 
    "localDestino", "dataViagem", "horaViagem", "nomeCliente", "obsViagem"
  ];

  inputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", updateMessagePreview);
      el.addEventListener("change", updateMessagePreview);
    }
  });

  updateMessagePreview();
}

function getFormattedValues() {
  const servico = document.getElementById("tipoServico")?.value || "Transporte Executivo";
  const passageiros = document.getElementById("qtdPassageiros")?.value || "1 a 3 passageiros";
  const origem = document.getElementById("localOrigem")?.value || "Belém - PA";
  const destino = document.getElementById("localDestino")?.value || "A definir";
  const dataRaw = document.getElementById("dataViagem")?.value || "";
  const hora = document.getElementById("horaViagem")?.value || "08:00";
  const nome = document.getElementById("nomeCliente")?.value.trim() || "";
  const obs = document.getElementById("obsViagem")?.value.trim() || "";

  let dataFormatada = dataRaw;
  if (dataRaw.includes("-")) {
    const [ano, mes, dia] = dataRaw.split("-");
    dataFormatada = `${dia}/${mes}/${ano}`;
  }

  return { servico, passageiros, origem, destino, dataFormatada, hora, nome, obs };
}

function updateMessagePreview() {
  const previewEl = document.getElementById("previewMsg");
  if (!previewEl) return;

  const data = getFormattedValues();
  const nomeExibicao = data.nome ? data.nome : "[Seu Nome]";

  const texto = 
`Olá, ES Transporte & Turismo! Gostaria de um orçamento para transporte:

👤 *Cliente:* ${nomeExibicao}
🚐 *Serviço:* ${data.servico}
👥 *Passageiros:* ${data.passageiros}
📍 *Origem:* ${data.origem}
🏁 *Destino:* ${data.destino}
📅 *Data:* ${data.dataFormatada || "A combinar"} às ${data.hora}h
${data.obs ? `📝 *Observações:* ${data.obs}` : ""}`.trim();

  previewEl.textContent = texto;
}

function enviarWhatsApp() {
  const data = getFormattedValues();
  
  if (!data.nome) {
    alert("Por favor, preencha o seu nome para identificação.");
    const nomeInput = document.getElementById("nomeCliente");
    if (nomeInput) {
      nomeInput.focus();
    }
    return;
  }

  const textoMensagem = 
`Olá, ES Transporte & Turismo! Gostaria de um orçamento para transporte:

👤 *Cliente:* ${data.nome}
🚐 *Serviço:* ${data.servico}
👥 *Passageiros:* ${data.passageiros}
📍 *Origem:* ${data.origem}
🏁 *Destino:* ${data.destino}
📅 *Data:* ${data.dataFormatada || "A combinar"} às ${data.hora}h
${data.obs ? `📝 *Observações:* ${data.obs}\n` : ""}
Encontrei a empresa no site e gostaria de verificar disponibilidade e valores!`;

  const urlWhatsapp = `https://wa.me/${CONFIG_WHATSAPP.numero}?text=${encodeURIComponent(textoMensagem)}`;
  
  // Abre em nova aba / app do WhatsApp
  window.open(urlWhatsapp, "_blank");
}

// Atalhos rápidos para Origem e Destino
function setOrigem(local) {
  const el = document.getElementById("localOrigem");
  if (el) {
    el.value = local;
    updateMessagePreview();
    el.classList.add("highlight-input");
    setTimeout(() => el.classList.remove("highlight-input"), 500);
  }
}

function setDestino(local) {
  const el = document.getElementById("localDestino");
  if (el) {
    el.value = local;
    updateMessagePreview();
    el.classList.add("highlight-input");
    setTimeout(() => el.classList.remove("highlight-input"), 500);
  }
}

function preencherServico(nomeServico) {
  const el = document.getElementById("tipoServico");
  if (el) {
    el.value = nomeServico;
    updateMessagePreview();
  }
}

function agendarDestino(nomeDestino) {
  setDestino(nomeDestino);
  const agendamentoSec = document.getElementById("agendamento");
  if (agendamentoSec) {
    agendamentoSec.scrollIntoView({ behavior: "smooth" });
  }
}

// ==========================================
// 4. MENU MOBILE DRAWER
// ==========================================
function initMobileDrawer() {
  const toggleBtn = document.getElementById("mobileToggle");
  const drawer = document.getElementById("mobileDrawer");
  const closeBtn = document.getElementById("drawerClose");
  const links = document.querySelectorAll(".mobile-link, .drawer-footer a");

  if (!toggleBtn || !drawer) return;

  function abrirDrawer() {
    drawer.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function fecharDrawer() {
    drawer.classList.remove("active");
    document.body.style.overflow = "";
  }

  toggleBtn.addEventListener("click", abrirDrawer);
  if (closeBtn) closeBtn.addEventListener("click", fecharDrawer);

  links.forEach(l => {
    l.addEventListener("click", fecharDrawer);
  });
}

// ==========================================
// 5. FAQ ACCORDION INTERATIVO
// ==========================================
function initFaqAccordion() {
  const items = document.querySelectorAll(".faq-item");

  items.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      // Fecha todos os outros itens
      items.forEach(other => {
        other.classList.remove("active");
        const otherAnswer = other.querySelector(".faq-answer");
        if (otherAnswer) otherAnswer.style.maxHeight = null;
      });

      // Alterna o atual
      if (!isOpen) {
        item.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
}

// ==========================================
// 6. ROLAGEM SUAVE
// ==========================================
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
}

// ==========================================
// 7. POPUP WHATSAPP FLUTUANTE
// ==========================================
function fecharPopupWhatsApp() {
  const popup = document.getElementById("whatsappPopup");
  if (popup) {
    popup.style.display = "none";
  }
}

// ==========================================
// 8. ANO ATUAL NO FOOTER
// ==========================================
function setCurrentYear() {
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
