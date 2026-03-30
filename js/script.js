/* ============================================================
   PetShop Amigo Fiel - Scripts JavaScript
   Fase 2 - Fundamentos de Sistemas Web
   Autor: Filipe Neves
   ============================================================ */

/* ---------- Inicialização ao Carregar a Página ---------- */
document.addEventListener('DOMContentLoaded', function () {
    atualizarRelogio();
    exibirSaudacao();
    verificarHorarioFuncionamento();
    definirDataMinima();

    /* Atualiza o relógio em tempo real a cada segundo */
    setInterval(atualizarRelogio, 1000);

    /* Adiciona formatação automática nos campos de formulário */
    configurarMascaras();

    /* Remove marcação de inválido ao digitar em qualquer campo */
    configurarLimpezaValidacao();
});

/* ---------- Relógio em Tempo Real ---------- */
/**
 * Atualiza o widget de data/hora no navbar com a hora atual do sistema.
 * Usa toLocaleString para formatar no padrão brasileiro pt-BR.
 */
function atualizarRelogio() {
    const elemento = document.getElementById('relogio-widget');
    if (!elemento) return;

    const agora = new Date();
    const opcoes = {
        weekday: 'short',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    elemento.textContent = agora.toLocaleString('pt-BR', opcoes);
}

/* ---------- Saudação Dinâmica por Período do Dia ---------- */
/**
 * Exibe saudação personalizada de acordo com o horário:
 * Manhã (5h-12h), Tarde (12h-18h), Noite (18h-5h).
 */
function exibirSaudacao() {
    const elemento = document.getElementById('saudacao');
    if (!elemento) return;

    const hora = new Date().getHours();
    let saudacao;

    if (hora >= 5 && hora < 12) {
        saudacao = '☀️ Bom dia';
    } else if (hora >= 12 && hora < 18) {
        saudacao = '🌤️ Boa tarde';
    } else {
        saudacao = '🌙 Boa noite';
    }

    elemento.textContent = saudacao;
}

/* ---------- Verificar Horário de Funcionamento ---------- */
/**
 * Verifica se o petshop está aberto no momento e atualiza o indicador
 * de status na página. Horário: Segunda a Sábado, das 8h às 19h.
 */
function verificarHorarioFuncionamento() {
    const elemento = document.getElementById('status-funcionamento');
    if (!elemento) return;

    const agora       = new Date();
    const diaSemana   = agora.getDay();       /* 0 = domingo, 6 = sábado */
    const hora        = agora.getHours();
    const minuto      = agora.getMinutes();
    const horaAtual   = hora + minuto / 60;   /* hora fracionária */

    /* Aberto: segunda (1) a sábado (6), das 8h às 19h */
    const estaAberto = diaSemana >= 1 && diaSemana <= 6
                    && horaAtual >= 8 && horaAtual < 19;

    if (estaAberto) {
        elemento.textContent = '● Aberto agora';
        elemento.className   = 'aberto';
    } else {
        elemento.textContent = '● Fechado agora';
        elemento.className   = 'fechado';
    }
}

/* ---------- Definir Data Mínima para Agendamento ---------- */
/**
 * Impede que o usuário selecione datas passadas no calendário de agendamento.
 * A data mínima é sempre o dia seguinte ao atual.
 */
function definirDataMinima() {
    const dataInput = document.getElementById('dataAgendamento');
    if (!dataInput) return;

    const amanha = new Date();
    amanha.setDate(amanha.getDate() + 1);
    dataInput.min = amanha.toISOString().split('T')[0];
}

/* ---------- Formatação de CPF (máscara: 000.000.000-00) ---------- */
/**
 * Aplica máscara de CPF conforme o usuário digita.
 * @param {HTMLInputElement} input - Campo de CPF
 */
function formatarCPF(input) {
    let valor = input.value.replace(/\D/g, '').substring(0, 11);
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    input.value = valor;
}

/* ---------- Formatação de Telefone (máscara: (00) 90000-0000) ---------- */
/**
 * Aplica máscara de telefone celular ou fixo conforme o usuário digita.
 * @param {HTMLInputElement} input - Campo de telefone
 */
function formatarTelefone(input) {
    let valor = input.value.replace(/\D/g, '').substring(0, 11);

    if (valor.length <= 10) {
        /* Telefone fixo: (00) 0000-0000 */
        valor = valor.replace(/(\d{2})(\d)/, '($1) $2');
        valor = valor.replace(/(\d{4})(\d)/, '$1-$2');
    } else {
        /* Celular: (00) 90000-0000 */
        valor = valor.replace(/(\d{2})(\d)/, '($1) $2');
        valor = valor.replace(/(\d{5})(\d)/, '$1-$2');
    }

    input.value = valor;
}

/* ---------- Formatação de CEP (máscara: 00000-000) ---------- */
/**
 * Aplica máscara de CEP conforme o usuário digita.
 * @param {HTMLInputElement} input - Campo de CEP
 */
function formatarCEP(input) {
    let valor = input.value.replace(/\D/g, '').substring(0, 8);
    valor = valor.replace(/(\d{5})(\d)/, '$1-$2');
    input.value = valor;
}

/* ---------- Exibir / Ocultar Endereço de Tele-Busca ---------- */
/**
 * Mostra o bloco de endereço de coleta somente quando o usuário
 * seleciona a opção "Tele-busca" no formulário de agendamento.
 */
function toggleEnderecoBusca() {
    const metodoSelecionado = document.querySelector('input[name="metodo"]:checked');
    const secaoEndereco     = document.getElementById('secao-endereco-busca');

    if (!secaoEndereco) return;

    if (metodoSelecionado && metodoSelecionado.value === 'telebusca') {
        secaoEndereco.style.display = 'block';
        /* Torna os campos obrigatórios apenas quando visíveis */
        secaoEndereco.querySelectorAll('input').forEach(function (campo) {
            campo.required = true;
        });
    } else {
        secaoEndereco.style.display = 'none';
        /* Remove obrigatoriedade quando ocultado */
        secaoEndereco.querySelectorAll('input').forEach(function (campo) {
            campo.required = false;
        });
    }
}

/* ---------- Configurar Máscaras nos Campos ---------- */
/**
 * Vincula automaticamente as funções de formatação
 * aos campos identificados por data-mask no HTML.
 */
function configurarMascaras() {
    const camposCPF = document.querySelectorAll('[data-mask="cpf"]');
    camposCPF.forEach(function (campo) {
        campo.addEventListener('input', function () { formatarCPF(this); });
    });

    const camposTel = document.querySelectorAll('[data-mask="tel"]');
    camposTel.forEach(function (campo) {
        campo.addEventListener('input', function () { formatarTelefone(this); });
    });

    const camposCEP = document.querySelectorAll('[data-mask="cep"]');
    camposCEP.forEach(function (campo) {
        campo.addEventListener('input', function () { formatarCEP(this); });
    });
}

/* ---------- Remover Marcação de Erro ao Digitar ---------- */
/**
 * Remove a classe 'is-invalid' de qualquer campo assim que
 * o usuário começa a digitar, melhorando a experiência de uso.
 */
function configurarLimpezaValidacao() {
    document.querySelectorAll('.form-control, .form-select').forEach(function (campo) {
        campo.addEventListener('input', function () {
            this.classList.remove('is-invalid');
        });
        campo.addEventListener('change', function () {
            this.classList.remove('is-invalid');
        });
    });
}

/* ---------- Validação do Formulário de Cadastro ---------- */
/**
 * Valida todos os campos obrigatórios, formato de e-mail e CPF.
 * Exibe feedback visual e mensagem de sucesso se tudo estiver correto.
 * @param {Event} event - Evento de submit do formulário
 */
function validarCadastro(event) {
    event.preventDefault();

    const form   = document.getElementById('formCadastro');
    let   valido = true;

    /* Verifica todos os campos com atributo required */
    form.querySelectorAll('[required]').forEach(function (campo) {
        if (!campo.value.trim()) {
            campo.classList.add('is-invalid');
            valido = false;
        } else {
            campo.classList.remove('is-invalid');
            campo.classList.add('is-valid');
        }
    });

    /* Validação de formato do e-mail */
    const email = document.getElementById('email');
    if (email && email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.classList.add('is-invalid');
        valido = false;
    }

    /* Validação básica de CPF: deve ter 11 dígitos numéricos */
    const cpf = document.getElementById('cpf');
    if (cpf && cpf.value) {
        const cpfLimpo = cpf.value.replace(/\D/g, '');
        if (cpfLimpo.length !== 11) {
            cpf.classList.add('is-invalid');
            valido = false;
        }
    }

    if (valido) {
        exibirMensagemSucesso('Cadastro', 'cadastro');
    } else {
        /* Rola até o primeiro campo inválido */
        const primeiroInvalido = form.querySelector('.is-invalid');
        if (primeiroInvalido) {
            primeiroInvalido.scrollIntoView({ behavior: 'smooth', block: 'center' });
            primeiroInvalido.focus();
        }
    }
}

/* ---------- Validação do Formulário de Agendamento ---------- */
/**
 * Valida o formulário de agendamento: campos obrigatórios,
 * seleção de serviço, método de agendamento e data futura.
 * @param {Event} event - Evento de submit do formulário
 */
function validarAgendamento(event) {
    event.preventDefault();

    const form   = document.getElementById('formAgendamento');
    let   valido = true;

    /* Verifica campos obrigatórios */
    form.querySelectorAll('[required]').forEach(function (campo) {
        if (!campo.value.trim()) {
            campo.classList.add('is-invalid');
            valido = false;
        } else {
            campo.classList.remove('is-invalid');
            campo.classList.add('is-valid');
        }
    });

    /* Verifica se pelo menos um serviço foi selecionado */
    const servicosSelecionados = form.querySelectorAll('input[name="servico"]:checked');
    const alertaServico        = document.getElementById('alerta-servico');
    if (servicosSelecionados.length === 0) {
        if (alertaServico) alertaServico.style.display = 'block';
        valido = false;
    } else {
        if (alertaServico) alertaServico.style.display = 'none';
    }

    /* Verifica se o método de agendamento foi escolhido */
    const metodoSelecionado = form.querySelector('input[name="metodo"]:checked');
    const alertaMetodo      = document.getElementById('alerta-metodo');
    if (!metodoSelecionado) {
        if (alertaMetodo) alertaMetodo.style.display = 'block';
        valido = false;
    } else {
        if (alertaMetodo) alertaMetodo.style.display = 'none';
    }

    /* Verifica se a data selecionada é futura (não pode ser hoje ou passado) */
    const dataInput = document.getElementById('dataAgendamento');
    if (dataInput && dataInput.value) {
        const dataSelecionada = new Date(dataInput.value + 'T00:00:00');
        const amanha          = new Date();
        amanha.setDate(amanha.getDate() + 1);
        amanha.setHours(0, 0, 0, 0);

        if (dataSelecionada < amanha) {
            dataInput.classList.add('is-invalid');
            valido = false;
        }
    }

    if (valido) {
        exibirMensagemSucesso('Agendamento', 'agendamento');
    } else {
        const primeiroInvalido = form.querySelector('.is-invalid');
        if (primeiroInvalido) {
            primeiroInvalido.scrollIntoView({ behavior: 'smooth', block: 'center' });
            primeiroInvalido.focus();
        }
    }
}

/* ---------- Validação do Formulário de Contato ---------- */
/**
 * Valida o formulário de contato e exibe mensagem de sucesso.
 * @param {Event} event - Evento de submit do formulário
 */
function validarContato(event) {
    event.preventDefault();

    const form   = document.getElementById('formContato');
    let   valido = true;

    form.querySelectorAll('[required]').forEach(function (campo) {
        if (!campo.value.trim()) {
            campo.classList.add('is-invalid');
            valido = false;
        } else {
            campo.classList.remove('is-invalid');
            campo.classList.add('is-valid');
        }
    });

    if (valido) {
        exibirMensagemSucesso('Contato', 'contato');
    }
}

/* ---------- Exibir Mensagem de Sucesso ---------- */
/**
 * Cria e insere um alerta Bootstrap de sucesso após o formulário enviado.
 * Remove automaticamente após 8 segundos.
 * @param {string} formId  - ID do formulário (para encontrar o elemento pai)
 * @param {string} tipo    - Tipo de operação: 'cadastro', 'agendamento' ou 'contato'
 */
function exibirMensagemSucesso(formId, tipo) {
    const mensagens = {
        cadastro:    '✅ Cadastro realizado com sucesso! Em breve entraremos em contato.',
        agendamento: '✅ Agendamento confirmado! Você receberá a confirmação por e-mail.',
        contato:     '✅ Mensagem enviada! Responderemos em até 24 horas.'
    };

    const alerta = document.createElement('div');
    alerta.className = 'alert alert-success alert-dismissible fade show mt-4';
    alerta.setAttribute('role', 'alert');
    alerta.setAttribute('aria-live', 'assertive');
    alerta.innerHTML = `
        <i class="bi bi-check-circle-fill me-2" aria-hidden="true"></i>
        <strong>${mensagens[tipo] || '✅ Operação realizada com sucesso!'}</strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fechar mensagem"></button>
    `;

    const form = document.getElementById('form' + formId);
    if (form) {
        /* Insere o alerta após o formulário */
        form.parentNode.insertBefore(alerta, form.nextSibling);

        /* Limpa os dados e marcações de validação do formulário */
        form.reset();
        form.querySelectorAll('.is-valid, .is-invalid').forEach(function (el) {
            el.classList.remove('is-valid', 'is-invalid');
        });

        /* Oculta bloco de endereço de tele-busca se existir */
        const secaoEndereco = document.getElementById('secao-endereco-busca');
        if (secaoEndereco) secaoEndereco.style.display = 'none';
    }

    /* Rola suavemente até a mensagem de sucesso */
    alerta.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    /* Remove o alerta automaticamente após 8 segundos */
    setTimeout(function () {
        if (alerta && alerta.parentNode) {
            alerta.remove();
        }
    }, 8000);
}

/* ---------- Tratar Imagens Quebradas (sem arquivo local) ---------- */
/**
 * Quando uma imagem de produto não é encontrada (imagens/ não existe),
 * oculta o elemento <img> e exibe o placeholder CSS alternativo.
 */
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('img[data-fallback]').forEach(function (img) {
        img.addEventListener('error', function () {
            this.style.display = 'none';
            const placeholder = this.nextElementSibling;
            if (placeholder && placeholder.classList.contains('img-placeholder')) {
                placeholder.style.display = 'flex';
            }
        });
    });
});
