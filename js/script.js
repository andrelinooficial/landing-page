const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fecha o menu mobile ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Animação de troca de imagem de perfil (Efeito Moeda)
const profileImg = document.querySelector('.profile-img');
if (profileImg) {
    let isOriginal = true;
    setInterval(() => {
        profileImg.classList.add('flipping');
        
        setTimeout(() => {
            isOriginal = !isOriginal;
            profileImg.src = isOriginal ? 'assets/images/perfil.png' : 'assets/images/perfil2.png';
            profileImg.classList.toggle('grayscale', !isOriginal);
            profileImg.classList.remove('flipping');
        }, 300); // Metade do tempo da transição CSS para trocar a imagem quando estiver "de perfil"
    }, 15000);
}

// Carrossel Infinito de Ícones
window.onload = () => {
    const techIcons = document.querySelector('.tech-icons');
    if (techIcons) {
        const clone = techIcons.innerHTML;
        techIcons.innerHTML += clone; // Duplica os ícones para o loop infinito
    }
};

// Lógica do Modal de Projetos
const projectData = {
    'projeto1': {
        title: 'Sobre o projeto Appdrive',
        description: 'O Appdrive é uma plataforma de gestão SaaS Multiempresas para atender demanda de quem trabalha com locação de automóveis para motoristas de aplicativo. <br><br>  O Appdrive permite que o dono da empresa locadora possa fazer a gestão completa da sua frota, disponibilizando um aplicativo móvel (White Label) para os seus clientes com a identidade da locadora. <br> <br> Acesse: <a href="https://appdrive.com.br" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline;">www.appdrive.com.br</a>'
    },
    'projeto2': {
        title: 'Carta de CEP',
        description: 'Sistema de carta de cep é um sistema de controle estatístico criado para controle de produção de acordo com as especificações das normas de qualidade da indústria. <br> <br>Este projeto trata-se de um sistema interno desenvolvido para a empresa Regsa Metalúrgica, com o objetivo de atender as normas vigentes de qualidade garantindo eficiência no processo de produção de Molas e artefatos.'
    },
    'projeto3': {
        title: 'App Diário Escola',
        description: 'Em 2018 participei ativamente do desenvolvimento do Projeto Diário Escola. <br><br> O Diário Escola é uma plataforma robusta de gestão e comunicação escolar, projetada para conectar escolas, pais e alunos de forma simples e segura. <br><br> O aplicativo substitui a tradicional agenda de papel, permitindo o registro da rotina diária dos alunos, envio de comunicados, fotos e eventos em tempo real. Além da comunicação, oferece módulos de gestão financeira e administrativa para otimizar os processos da instituição. <br><br> Acesse: <a href="https://diarioescola.com.br/" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline;">www.diarioescola.com.br</a>'
    }
};

function openModal(id) {
    const modal = document.getElementById('project-modal');
    const body = document.getElementById('modal-body');
    const data = projectData[id];
    
    body.innerHTML = `<h2>${data.title}</h2><br><p>${data.description}</p>`;
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('project-modal').style.display = 'none';
}

function openContactModal() {
    document.getElementById('contact-modal').style.display = 'flex';
}

function closeContactModal() {
    document.getElementById('contact-modal').style.display = 'none';
}

// Fecha modal se clicar fora dele
window.onclick = (event) => {
    const projectModal = document.getElementById('project-modal');
    const contactModal = document.getElementById('contact-modal');
    
    if (event.target == projectModal) {
        closeModal();
    } else if (event.target == contactModal) {
        closeContactModal();
    }
};