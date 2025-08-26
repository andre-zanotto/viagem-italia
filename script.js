document.addEventListener('DOMContentLoaded', () => {
    // --- DADOS DA APLICAÇÃO ---
    // Dados da Tabela (extraídos do seu CSV)
    const tabelaData = [
        { dia: '2025-08-27', cidade: 'Roma', pernoite: 'Airbnb Roma', transporte: 'Trem Leonardo Express (~32min) + Metrô (~5min)', logistica: 'Chegada FCO 19h. Validar bilhete do trem.', docs: [{ title: 'Passagens aéreas', url: 'https://drive.google.com/drive/folders/1re3HPoAN2P3VHYfBixblfbOZhKwdR19G?usp=drive_link' }] },
        { dia: '2025-08-28', cidade: 'Roma (livre)', pernoite: 'Airbnb Roma', transporte: 'A pé / Metrô', logistica: 'Exploração do centro histórico.', docs: [] },
        { dia: '2025-08-29', cidade: 'Roma (Vaticano)', pernoite: 'Airbnb Roma', transporte: 'A pé / Metrô', logistica: 'Saída 6:15h da Est. Barberini (Linha A) para Est. Ottaviano. Visita à Basílica às 7h e Museu às 8:30h.', docs: [{ title: 'Ticket Vaticano', url: 'https://drive.google.com/file/d/1NAFEO0dnMgH4Jxa_lyXXDmP0vE36LEV9/view?usp=drive_link' }] },
        { dia: '2025-08-30', cidade: 'Roma (Coliseu)', pernoite: 'Airbnb Roma', transporte: 'A pé / Metrô', logistica: 'Saída 7:45h da Est. Barberini (Linha A), troca em Termini (Linha B) para Est. Colosseo. Visita às 8:30h.', docs: [{ title: 'Ticket Coliseu', url: 'https://drive.google.com/file/d/1fdzneLKZtdVQw1NHsmPqnL_2FStl9NE4/view?usp=drive_link' }] },
        { dia: '2025-08-31', cidade: 'Roma-Bari-Monopoli', pernoite: 'Monopoli', transporte: 'Trem (8:00, ~4h22min) + Trem Regional (~30-40min)', logistica: 'Deixar malas no Bounce em Bari (fecha 20h), explorar a pé, depois pegar trem para Monopoli.', docs: [{ title: 'Trem Roma-Bari', url: 'https://drive.google.com/file/d/1GoP_vva4XKoTPc7Fgio-DPZTQzJOC6hl/view?usp=drive_link' }, { title: 'Hospedagem Monopoli', url: 'https://drive.google.com/file/d/1ly5_lF89kNnEYiPHuE_0dgqOvP7_pRRd/view?usp=drive_link' }, { title: 'Recibo Hospedagem', url: 'https://drive.google.com/file/d/1cpFOU01nTrF0oW0Ws6lPcR2XJYLMTuI8/view?usp=drive_link' }] },
        { dia: '2025-09-01', cidade: 'Monopoli & Polignano', pernoite: 'Monopoli', transporte: 'Trem Regional (~5-8min)', logistica: 'Dia sem carro. Consultar horários de trem.', docs: [] },
        { dia: '2025-09-02', cidade: 'Alberobello, Locorotondo & Ostuni', pernoite: 'Monopoli', transporte: 'Carro Alugado', logistica: 'Retirada do carro às 9h em Monopoli. Jantar em Ostuni.', docs: [{ title: 'Aluguel Hertz', url: 'https://drive.google.com/file/d/1Y3N-aXsv8inR0hREm7EiBZinF2LhQIbN/view?usp=drive_link' }, { title: 'Resumo Seguro AIG', url: 'https://drive.google.com/file/d/1kWPb_QsaEw4XVLHNEdFRp6kv9z56i3W6/view?usp=drive_link' }] },
        { dia: '2025-09-03', cidade: 'Lecce, G. della Poesia & Otranto', pernoite: 'Monopoli', transporte: 'Carro Alugado', logistica: 'Dia longo de estrada para o Salento. Pôr do sol em Otranto às 19:20h.', docs: [] },
        { dia: '2025-09-04', cidade: 'Monopoli → Matera', pernoite: 'Matera', transporte: 'Carro (~1h30min)', logistica: 'Dia de exploração em Matera. Acomodação na ZTL, estacionar antes.', docs: [{ title: 'Hospedagem Matera', url: 'https://drive.google.com/file/d/1IiZNTWcCJ982cKJbGb8Q2B1svhjB0xyo/view?usp=drive_link' }, { title: 'Recibo Hospedagem', url: 'https://drive.google.com/file/d/14o3rK1rbWIk71XDi9oWe3jgejkaosb45/view?usp=drive_link' }] },
        { dia: '2025-09-05', cidade: 'Matera, Pompeia & Amalfi', pernoite: 'Amalfi', transporte: 'Carro (Saída 8:30, ~3h) + Carro (~40min) + Balsa (18:10, 35min)', logistica: 'Visitar Pompeia por 4h (saída máx. 16:30). Devolver carro na Hertz em Salerno às 17:30h. Caminhar até o Molo Concordia para a balsa.', docs: [{ title: 'Ticket Pompeia', url: 'https://drive.google.com/file/d/1MAPMnaVy1f1uUKa3VCFcjgSbZzWcnC8z/view?usp=drive_link' }, { title: 'Balsa Salerno-Amalfi', url: 'https://drive.google.com/file/d/1YfPUDUlPFfc9hrxQdvotF0APr0rRWSDt/view?usp=drive_link' }, { title: 'Hospedagem Amalfi', url: 'https://drive.google.com/file/d/1sg9vTV6PW3-zqHNbH8t_Y1Hc-8OrIX_f/view?usp=drive_link' }, { title: 'Recibo Hospedagem', url: 'https://drive.google.com/file/d/10ENPjyINgvMxRFvgVh4chgXIzeBY2B0_/view?usp=drive_link' }] },
        { dia: '2025-09-06', cidade: 'Positano', pernoite: 'Amalfi', transporte: 'Balsa (~25min)', logistica: 'Passeio para Positano.', docs: [] },
        { dia: '2025-09-07', cidade: 'Amalfi & Ravello', pernoite: 'Amalfi', transporte: 'Ônibus (~30min)', logistica: 'Passeio para Ravello.', docs: [] },
        { dia: '2025-09-08', cidade: 'Amalfi (Dia Livre)', pernoite: 'Amalfi', transporte: 'Scooter (Opcional)', logistica: 'Dia livre.', docs: [] },
        { dia: '2025-09-09', cidade: 'Amalfi → Capri', pernoite: 'Capri', transporte: 'Balsa (8:54, ~50-60min)', logistica: 'Deixar malas no Bounce em Marina Grande.', docs: [{ title: 'Balsa Amalfi-Capri', url: 'https://drive.google.com/file/d/1Ouil8ujta3NPo1Q4n-BJsXDim3f3AnoI/view?usp=drive_link' }, { title: 'Bounce Confirmação', url: 'https://drive.google.com/file/d/1NkHDIVSbWeFI_Au-pzYl4WSaX-INxp5K/view?usp=drive_link' }, { title: 'Hospedagem Capri', url: 'https://drive.google.com/file/d/1OOA80tXifzjziSFt8vte8Y6Bawe6LJe9/view?usp=drive_link' }] },
        { dia: '2025-09-10', cidade: 'Capri → Roma', pernoite: 'Em trânsito', transporte: 'Balsa (13:45) + Metrô + Trem (16:25, ~1h30min)', logistica: 'Conexão em Nápoles. Chegada em Roma 17:55. Deixar malas no KiPoint (Termini). Jantar na Via del Corso (Metrô: Spagna). Pegar penúltimo L. Express (22:53) para o aeroporto.', docs: [{ title: 'Balsa Capri-Napoles', url: 'https://drive.google.com/file/d/1KmqMyhJlVWKKBLvkxhG8LM1H3UPTRv3C/view?usp=drive_link' }, { title: 'Trem Napoles-Roma', url: 'https://drive.google.com/file/d/1jkdkaHWqZszfB1S0gR5S8FHKsYljmfZY/view?usp=drive_link' }] },
        { dia: '2025-09-11', cidade: 'Roma (Aeroporto)', pernoite: '-', transporte: 'Voo (5:55)', logistica: 'Partida do Aeroporto FCO.', docs: [{ title: 'Passagens aereas', url: 'https://drive.google.com/drive/folders/1re3HPoAN2P3VHYfBixblfbOZhKwdR19G?usp=drive_link' }] }
    ];
    const listaData = [
        {
            title: '1. CHEGADA E TRANSPORTE EM ROMA (27/08 a 30/08)',
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
            title: '2. DE ROMA À PUGLIA (31/08)',
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
            title: "3. GUIA DA VIAGEM PELA PUGLIA",
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
            title: "4. DE MONOPOLI PARA MATERA (04/09)",
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
            title: "5. DE MATERA PARA POMPEIA E AMALFI (05/09)",
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
            title: "6. LOGÍSTICA NA COSTA AMALFITANA (05/09 a 08/09)",
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
            title: "7. CHEGADA E LOGÍSTICA NA ILHA DE CAPRI (09/09 E 10/09)",
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
            title: "8. SAÍDA DE CAPRI PARA ROMA (10/09)",
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
            title: "9. ÚLTIMA NOITE E PARTIDA DE ROMA (10/09 E 11/09)",
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
            title: "10. Anexo - Guia para a Road Trip",
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
            title: "11. Endereços Relevantes",
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
    // A variável mapaData foi removida pois não é mais necessária

    // Mapeamento de Dia para Capítulo
    const diaParaCapitulo = {
        '27-08': 0, '28-08': 0, '29-08': 0, '30-08': 0,
        '31-08': 1,
        '01-09': 2, '02-09': 2, '03-09': 2,
        '04-09': 3,
        '05-09': 4,
        '06-09': 5, '07-09': 5, '08-09': 5,
        '09-09': 6,
        '10-09': 7,
        '11-09': 8
    };

    // --- ELEMENTOS DO DOM ---
    const btnTabela = document.getElementById('btn-tabela');
    const btnLista = document.getElementById('btn-lista');
    const btnMapa = document.getElementById('btn-mapa');
    const pages = document.querySelectorAll('.page');
    const navBtns = document.querySelectorAll('.nav-btn');

    // --- NAVEGAÇÃO ENTRE PÁGINAS ---
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

    btnTabela.addEventListener('click', () => switchPage('pagina-tabela'));
    btnLista.addEventListener('click', () => switchPage('pagina-lista'));
    btnMapa.addEventListener('click', () => switchPage('pagina-mapa'));

    // --- LÓGICA DA PÁGINA TABELA ---
    function popularTabela() {
        const container = document.querySelector('#pagina-tabela .table-container');
        const table = document.createElement('table');
        
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

        const tbody = document.createElement('tbody');
        const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
        
        tabelaData.forEach(rowData => {
            const tr = document.createElement('tr');
            
            const [ano, mesNum, diaNum] = rowData.dia.split('-');
            const mesNome = meses[parseInt(mesNum, 10) - 1];
            const diaFormatado = `${diaNum} ${mesNome}`;
            const diaChave = `${diaNum}-${mesNum}`;

            tr.innerHTML = `
                <td>${diaFormatado}</td>
                <td>${rowData.cidade}</td>
                <td>${rowData.pernoite}</td>
                <td>${rowData.transporte}</td>
                <td>${rowData.logistica}</td>
                <td class="docs-cell"></td>
            `;

            const docsCell = tr.querySelector('.docs-cell');
            rowData.docs.forEach(doc => {
                const a = document.createElement('a');
                a.href = doc.url;
                a.textContent = doc.title;
                a.target = '_blank';
                docsCell.appendChild(a);
                docsCell.appendChild(document.createElement('br'));
            });

            tr.querySelectorAll('td:not(.docs-cell)').forEach(cell => {
                cell.addEventListener('click', () => {
                    const capituloIndex = diaParaCapitulo[diaChave];
                    if (capituloIndex !== undefined) {
                        switchPage('pagina-lista');
                        setTimeout(() => {
                            const allItems = document.querySelectorAll('#pagina-lista .accordion-item');
                            allItems.forEach((item, index) => {
                                if (index === capituloIndex) {
                                    if (!item.classList.contains('active')) {
                                        item.querySelector('.accordion-header').click();
                                    }
                                    item.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                } else {
                                    if (item.classList.contains('active')) {
                                        item.classList.remove('active');
                                        item.querySelector('.accordion-content').style.maxHeight = null;
                                    }
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
                <div class="accordion-header">
                    <span>${itemData.title}</span>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div class="accordion-content">
                    <div class="accordion-content-inner">
                        ${itemData.content}
                    </div>
                </div>
            `;
            container.appendChild(item);
        });

        const accordionItems = document.querySelectorAll('.accordion-item');
        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-header');
            const content = item.querySelector('.accordion-content');
            header.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                accordionItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.accordion-content').style.maxHeight = null;
                    }
                });

                if (!isActive) {
                    item.classList.add('active');
                    content.style.maxHeight = content.scrollHeight + "px";
                } else {
                    item.classList.remove('active');
                    content.style.maxHeight = null;
                }
            });
        });
    }

    // --- INICIALIZAÇÃO ---
    popularTabela();
    popularLista();
});
```
Most up-to-date Immersive Artifact for "guia_italia_js_v4" is:

```javascript
document.addEventListener('DOMContentLoaded', () => {
    // --- DADOS DA APLICAÇÃO ---
    // Dados da Tabela (extraídos do seu CSV)
    const tabelaData = [
        { dia: '2025-08-27', cidade: 'Roma', pernoite: 'Airbnb Roma', transporte: 'Trem Leonardo Express (~32min) + Metrô (~5min)', logistica: 'Chegada FCO 19h. Validar bilhete do trem.', docs: [{ title: 'Passagens aéreas', url: 'https://drive.google.com/drive/folders/1re3HPoAN2P3VHYfBixblfbOZhKwdR19G?usp=drive_link' }] },
        { dia: '2025-08-28', cidade: 'Roma (livre)', pernoite: 'Airbnb Roma', transporte: 'A pé / Metrô', logistica: 'Exploração do centro histórico.', docs: [] },
        { dia: '2025-08-29', cidade: 'Roma (Vaticano)', pernoite: 'Airbnb Roma', transporte: 'A pé / Metrô', logistica: 'Saída 6:15h da Est. Barberini (Linha A) para Est. Ottaviano. Visita à Basílica às 7h e Museu às 8:30h.', docs: [{ title: 'Ticket Vaticano', url: 'https://drive.google.com/file/d/1NAFEO0dnMgH4Jxa_lyXXDmP0vE36LEV9/view?usp=drive_link' }] },
        { dia: '2025-08-30', cidade: 'Roma (Coliseu)', pernoite: 'Airbnb Roma', transporte: 'A pé / Metrô', logistica: 'Saída 7:45h da Est. Barberini (Linha A), troca em Termini (Linha B) para Est. Colosseo. Visita às 8:30h.', docs: [{ title: 'Ticket Coliseu', url: 'https://drive.google.com/file/d/1fdzneLKZtdVQw1NHsmPqnL_2FStl9NE4/view?usp=drive_link' }] },
        { dia: '2025-08-31', cidade: 'Roma-Bari-Monopoli', pernoite: 'Monopoli', transporte: 'Trem (8:00, ~4h22min) + Trem Regional (~30-40min)', logistica: 'Deixar malas no Bounce em Bari (fecha 20h), explorar a pé, depois pegar trem para Monopoli.', docs: [{ title: 'Trem Roma-Bari', url: 'https://drive.google.com/file/d/1GoP_vva4XKoTPc7Fgio-DPZTQzJOC6hl/view?usp=drive_link' }, { title: 'Hospedagem Monopoli', url: 'https://drive.google.com/file/d/1ly5_lF89kNnEYiPHuE_0dgqOvP7_pRRd/view?usp=drive_link' }, { title: 'Recibo Hospedagem', url: 'https://drive.google.com/file/d/1cpFOU01nTrF0oW0Ws6lPcR2XJYLMTuI8/view?usp=drive_link' }] },
        { dia: '2025-09-01', cidade: 'Monopoli & Polignano', pernoite: 'Monopoli', transporte: 'Trem Regional (~5-8min)', logistica: 'Dia sem carro. Consultar horários de trem.', docs: [] },
        { dia: '2025-09-02', cidade: 'Alberobello, Locorotondo & Ostuni', pernoite: 'Monopoli', transporte: 'Carro Alugado', logistica: 'Retirada do carro às 9h em Monopoli. Jantar em Ostuni.', docs: [{ title: 'Aluguel Hertz', url: 'https://drive.google.com/file/d/1Y3N-aXsv8inR0hREm7EiBZinF2LhQIbN/view?usp=drive_link' }, { title: 'Resumo Seguro AIG', url: 'https://drive.google.com/file/d/1kWPb_QsaEw4XVLHNEdFRp6kv9z56i3W6/view?usp=drive_link' }] },
        { dia: '2025-09-03', cidade: 'Lecce, G. della Poesia & Otranto', pernoite: 'Monopoli', transporte: 'Carro Alugado', logistica: 'Dia longo de estrada para o Salento. Pôr do sol em Otranto às 19:20h.', docs: [] },
        { dia: '2025-09-04', cidade: 'Monopoli → Matera', pernoite: 'Matera', transporte: 'Carro (~1h30min)', logistica: 'Dia de exploração em Matera. Acomodação na ZTL, estacionar antes.', docs: [{ title: 'Hospedagem Matera', url: 'https://drive.google.com/file/d/1IiZNTWcCJ982cKJbGb8Q2B1svhjB0xyo/view?usp=drive_link' }, { title: 'Recibo Hospedagem', url: 'https://drive.google.com/file/d/14o3rK1rbWIk71XDi9oWe3jgejkaosb45/view?usp=drive_link' }] },
        { dia: '2025-09-05', cidade: 'Matera, Pompeia & Amalfi', pernoite: 'Amalfi', transporte: 'Carro (Saída 8:30, ~3h) + Carro (~40min) + Balsa (18:10, 35min)', logistica: 'Visitar Pompeia por 4h (saída máx. 16:30). Devolver carro na Hertz em Salerno às 17:30h. Caminhar até o Molo Concordia para a balsa.', docs: [{ title: 'Ticket Pompeia', url: 'https://drive.google.com/file/d/1MAPMnaVy1f1uUKa3VCFcjgSbZzWcnC8z/view?usp=drive_link' }, { title: 'Balsa Salerno-Amalfi', url: 'https://drive.google.com/file/d/1YfPUDUlPFfc9hrxQdvotF0APr0rRWSDt/view?usp=drive_link' }, { title: 'Hospedagem Amalfi', url: 'https://drive.google.com/file/d/1sg9vTV6PW3-zqHNbH8t_Y1Hc-8OrIX_f/view?usp=drive_link' }, { title: 'Recibo Hospedagem', url: 'https://drive.google.com/file/d/10ENPjyINgvMxRFvgVh4chgXIzeBY2B0_/view?usp=drive_link' }] },
        { dia: '2025-09-06', cidade: 'Positano', pernoite: 'Amalfi', transporte: 'Balsa (~25min)', logistica: 'Passeio para Positano.', docs: [] },
        { dia: '2025-09-07', cidade: 'Amalfi & Ravello', pernoite: 'Amalfi', transporte: 'Ônibus (~30min)', logistica: 'Passeio para Ravello.', docs: [] },
        { dia: '2025-09-08', cidade: 'Amalfi (Dia Livre)', pernoite: 'Amalfi', transporte: 'Scooter (Opcional)', logistica: 'Dia livre.', docs: [] },
        { dia: '2025-09-09', cidade: 'Amalfi → Capri', pernoite: 'Capri', transporte: 'Balsa (8:54, ~50-60min)', logistica: 'Deixar malas no Bounce em Marina Grande.', docs: [{ title: 'Balsa Amalfi-Capri', url: 'https://drive.google.com/file/d/1Ouil8ujta3NPo1Q4n-BJsXDim3f3AnoI/view?usp=drive_link' }, { title: 'Bounce Confirmação', url: 'https://drive.google.com/file/d/1NkHDIVSbWeFI_Au-pzYl4WSaX-INxp5K/view?usp=drive_link' }, { title: 'Hospedagem Capri', url: 'https://drive.google.com/file/d/1OOA80tXifzjziSFt8vte8Y6Bawe6LJe9/view?usp=drive_link' }] },
        { dia: '2025-09-10', cidade: 'Capri → Roma', pernoite: 'Em trânsito', transporte: 'Balsa (13:45) + Metrô + Trem (16:25, ~1h30min)', logistica: 'Conexão em Nápoles. Chegada em Roma 17:55. Deixar malas no KiPoint (Termini). Jantar na Via del Corso (Metrô: Spagna). Pegar penúltimo L. Express (22:53) para o aeroporto.', docs: [{ title: 'Balsa Capri-Napoles', url: 'https://drive.google.com/file/d/1KmqMyhJlVWKKBLvkxhG8LM1H3UPTRv3C/view?usp=drive_link' }, { title: 'Trem Napoles-Roma', url: 'https://drive.google.com/file/d/1jkdkaHWqZszfB1S0gR5S8FHKsYljmfZY/view?usp=drive_link' }] },
        { dia: '2025-09-11', cidade: 'Roma (Aeroporto)', pernoite: '-', transporte: 'Voo (5:55)', logistica: 'Partida do Aeroporto FCO.', docs: [{ title: 'Passagens aereas', url: 'https://drive.google.com/drive/folders/1re3HPoAN2P3VHYfBixblfbOZhKwdR19G?usp=drive_link' }] }
    ];
    const listaData = [
        {
            title: '1. CHEGADA E TRANSPORTE EM ROMA (27/08 a 30/08)',
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
            title: '2. DE ROMA À PUGLIA (31/08)',
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
            title: "3. GUIA DA VIAGEM PELA PUGLIA",
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
            title: "4. DE MONOPOLI PARA MATERA (04/09)",
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
            title: "5. DE MATERA PARA POMPEIA E AMALFI (05/09)",
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
            title: "6. LOGÍSTICA NA COSTA AMALFITANA (05/09 a 08/09)",
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
            title: "7. CHEGADA E LOGÍSTICA NA ILHA DE CAPRI (09/09 E 10/09)",
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
            title: "8. SAÍDA DE CAPRI PARA ROMA (10/09)",
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
            title: "9. ÚLTIMA NOITE E PARTIDA DE ROMA (10/09 E 11/09)",
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
            title: "10. Anexo - Guia para a Road Trip",
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
            title: "11. Endereços Relevantes",
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
    // A variável mapaData foi removida pois não é mais necessária

    // Mapeamento de Dia para Capítulo
    const diaParaCapitulo = {
        '27-08': 0, '28-08': 0, '29-08': 0, '30-08': 0,
        '31-08': 1,
        '01-09': 2, '02-09': 2, '03-09': 2,
        '04-09': 3,
        '05-09': 4,
        '06-09': 5, '07-09': 5, '08-09': 5,
        '09-09': 6,
        '10-09': 7,
        '11-09': 8
    };

    // --- ELEMENTOS DO DOM ---
    const btnTabela = document.getElementById('btn-tabela');
    const btnLista = document.getElementById('btn-lista');
    const btnMapa = document.getElementById('btn-mapa');
    const pages = document.querySelectorAll('.page');
    const navBtns = document.querySelectorAll('.nav-btn');

    // --- NAVEGAÇÃO ENTRE PÁGINAS ---
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

    btnTabela.addEventListener('click', () => switchPage('pagina-tabela'));
    btnLista.addEventListener('click', () => switchPage('pagina-lista'));
    btnMapa.addEventListener('click', () => switchPage('pagina-mapa'));

    // --- LÓGICA DA PÁGINA TABELA ---
    function popularTabela() {
        const container = document.querySelector('#pagina-tabela .table-container');
        const table = document.createElement('table');
        
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

        const tbody = document.createElement('tbody');
        const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
        
        tabelaData.forEach(rowData => {
            const tr = document.createElement('tr');
            
            const [ano, mesNum, diaNum] = rowData.dia.split('-');
            const mesNome = meses[parseInt(mesNum, 10) - 1];
            const diaFormatado = `${diaNum} ${mesNome}`;
            const diaChave = `${diaNum}-${mesNum}`;

            tr.innerHTML = `
                <td>${diaFormatado}</td>
                <td>${rowData.cidade}</td>
                <td>${rowData.pernoite}</td>
                <td>${rowData.transporte}</td>
                <td>${rowData.logistica}</td>
                <td class="docs-cell"></td>
            `;

            const docsCell = tr.querySelector('.docs-cell');
            rowData.docs.forEach(doc => {
                const a = document.createElement('a');
                a.href = doc.url;
                a.textContent = doc.title;
                a.target = '_blank';
                docsCell.appendChild(a);
                docsCell.appendChild(document.createElement('br'));
            });

            tr.querySelectorAll('td:not(.docs-cell)').forEach(cell => {
                cell.addEventListener('click', () => {
                    const capituloIndex = diaParaCapitulo[diaChave];
                    if (capituloIndex !== undefined) {
                        switchPage('pagina-lista');
                        setTimeout(() => {
                            const allItems = document.querySelectorAll('#pagina-lista .accordion-item');
                            allItems.forEach((item, index) => {
                                if (index === capituloIndex) {
                                    if (!item.classList.contains('active')) {
                                        item.querySelector('.accordion-header').click();
                                    }
                                    item.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                } else {
                                    if (item.classList.contains('active')) {
                                        item.classList.remove('active');
                                        item.querySelector('.accordion-content').style.maxHeight = null;
                                    }
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
                <div class="accordion-header">
                    <span>${itemData.title}</span>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div class="accordion-content">
                    <div class="accordion-content-inner">
                        ${itemData.content}
                    </div>
                </div>
            `;
            container.appendChild(item);
        });

        const accordionItems = document.querySelectorAll('.accordion-item');
        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-header');
            const content = item.querySelector('.accordion-content');
            header.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                accordionItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.accordion-content').style.maxHeight = null;
                    }
                });

                if (!isActive) {
                    item.classList.add('active');
                    content.style.maxHeight = content.scrollHeight + "px";
                } else {
                    item.classList.remove('active');
                    content.style.maxHeight = null;
                }
            });
        });
    }

    // --- INICIALIZAÇÃO ---
    popularTabela();
    popularLista();
});
```
Most up-to-date Immersive Artifact for "guia_italia_js_v4" is:

```javascript
document.addEventListener('DOMContentLoaded', () => {
    // --- DADOS DA APLICAÇÃO ---
    // Dados da Tabela (extraídos do seu CSV)
    const tabelaData = [
        { dia: '2025-08-27', cidade: 'Roma', pernoite: 'Airbnb Roma', transporte: 'Trem Leonardo Express (~32min) + Metrô (~5min)', logistica: 'Chegada FCO 19h. Validar bilhete do trem.', docs: [{ title: 'Passagens aéreas', url: 'https://drive.google.com/drive/folders/1re3HPoAN2P3VHYfBixblfbOZhKwdR19G?usp=drive_link' }] },
        { dia: '2025-08-28', cidade: 'Roma (livre)', pernoite: 'Airbnb Roma', transporte: 'A pé / Metrô', logistica: 'Exploração do centro histórico.', docs: [] },
        { dia: '2025-08-29', cidade: 'Roma (Vaticano)', pernoite: 'Airbnb Roma', transporte: 'A pé / Metrô', logistica: 'Saída 6:15h da Est. Barberini (Linha A) para Est. Ottaviano. Visita à Basílica às 7h e Museu às 8:30h.', docs: [{ title: 'Ticket Vaticano', url: 'https://drive.google.com/file/d/1NAFEO0dnMgH4Jxa_lyXXDmP0vE36LEV9/view?usp=drive_link' }] },
        { dia: '2025-08-30', cidade: 'Roma (Coliseu)', pernoite: 'Airbnb Roma', transporte: 'A pé / Metrô', logistica: 'Saída 7:45h da Est. Barberini (Linha A), troca em Termini (Linha B) para Est. Colosseo. Visita às 8:30h.', docs: [{ title: 'Ticket Coliseu', url: 'https://drive.google.com/file/d/1fdzneLKZtdVQw1NHsmPqnL_2FStl9NE4/view?usp=drive_link' }] },
        { dia: '2025-08-31', cidade: 'Roma-Bari-Monopoli', pernoite: 'Monopoli', transporte: 'Trem (8:00, ~4h22min) + Trem Regional (~30-40min)', logistica: 'Deixar malas no Bounce em Bari (fecha 20h), explorar a pé, depois pegar trem para Monopoli.', docs: [{ title: 'Trem Roma-Bari', url: 'https://drive.google.com/file/d/1GoP_vva4XKoTPc7Fgio-DPZTQzJOC6hl/view?usp=drive_link' }, { title: 'Hospedagem Monopoli', url: 'https://drive.google.com/file/d/1ly5_lF89kNnEYiPHuE_0dgqOvP7_pRRd/view?usp=drive_link' }, { title: 'Recibo Hospedagem', url: 'https://drive.google.com/file/d/1cpFOU01nTrF0oW0Ws6lPcR2XJYLMTuI8/view?usp=drive_link' }] },
        { dia: '2025-09-01', cidade: 'Monopoli & Polignano', pernoite: 'Monopoli', transporte: 'Trem Regional (~5-8min)', logistica: 'Dia sem carro. Consultar horários de trem.', docs: [] },
        { dia: '2025-09-02', cidade: 'Alberobello, Locorotondo & Ostuni', pernoite: 'Monopoli', transporte: 'Carro Alugado', logistica: 'Retirada do carro às 9h em Monopoli. Jantar em Ostuni.', docs: [{ title: 'Aluguel Hertz', url: 'https://drive.google.com/file/d/1Y3N-aXsv8inR0hREm7EiBZinF2LhQIbN/view?usp=drive_link' }, { title: 'Resumo Seguro AIG', url: 'https://drive.google.com/file/d/1kWPb_QsaEw4XVLHNEdFRp6kv9z56i3W6/view?usp=drive_link' }] },
        { dia: '2025-09-03', cidade: 'Lecce, G. della Poesia & Otranto', pernoite: 'Monopoli', transporte: 'Carro Alugado', logistica: 'Dia longo de estrada para o Salento. Pôr do sol em Otranto às 19:20h.', docs: [] },
        { dia: '2025-09-04', cidade: 'Monopoli → Matera', pernoite: 'Matera', transporte: 'Carro (~1h30min)', logistica: 'Dia de exploração em Matera. Acomodação na ZTL, estacionar antes.', docs: [{ title: 'Hospedagem Matera', url: 'https://drive.google.com/file/d/1IiZNTWcCJ982cKJbGb8Q2B1svhjB0xyo/view?usp=drive_link' }, { title: 'Recibo Hospedagem', url: 'https://drive.google.com/file/d/14o3rK1rbWIk71XDi9oWe3jgejkaosb45/view?usp=drive_link' }] },
        { dia: '2025-09-05', cidade: 'Matera, Pompeia & Amalfi', pernoite: 'Amalfi', transporte: 'Carro (Saída 8:30, ~3h) + Carro (~40min) + Balsa (18:10, 35min)', logistica: 'Visitar Pompeia por 4h (saída máx. 16:30). Devolver carro na Hertz em Salerno às 17:30h. Caminhar até o Molo Concordia para a balsa.', docs: [{ title: 'Ticket Pompeia', url: 'https://drive.google.com/file/d/1MAPMnaVy1f1uUKa3VCFcjgSbZzWcnC8z/view?usp=drive_link' }, { title: 'Balsa Salerno-Amalfi', url: 'https://drive.google.com/file/d/1YfPUDUlPFfc9hrxQdvotF0APr0rRWSDt/view?usp=drive_link' }, { title: 'Hospedagem Amalfi', url: 'https://drive.google.com/file/d/1sg9vTV6PW3-zqHNbH8t_Y1Hc-8OrIX_f/view?usp=drive_link' }, { title: 'Recibo Hospedagem', url: 'https://drive.google.com/file/d/10ENPjyINgvMxRFvgVh4chgXIzeBY2B0_/view?usp=drive_link' }] },
        { dia: '2025-09-06', cidade: 'Positano', pernoite: 'Amalfi', transporte: 'Balsa (~25min)', logistica: 'Passeio para Positano.', docs: [] },
        { dia: '2025-09-07', cidade: 'Amalfi & Ravello', pernoite: 'Amalfi', transporte: 'Ônibus (~30min)', logistica: 'Passeio para Ravello.', docs: [] },
        { dia: '2025-09-08', cidade: 'Amalfi (Dia Livre)', pernoite: 'Amalfi', transporte: 'Scooter (Opcional)', logistica: 'Dia livre.', docs: [] },
        { dia: '2025-09-09', cidade: 'Amalfi → Capri', pernoite: 'Capri', transporte: 'Balsa (8:54, ~50-60min)', logistica: 'Deixar malas no Bounce em Marina Grande.', docs: [{ title: 'Balsa Amalfi-Capri', url: 'https://drive.google.com/file/d/1Ouil8ujta3NPo1Q4n-BJsXDim3f3AnoI/view?usp=drive_link' }, { title: 'Bounce Confirmação', url: 'https://drive.google.com/file/d/1NkHDIVSbWeFI_Au-pzYl4WSaX-INxp5K/view?usp=drive_link' }, { title: 'Hospedagem Capri', url: 'https://drive.google.com/file/d/1OOA80tXifzjziSFt8vte8Y6Bawe6LJe9/view?usp=drive_link' }] },
        { dia: '2025-09-10', cidade: 'Capri → Roma', pernoite: 'Em trânsito', transporte: 'Balsa (13:45) + Metrô + Trem (16:25, ~1h30min)', logistica: 'Conexão em Nápoles. Chegada em Roma 17:55. Deixar malas no KiPoint (Termini). Jantar na Via del Corso (Metrô: Spagna). Pegar penúltimo L. Express (22:53) para o aeroporto.', docs: [{ title: 'Balsa Capri-Napoles', url: 'https://drive.google.com/file/d/1KmqMyhJlVWKKBLvkxhG8LM1H3UPTRv3C/view?usp=drive_link' }, { title: 'Trem Napoles-Roma', url: 'https://drive.google.com/file/d/1jkdkaHWqZszfB1S0gR5S8FHKsYljmfZY/view?usp=drive_link' }] },
        { dia: '2025-09-11', cidade: 'Roma (Aeroporto)', pernoite: '-', transporte: 'Voo (5:55)', logistica: 'Partida do Aeroporto FCO.', docs: [{ title: 'Passagens aereas', url: 'https://drive.google.com/drive/folders/1re3HPoAN2P3VHYfBixblfbOZhKwdR19G?usp=drive_link' }] }
    ];
    const listaData = [
        {
            title: '1. CHEGADA E TRANSPORTE EM ROMA (27/08 a 30/08)',
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
            title: '2. DE ROMA À PUGLIA (31/08)',
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
            title: "3. GUIA DA VIAGEM PELA PUGLIA",
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
            title: "4. DE MONOPOLI PARA MATERA (04/09)",
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
            title: "5. DE MATERA PARA POMPEIA E AMALFI (05/09)",
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
            title: "6. LOGÍSTICA NA COSTA AMALFITANA (05/09 a 08/09)",
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
            title: "7. CHEGADA E LOGÍSTICA NA ILHA DE CAPRI (09/09 E 10/09)",
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
            title: "8. SAÍDA DE CAPRI PARA ROMA (10/09)",
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
            title: "9. ÚLTIMA NOITE E PARTIDA DE ROMA (10/09 E 11/09)",
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
            title: "10. Anexo - Guia para a Road Trip",
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
            title: "11. Endereços Relevantes",
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
    // A variável mapaData foi removida pois não é mais necessária

    // Mapeamento de Dia para Capítulo
    const diaParaCapitulo = {
        '27-08': 0, '28-08': 0, '29-08': 0, '30-08': 0,
        '31-08': 1,
        '01-09': 2, '02-09': 2, '03-09': 2,
        '04-09': 3,
        '05-09': 4,
        '06-09': 5, '07-09': 5, '08-09': 5,
        '09-09': 6,
        '10-09': 7,
        '11-09': 8
    };

    // --- ELEMENTOS DO DOM ---
    const btnTabela = document.getElementById('btn-tabela');
    const btnLista = document.getElementById('btn-lista');
    const btnMapa = document.getElementById('btn-mapa');
    const pages = document.querySelectorAll('.page');
    const navBtns = document.querySelectorAll('.nav-btn');

    // --- NAVEGAÇÃO ENTRE PÁGINAS ---
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

    btnTabela.addEventListener('click', () => switchPage('pagina-tabela'));
    btnLista.addEventListener('click', () => switchPage('pagina-lista'));
    btnMapa.addEventListener('click', () => switchPage('pagina-mapa'));

    // --- LÓGICA DA PÁGINA TABELA ---
    function popularTabela() {
        const container = document.querySelector('#pagina-tabela .table-container');
        const table = document.createElement('table');
        
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

        const tbody = document.createElement('tbody');
        const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
        
        tabelaData.forEach(rowData => {
            const tr = document.createElement('tr');
            
            const [ano, mesNum, diaNum] = rowData.dia.split('-');
            const mesNome = meses[parseInt(mesNum, 10) - 1];
            const diaFormatado = `${diaNum} ${mesNome}`;
            const diaChave = `${diaNum}-${mesNum}`;

            tr.innerHTML = `
                <td>${diaFormatado}</td>
                <td>${rowData.cidade}</td>
                <td>${rowData.pernoite}</td>
                <td>${rowData.transporte}</td>
                <td>${rowData.logistica}</td>
                <td class="docs-cell"></td>
            `;

            const docsCell = tr.querySelector('.docs-cell');
            rowData.docs.forEach(doc => {
                const a = document.createElement('a');
                a.href = doc.url;
                a.textContent = doc.title;
                a.target = '_blank';
                docsCell.appendChild(a);
                docsCell.appendChild(document.createElement('br'));
            });

            tr.querySelectorAll('td:not(.docs-cell)').forEach(cell => {
                cell.addEventListener('click', () => {
                    const capituloIndex = diaParaCapitulo[diaChave];
                    if (capituloIndex !== undefined) {
                        switchPage('pagina-lista');
                        setTimeout(() => {
                            const allItems = document.querySelectorAll('#pagina-lista .accordion-item');
                            allItems.forEach((item, index) => {
                                if (index === capituloIndex) {
                                    if (!item.classList.contains('active')) {
                                        item.querySelector('.accordion-header').click();
                                    }
                                    item.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                } else {
                                    if (item.classList.contains('active')) {
                                        item.classList.remove('active');
                                        item.querySelector('.accordion-content').style.maxHeight = null;
                                    }
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
                <div class="accordion-header">
                    <span>${itemData.title}</span>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div class="accordion-content">
                    <div class="accordion-content-inner">
                        ${itemData.content}
                    </div>
                </div>
            `;
            container.appendChild(item);
        });

        const accordionItems = document.querySelectorAll('.accordion-item');
        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-header');
            const content = item.querySelector('.accordion-content');
            header.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                accordionItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.accordion-content').style.maxHeight = null;
                    }
                });

                if (!isActive) {
                    item.classList.add('active');
                    content.style.maxHeight = content.scrollHeight + "px";
                } else {
                    item.classList.remove('active');
                    content.style.maxHeight = null;
                }
            });
        });
    }

    // --- INICIALIZAÇÃO ---
    popularTabela();
    popularLista();
});
