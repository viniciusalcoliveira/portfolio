<script>
  window.botpressWebChat.init({
    botId: "Dani",
    hostUrl: "https://cdn.botpress.cloud/webchat/v0",
    messagingUrl: "https://messaging.botpress.cloud",
    botName: "Dani",
    avatarUrl: "https://cdn-icons-png.flaticon.com/512/4712/4712107.png", 
    backgroundColor: "#0d1117", // Cor de fundo escura
    textColorOnGradient: "#ffffff", // Cor do texto
    enableConversationDeletion: true,
    showCloseButton: true, // Mantém o botão de fechar
    layoutWidth: "220px", // Ajusta a largura do chat
    layoutHeight: "240px", // Ajusta a altura do chat
    hideWidget: false,
    showPoweredBy: false,
    stylesheet: "https://viniciusalcoliveira.github.io/portfolio/style.css", // Usando o mesmo CSS do seu site
    launcher: {
      buttonColor: "#00bfff", // Cor do botão do chat
      borderRadius: "50%", // Torna o botão redondo
      buttonSize: "60px", // Tamanho do botão
    },
  });
</script>
// Abrir e fechar a janela do chatbot
const widget = document.querySelector('.bpw-widget');
const launcher = document.querySelector('.bpw-launcher');
const closeBtn = document.querySelector('.bpw-widget-close');

launcher.addEventListener('click', () => {
    widget.classList.toggle('open');
    widget.classList.toggle('closed');
});

closeBtn.addEventListener('click', () => {
    widget.classList.remove('open');
    widget.classList.add('closed');
});
