
const COLORS = {
  ink: "#081C36",
  ink2: "#0E2A4D",
  blueprint: "#0149AD",
  sky: "#5FC2F8",
  skySoft: "#E4F4FE",
  amber: "#FFB020",
  paper: "#F5F7FA",
  steel: "#5B6B7D",
  steel2: "#8493A3",
  line: "#DCE4EC",
  white: "#FFFFFF",
};

const LOGO_URL = "https://cpresolver.com/logo.png";
const SITE_URL = "https://cpresolver.com/";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function nl2br(value: string) {
  return escapeHtml(value).replace(/\n/g, "<br/>");
}

/**
 * Moldura comum a todos os emails: cabeçalho escuro com logo, corpo branco,
 * rodapé claro com os dados de contacto da empresa.
 */
function shell(opts: { preheader: string; bodyHtml: string }) {
  return `<!DOCTYPE html>
<html lang="pt-PT">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>CPresolver</title>
</head>
<body style="margin:0; padding:0; background-color:${COLORS.paper}; font-family:Arial, Helvetica, sans-serif;">
  <!-- preheader (texto invisível que aparece na pré-visualização da caixa de entrada) -->
  <div style="display:none; max-height:0; overflow:hidden; opacity:0; mso-hide:all;">
    ${escapeHtml(opts.preheader)}
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${COLORS.paper}; padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%; max-width:600px; background-color:${COLORS.white}; border-radius:4px; overflow:hidden; border:1px solid ${COLORS.line};">

          <!-- header -->
          <tr>
            <td style="background-color:${COLORS.ink}; padding:28px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td valign="middle" style="width:44px;">
                    <img src="${LOGO_URL}" width="36" height="36" alt="CPresolver" style="display:block; border:0;" />
                  </td>
                  <td valign="middle" style="padding-left:12px;">
                    <span style="font-family:Arial, Helvetica, sans-serif; font-size:16px; font-weight:bold; color:${COLORS.white}; letter-spacing:.02em;">CPRESOLVER</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- amber accent line -->
          <tr>
            <td style="background-color:${COLORS.amber}; height:3px; line-height:3px; font-size:0;">&nbsp;</td>
          </tr>

          <!-- body -->
          <tr>
            <td style="padding:36px 32px;">
              ${opts.bodyHtml}
            </td>
          </tr>

          <!-- footer -->
          <tr>
            <td style="background-color:${COLORS.paper}; border-top:1px solid ${COLORS.line}; padding:22px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="font-family:Arial, Helvetica, sans-serif; font-size:12px; color:${COLORS.steel2}; line-height:1.6;">
                    <strong style="color:${COLORS.steel};">CPresolver</strong><br/>
                    +351 928 067 407 &nbsp;·&nbsp; cpresolver@gmail.com<br/>
                    <a href="${SITE_URL}" style="color:${COLORS.blueprint}; text-decoration:none;">${SITE_URL.replace("https://www.cpresolver.com", "")}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/** Uma linha "rótulo: valor" dentro de uma caixa cinza, para o email interno */
function fieldRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding:10px 0; border-bottom:1px solid ${COLORS.line};">
        <span style="display:block; font-family:'Courier New', monospace; font-size:10.5px; letter-spacing:.08em; text-transform:uppercase; color:${COLORS.steel2}; margin-bottom:3px;">
          ${escapeHtml(label)}
        </span>
        <span style="display:block; font-family:Arial, Helvetica, sans-serif; font-size:14.5px; color:${COLORS.ink};">
          ${value}
        </span>
      </td>
    </tr>`;
}

export type ContactPayload = {
  name: string;
  contact: string;
  project_type?: string;
  message?: string;
};

/**
 * Email interno — enviado para a equipa (TO_EMAIL) sempre que alguém
 * submete o formulário de contacto.
 */
export function contactNotificationEmail(data: ContactPayload) {
  const { name, contact, project_type, message } = data;

  const bodyHtml = `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td style="padding-bottom:4px;">
          <span style="display:inline-block; font-family:'Courier New', monospace; font-size:11px; letter-spacing:.1em; text-transform:uppercase; color:${COLORS.blueprint}; background-color:${COLORS.skySoft}; padding:4px 10px; border-radius:3px;">
            Novo pedido de análise
          </span>
        </td>
      </tr>
      <tr>
        <td style="padding-top:14px; padding-bottom:22px;">
          <span style="font-family:Arial, Helvetica, sans-serif; font-size:20px; font-weight:bold; color:${COLORS.ink};">
            ${escapeHtml(name)} pediu contacto
          </span>
        </td>
      </tr>
    </table>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${COLORS.paper}; border:1px solid ${COLORS.line}; border-radius:4px; padding:4px 18px;">
      ${fieldRow("Nome", escapeHtml(name))}
      ${fieldRow(
        "Contacto",
        `<a href="mailto:${escapeHtml(contact)}" style="color:${COLORS.blueprint}; text-decoration:none;">${escapeHtml(contact)}</a>`
      )}
      ${fieldRow("Tipo de projeto", escapeHtml(project_type || "Não especificado"))}
    </table>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:22px;">
      <tr>
        <td>
          <span style="display:block; font-family:'Courier New', monospace; font-size:10.5px; letter-spacing:.08em; text-transform:uppercase; color:${COLORS.steel2}; margin-bottom:8px;">
            Descrição adicional
          </span>
          <span style="display:block; font-family:Arial, Helvetica, sans-serif; font-size:14px; color:${COLORS.ink}; line-height:1.6;">
            ${message ? nl2br(message) : "<em style='color:" + COLORS.steel2 + ";'>Sem descrição adicional.</em>"}
          </span>
        </td>
      </tr>
    </table>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:30px;">
      <tr>
        <td>
          <a href="mailto:${escapeHtml(contact)}" style="display:inline-block; font-family:'Courier New', monospace; font-size:13px; font-weight:bold; letter-spacing:.03em; color:${COLORS.white}; background-color:${COLORS.blueprint}; padding:13px 24px; border-radius:4px; text-decoration:none;">
            Responder a ${escapeHtml(name.split(" ")[0])}
          </a>
        </td>
      </tr>
    </table>
  `;

  return {
    subject: `Novo pedido de análise — ${name}`,
    html: shell({
      preheader: `${name} pediu um orçamento/análise via site — contacto: ${contact}`,
      bodyHtml,
    }),
    text:
      `Novo pedido recebido através do site:\n\n` +
      `Nome: ${name}\n` +
      `Contacto: ${contact}\n` +
      `Tipo de projecto: ${project_type || "Não especificado"}\n\n` +
      `Descrição adicional:\n${message || "-"}`,
  };
}

/**
 * Email de confirmação — enviado para quem preencheu o formulário,
 * a confirmar que o pedido chegou.
 */
export function contactConfirmationEmail(data: ContactPayload) {
  const { name, project_type } = data;
  const firstName = name.split(" ")[0];

  const bodyHtml = `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td style="padding-bottom:16px;">
          <span style="font-family:Arial, Helvetica, sans-serif; font-size:20px; font-weight:bold; color:${COLORS.ink};">
            Obrigado, ${escapeHtml(firstName)}.
          </span>
        </td>
      </tr>
      <tr>
        <td style="font-family:Arial, Helvetica, sans-serif; font-size:14.5px; color:${COLORS.steel}; line-height:1.65; padding-bottom:22px;">
          Recebemos o seu pedido${project_type ? ` sobre <strong style="color:${COLORS.ink};">${escapeHtml(project_type)}</strong>` : ""}
          e a nossa equipa vai analisá-lo. Entraremos em contacto em até
          1 dia útil com os próximos passos.
        </td>
      </tr>
    </table>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${COLORS.paper}; border:1px solid ${COLORS.line}; border-radius:4px;">
      <tr>
        <td style="padding:18px 20px;">
          <span style="display:block; font-family:'Courier New', monospace; font-size:10.5px; letter-spacing:.08em; text-transform:uppercase; color:${COLORS.steel2}; margin-bottom:10px;">
            O que acontece a seguir
          </span>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="font-family:Arial, Helvetica, sans-serif; font-size:13.5px; color:${COLORS.ink}; padding:5px 0;">
                <span style="color:${COLORS.amber}; font-weight:bold;">1.</span>&nbsp; Análise do pedido pela nossa equipa técnica
              </td>
            </tr>
            <tr>
              <td style="font-family:Arial, Helvetica, sans-serif; font-size:13.5px; color:${COLORS.ink}; padding:5px 0;">
                <span style="color:${COLORS.amber}; font-weight:bold;">2.</span>&nbsp; Contacto telefónico ou por email para esclarecer detalhes
              </td>
            </tr>
            <tr>
              <td style="font-family:Arial, Helvetica, sans-serif; font-size:13.5px; color:${COLORS.ink}; padding:5px 0;">
                <span style="color:${COLORS.amber}; font-weight:bold;">3.</span>&nbsp; Proposta de análise/orçamento sem compromisso
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:26px;">
      <tr>
        <td style="font-family:Arial, Helvetica, sans-serif; font-size:13.5px; color:${COLORS.steel};">
          Precisa de falar connosco antes disso? Ligue para
          <a href="tel:+351931787768" style="color:${COLORS.blueprint}; text-decoration:none; font-weight:bold;">+351 928 067 407</a>.
        </td>
      </tr>
    </table>
  `;

  return {
    subject: "Recebemos o seu pedido — CPresolver",
    html: shell({
      preheader: `Obrigado ${firstName}, recebemos o seu pedido. Entramos em contacto em até 1 dia útil.`,
      bodyHtml,
    }),
    text:
      `Obrigado, ${firstName}.\n\n` +
      `Recebemos o seu pedido${project_type ? ` sobre ${project_type}` : ""} e a nossa equipa vai analisá-lo. ` +
      `Entraremos em contacto em até 1 dia útil.\n\n` +
      `Precisa de falar connosco antes disso? Ligue para +351 928 067 407.`,
  };
}
