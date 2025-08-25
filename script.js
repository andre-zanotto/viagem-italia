document.addEventListener('DOMContentLoaded', () => {
    // Dados da Tabela (extraídos do seu CSV)
    const tabelaData = [
        { dia: '27/ago', cidade: 'Roma', pernoite: 'Airbnb Roma', transporte: 'Trem Leonardo Express (~32min) + Metrô (~5min)', logistica: 'Chegada FCO 19h. Validar bilhete do trem.', docs: [{ title: 'Passagens aéreas', url: 'https://drive.google.com/drive/folders/1re3HPoAN2P3VHYfBixblfbOZhKwdR19G?usp=drive_link' }] },
        { dia: '28/ago', cidade: 'Roma (livre)', pernoite: 'Airbnb Roma', transporte: 'A pé / Metrô', logistica: 'Exploração do centro histórico.', docs: [] },
        { dia: '29/ago', cidade: 'Roma (Vaticano)', pernoite: 'Airbnb Roma', transporte: 'A pé / Metrô', logistica: 'Saída 6:15h da Est. Barberini (Linha A) para Est. Ottaviano. Visita à Basílica às 7h e Museu às 8:30h.', docs: [{ title: 'Ticket Vaticano', url: 'https://drive.google.com/file/d/1NAFEO0dnMgH4Jxa_lyXXDmP0vE36LEV9/view?usp=drive_link' }] },
        { dia: '30/ago', cidade: 'Roma (Coliseu)', pernoite: 'Airbnb Roma', transporte: 'A pé / Metrô', logistica: 'Saída 7:45h da Est. Barberini (Linha A), troca em Termini (Linha B) para Est. Colosseo. Visita às 8:30h.', docs: [{ title: 'Ticket Coliseu', url: 'https://drive.google.com/file/d/1fdzneLKZtdVQw1NHsmPqnL_2FStl9NE4/view?usp=drive_link' }] },
        { dia: '31/ago', cidade: 'Roma-Bari-Monopoli', pernoite: 'Monopoli', transporte: 'Trem (8:00, ~4h22min) + Trem Regional (~30-40min)', logistica: 'Deixar malas no Bounce em Bari (fecha 20h), explorar a pé, depois pegar trem para Monopoli.', docs: [{ title: 'Trem Roma-Bari', url: 'https://drive.google.com/file/d/1GoP_vva4XKoTPc7Fgio-DPZTQzJOC6hl/view?usp=drive_link' }, { title: 'Hospedagem Monopoli', url: 'https://drive.google.com/file/d/1ly5_lF89kNnEYiPHuE_0dgqOvP7_pRRd/view?usp=drive_link' }, { title: 'Recibo Hospedagem', url: 'https://drive.google.com/file/d/1cpFOU01nTrF0oW0Ws6lPcR2XJYLMTuI8/view?usp=drive_link' }] },
        { dia: '01/set', cidade: 'Monopoli & Polignano', pernoite: 'Monopoli', transporte: 'Trem Regional (~5-8min)', logistica: 'Dia sem carro. Consultar horários de trem.', docs: [] },
        { dia: '02/set', cidade: 'Alberobello, Locorotondo & Ostuni', pernoite: 'Monopoli', transporte: 'Carro Alugado', logistica: 'Retirada do carro às 9h em Monopoli. Jantar em Ostuni.', docs: [{ title: 'Aluguel Hertz', url: 'https://drive.google.com/file/d/1Y3N-aXsv8inR0hREm7EiBZinF2LhQIbN/view?usp=drive_link' }, { title: 'Resumo Seguro AIG', url: 'https://drive.google.com/file/d/1kWPb_QsaEw4XVLHNEdFRp6kv9z56i3W6/view?usp=drive_link' }] },
        { dia: '03/set', cidade: 'Lecce, G. della Poesia & Otranto', pernoite: 'Monopoli', transporte: 'Carro Alugado', logistica: 'Dia longo de estrada para o Salento. Pôr do sol em Otranto às 19:20h.', docs: [] },
        { dia: '04/set', cidade: 'Monopoli → Matera', pernoite: 'Matera', transporte: 'Carro (~1h30min)', logistica: 'Dia de exploração em Matera. Acomodação na ZTL, estacionar antes.', docs: [{ title: 'Hospedagem Matera', url: 'https://drive.google.com/file/d/1IiZNTWcCJ982cKJbGb8Q2B1svhjB0xyo/view?usp=drive_link' }, { title: 'Recibo Hospedagem', url: 'https://drive.google.com/file/d/14o3rK1rbWIk71XDi9oWe3jgejkaosb45/view?usp=drive_link' }] },
        { dia: '05/set', cidade: 'Matera, Pompeia & Amalfi', pernoite: 'Amalfi', transporte: 'Carro (Saída 8:30, ~3h) + Carro (~40min) + Balsa (18:10, 35min)', logistica: 'Visitar Pompeia por 4h (saída máx. 16:30). Devolver carro na Hertz em Salerno às 17:30h. Caminhar até o Molo Concordia para a balsa.', docs: [{ title: 'Ticket Pompeia', url: 'https://drive.google.com/file/d/1MAPMnaVy1f1uUKa3VCFcjgSbZzWcnC8z/view?usp=drive_link' }, { title: 'Balsa Salerno-Amalfi', url: 'https://drive.google.com/file/d/1YfPUDUlPFfc9hrxQdvotF0APr0rRWSDt/view?usp=drive_link' }, { title: 'Hospedagem Amalfi', url: 'https://drive.google.com/file/d/1sg9vTV6PW3-zqHNbH8t_Y1Hc-8OrIX_f/view?usp=drive_link' }, { title: 'Recibo Hospedagem', url: 'https://drive.google.com/file/d/10ENPjyINgvMxRFvgVh4chgXIzeBY2B0_/view?usp=drive_link' }] },
        { dia: '06/set', cidade: 'Positano', pernoite: 'Amalfi', transporte: 'Balsa (~25min)', logistica: 'Passeio para Positano.', docs: [] },
        { dia: '07/set', cidade: 'Amalfi & Ravello', pernoite: 'Amalfi', transporte: 'Ônibus (~30min)', logistica: 'Passeio para Ravello.', docs: [] },
        { dia: '08/set', cidade: 'Amalfi (Dia Livre)', pernoite: 'Amalfi', transporte: 'Scooter (Opcional)', logistica: 'Dia livre.', docs: [] },
        { dia: '09/set', cidade: 'Amalfi → Capri', pernoite: 'Capri', transporte: 'Balsa (8:54, ~50-60min)', logistica: 'Deixar malas no Bounce em Marina Grande.', docs: [{ title: 'Balsa Amalfi-Capri', url: 'https://drive.google.com/file/d/1Ouil8ujta3NPo1Q4n-BJsXDim3f3AnoI/view?usp=drive_link' }, { title: 'Bounce Confirmação', url: 'https://drive.google.com/file/d/1NkHDIVSbWeFI_Au-pzYl4WSaX-INxp5K/view?usp=drive_link' }, { title: 'Hospedagem Capri', url: 'https://drive.google.com/file/d/1OOA80tXifzjziSFt8vte8Y6Bawe6LJe9/view?usp=drive_link' }] },
        { dia: '10/set', cidade: 'Capri → Roma', pernoite: 'Em trânsito', transporte: 'Balsa (13:45) + Metrô + Trem (16:25, ~1h30min)', logistica: 'Conexão em Nápoles. Chegada em Roma 17:55. Deixar malas no KiPoint (Termini). Jantar na Via del Corso (Metrô: Spagna). Pegar penúltimo L. Express (22:53) para o aeroporto.', docs: [{ title: 'Balsa Capri-Napoles', url: 'https://drive.google.com/file/d/1KmqMyhJlVWKKBLvkxhG8LM1H3UPTRv3C/view?usp=drive_link' }, { title: 'Trem Napoles-Roma', url: 'https://drive.google.com/file/d/1jkdkaHWqZszfB1S0gR5S8FHKsYljmfZY/view?usp=drive_link' }] },
        { dia: '11/set', cidade: 'Roma (Aeroporto)', pernoite: '-', transporte: 'Voo (5:55)', logistica: 'Partida do Aeroporto FCO.', docs: [{ title: 'Passagens aereas', url: 'https://drive.google.com/drive/folders/1re3HPoAN2P3VHYfBixblfbOZhKwdR19G?usp=drive_link' }] }
    ];

    // Dados da Lista (extraídos do seu Word)
    const listaData = [
        {
            title: 'Capítulo 1: CHEGADA E TRANSPORTE EM ROMA (27/08 a 30/08)',
            content: `
                <h4>1.1 Do Aeroporto FCO para o Airbnb (Via di Capo le Case, 54)</h4>
                <p><strong>Opção Recomendada: Trem + Metrô (A mais rápida e eficiente)</strong></p>
                <p>✈️ <strong>No Aeroporto (FCO):</strong> Siga as placas "Treni / Trains" até a estação de trem do aeroporto.</p>
                <p>🚆 <strong>Trem Leonardo Express:</strong></p>
                <ul>
                    <li><strong>Compra do Bilhete:</strong> A forma mais fácil é usar as máquinas de autoatendimento vermelhas da Trenitalia na estação. Selecione o destino "Roma Termini" e pague com cartão. Como segunda opção, pode comprar online no site da Trenitalia para evitar a validação.</li>
                    <li><strong>VALIDAÇÃO (MUITO IMPORTANTE):</strong> Se comprar o bilhete de papel na máquina, é obrigatório validá-lo antes de entrar na plataforma. Procure as pequenas máquinas verdes de validação (convalidatrice) e insira o bilhete até ouvir o som da impressão. Um bilhete sem esta validação pode gerar uma multa pesada.</li>
                    <li><strong>Destino:</strong> Estação Roma Termini.</li>
                    <li><strong>Tempo de Viagem:</strong> ~32 minutos.</li>
                    <li><strong>Custo Estimado:</strong> €14 por pessoa.</li>
                </ul>
                <p>🚇 <strong>Conexão e Metrô na Estação Termini:</strong></p>
                <ul>
                    <li><strong>Como Chegar:</strong> Ao desembarcar em Termini, procure pelas grandes placas vermelhas com um "M" branco, que indicam "Metro". Siga essas placas, descendo pelas escadas rolantes até a área do metrô.</li>
                    <li><strong>Compra do Bilhete de Metrô:</strong> Antes das catracas, encontrará várias máquinas onde pode comprar os bilhetes BIT (€1,50).</li>
                    <li><strong>Linha:</strong> Siga as placas para a Linha A (Laranja) na direção Battistini.</li>
                    <li><strong>Estação de Saída:</strong> Barberini (3 paradas).</li>
                    <li><strong>Tempo de Viagem:</strong> ~5 minutos.</li>
                </ul>
                <p>🚶 <strong>Caminhada Final:</strong> Da estação Barberini, são ~5 minutos a pé até o Airbnb.</p>
                <h4>1.2 Como se locomover em Roma</h4>
                <p><strong>Opções Recomendadas: Bilhetes Únicos (BIT) ou Tap & Go + Caminhadas</strong></p>
                <p>Como vocês vão priorizar caminhadas, a melhor estratégia é pagar por viagem.</p>
                <p><strong>Opção A: Bilhetes Únicos - BIT (Ideal para usar um só cartão):</strong></p>
                <ul>
                    <li><strong>Como Funciona:</strong> Comprem bilhetes de papel (€1,50 cada) nas máquinas das estações de metrô ou em tabacarias. Assim, podem comprar vários de uma vez com um único cartão de débito.</li>
                    <li><strong>Validade:</strong> Cada bilhete vale por 100 minutos para ônibus e uma única viagem de metrô. Lembrem-se de validar o bilhete na primeira utilização.</li>
                </ul>
                <p><strong>Opção B: Tap & Go (Mais Prático):</strong></p>
                <ul>
                    <li><strong>Como Funciona:</strong> Usem um cartão de débito/crédito por aproximação (contactless) diretamente na catraca.</li>
                    <li><strong>Atenção:</strong> Cada pessoa precisa do seu próprio cartão para entrar.</li>
                </ul>
                <h4>1.3 Logística para as Visitas Principais (Metrô)</h4>
                <p><strong>Dia 29/08 - Vaticano:</strong></p>
                <ul>
                    <li><strong>Saída:</strong> 6:15h da estação Barberini.</li>
                    <li><strong>Trajeto:</strong> Pegar a Linha A (Laranja) em direção a Battistini.</li>
                    <li><strong>Chegada:</strong> Descer na estação Ottaviano - S. Pietro - Musei Vaticani.</li>
                    <li><strong>Plano:</strong> Visitar a Basílica de São Pedro na abertura (7h) e depois o Museu do Vaticano a partir das 8:30h.</li>
                </ul>
                <p><strong>Dia 30/08 - Coliseu:</strong></p>
                <ul>
                    <li><strong>Saída:</strong> 7:45h da estação Barberini.</li>
                    <li><strong>Trajeto:</strong> Pegar a Linha A (Laranja) por 1 parada até a estação Termini. Em Termini, fazer a troca para a Linha B (Azul) em direção a Laurentina.</li>
                    <li><strong>Chegada:</strong> Descer na estação Colosseo (2 paradas de Termini).</li>
                    <li><strong>Plano:</strong> Ingresso para as 8:30h.</li>
                </ul>
            `
        },
        {
            title: 'Capítulo 2: DE ROMA À PUGLIA (31/08)',
            content: `
                <h4>De Roma para Bari e Monopoli</h4>
                <p>🚆 <strong>Trem de Alta Velocidade:</strong></p>
                <ul>
                    <li><strong>Horário Confirmado:</strong> Saída às 8:00 de Roma Termini, chegada às 12:22 em Bari Centrale.</li>
                    <li><strong>Companhias:</strong> Trenitalia (trens Frecciarossa/Frecciargento) ou Italo.</li>
                    <li><strong>Tempo de Viagem:</strong> ~4 horas e 22 minutos.</li>
                </ul>
                <p>🛅 <strong>Logística em Bari:</strong></p>
                <p>Ao chegar em Bari Centrale, deixem as malas no Bounce Luggage Storage (Piazza Aldo Moro, 24), muito próximo da estação. <strong>Atenção:</strong> Fecha às 20h.</p>
                <p>Explorem Bari Vecchia (cidade velha) a pé por 3-4 horas.</p>
                <p>Retornem para buscar as malas antes do horário de fechamento.</p>
                <p>🚆 <strong>Trem Regional para Monopoli:</strong></p>
                <ul>
                    <li><strong>Trajeto:</strong> Na estação Bari Centrale, peguem um trem regional para Monopoli. Os trens são frequentes (geralmente a cada 30-60 minutos) e o último parte por volta das 22:30.</li>
                    <li><strong>Tempo de Viagem:</strong> ~30-40 minutos.</li>
                </ul>
                <p><strong>Logística Final:</strong> Da estação de Monopoli, a caminhada até a sua acomodação (Via Giovanni Pepe, 7) leva cerca de 10-15 minutos.</p>
            `
        },
        {
            title: "Capítulo 3: GUIA DA VIAGEM PELA PUGLIA",
            content: `
                <h4>3.1 Dia 1 na Puglia (01/09): Polignano a Mare de Trem</h4>
                <p><strong>Logística:</strong> Como o carro ainda não foi alugado, o dia é dedicado à exploração via trem regional, que é rápido e eficiente para este trajeto.</p>
                <p><strong>Manhã:</strong> Caminhem da sua acomodação até a estação de Monopoli (~10-15 min).</p>
                <p><strong>Trajeto:</strong> Peguem o trem regional para Polignano a Mare. A viagem é muito curta, cerca de 5-8 minutos.</p>
                <p><strong>Exploração:</strong> Passem o dia a explorar Polignano a Mare a pé.</p>
                <p><strong>Retorno:</strong> Voltem de trem para Monopoli no final do dia.</p>
                <p><strong>Horários de Trem (Referência):</strong></p>
                <p>Monopoli ↔ Polignano: O primeiro trem parte por volta das 5:00. O último retorna de Polignano por volta das 23:00. Há trens com muita frequência durante todo o dia.</p>
                
                <h4>3.2 Início da Road Trip (02/09): Aluguel do Carro, Vale d'Itria e Ostuni</h4>
                <p>🚗 <strong>Retirada do Carro:</strong></p>
                <ul>
                    <li><strong>Manhã (9:00):</strong> Caminhem até a agência da Hertz em Monopoli para retirar o carro.</li>
                    <li><strong>Endereço:</strong> Via S. Anna, 37, Monopoli.</li>
                    <li><strong>Horário de Funcionamento (Estimado):</strong> Geralmente das 9:00 às 13:00 e das 16:00 às 19:00. É crucial confirmar o horário exato ao fazer a reserva.</li>
                </ul>
                <p><strong>Destinos do Dia:</strong></p>
                <ul>
                    <li><strong>Alberobello:</strong> Explorem a famosa cidade dos Trulli.</li>
                    <li><strong>Locorotondo:</strong> Visitem a cidade branca circular (ideal para o almoço).</li>
                    <li><strong>Ostuni:</strong> Sigam para a "Cidade Branca" no final da tarde para passear e jantar ao pôr do sol.</li>
                </ul>
                <p><strong>Retorno:</strong> Voltem para a base em Monopoli no final da noite.</p>
                
                <h4>3.3 Dia 2 da Road Trip (03/09): Rumo ao Salento</h4>
                <p><strong>Destinos do Dia:</strong></p>
                <ul>
                    <li><strong>Manhã:</strong> Saída cedo de Monopoli em direção a Lecce. Explorem a "Florença do Sul" e almocem por lá.</li>
                    <li><strong>Tarde:</strong> Sigam para a costa até a Grotta della Poesia e Torre Dell'Orso para aproveitar o mar e as paisagens.</li>
                    <li><strong>Fim de Tarde/Noite:</strong> Saída da Torre Dell'Orso às 18:00h para chegar na orla de Otranto por volta das 19:05h, a tempo de ver o pôr do sol às 19:20h. Conheçam a cidade e jantem por lá.</li>
                </ul>
                <p><strong>Retorno:</strong> Voltem para a base em Monopoli no final da noite (este será um dia longo de estrada).</p>
            `
        },
        {
            title: "Capítulo 4: DE MONOPOLI PARA MATERA (04/09)",
            content: `
                <h4>Início da exploração da Basilicata</h4>
                <p>🚗 <strong>O Trajeto:</strong></p>
                <ul>
                    <li><strong>Rota:</strong> A viagem de Monopoli para Matera é um trajeto cênico pelo interior. As estradas são estaduais (SS - Strade Statali), gratuitas e bem conservadas.</li>
                    <li><strong>Tempo de Viagem:</strong> ~1 hora e 30 minutos, sem paradas.</li>
                    <li><strong>Velocidade Máxima:</strong> Predominantemente 90 km/h fora das áreas urbanas.</li>
                </ul>
                <p>🅿️ <strong>Chegada e Estacionamento em Matera:</strong></p>
                <p><strong>ALERTA DE ZTL:</strong> O centro histórico de Matera, conhecido como Sassi, é uma grande ZTL. O acesso de carro é estritamente proibido.</p>
                <p><strong>Sua Acomodação:</strong> Vico Bruno Buozzi 5, Matera está localizada <strong>dentro da ZTL</strong>.</p>
                <p><strong>Estacionamento Recomendado:</strong></p>
                <ul>
                    <li><strong>Opção 1 (Mais Próxima):</strong> Parcheggio Nicoletti (GPS: Via Bruno Buozzi, 14). Fica na mesma rua, mas na parte de cima, fora da ZTL. A caminhada (descendo) até a sua acomodação será a mais curta possível.</li>
                    <li><strong>Opção 2 (Alternativa Segura):</strong> Parcheggio Via Vena (GPS: Via Pasquale Vena, 12). É um estacionamento coberto maior. A caminhada será de cerca de 10-15 minutos.</li>
                </ul>
                <p><strong>Ação:</strong> Confirme com o seu anfitrião qual estacionamento ele recomenda.</p>
            `
        },
        {
            title: "Capítulo 5: DE MATERA PARA POMPEIA E AMALFI (05/09)",
            content: `
                <h4>O grande dia de travessia e história</h4>
                <p>🚗 <strong>Trajeto Matera → Pompeia:</strong></p>
                <ul>
                    <li><strong>Rota:</strong> A rota mais rápida envolve a autoestrada A3/E45.</li>
                    <li><strong>Tempo de Viagem:</strong> ~3 horas. Saída de Matera às 8:30h, chegando em Pompeia por volta das 11:30h.</li>
                    <li><strong>Velocidade Máxima:</strong> 130 km/h na autoestrada.</li>
                    <li><strong>Pedágios:</strong> Sim, este trecho tem pedágio.</li>
                </ul>
                <p>🅿️ <strong>Estacionamento em Pompeia:</strong></p>
                <ul>
                    <li><strong>Estacionamento Recomendado:</strong> Parcheggio Zeus (GPS: Via Villa dei Misteri, 3, Pompei). É um estacionamento pago e vigiado, localizado ao lado da entrada principal (Porta Marina). É a opção mais prática para deixar o carro com as malas.</li>
                </ul>
                <p><strong>Logística:</strong> Explorem Pompeia por 4 horas, com saída máxima às 16:30h.</p>
                <p>🚗 <strong>Trajeto Final Pompeia → Salerno:</strong></p>
                <ul>
                    <li><strong>Tempo de Viagem:</strong> ~40 minutos.</li>
                </ul>
                <p>🔄 <strong>Logística de Troca em Salerno (Carro para Balsa):</strong></p>
                <ul>
                    <li><strong>Devolução do Carro:</strong> Dirijam-se à agência da Hertz em Salerno, chegando perto das 17:30h.</li>
                    <li><strong>Endereço:</strong> Piazza Vittorio Veneto, 33, Salerno.</li>
                    <li><strong>Caminhada até o Porto:</strong> Após devolver o carro, peguem as malas e caminhem até o porto de onde partem as balsas, o Molo Concordia. A distância é de ~5 minutos a pé, em terreno plano. Não é necessário táxi.</li>
                    <li><strong>Embarque para Amalfi:</strong> No porto, procurem o quiosque da Travelmar para pegar a balsa das 18:10h. A viagem para Amalfi dura 35 minutos.</li>
                </ul>
            `
        },
        {
            title: "Capítulo 6: LOGÍSTICA NA COSTA AMALFITANA (05/09 a 08/09)",
            content: `
                <h4>Explorando a partir da base em Amalfi</h4>
                <p>🚶 <strong>Chegada em Amalfi (05/09):</strong></p>
                <ul>
                    <li><strong>Endereço:</strong> 7 Via dei Pastai, 84011 Amalfi, Italy.</li>
                    <li><strong>Logística:</strong> Ao desembarcar da balsa no porto de Amalfi, vocês estarão na praça principal. A Via dei Pastai é uma das ruelas que saem da praça. A caminhada até a acomodação é muito curta, cerca de 2 a 3 minutos a pé.</li>
                </ul>
                <p>📍 <strong>Onde Comprar Bilhetes em Amalfi:</strong></p>
                <ul>
                    <li><strong>Para as Balsas (Ferry):</strong> Diretamente nos quiosques (biglietteria) localizados no porto/píer (Molo Pennello), de onde os barcos partem. Cada companhia (ex: Travelmar) tem o seu próprio quiosque.</li>
                    <li><strong>Para os Ônibus (SITA Sud):</strong> Os bilhetes não são vendidos no ônibus. Comprem antes de embarcar em Tabacarias (Tabaccheria) ou bancas de jornal (Edicola) na praça principal. O terminal de ônibus também fica na praça.</li>
                </ul>
                <p>🚢 <strong>Para Positano (06/09):</strong></p>
                <ul>
                    <li><strong>Opção Recomendada (Balsa):</strong> É a forma mais rápida e cênica. A Travelmar opera a rota com alta frequência.</li>
                    <li><strong>Ponto de Partida:</strong> Porto de Amalfi.</li>
                    <li><strong>Tempo de Viagem:</strong> ~25 minutos.</li>
                </ul>
                <p>🚌 <strong>Para Ravello (07/09):</strong></p>
                <ul>
                    <li><strong>Opção Única (Ônibus SITA):</strong> Ravello fica nas colinas e não tem acesso por mar.</li>
                    <li><strong>Ponto de Partida:</strong> Terminal de ônibus de Amalfi (na praça principal).</li>
                    <li><strong>Tempo de Viagem:</strong> ~30 minutos.</li>
                    <li><strong>Dica:</strong> Sentem-se do lado direito do ônibus na subida para ter as melhores vistas.</li>
                </ul>
                <p>🛵 <strong>Exploração Opcional: Aluguel de Scooter (08/09):</strong></p>
                <ul>
                    <li><strong>Melhor Trajeto Curto:</strong> Amalfi → Atrani → Fiordo di Furore. É um percurso curto e deslumbrante, perfeito para um passeio de 2-3 horas.</li>
                    <li><strong>Logística do Aluguel:</strong>
                        <ul>
                            <li><strong>Onde Alugar:</strong> Existem várias locadoras em Amalfi, a maioria na rua principal que sai do porto.</li>
                            <li><strong>Requisitos:</strong> CNH válida, passaporte, cartão de crédito para a caução (cauzione) e PID (Permissão Internacional para Dirigir).</li>
                            <li><strong>Riscos e Segurança:</strong> As estradas são estreitas e com curvas. Não é recomendado para condutores inexperientes. O uso de capacete é obrigatório.</li>
                            <li><strong>Estacionamento:</strong> Em Atrani, há vagas designadas para motos (parcheggio moto). No Fiordo di Furore, a prática é estacionar cuidadosamente no acostamento.</li>
                        </ul>
                    </li>
                </ul>
            `
        },
        {
            title: "Capítulo 7: CHEGADA E LOGÍSTICA NA ILHA DE CAPRI (09/09 E 10/09)",
            content: `
                <h4>Explorando a ilha com pernoite</h4>
                <p>🚢 <strong>Trajeto Amalfi → Capri (09/09):</strong></p>
                <ul>
                    <li><strong>Horário Confirmado:</strong> Balsa da NLG saindo do porto de Amalfi às 8:54.</li>
                    <li><strong>Tempo de Viagem:</strong> ~50 a 60 minutos.</li>
                    <li><strong>Logística da Bagagem:</strong> A balsa permite levar malas.</li>
                </ul>
                <p>🛄 <strong>Chegada em Marina Grande (Porto de Capri) e as Malas:</strong></p>
                <ul>
                    <li><strong>Guarda-Volumes:</strong> Ao desembarcar, dirijam-se ao "Bounce luggage storage" para deixar as malas.</li>
                    <li><strong>Endereço:</strong> Via Cristoforo Colombo, 64.</li>
                    <li><strong>Logística:</strong> Deixem as malas e subam para a cidade apenas com mochilas.</li>
                </ul>
                <p>🚠 <strong>Subindo para a Cidade (O Funicular):</strong></p>
                <ul>
                    <li><strong>Como Funciona:</strong> O funicular conecta o porto (Marina Grande) com a cidade de Capri (Piazzetta) em 4 minutos.</li>
                    <li><strong>Compra do Bilhete:</strong> Comprem na bilheteira (biglietteria) principal no porto, à direita do píer.</li>
                    <li><strong>Custo Estimado:</strong> ~€2,40 por pessoa.</li>
                </ul>
                <p>🚶 <strong>Logística Final até a Acomodação:</strong></p>
                <ul>
                    <li><strong>Endereço:</strong> Via l'Abate, 24, Capri.</li>
                    <li><strong>Como Chegar:</strong> Ao sair do funicular na Piazzetta, a caminhada até a Via l'Abate é muito curta, cerca de 2 a 3 minutos a pé.</li>
                </ul>
                <p>🚌 <strong>Locomoção em Capri e Anacapri:</strong></p>
                <ul>
                    <li><strong>A Pé:</strong> O centro de Capri é feito para ser explorado a pé.</li>
                    <li><strong>Ônibus:</strong> Pequenos ônibus conectam Capri a Anacapri. São a forma mais barata e eficiente de se locomover entre as duas cidades.</li>
                </ul>
            `
        },
        {
            title: "Capítulo 8: SAÍDA DE CAPRI PARA ROMA (10/09)",
            content: `
                <h4>Logística para o final da viagem</h4>
                <p><strong>Horários Definidos (via Nápoles):</strong></p>
                <ul>
                    <li><strong>Balsa:</strong> Saída de Capri com a NLG às 13:45, com destino ao porto Molo Beverello em Nápoles.</li>
                    <li><strong>Trem:</strong> Saída de Napoli Centrale às 16:25, com chegada em Roma Termini às 17:55.</li>
                </ul>
                <p><strong>Passo a Passo da Conexão em Nápoles:</strong></p>
                <ul>
                    <li><strong>Balsa:</strong> Peguem a balsa de alta velocidade no porto de Capri (Marina Grande).</li>
                    <li><strong>Transfer:</strong> Ao chegar no porto Molo Beverello em Nápoles, caminhem 5 minutos até a estação de metrô Municipio. Peguem a Linha 1 até a estação Garibaldi.</li>
                    <li><strong>Trem:</strong> A estação de metrô Garibaldi é integrada com a estação de trem Napoli Centrale, de onde parte o trem de alta velocidade para Roma.</li>
                </ul>
            `
        },
        {
            title: "Capítulo 9: ÚLTIMA NOITE E PARTIDA DE ROMA (10/09 E 11/09)",
            content: `
                <h4>Aproveitando as últimas horas e a espera no aeroporto</h4>
                <p><strong>Chegada em Roma Termini:</strong> Ao chegar às 17:55, a primeira parada é o guarda-volumes.</p>
                <p><strong>Guarda-Volumes (Deposito Bagagli):</strong></p>
                <ul>
                    <li><strong>Onde:</strong> Dentro da estação, procurem pelo serviço da KiPoint (geralmente perto da plataforma 24).</li>
                    <li><strong>Logística:</strong> Entreguem as malas. O custo é de cerca de €6 pelas primeiras 5 horas.</li>
                </ul>
                <p><strong>Metrô para o Centro:</strong> Peguem a Linha A (direção Battistini) e desçam na estação Spagna. Esta estação deixa vocês diretamente no topo da Escadaria Espanhola, a uma curta caminhada da Via del Corso e de ótimos restaurantes.</p>
                <p><strong>Retorno para Termini:</strong> Voltem de metrô da estação Spagna antes do horário de encerramento (geralmente 23:30). Peguem as malas no guarda-volumes por volta das 22:30.</p>
                <p><strong>Ida para o Aeroporto (FCO):</strong></p>
                <ul>
                    <li><strong>Opção Recomendada:</strong> O último comboio Leonardo Express parte de Termini por volta das 23:23.</li>
                    <li><strong>Margem de Segurança:</strong> O penúltimo trem parte por volta das 22:53. Planejem pegar este para evitar qualquer correria.</li>
                    <li><strong>Logística:</strong> Chegarão ao aeroporto perto da meia-noite.</li>
                </ul>
                <p><strong>Espera e Sala VIP no Aeroporto:</strong></p>
                <ul>
                    <li><strong>Atenção:</strong> Vocês terão que aguardar na área pública do Terminal 1 até a abertura do check-in do voo, por volta das 3:00 da manhã.</li>
                    <li><strong>Acesso à Sala VIP:</strong> A sala Plaza Premium Lounge fica DENTRO da área de embarque. Vocês só poderão aceder a ela após fazerem o check-in e passarem pelo controlo de segurança.</li>
                    <li><strong>Como Usar:</strong> Apresentem o QR Code gerado na aplicação Visa Airport Companion (para o XP) ou na aplicação do C6 Bank (para o C6).</li>
                </ul>
            `
        },
        {
            title: "Capítulo 10: Anexo - Guia para a Road Trip",
            content: `
                <h4>10.1 Informações Essenciais para Dirigir</h4>
                <p><strong>ZTL (Zona a Traffico Limitato):</strong> A regra mais importante. NUNCA ENTRE NUMA ZTL! São áreas restritas nos centros históricos. A sua acomodação em Monopoli está numa ZTL, pelo que é obrigatório contactar o anfitrião para registar a placa do carro para os dias em que estarão motorizados (chegada e partida da road trip).</p>
                <p><strong>Permissão Internacional para Dirigir (PID):</strong> É obrigatória por lei, juntamente com a sua CNH válida.</p>
                <p><strong>Limites de Velocidade:</strong> Autoestradas (130 km/h), Estradas secundárias (90 km/h), Áreas urbanas (50 km/h).</p>
                <p><strong>Pedágios (Pedaggi):</strong> Apenas no trecho Matera → Salerno pela autoestrada.</p>
                <p><strong>Pagamento de Estacionamento:</strong> Tenham sempre moedas para os parquímetros. O app EasyPark é uma ótima alternativa.</p>
                <h4>10.2 Tabela de Custos e Logística de Estacionamento</h4>
                <div class="table-container-lista">
                    <table>
                        <thead>
                            <tr>
                                <th>Local</th>
                                <th>Duração da Visita</th>
                                <th>Custo Estimado</th>
                                <th>Parcheggio Recomendado (Pago)</th>
                                <th>Alternativas na Rua (Fora da ZTL)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Monopoli (Base)</td>
                                <td>2 noites (com carro)</td>
                                <td>€20 - €30</td>
                                <td>Sa.Ma. Parking Private Monopoli: Via Cala Fontanella, 14 D.</td>
                                <td>Gratuito: Via Nazario Sauro (pode ser concorrido). <br> Público: Via Cala Fontanella (verificar sinalização, branca=grátis, azul=pago).</td>
                            </tr>
                            <tr>
                                <td>Alberobello</td>
                                <td>~3-4 horas</td>
                                <td>€6</td>
                                <td>Privado: Alberobello Parking Downtown - Via Monte S. Gabriele, 105; Parking Nel Verde - Via Cadore, 12; Alberobello Parcheggio Viale Indipendenza - Via Indipendenza.</td>
                                <td>Público: Via 7 Liberatori Della Selva; Via Barsento.</td>
                            </tr>
                            <tr>
                                <td>Locorotondo</td>
                                <td>~2-3 horas</td>
                                <td>€2 - €4</td>
                                <td>Público: Parcheggio Piazza Aldo Moro - Piazza Aldo Moro, 31; Parcheggio Largo Piazza Guglielmo Marconi - SP162, 1; Parcheggio Piazza Don. Francesco Convertini - Piazza Don. Francesco Convertini, 15.</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Ostuni</td>
                                <td>~3-4 horas</td>
                                <td>€3 - €5</td>
                                <td>Privado: Ostuni Central Parking - PHGQ+343 (com translado); Parcheggio Roma Ostuni - Contrada Sant'Eligio; Ostuni parking - Via Giosuè Pinto, 27.</td>
                                <td>Público: Via Giosuè Pinto; Via Antonio Specchia.</td>
                            </tr>
                            <tr>
                                <td>Lecce</td>
                                <td>~3-4 horas</td>
                                <td>€4 - €6</td>
                                <td>Privado: Parkejoo - Viale Michele de Pietro, 1; Oberdan Parking - Via G. Oberdan, 43.</td>
                                <td>Público: Parcheggio di Via V. Genuino - Via Vespasiano Genuino, 12; Viale dell'Università; Via di Ussano.</td>
                            </tr>
                            <tr>
                                <td>Grotta della Poesia / Torre Dell'Orso</td>
                                <td>~2-3 horas</td>
                                <td>€5 - €10</td>
                                <td>Privado: Parcheggio Mare Torre dell’Orso - Via Lenin, 68; Parking Company of Lombardo & C. - Via Risorgimento; Parcheggio Cretì.</td>
                                <td>Não há vagas na rua. É necessário usar os estacionamentos pagos.</td>
                            </tr>
                             <tr>
                                <td>Otranto</td>
                                <td>~2-3 horas</td>
                                <td>€4 - €6</td>
                                <td>Privado: Parcheggio Santa Barbara Centro (principal opção); Parcheggio Otranto low cost via Renis - Via Renis, 8; Saint Anthony Parking Lot - Via Papa Giovanni Paolo II, 21; Parcheggio Le Palme - Via Presbitero Pantaleone, 18.</td>
                                <td>Público: Via Antonio Primaldo; Via Catona.</td>
                            </tr>
                            <tr>
                                <td>Matera</td>
                                <td>1 noite</td>
                                <td>€10 - €15</td>
                                <td>Endereço: Via Pasquale Vena, 12. <br> Dica: Grande, seguro e a uma curta caminhada dos Sassi.</td>
                                <td>Linhas Azuis: Nas ruas acima da zona dos Sassi, como a Via Lucana.</td>
                            </tr>
                            <tr>
                                <td>Pompeia</td>
                                <td>~3-4 horas</td>
                                <td>€10 - €12</td>
                                <td>Endereço: Via Villa dei Misteri, 3. <br> Dica: O Parcheggio Zeus é o mais próximo da entrada principal.</td>
                                <td>Não recomendado procurar na rua. O estacionamento dedicado é a opção mais segura e prática.</td>
                            </tr>
                            <tr>
                                <td><strong>Custo Total Estimado</strong></td>
                                <td><strong>Toda a Road Trip</strong></td>
                                <td><strong>€64 - €92</strong></td>
                                <td><strong>Orçamento Recomendado: Planear €100 para o estacionamento dará uma margem de segurança.</strong></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `
        },
        {
            title: "Capítulo 11: Endereços Relevantes",
            content: `
                <p>🏠 <strong>Hospedagens:</strong></p>
                <ul>
                    <li><strong>Roma:</strong> Airbnb em Roma com Fer e Vitória - Via di Capo le Case, 54, Roma</li>
                    <li><strong>Monopoli:</strong> Via Giovanni Pepe, 7, Monopoli</li>
                    <li><strong>Amalfi:</strong> Via dei Pastai, 7, Amalfi</li>
                    <li><strong>Capri:</strong> Via l'Abate, 24, Capri</li>
                    <li><strong>Matera:</strong> Vico Bruno Buozzi 5, Matera</li>
                </ul>
                <p>🚗 <strong>Locadoras de Carro:</strong></p>
                <ul>
                    <li><strong>Monopoli (Retirada):</strong> Hertz - Via S. Anna, 37, Monopoli</li>
                    <li><strong>Salerno (Devolução):</strong> Hertz - Piazza Vittorio Veneto, 33, Salerno</li>
                </ul>
                <p>🅿️ <strong>Estacionamentos Principais:</strong></p>
                <ul>
                    <li><strong>Monopoli:</strong> Sa.Ma. Parking Private Monopoli - Via Cala Fontanella, 14 D, Monopoli</li>
                    <li><strong>Alberobello:</strong> Alberobello Parking Downtown - Via Monte S. Gabriele, 105; Parking Nel Verde - Via Cadore, 12; Alberobello Parcheggio Viale Indipendenza - Via Indipendenza.</li>
                    <li><strong>Locorotondo:</strong> Parcheggio Piazza Aldo Moro - Piazza Aldo Moro, 31; Parcheggio Largo Piazza Guglielmo Marconi - SP162, 1; Parcheggio Piazza Don. Francesco Convertini - Piazza Don. Francesco Convertini, 15.</li>
                    <li><strong>Ostuni:</strong> Ostuni Central Parking - PHGQ+343, Ostuni; Parcheggio Roma Ostuni - Contrada Sant'Eligio, Ostuni; Ostuni parking - Via Giosuè Pinto, 27, Ostuni.</li>
                    <li><strong>Lecce:</strong> Parkejoo - Viale Michele de Pietro, 1; Oberdan Parking - Via G. Oberdan, 43; Parcheggio di Via V. Genuino - Via Vespasiano Genuino, 12.</li>
                    <li><strong>Grotta della Poesia / Torre Dell'Orso:</strong> Parcheggio Mare Torre dell’Orso - Via Lenin, 68; Parking Company of Lombardo & C. - Via Risorgimento; Parcheggio Cretì.</li>
                    <li><strong>Otranto:</strong> Parcheggio Santa Barbara Centro - Via Santa Barbara, Otranto; Parcheggio Otranto low cost via Renis - Via Renis, 8; Saint Anthony Parking Lot - Via Papa Giovanni Paolo II, 21; Parcheggio Le Palme - Via Presbitero Pantaleone, 18.</li>
                    <li><strong>Matera:</strong> Parcheggio Nicoletti - Via Bruno Buozzi, 14, Matera (Mais próximo) ou Parcheggio Via Vena - Via Pasquale Vena, 12, Matera (Maior)</li>
                    <li><strong>Pompeia:</strong> Parcheggio Zeus - Via Villa dei Misteri, 3, Pompei</li>
                </ul>
                <p>🛅 <strong>Guarda-Volumes:</strong></p>
                <ul>
                    <li><strong>Bari:</strong> Bounce Luggage Storage - Piazza Aldo Moro, 24, Bari</li>
                    <li><strong>Capri:</strong> Bounce Luggage Storage - Via Cristoforo Colombo, 64, Capri</li>
                    <li><strong>Roma:</strong> KiPoint - Estação Roma Termini</li>
                </ul>
            `
        }
    ];

    // Dados do Mapa (extraídos do seu CSV)
    const mapaData = [
        { lat: 40.7494295, lng: 14.4806421, nome: "Pompei Parking Zeus", roteiro: "POMPEIA" },
        { lat: 40.7480109, lng: 14.4818724, nome: "Porta Marina - Via Villa dei Misteri 8", roteiro: "POMPEIA" },
        { lat: 40.7484505, lng: 14.4837369, nome: "Temple of Venus in Pompeii", roteiro: "POMPEIA" },
        { lat: 40.7491871, lng: 14.4844212, nome: "Santuario di Apollo", roteiro: "POMPEIA" },
        { lat: 40.7492886, lng: 14.4847282, nome: "Fórum de Pompeia", roteiro: "POMPEIA" },
        { lat: 40.7487093, lng: 14.4844544, nome: "Basilica", roteiro: "POMPEIA" },
        { lat: 40.749891, lng: 14.4845062, nome: "Temple of Jupiter", roteiro: "POMPEIA" },
        { lat: 40.74969460000001, lng: 14.4842891, nome: "Granaries of the Forum", roteiro: "POMPEIA" },
        { lat: 40.7487921, lng: 14.4883986, nome: "Teatro de Pompeia", roteiro: "POMPEIA" },
        { lat: 40.7488109, lng: 14.4890416, nome: "Teatro Pequeno", roteiro: "POMPEIA" },
        { lat: 40.7483601, lng: 14.4888857, nome: "Quadriporticus of the theatres", roteiro: "POMPEIA" },
        { lat: 40.7498053, lng: 14.4873696, nome: "Terme Stabiane", roteiro: "POMPEIA" },
        { lat: 40.7502816, lng: 14.4868047, nome: "Lupanar", roteiro: "POMPEIA" },
        { lat: 40.7510767, lng: 14.4846309, nome: "Casa do Fauno", roteiro: "POMPEIA" },
        { lat: 40.7507855, lng: 14.4837825, nome: "Casa do Poeta Trágico", roteiro: "POMPEIA" },
        { lat: 40.75127699999999, lng: 14.4951628, nome: "Anfiteatro de Pompeia", roteiro: "POMPEIA" },
        { lat: 40.7507271, lng: 14.4938864, nome: "Palestra Grande", roteiro: "POMPEIA" },
        { lat: 40.7535356, lng: 14.477599, nome: "Villa dos Mistérios", roteiro: "POMPEIA" },
        { lat: 40.6621022, lng: 16.6105992, nome: "Via Bruno Buozzi 5", roteiro: "MATERA" },
        { lat: 40.66287200000001, lng: 16.6080251, nome: "Parcheggio Via Lucana", roteiro: "MATERA" },
        { lat: 40.6646219, lng: 16.6118672, nome: "Piazza San Pietro Caveoso", roteiro: "MATERA" },
        { lat: 40.6641107, lng: 16.612031, nome: "Church of Saint Mary of Idris", roteiro: "MATERA" },
        { lat: 40.6637768, lng: 16.6122649, nome: "Casa Grotta nei Sassi di Matera", roteiro: "MATERA" },
        { lat: 40.6667941, lng: 16.6110991, nome: "Cathedral of Maria Santissima of the Bruna & Sant'Eustachio", roteiro: "MATERA" },
        { lat: 40.6692928, lng: 16.6095319, nome: "Via D'Addozio", roteiro: "MATERA" },
        { lat: 40.6665363, lng: 16.6087824, nome: "Via Fiorentini", roteiro: "MATERA" },
        { lat: 40.6657857, lng: 16.6080585, nome: "Via delle Beccherie", roteiro: "MATERA" },
        { lat: 40.66690260000001, lng: 16.6065001, nome: "Palombaro lungo", roteiro: "MATERA" },
        { lat: 40.6668133, lng: 16.6067744, nome: "Belvedere Luigi Guerricchio (Belvedere dei Tre Archi)", roteiro: "MATERA" },
        { lat: 40.6632559, lng: 16.6102925, nome: "Belvedere di Piazza Giovanni Pascoli", roteiro: "MATERA" },
        { lat: 40.66564169999999, lng: 16.6124305, nome: "Baccanti", roteiro: "MATERA" },
        { lat: 40.6638793, lng: 16.6179409, nome: "Belvedere Murgia Timone", roteiro: "MATERA" },
        { lat: 41.90401139999999, lng: 12.4849727, nome: "Via di Capo le Case 54", roteiro: "ROMA - DIA 1" },
        { lat: 41.9009325, lng: 12.483313, nome: "Fontana di Trevi", roteiro: "ROMA - DIA 1" },
        { lat: 41.8986108, lng: 12.4768729, nome: "Panteão", roteiro: "ROMA - DIA 1" },
        { lat: 41.89779619999999, lng: 12.4777727, nome: "Basílica de Santa Maria Sobre Minerva", roteiro: "ROMA - DIA 1" },
        { lat: 41.8996104, lng: 12.4747406, nome: "Igreja de São Luís dos Franceses", roteiro: "ROMA - DIA 1" },
        { lat: 41.8991622, lng: 12.4730719, nome: "Piazza Navona", roteiro: "ROMA - DIA 1" },
        { lat: 41.8963992, lng: 12.4743358, nome: "Sant'Andrea della Valle", roteiro: "ROMA - DIA 1" },
        { lat: 41.8956045, lng: 12.4721757, nome: "Campo das Flores", roteiro: "ROMA - DIA 1" },
        { lat: 41.8960403, lng: 12.4768916, nome: "Largo di Torre Argentina", roteiro: "ROMA - DIA 1" },
        { lat: 41.8992528, lng: 12.4797187, nome: "Igreja de Santo Inácio de Loyola", roteiro: "ROMA - DIA 1" },
        { lat: 41.8999403, lng: 12.4820553, nome: "Galleria Sciarra", roteiro: "ROMA - DIA 1" },
        { lat: 41.9032103, lng: 12.4795059, nome: "Via del Corso", roteiro: "ROMA - DIA 1" },
        { lat: 41.9110163, lng: 12.4762093, nome: "Piazza del Popolo", roteiro: "ROMA - DIA 1" },
        { lat: 41.9046449, lng: 12.4942942, nome: "Igreja de Nossa Senhora da Vitória", roteiro: "ROMA - DIA 1" },
        { lat: 41.9032171, lng: 12.4969794, nome: "Santa Maria degli Angeli e dei Martiri", roteiro: "ROMA - DIA 1" },
        { lat: 41.90401139999999, lng: 12.4849727, nome: "Via di Capo le Case 54", roteiro: "ROMA - DIA 2" },
        { lat: 41.9009325, lng: 12.483313, nome: "Fontana di Trevi", roteiro: "ROMA - DIA 2" },
        { lat: 41.9036298, lng: 12.488969, nome: "Barberini", roteiro: "ROMA - DIA 2" },
        { lat: 41.9092974, lng: 12.4581948, nome: "Ottaviano", roteiro: "ROMA - DIA 2" },
        { lat: 41.9021667, lng: 12.4539367, nome: "Basílica de São Pedro", roteiro: "ROMA - DIA 2" },
        { lat: 41.9064878, lng: 12.4536413, nome: "Museus do Vaticano", roteiro: "ROMA - DIA 2" },
        { lat: 41.9030632, lng: 12.466276, nome: "Castelo Sant'Angelo", roteiro: "ROMA - DIA 2" },
        { lat: 41.901901, lng: 12.4664498, nome: "Ponte Sant'Angelo", roteiro: "ROMA - DIA 2" },
        { lat: 41.89146969999999, lng: 12.4613942, nome: "Janículo", roteiro: "ROMA - DIA 2" },
        { lat: 41.889493, lng: 12.4698361, nome: "Basílica de Santa Maria em Trastevere", roteiro: "ROMA - DIA 2" },
        { lat: 41.90401139999999, lng: 12.4849727, nome: "Via di Capo le Case 54", roteiro: "ROMA - DIA 3" },
        { lat: 41.9036298, lng: 12.488969, nome: "Barberini", roteiro: "ROMA - DIA 3" },
        { lat: 41.89150300000001, lng: 12.49153, nome: "Colosseo", roteiro: "ROMA - DIA 3" },
        { lat: 41.8902102, lng: 12.4922309, nome: "Coliseu", roteiro: "ROMA - DIA 3" },
        { lat: 41.8920906, lng: 12.4864378, nome: "Fórum Romano", roteiro: "ROMA - DIA 3" },
        { lat: 41.8833333, lng: 12.4833333, nome: "Monte Palatino", roteiro: "ROMA - DIA 3" },
        { lat: 41.8851338, lng: 12.48039, nome: "Giardino degli Aranci", roteiro: "ROMA - DIA 3" },
        { lat: 41.8882378, lng: 12.4814441, nome: "Bocca della Verità", roteiro: "ROMA - DIA 3" },
        { lat: 41.8880752, lng: 12.4816333, nome: "Santa Maria in Cosmedin", roteiro: "ROMA - DIA 3" },
        { lat: 41.8925995, lng: 12.478519, nome: "Portico d'Ottavia", roteiro: "ROMA - DIA 3" },
        { lat: 41.8945976, lng: 12.4831269, nome: "Monumento a Vítor Emanuel II da Itália", roteiro: "ROMA - DIA 3" },
        { lat: 41.8938151, lng: 12.4834796, nome: "Santa Maria in Aracoeli", roteiro: "ROMA - DIA 3" },
        { lat: 41.89379840000001, lng: 12.4931498, nome: "Basílica de São Pedro in Vincoli", roteiro: "ROMA - DIA 3" },
        { lat: 41.89759859999999, lng: 12.4984084, nome: "Basílica de Santa Maria Maggiore", roteiro: "ROMA - DIA 3" },
        { lat: 41.8893347, lng: 12.4975757, nome: "Basílica de São Clemente", roteiro: "ROMA - DIA 3" },
        { lat: 41.8858811, lng: 12.505673, nome: "Arquibasílica de São João de Latrão", roteiro: "ROMA - DIA 3" },
        { lat: 41.1179738, lng: 16.8701131, nome: "Bari Centrale", roteiro: "BARI" },
        { lat: 41.122576, lng: 16.869622, nome: "Via Sparano da Bari", roteiro: "BARI" },
        { lat: 41.126921, lng: 16.8718723, nome: "Piazza del Ferrarese", roteiro: "BARI" },
        { lat: 41.1283183, lng: 16.8722092, nome: "Piazza Mercantile", roteiro: "BARI" },
        { lat: 41.1303135, lng: 16.8701374, nome: "Basilica San Nicola", roteiro: "BARI" },
        { lat: 41.1309566, lng: 16.8688307, nome: "Direzione regionale Musei", roteiro: "BARI" },
        { lat: 41.1285817, lng: 16.8687875, nome: "Basílica Catedral Metropolitana Primarcial de São Sabino", roteiro: "BARI" },
        { lat: 41.1270993, lng: 16.8671705, nome: "Nunzia Pasta Lady extraordinaire of Bari Vecchia", roteiro: "BARI" },
        { lat: 40.9538546, lng: 17.2986393, nome: "Via Giovanni Pepe 7", roteiro: "MONOPOLI" },
        { lat: 40.9531414, lng: 17.3034829, nome: "Piazza Giuseppe Garibaldi", roteiro: "MONOPOLI" },
        { lat: 40.9530196, lng: 17.3040435, nome: "Porto antico", roteiro: "MONOPOLI" },
        { lat: 40.9541325, lng: 17.3052013, nome: "Castello Carlo V", roteiro: "MONOPOLI" },
        { lat: 40.9534728, lng: 17.3061503, nome: "Lungomare Santa Maria", roteiro: "MONOPOLI" },
        { lat: 40.9508058, lng: 17.3055416, nome: "Cala Porta Vecchia", roteiro: "MONOPOLI" },
        { lat: 40.9508368, lng: 17.3033327, nome: "Cattedrale Maria Santissima della Madia", roteiro: "MONOPOLI" },
        { lat: 40.9520477, lng: 17.2993322, nome: "Piazza Vittorio Emanuele II", roteiro: "MONOPOLI" },
        { lat: 40.9910635, lng: 17.2188973, nome: "Estação Polignano A Mare", roteiro: "POLIGANO A MARE" },
        { lat: 40.9955835, lng: 17.2179856, nome: "Ponte Borbonico", roteiro: "POLIGANO A MARE" },
        { lat: 40.9963887, lng: 17.2181307, nome: "Lama Monachile", roteiro: "POLIGANO A MARE" },
        { lat: 40.9972583, lng: 17.2171201, nome: "Monumento a Domenico Modugno", roteiro: "POLIGANO A MARE" },
        { lat: 40.9979608, lng: 17.2175392, nome: "Pendma Chiatt (Pietra Piatta)", roteiro: "POLIGANO A MARE" },
        { lat: 40.99716979999999, lng: 17.2192189, nome: "Belvedere Terrazza Santo Stefano", roteiro: "POLIGANO A MARE" },
        { lat: 40.9965873, lng: 17.2230756, nome: "Grotta Ardito delle Caldaie", roteiro: "POLIGANO A MARE" },
        { lat: 40.9828607, lng: 17.2530426, nome: "Grotticella Sella", roteiro: "POLIGANO A MARE" },
        { lat: 40.7831801, lng: 17.235637, nome: "Rione Monti", roteiro: "ALBEROBELLO" },
        { lat: 40.7811442, lng: 17.2349404, nome: "Chiesa Parrocchiale di Sant'Antonio da Padova – Chiesa a Trullo", roteiro: "ALBEROBELLO" },
        { lat: 40.7820599, lng: 17.2380514, nome: "Trullo Siamese", roteiro: "ALBEROBELLO" },
        { lat: 40.7837658, lng: 17.2385195, nome: "Piazza Plebiscito", roteiro: "ALBEROBELLO" },
        { lat: 40.7837209, lng: 17.2386094, nome: "Rione Aia Piccola", roteiro: "ALBEROBELLO" },
        { lat: 40.7840673, lng: 17.2390619, nome: "Territory Museum House Pezzolla", roteiro: "ALBEROBELLO" },
        { lat: 40.7844939, lng: 17.2379924, nome: "Casa D'Amore", roteiro: "ALBEROBELLO" },
        { lat: 40.7871319, lng: 17.235281, nome: "Trullo Sovrano", roteiro: "ALBEROBELLO" },
        { lat: 40.7536129, lng: 17.330648, nome: "Chiesa Rettoria Madonna della Greca", roteiro: "LOCOROTONDO" },
        { lat: 40.75313690000001, lng: 17.3291375, nome: "Palazzo Morelli", roteiro: "LOCOROTONDO" },
        { lat: 40.7530199, lng: 17.3284172, nome: "Piazza Vittorio Emanuele", roteiro: "LOCOROTONDO" },
        { lat: 40.75294299999999, lng: 17.3296188, nome: "Church of Saint George Martyr", roteiro: "LOCOROTONDO" },
        { lat: 40.7520247, lng: 17.3296536, nome: "Via Nardelli", roteiro: "LOCOROTONDO" },
        { lat: 40.7530025, lng: 17.3282363, nome: "Villa Comunale “Giuseppe Garibaldi”", roteiro: "LOCOROTONDO" },
        { lat: 40.7527479, lng: 17.3280246, nome: "Punto Panoramico Locorotondo", roteiro: "LOCOROTONDO" },
        { lat: 40.732152, lng: 17.5784555, nome: "Piazza della Libertà", roteiro: "OSTUNI" },
        { lat: 40.734235, lng: 17.5785161, nome: "Arco Scoppa", roteiro: "OSTUNI" },
        { lat: 40.7341544, lng: 17.5788322, nome: "Duomo di Santa Maria Assunta", roteiro: "OSTUNI" },
        { lat: 40.734347, lng: 17.58018, nome: "Porta San Demetrio", roteiro: "OSTUNI" },
        { lat: 40.351975, lng: 18.1689558, nome: "Piazza del Duomo", roteiro: "LECCE" },
        { lat: 40.3517974, lng: 18.1702962, nome: "Teatro Romano", roteiro: "LECCE" },
        { lat: 40.351482, lng: 18.1689137, nome: "Palazzo Arcivescovile", roteiro: "LECCE" },
        { lat: 40.3531561, lng: 18.1722098, nome: "Piazza Sant'Oronzo", roteiro: "LECCE" },
        { lat: 40.3526467, lng: 18.1726216, nome: "Anfiteatro Romano di Lecce", roteiro: "LECCE" },
        { lat: 40.3524263, lng: 18.1744736, nome: "Castello Carlo V di Lecce", roteiro: "LECCE" },
        { lat: 40.3547022, lng: 18.1729173, nome: "Basílica da Santa Cruz", roteiro: "LECCE" },
        { lat: 40.3552284, lng: 18.1749039, nome: "Giuseppe Garibaldi Public Gardens", roteiro: "LECCE" },
        { lat: 40.1468463, lng: 18.4907598, nome: "Lungomare degli Eroi", roteiro: "OTRANTO" },
        { lat: 40.14647859999999, lng: 18.4907201, nome: "Alphonse Tower", roteiro: "OTRANTO" },
        { lat: 40.1460335, lng: 18.4918181, nome: "Corso Garibaldi", roteiro: "OTRANTO" },
        { lat: 40.1458196, lng: 18.4907724, nome: "Cattedrale di Santa Maria Annunziata", roteiro: "OTRANTO" },
        { lat: 40.1445062, lng: 18.4924035, nome: "Aragonese Castle of Otranto", roteiro: "OTRANTO" },
        { lat: 40.2858708, lng: 18.4295973, nome: "Cave of Poetry", roteiro: "TORRE DELL'ORSO" },
        { lat: 40.2733415, lng: 18.4285052, nome: "Torre dell'Orso", roteiro: "TORRE DELL'ORSO" },
        { lat: 40.2690987, lng: 18.4340725, nome: "Le Due Sorelle", roteiro: "TORRE DELL'ORSO" },
        { lat: 40.2567879, lng: 18.4435978, nome: "Faraglioni di Sant'Andrea", roteiro: "TORRE DELL'ORSO" },
        { lat: 40.6278031, lng: 14.4869629, nome: "Spiaggia di Positano Marina Grande", roteiro: "POSITANO" },
        { lat: 40.6283811, lng: 14.4868384, nome: "Chiesa di Santa Maria Assunta", roteiro: "POSITANO" },
        { lat: 40.6290311, lng: 14.4866417, nome: "Via dei Mulini", roteiro: "POSITANO" },
        { lat: 40.6285294, lng: 14.4882206, nome: "Via Cristoforo Colombo", roteiro: "POSITANO" },
        { lat: 40.6292298, lng: 14.4830368, nome: "Viale Pasitea", roteiro: "POSITANO" },
        { lat: 40.6269308, lng: 14.4844231, nome: "Via Positanesi d'America", roteiro: "POSITANO" },
        { lat: 40.6263545, lng: 14.4822477, nome: "Fornillo Beach", roteiro: "POSITANO" },
        { lat: 40.6350713, lng: 14.6016703, nome: "Via dei Pastai 7", roteiro: "AMALFI" },
        { lat: 40.6337702, lng: 14.6034495, nome: "Marina Grande", roteiro: "AMALFI" },
        { lat: 40.6342211, lng: 14.6026726, nome: "Piazza Duomo", roteiro: "AMALFI" },
        { lat: 40.6344504, lng: 14.6029926, nome: "Catedral de Amalfi", roteiro: "AMALFI" },
        { lat: 40.6410292, lng: 14.5990018, nome: "La Valle delle Ferriere", roteiro: "AMALFI" },
        { lat: 40.636001, lng: 14.6056483, nome: "Torre dello Ziro", roteiro: "AMALFI" },
        { lat: 40.649195, lng: 14.6115764, nome: "Piazza Duomo", roteiro: "RAVELLO" },
        { lat: 40.6492643, lng: 14.6117709, nome: "Duomo di ravello", roteiro: "RAVELLO" },
        { lat: 40.6490143, lng: 14.6120042, nome: "Villa Rufolo", roteiro: "RAVELLO" },
        { lat: 40.6504711, lng: 14.6130187, nome: "Giardini Principessa di Piemonte", roteiro: "RAVELLO" },
        { lat: 40.6508455, lng: 14.6143423, nome: "Oscar Niemeyer Auditorium", roteiro: "RAVELLO" },
        { lat: 40.6441412, lng: 14.6110723, nome: "Villa Cimbrone", roteiro: "RAVELLO" },
        { lat: 40.6421978, lng: 14.6101307, nome: "Terrazza dell'Infinito", roteiro: "RAVELLO" },
        { lat: 40.6338303, lng: 14.6027661, nome: "Amalfi", roteiro: "PONTOS DE PARADA SCOOTER" },
        { lat: 40.6357929, lng: 14.6086202, nome: "Atrani", roteiro: "PONTOS DE PARADA SCOOTER" },
        { lat: 40.6355476, lng: 14.6085605, nome: "Spiaggia di Atrani", roteiro: "PONTOS DE PARADA SCOOTER" },
        { lat: 40.6163236, lng: 14.5753912, nome: "Conca dei Marini", roteiro: "PONTOS DE PARADA SCOOTER" },
        { lat: 40.614338, lng: 14.5545905, nome: "Fiordo di Furore", roteiro: "PONTOS DE PARADA SCOOTER" },
        { lat: 40.6117319, lng: 14.5335099, nome: "Praiano", roteiro: "PONTOS DE PARADA SCOOTER" },
        { lat: 40.6493713, lng: 14.6271881, nome: "Minori", roteiro: "PONTOS DE PARADA SCOOTER" },
        { lat: 40.64812879999999, lng: 14.6410022, nome: "Maiori", roteiro: "PONTOS DE PARADA SCOOTER" },
        { lat: 40.6477459, lng: 14.700764, nome: "Cetara", roteiro: "PONTOS DE PARADA SCOOTER" },
        { lat: 40.6333333, lng: 14.6833333, nome: "Capo d'Orso", roteiro: "PONTOS DE PARADA SCOOTER" },
        { lat: 40.6470304, lng: 14.7034055, nome: "Torre di Cetara", roteiro: "PONTOS DE PARADA SCOOTER" },
        { lat: 40.54942, lng: 14.241831, nome: "Via l'Abate 24", roteiro: "CAPRI E ANACAPRI" },
        { lat: 40.550734, lng: 14.2427471, nome: "Piazzetta di Capri", roteiro: "CAPRI E ANACAPRI" },
        { lat: 40.5498675, lng: 14.2454865, nome: "Via Camerelle", roteiro: "CAPRI E ANACAPRI" },
        { lat: 40.5452636, lng: 14.2501224, nome: "Belvedere Tragara", roteiro: "CAPRI E ANACAPRI" },
        { lat: 40.5474721, lng: 14.2568903, nome: "Via del Pizzolungo", roteiro: "CAPRI E ANACAPRI" },
        { lat: 40.5504744, lng: 14.2570896, nome: "Natural Arch", roteiro: "CAPRI E ANACAPRI" },
        { lat: 40.5473022, lng: 14.243206, nome: "Gardens of Augustus", roteiro: "CAPRI E ANACAPRI" },
        { lat: 40.550918, lng: 14.2437765, nome: "Via le Botteghe", roteiro: "CAPRI E ANACAPRI" },
        { lat: 40.5508857, lng: 14.2472457, nome: "Via Croce", roteiro: "CAPRI E ANACAPRI" },
        { lat: 40.5579542, lng: 14.2624015, nome: "Vila de Júpiter", roteiro: "CAPRI E ANACAPRI" },
        { lat: 40.5449719, lng: 14.2229833, nome: "Monte Solaro", roteiro: "CAPRI E ANACAPRI" },
        { lat: 40.5572702, lng: 14.2251246, nome: "Villa San Michele", roteiro: "CAPRI E ANACAPRI" },
        { lat: 40.5548181, lng: 14.2172916, nome: "Church San Michele", roteiro: "CAPRI E ANACAPRI" }
    ];

    // Mapeamento de Dia para Capítulo
    const diaParaCapitulo = {
        '27/ago': 0, '28/ago': 0, '29/ago': 0, '30/ago': 0,
        '31/ago': 1,
        '01/set': 2, '02/set': 2, '03/set': 2,
        '04/set': 3,
        '05/set': 4,
        '06/set': 5, '07/set': 5, '08/set': 5,
        '09/set': 6,
        '10/set': 7,
        '11/set': 8
    };

    // Elementos da Navegação
    const btnTabela = document.getElementById('btn-tabela');
    const btnLista = document.getElementById('btn-lista');
    const btnMapa = document.getElementById('btn-mapa');
    const pages = document.querySelectorAll('.page');
    const navBtns = document.querySelectorAll('.nav-btn');

    // Função para trocar de página
    function switchPage(pageId) {
        pages.forEach(page => {
            page.classList.remove('active');
            if (page.id === pageId) {
                page.classList.add('active');
            }
        });
        navBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.id === `btn-${pageId.split('-')[1]}`) {
                btn.classList.add('active');
            }
        });
    }

    // Event Listeners da Navegação
    btnTabela.addEventListener('click', () => switchPage('pagina-tabela'));
    btnLista.addEventListener('click', () => switchPage('pagina-lista'));
    btnMapa.addEventListener('click', () => switchPage('pagina-mapa'));

    // --- LÓGICA DA PÁGINA TABELA ---
    function popularTabela() {
        const container = document.querySelector('#pagina-tabela .table-container');
        const table = document.createElement('table');
        
        // Cabeçalho
        const thead = document.createElement('thead');
        thead.innerHTML = `
            <tr>
                <th>Dia</th>
                <th>Cidade/Região</th>
                <th>Pernoite</th>
                <th>Transporte</th>
                <th>Informações Logísticas</th>
                <th>Documentos Importantes</th>
            </tr>
        `;
        table.appendChild(thead);

        // Corpo
        const tbody = document.createElement('tbody');
        tabelaData.forEach(rowData => {
            const tr = document.createElement('tr');
            
            // Formatar a data
            const [ano, mes, dia] = rowData.dia.split('/');
            const diaFormatado = `${dia}/${mes}`;
            
            tr.innerHTML = `
                <td>${diaFormatado}</td>
                <td>${rowData.cidade}</td>
                <td>${rowData.pernoite}</td>
                <td>${rowData.transporte}</td>
                <td>${rowData.logistica}</td>
                <td class="docs-cell"></td>
            `;

            // Adicionar links de documentos
            const docsCell = tr.querySelector('.docs-cell');
            rowData.docs.forEach(doc => {
                const a = document.createElement('a');
                a.href = doc.url;
                a.textContent = doc.title;
                a.target = '_blank'; // Abrir em nova aba
                docsCell.appendChild(a);
                docsCell.appendChild(document.createElement('br'));
            });

            // Adicionar evento de clique para redirecionar para a lista
            tr.querySelectorAll('td:not(.docs-cell)').forEach(cell => {
                cell.addEventListener('click', () => {
                    const capituloIndex = diaParaCapitulo[rowData.dia];
                    if (capituloIndex !== undefined) {
                        switchPage('pagina-lista');
                        // Aguarda a transição da página para abrir o accordion
                        setTimeout(() => {
                            const allItems = document.querySelectorAll('#pagina-lista .accordion-item');
                            allItems.forEach((item, index) => {
                                if (index === capituloIndex) {
                                    item.classList.add('active');
                                    const content = item.querySelector('.accordion-content');
                                    content.style.maxHeight = content.scrollHeight + "px";
                                    item.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                } else {
                                    item.classList.remove('active');
                                    item.querySelector('.accordion-content').style.maxHeight = null;
                                }
                            });
                        }, 100);
                    }
                });
            });
            tbody.appendChild(tr);
        });
        table.appendChild(tbody);
        container.appendChild(table);
    }

    // --- LÓGICA DA PÁGINA LISTA ---
    function popularLista() {
        const container = document.querySelector('#pagina-lista .lista-container');
        listaData.forEach(itemData => {
            const item = document.createElement('div');
            item.classList.add('accordion-item');
            item.innerHTML = `
                <div class="accordion-header">${itemData.title}</div>
                <div class="accordion-content">
                    <div class="accordion-content-inner">
                        ${itemData.content}
                    </div>
                </div>
            `;
            container.appendChild(item);
        });

        // Event listener para o accordion
        const accordionItems = document.querySelectorAll('.accordion-item');
        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-header');
            const content = item.querySelector('.accordion-content');
            header.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Fecha todos os outros
                accordionItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.accordion-content').style.maxHeight = null;
                });

                // Abre ou fecha o item clicado
                if (!isActive) {
                    item.classList.add('active');
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        });
    }

    // --- LÓGICA DA PÁGINA MAPA ---
    window.initMap = () => {
        const map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: 41.9027835, lng: 12.4963655 }, // Roma como centro inicial
            zoom: 6,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false,
            styles: [ // Estilo sóbrio/elegante
                { elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
                { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
                { elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
                { elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f5" }] },
                { featureType: "administrative.land_parcel", stylers: [{ visibility: "off" }] },
                { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#bdbdbd" }] },
                { featureType: "poi", elementType: "geometry", stylers: [{ color: "#eeeeee" }] },
                { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
                { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#e5e5e5" }] },
                { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] },
                { featureType: "road", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
                { featureType: "road.arterial", elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
                { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#dadada" }] },
                { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
                { featureType: "road.local", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] },
                { featureType: "transit.line", elementType: "geometry", stylers: [{ color: "#e5e5e5" }] },
                { featureType: "transit.station", elementType: "geometry", stylers: [{ color: "#eeeeee" }] },
                { featureType: "water", elementType: "geometry", stylers: [{ color: "#c9c9c9" }] },
                { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] }
            ]
        });

        const directionsService = new google.maps.DirectionsService();
        const placesService = new google.maps.places.PlacesService(map);

        const infoBox = document.getElementById('info-box');
        const infoTitle = document.getElementById('info-title');
        const infoContent = document.getElementById('info-content');
        const closeInfoBoxBtn = document.getElementById('close-info-box');

        closeInfoBoxBtn.addEventListener('click', () => {
            infoBox.classList.remove('show');
        });

        // Agrupar pontos por roteiro
        const roteiros = mapaData.reduce((acc, ponto) => {
            if (!acc[ponto.roteiro]) {
                acc[ponto.roteiro] = [];
            }
            acc[ponto.roteiro].push(ponto);
            return acc;
        }, {});

        // Cores para as rotas
        const routeColors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF", "#33FFA1", "#FFC300", "#C70039", "#900C3F", "#581845"];
        let colorIndex = 0;

        for (const nomeRoteiro in roteiros) {
            const pontos = roteiros[nomeRoteiro];
            const waypoints = pontos.map(p => ({ location: new google.maps.LatLng(p.lat, p.lng), stopover: true }));
            
            const origin = waypoints.shift().location;
            const destination = waypoints.pop()?.location || origin;

            // Adicionar marcadores
            pontos.forEach((ponto, index) => {
                const isStartPoint = index === 0;
                const marker = new google.maps.Marker({
                    position: { lat: ponto.lat, lng: ponto.lng },
                    map: map,
                    title: ponto.nome,
                    icon: {
                        path: google.maps.SymbolPath.CIRCLE,
                        scale: isStartPoint ? 8 : 6,
                        fillColor: isStartPoint ? "#ff4500" : "#007bff", // Laranja para ponto de partida
                        fillOpacity: 1,
                        strokeWeight: 1,
                        strokeColor: "#ffffff"
                    }
                });

                marker.addListener('click', () => {
                    infoTitle.textContent = ponto.nome;
                    infoContent.textContent = "Carregando informações...";
                    infoBox.classList.add('show');

                    // Busca informações úteis do Google Places
                    const request = {
                        query: ponto.nome,
                        fields: ['name', 'formatted_address', 'rating', 'user_ratings_total', 'opening_hours'],
                        locationBias: { lat: ponto.lat, lng: ponto.lng }
                    };

                    placesService.findPlaceFromQuery(request, (results, status) => {
                        if (status === google.maps.places.PlacesServiceStatus.OK && results && results[0]) {
                            placesService.getDetails({ placeId: results[0].place_id, fields: ['website', 'formatted_phone_number', 'opening_hours'] }, (place, status) => {
                                let content = `<strong>Endereço:</strong> ${place.formatted_address || 'Não disponível'}<br>`;
                                if(place.rating) content += `<strong>Avaliação:</strong> ${place.rating} (${place.user_ratings_total} avaliações)<br>`;
                                if(place.formatted_phone_number) content += `<strong>Telefone:</strong> ${place.formatted_phone_number}<br>`;
                                if(place.website) content += `<strong>Website:</strong> <a href="${place.website}" target="_blank">Visitar</a><br>`;
                                if(place.opening_hours) {
                                    content += `<strong>Horário:</strong> ${place.opening_hours.isOpen() ? 'Aberto agora' : 'Fechado'}<br>`;
                                    content += `<ul>${place.opening_hours.weekday_text.map(d => `<li>${d}</li>`).join('')}</ul>`;
                                }
                                infoContent.innerHTML = content;
                            });
                        } else {
                            infoContent.textContent = "Informações detalhadas não encontradas.";
                        }
                    });
                });
            });

            // Desenhar a rota
            if (pontos.length > 1) {
                const directionsRenderer = new google.maps.DirectionsRenderer({
                    suppressMarkers: true, // Não mostrar os marcadores padrão da rota
                    polylineOptions: {
                        strokeColor: routeColors[colorIndex % routeColors.length],
                        strokeOpacity: 0.8,
                        strokeWeight: 4
                    }
                });
                directionsRenderer.setMap(map);

                const request = {
                    origin: origin,
                    destination: destination,
                    waypoints: waypoints,
                    optimizeWaypoints: true,
                    travelMode: google.maps.TravelMode.DRIVING
                };

                directionsService.route(request, (result, status) => {
                    if (status == 'OK') {
                        directionsRenderer.setDirections(result);
                    } else {
                        console.error(`Erro ao traçar a rota para ${nomeRoteiro}: ${status}`);
                    }
                });
                colorIndex++;
            }
        }
    };

    // Inicialização das páginas
    popularTabela();
    popularLista();
});
