
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let isValid = true;

    const nome = document.getElementById('nome').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const email = document.getElementById('email').value;
    const detalhesProjeto = document.getElementById('detalhesProjeto').value;
    const necessidade = document.getElementById('necessidade').value;
    const segmentoMercado = document.getElementById('segmentoMercado').value;
    const cep = document.getElementById('cep').value;
    const bairro = document.getElementById('bairro').value;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;
    const orçamento = document.getElementById('orçamento').value;
    const estrategiaMarketing = document.getElementById('estrategiaMarketing').value;
    const tipoConteudo = document.getElementById('tipoConteudo').value;
    const objetivo = document.getElementById('objetivo').value;
    const desafios = document.getElementById('desafios').value;
    const taxaConversao = document.getElementById('taxaConversao').value;
    const redesSociais = document.getElementById('redesSociais').value;
    const analitica = document.getElementById('analitica').value;
    const modeloNegocio = document.getElementById('modeloNegocio').value;
    const ferramentasUsadas = document.getElementById('ferramentasUsadas').value;
    const temWebsite = document.getElementById('temWebsite').value;
    const temListaEmails = document.getElementById('temListaEmails').value;
    const frequenciaPublicacoes = document.getElementById('frequenciaPublicacoes').value;
    const dorCliente = document.getElementById('dorCliente').value;
    const estudoPersona = document.getElementById('estudoPersona').value;
    const usaCRM = document.getElementById('usaCRM').value;
    const concorrente = document.getElementById('concorrente').value;
    const medicaoSucesso = document.getElementById('medicaoSucesso').value;
    const faixaEtaria = document.getElementById('faixaEtaria').value;
    const canalAquisicao = document.getElementById('canalAquisicao').value;
    const motivacaoCompra = document.getElementById('motivacaoCompra').value;
    const emailMarketing = document.getElementById('emailMarketing').value;
    const remarketing = document.getElementById('remarketing').value;
    const suporteCliente = document.getElementById('suporteCliente').value;
    const programaFidelidade = document.getElementById('programaFidelidade').value;
    if (!nome || !whatsapp || !email || !detalhesProjeto || !necessidade || !segmentoMercado || !cep || !bairro || !rua || !numero ||
        !orçamento || !estrategiaMarketing || !tipoConteudo || !objetivo || !desafios || !taxaConversao || !redesSociais || !analitica ||
        !modeloNegocio || !ferramentasUsadas || !temWebsite || !temListaEmails || !frequenciaPublicacoes || !dorCliente || !estudoPersona || !usaCRM || !concorrente || !medicaoSucesso ||
        !faixaEtaria || !canalAquisicao || !motivacaoCompra || !emailMarketing || !remarketing || !suporteCliente || !programaFidelidade) {
        isValid = false;
        alert("Por favor, preencha todos os campos obrigatórios.");
    }

    if (isValid) {
        alert("Mensagem enviada com sucesso!");
        document.getElementById('contactForm').reset();
    }
});

const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
