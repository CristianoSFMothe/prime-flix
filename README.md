# Prime Flix

Prime Flix é uma aplicação web desenvolvida com **React** que permite aos usuários explorar filmes utilizando a **API do TMDB** (The Movie Database). A aplicação oferece funcionalidades para salvar filmes favoritos no `localStorage`, visualizar detalhes sobre o filme e assistir aos trailers diretamente no YouTube.

![image](https://github.com/user-attachments/assets/0a0e1d97-907a-4171-a05c-ba3a3cdc5723)


## Funcionalidades

- 🔍 **Pesquisa de Filmes**: Permite pesquisar filmes pelo nome usando a API do TMDB.
- ❤️ **Favoritos**: Marque filmes como favoritos e salve-os no `localStorage`. Na tela de favoritos, você poderá visualizar uma descrição do filme e assistir ao trailer no YouTube.
- 🎥 **Visualização de Trailer**: Ao acessar a lista de favoritos, é possível assistir ao trailer do filme diretamente no YouTube.
- 📱 **Interface Responsiva**: Design otimizado para dispositivos móveis e desktop.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface.
- **TMDB API**: API para buscar informações sobre filmes.
- **localStorage**: Armazenamento local para salvar filmes favoritos.
- **YouTube API**: Exibição de trailers diretamente no YouTube.

## Funcionalidades Futuras

- 🔎 **Campo de Pesquisa de Filme pelo Nome**: Implementação de um campo de pesquisa para encontrar filmes pelo nome.

## Como Rodar o Projeto

1. Clone este repositório:

   ```bash
   git clone https://github.com/CristianoSFMothe/prime-flix.git
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

4. Abra o navegador e acesse:

   ```
   http://localhost:3000
   ```

## Estrutura de Diretórios

```
prime-flix/
├── public/
├── src/
│   ├── components/  # Componentes reutilizáveis
│   ├── pages/       # Páginas principais da aplicação
│   ├── services/    # Funções para interação com a API do TMDB
│   └── App.js       # Componente principal
├── .gitignore
├── package.json
└── README.md
```

## Contribuindo

Se você quiser contribuir para o projeto, fique à vontade para abrir issues ou pull requests. Toda contribuição é bem-vinda!

## Licença

Distribuído sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais informações.

### O que foi adicionado:
1. **Funcionalidades atualizadas**: Agora inclui a possibilidade de visualizar a descrição do filme e assistir ao trailer no YouTube na tela de favoritos.
2. **Campo de pesquisa**: A funcionalidade para pesquisar filmes pelo nome foi mencionada como algo a ser implementado em breve.
3. **Ícones**: Os ícones foram incluídos nos tópicos para tornar o `README` mais visualmente atraente.
  
Esse modelo deve estar bem alinhado com as atualizações do seu projeto!
