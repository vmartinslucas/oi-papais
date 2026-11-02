const DIA_MS = 24 * 60 * 60 * 1000;

// Semana de gestação a partir da data prevista do parto (40 semanas = 280 dias).
export function semanaGestacional(dpp, hoje = new Date()) {
  if (!dpp) return null;
  const [ano, mes, dia] = dpp.split("-").map(Number);
  const parto = Date.UTC(ano, mes - 1, dia);
  const hojeUtc = Date.UTC(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
  const diasAteParto = Math.round((parto - hojeUtc) / DIA_MS);
  return Math.floor((280 - diasAteParto) / 7);
}

export function faseDaSemana(semana, fases) {
  if (semana === null) return null;
  if (semana > 40) return "depois";
  const fase = fases.find(f => f.semanas && semana <= f.semanas[1]);
  return fase ? fase.id : "reta-final";
}

export function itemCompleto(item) {
  if (item.tarefa) return !!item.feito;
  return (item.quantidadeComprada || 0) >= (item.quantidadeSugerida || 1);
}

export function progresso(itens) {
  const completos = itens.filter(itemCompleto).length;
  const total = itens.length;
  return { completos, total, pct: total ? Math.round((completos / total) * 100) : 0 };
}

// Fases cujo prazo já passou (pela semana atual) e que ainda têm itens pendentes.
export function fasesAtrasadas(itens, semana, fases) {
  if (semana === null) return [];
  return fases
    .filter(f => f.semanas && semana > f.semanas[1])
    .filter(f => itens.some(i => i.fase === f.id && !itemCompleto(i)))
    .map(f => f.id);
}

export function totalGasto(itens) {
  return itens.reduce((soma, i) => soma + (Number(i.preco) || 0), 0);
}

export function resumoOfertas(ofertas) {
  const validas = (ofertas || []).filter((o) => Number(o.preco) > 0);
  if (!validas.length) return null;
  const ordenadas = validas.slice().sort((a, b) => Number(a.preco) - Number(b.preco));
  const melhor = ordenadas[0];
  const pior = ordenadas[ordenadas.length - 1];
  return {
    melhor,
    pior,
    quantidade: validas.length,
    economia: validas.length > 1 ? Number(pior.preco) - Number(melhor.preco) : 0,
  };
}

export const LOJAS_BUSCA = [
  { nome: "Amazon", url: (q) => "https://www.amazon.com.br/s?k=" + encodeURIComponent(q) },
  { nome: "Mercado Livre", url: (q) => "https://lista.mercadolivre.com.br/" + encodeURIComponent(q.trim().replace(/\s+/g, "-")) },
  { nome: "Magalu", url: (q) => "https://www.magazineluiza.com.br/busca/" + encodeURIComponent(q) + "/" },
  { nome: "Shopee", url: (q) => "https://shopee.com.br/search?keyword=" + encodeURIComponent(q) },
  { nome: "Google Shopping", url: (q) => "https://www.google.com/search?tbm=shop&q=" + encodeURIComponent(q) },
];

export function termoDeBusca(nomeItem) {
  const nome = nomeItem.replace(/\(.*?\)/g, "").trim();
  return /beb[eê]|berço|infantil|maternidade|amamentação|fralda/i.test(nome) ? nome : nome + " bebê";
}

export function linksDeBusca(nomeItem) {
  const termo = termoDeBusca(nomeItem);
  return LOJAS_BUSCA.map((loja) => ({ loja: loja.nome, url: loja.url(termo) }));
}

export function itemDoGuia(modelo, ordem) {
  return {
    nome: modelo.nome,
    categoria: modelo.categoria,
    fase: modelo.fase,
    prioridade: modelo.prioridade,
    tarefa: !!modelo.tarefa,
    quantidadeSugerida: modelo.tarefa ? 1 : (modelo.quantidade || 1),
    quantidadeComprada: 0,
    unidade: modelo.unidade || "",
    feito: false,
    preco: 0,
    compradoPor: "",
    link: "",
    obs: "",
    dica: modelo.dica || "",
    ofertas: [],
    padrao: true,
    ordem,
  };
}
