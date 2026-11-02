// Guia sugerido de enxoval. Serve de ponto de partida: no app, tudo pode ser
// editado, apagado ou complementado. Quantidades são sugestões gerais e variam
// com o clima e com a frequência de lavagem das roupas.

export const FASES = [
  { id: "planejamento", nome: "Planejamento", icone: "🗺️", semanas: [1, 13], resumo: "Pesquisar, definir orçamento e se organizar. Nada urgente para comprar." },
  { id: "grandes", nome: "Itens grandes", icone: "🛏️", semanas: [14, 27], resumo: "Móveis e itens de passeio, que exigem pesquisa e às vezes têm prazo de entrega." },
  { id: "enxoval", nome: "Enxoval", icone: "👕", semanas: [28, 33], resumo: "Roupas, banho, higiene e roupa de cama. Hora de lavar tudo." },
  { id: "reta-final", nome: "Reta final", icone: "🧳", semanas: [34, 40], resumo: "Mala da maternidade pronta, bebê conforto instalado e farmacinha básica." },
  { id: "depois", nome: "Pode esperar", icone: "⏳", semanas: null, resumo: "Itens que só fazem sentido depois que o bebê nascer. Não precisa comprar agora." },
];

export const CATEGORIAS = [
  "Planejamento", "Quarto", "Roupas", "Banho e higiene", "Passeio",
  "Alimentação", "Saúde", "Mala da maternidade", "Brinquedos",
];

export const ICONES_CATEGORIA = {
  "Planejamento": "📝",
  "Quarto": "🛏️",
  "Roupas": "👕",
  "Banho e higiene": "🛁",
  "Passeio": "🚗",
  "Alimentação": "🍼",
  "Saúde": "🩺",
  "Mala da maternidade": "🧳",
  "Brinquedos": "🧸",
};

// tarefa: true = algo para fazer, não para comprar (sem preço nem quantidade).
export const GUIA = [
  // Planejamento
  { nome: "Definir o orçamento do enxoval", categoria: "Planejamento", fase: "planejamento", prioridade: "essencial", tarefa: true, dica: "Registre o valor em Ajustes. O Resumo mostra quanto já foi gasto." },
  { nome: "Escolher a maternidade e ver o que ela fornece", categoria: "Planejamento", fase: "planejamento", prioridade: "essencial", tarefa: true, dica: "Muitas maternidades têm lista do que levar. Use para ajustar a mala." },
  { nome: "Pesquisar lojas e preços dos itens grandes", categoria: "Planejamento", fase: "planejamento", prioridade: "útil", tarefa: true, dica: "Berço e carrinho podem demorar semanas para entregar." },
  { nome: "Montar a lista do chá de bebê", categoria: "Planejamento", fase: "planejamento", prioridade: "útil", tarefa: true, dica: "Fraldas de vários tamanhos (P, M, G) são ótimos presentes." },

  // Quarto
  { nome: "Berço", categoria: "Quarto", fase: "grandes", prioridade: "essencial", quantidade: 1, dica: "Procure o selo do Inmetro. Para dormir com segurança, deixe o berço sem protetores, travesseiros ou bichos de pelúcia." },
  { nome: "Colchão de berço", categoria: "Quarto", fase: "grandes", prioridade: "essencial", quantidade: 1, dica: "Firme e do tamanho exato do berço, sem folga nas laterais." },
  { nome: "Cômoda com trocador", categoria: "Quarto", fase: "grandes", prioridade: "útil", quantidade: 1, dica: "Facilita as trocas e guarda as roupas no mesmo lugar." },
  { nome: "Poltrona de amamentação", categoria: "Quarto", fase: "grandes", prioridade: "útil", quantidade: 1 },
  { nome: "Mosquiteiro para berço", categoria: "Quarto", fase: "grandes", prioridade: "útil", quantidade: 1 },
  { nome: "Luz noturna ou abajur", categoria: "Quarto", fase: "grandes", prioridade: "útil", quantidade: 1, dica: "Luz fraca ajuda nas mamadas da madrugada sem acordar demais o bebê." },
  { nome: "Babá eletrônica", categoria: "Quarto", fase: "grandes", prioridade: "opcional", quantidade: 1 },
  { nome: "Cortina blackout", categoria: "Quarto", fase: "grandes", prioridade: "opcional", quantidade: 1 },
  { nome: "Lençol com elástico para berço", categoria: "Quarto", fase: "enxoval", prioridade: "essencial", quantidade: 3 },
  { nome: "Protetor de colchão impermeável", categoria: "Quarto", fase: "enxoval", prioridade: "essencial", quantidade: 2 },
  { nome: "Manta leve", categoria: "Quarto", fase: "enxoval", prioridade: "essencial", quantidade: 3 },
  { nome: "Cobertor", categoria: "Quarto", fase: "enxoval", prioridade: "útil", quantidade: 1, dica: "Em clima quente, um só costuma bastar." },

  // Passeio
  { nome: "Bebê conforto (cadeirinha grupo 0+)", categoria: "Passeio", fase: "grandes", prioridade: "essencial", quantidade: 1, dica: "Obrigatório para sair de carro da maternidade. Selo do Inmetro e instalação virada para trás." },
  { nome: "Carrinho de bebê", categoria: "Passeio", fase: "grandes", prioridade: "útil", quantidade: 1, dica: "Se puder, escolha um compatível com o bebê conforto (travel system)." },
  { nome: "Bolsa de maternidade (fraldário)", categoria: "Passeio", fase: "enxoval", prioridade: "essencial", quantidade: 1 },
  { nome: "Trocador portátil", categoria: "Passeio", fase: "enxoval", prioridade: "útil", quantidade: 1 },
  { nome: "Instalar o bebê conforto no carro", categoria: "Passeio", fase: "reta-final", prioridade: "essencial", tarefa: true, dica: "Treine antes do parto. Alguns lugares fazem a conferência da instalação." },
  { nome: "Sling ou canguru", categoria: "Passeio", fase: "depois", prioridade: "opcional", quantidade: 1 },

  // Roupas
  { nome: "Body manga curta RN", categoria: "Roupas", fase: "enxoval", prioridade: "essencial", quantidade: 4, dica: "Compre pouco RN: muitos bebês usam só nas primeiras semanas." },
  { nome: "Body manga curta P", categoria: "Roupas", fase: "enxoval", prioridade: "essencial", quantidade: 6 },
  { nome: "Body manga longa RN", categoria: "Roupas", fase: "enxoval", prioridade: "útil", quantidade: 3 },
  { nome: "Body manga longa P", categoria: "Roupas", fase: "enxoval", prioridade: "essencial", quantidade: 5 },
  { nome: "Mijão (calça com pé) RN", categoria: "Roupas", fase: "enxoval", prioridade: "útil", quantidade: 3 },
  { nome: "Mijão (calça com pé) P", categoria: "Roupas", fase: "enxoval", prioridade: "essencial", quantidade: 5 },
  { nome: "Macacão RN", categoria: "Roupas", fase: "enxoval", prioridade: "útil", quantidade: 3 },
  { nome: "Macacão P", categoria: "Roupas", fase: "enxoval", prioridade: "essencial", quantidade: 4 },
  { nome: "Meias", categoria: "Roupas", fase: "enxoval", prioridade: "essencial", quantidade: 6, unidade: "pares" },
  { nome: "Luvas", categoria: "Roupas", fase: "enxoval", prioridade: "opcional", quantidade: 3, unidade: "pares", dica: "Ajudam a evitar arranhões no rosto nos primeiros dias." },
  { nome: "Touca", categoria: "Roupas", fase: "enxoval", prioridade: "útil", quantidade: 2 },
  { nome: "Casaquinho", categoria: "Roupas", fase: "enxoval", prioridade: "útil", quantidade: 2 },
  { nome: "Saída de maternidade", categoria: "Roupas", fase: "enxoval", prioridade: "opcional", quantidade: 1 },
  { nome: "Lavar as roupas do bebê", categoria: "Roupas", fase: "enxoval", prioridade: "essencial", tarefa: true, dica: "Lave tudo antes do uso com sabão neutro e sem amaciante perfumado." },
  { nome: "Body manga curta M", categoria: "Roupas", fase: "depois", prioridade: "útil", quantidade: 6, dica: "Melhor comprar quando souber o ritmo de crescimento do bebê." },

  // Banho e higiene
  { nome: "Banheira", categoria: "Banho e higiene", fase: "enxoval", prioridade: "essencial", quantidade: 1 },
  { nome: "Toalha com capuz", categoria: "Banho e higiene", fase: "enxoval", prioridade: "essencial", quantidade: 3 },
  { nome: "Fralda de pano (de boca)", categoria: "Banho e higiene", fase: "enxoval", prioridade: "essencial", quantidade: 10, dica: "Usa-se muito: para arrotar, limpar e proteger o ombro." },
  { nome: "Fralda descartável RN", categoria: "Banho e higiene", fase: "enxoval", prioridade: "essencial", quantidade: 2, unidade: "pacotes", dica: "Bebês crescem rápido: poucas RN, mais P e M." },
  { nome: "Fralda descartável P", categoria: "Banho e higiene", fase: "enxoval", prioridade: "essencial", quantidade: 4, unidade: "pacotes" },
  { nome: "Lenço umedecido", categoria: "Banho e higiene", fase: "enxoval", prioridade: "útil", quantidade: 4, unidade: "pacotes", dica: "Nas primeiras semanas, muitos pediatras indicam algodão com água." },
  { nome: "Algodão", categoria: "Banho e higiene", fase: "enxoval", prioridade: "essencial", quantidade: 2, unidade: "pacotes" },
  { nome: "Pomada para assaduras", categoria: "Banho e higiene", fase: "enxoval", prioridade: "essencial", quantidade: 2 },
  { nome: "Sabonete líquido neutro infantil", categoria: "Banho e higiene", fase: "enxoval", prioridade: "essencial", quantidade: 1 },
  { nome: "Escova de cabelo macia", categoria: "Banho e higiene", fase: "enxoval", prioridade: "útil", quantidade: 1 },
  { nome: "Tesourinha de ponta redonda ou lixa infantil", categoria: "Banho e higiene", fase: "enxoval", prioridade: "essencial", quantidade: 1 },
  { nome: "Lixeira com tampa para fraldas", categoria: "Banho e higiene", fase: "enxoval", prioridade: "útil", quantidade: 1 },
  { nome: "Sabão neutro para roupas de bebê", categoria: "Banho e higiene", fase: "enxoval", prioridade: "útil", quantidade: 2 },
  { nome: "Termômetro de banho", categoria: "Banho e higiene", fase: "enxoval", prioridade: "opcional", quantidade: 1 },
  { nome: "Fralda descartável M", categoria: "Banho e higiene", fase: "depois", prioridade: "útil", quantidade: 4, unidade: "pacotes", dica: "Boa sugestão de presente no chá de bebê." },

  // Saúde (confirmar com o pediatra)
  { nome: "Termômetro digital", categoria: "Saúde", fase: "reta-final", prioridade: "essencial", quantidade: 1 },
  { nome: "Aspirador nasal", categoria: "Saúde", fase: "reta-final", prioridade: "útil", quantidade: 1 },
  { nome: "Soro fisiológico", categoria: "Saúde", fase: "reta-final", prioridade: "útil", quantidade: 1, unidade: "caixa" },
  { nome: "Álcool 70% (cuidado com o umbigo)", categoria: "Saúde", fase: "reta-final", prioridade: "essencial", quantidade: 1, dica: "Siga a orientação da maternidade ou do pediatra para o cuidado com o coto umbilical." },
  { nome: "Gaze estéril", categoria: "Saúde", fase: "reta-final", prioridade: "útil", quantidade: 1, unidade: "pacote" },
  { nome: "Conversar com o pediatra sobre a farmacinha", categoria: "Saúde", fase: "reta-final", prioridade: "essencial", tarefa: true, dica: "Não compre remédios por conta própria: confirme cada item com o pediatra." },

  // Alimentação
  { nome: "Almofada de amamentação", categoria: "Alimentação", fase: "enxoval", prioridade: "útil", quantidade: 1 },
  { nome: "Bomba tira-leite", categoria: "Alimentação", fase: "reta-final", prioridade: "opcional", quantidade: 1 },
  { nome: "Mamadeira", categoria: "Alimentação", fase: "depois", prioridade: "opcional", quantidade: 2, dica: "Se a amamentação for exclusiva, pode esperar." },
  { nome: "Esterilizador", categoria: "Alimentação", fase: "depois", prioridade: "opcional", quantidade: 1 },
  { nome: "Babador", categoria: "Alimentação", fase: "depois", prioridade: "útil", quantidade: 4 },
  { nome: "Cadeira de alimentação", categoria: "Alimentação", fase: "depois", prioridade: "útil", quantidade: 1, dica: "Normalmente a partir dos 6 meses, com a introdução alimentar." },
  { nome: "Kit pratinho e colher", categoria: "Alimentação", fase: "depois", prioridade: "útil", quantidade: 1 },

  // Mala da maternidade
  { nome: "Arrumar a mala do bebê", categoria: "Mala da maternidade", fase: "reta-final", prioridade: "essencial", tarefa: true, dica: "Use roupas já compradas: uns 6 bodies, 3 macacões, 3 mijões, meias, luvas, manta, fraldas RN e a saída de maternidade. Confira a lista da maternidade." },
  { nome: "Camisola ou pijama com abertura na frente", categoria: "Mala da maternidade", fase: "reta-final", prioridade: "essencial", quantidade: 2 },
  { nome: "Sutiã de amamentação", categoria: "Mala da maternidade", fase: "reta-final", prioridade: "essencial", quantidade: 2 },
  { nome: "Absorvente pós-parto", categoria: "Mala da maternidade", fase: "reta-final", prioridade: "essencial", quantidade: 2, unidade: "pacotes" },
  { nome: "Calcinha pós-parto", categoria: "Mala da maternidade", fase: "reta-final", prioridade: "essencial", quantidade: 4 },
  { nome: "Protetor de seios", categoria: "Mala da maternidade", fase: "reta-final", prioridade: "útil", quantidade: 1, unidade: "caixa" },
  { nome: "Chinelo", categoria: "Mala da maternidade", fase: "reta-final", prioridade: "útil", quantidade: 1, unidade: "par" },
  { nome: "Separar documentos e cartão do pré-natal", categoria: "Mala da maternidade", fase: "reta-final", prioridade: "essencial", tarefa: true },
  { nome: "Arrumar a mala do acompanhante", categoria: "Mala da maternidade", fase: "reta-final", prioridade: "útil", tarefa: true, dica: "Roupas para 2 ou 3 dias, carregador de celular e lanches." },

  // Brinquedos
  { nome: "Móbile", categoria: "Brinquedos", fase: "depois", prioridade: "opcional", quantidade: 1 },
  { nome: "Tapete de atividades", categoria: "Brinquedos", fase: "depois", prioridade: "opcional", quantidade: 1 },
  { nome: "Mordedor", categoria: "Brinquedos", fase: "depois", prioridade: "opcional", quantidade: 2 },
];
