# Desenvolvimento

Site estático em HTML, CSS e JavaScript, com imagens extraídas do SVG fornecido. Não requer pacotes, build ou credenciais.

Na pasta `/workspace/site-fotografo-`, execute:

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

Validação: faça uma requisição HTTP à página inicial e aos arquivos `styles.css`, `app.js` e `assets/`. No navegador, confira navegação, menu móvel, abertura e fechamento dos projetos, animações de scroll, acordeão e preparação da mensagem.

O contato prepara e copia a mensagem; não envia dados. Configure um destinatário ou serviço de envio em uma tarefa posterior. Os projetos são estudos conceituais, não trabalhos de clientes.

Use o checkout existente; não crie worktrees para tarefas comuns. O servidor deve ser iniciado novamente em cada ambiente: processos não fazem parte do snapshot.

## Visualizar no Windows

Baixe o ZIP do repositório, escolha Extrair Tudo e abra ABRIR-SITE.bat ou visualizar.html. O arquivo visualizar.html reúne CSS, JavaScript e imagens localmente; não precisa de instalação ou internet. O contato prepara a mensagem e não realiza envio direto.
