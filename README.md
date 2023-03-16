# Desafio FrontEnd - Seri.e Design

## Layout:
[Figma](https://www.figma.com/proto/Q1p4dwPcasnniRIXp0K4Tz/Template-Glowshine?page-id=0%3A1&node-id=202%3A3654&viewport=-119%2C662%2C0.14&scaling=scale-down&starting-point-node-id=202%3A253)

## Build Setup

```bash
# Instalar dependências
$ npm install

# Rodar o projeto em: localhost:3000
$ npm run dev

# Buildar para produção e servidor
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
Nesse desafio, usei PUG, para facilitar na marcação do HTML. 

## Diretórios 

### `assets`

O diretório de assets contém seus recursos não compilados, como arquivos Sass(.scss) e imagens.

### `components`

O diretório de components contém seus componentes Vue.js. Os componentes compõem as diferentes partes da sua página e podem ser reutilizados e importados para suas páginas, layouts e até mesmo outros componentes.

Segue a lista dos componetes renderizados em todo site:
- `Layouts/LayoutDefault.vue`: Componente com markup geral do site, que puxa o header, footer e o 'slot' que traz o markup da rota acessada, alem de verificar o localStorage 'cart';
- `Layouts/Header.vue`: Componente com markup do cabecalho;
- `Layouts/Footer.vue`: Componente com markup do rodapé;
- `Layouts/SearchHeader.vue`: Components com markup do formulário de busca;
- `Layouts/CartIcon.vue`: Components com markup do svg do carrinho;
- `Layouts/Menu/MenuDesk.vue`: Components com markup do menu principal;
- `Layouts/Menu/SubMenu1.vue`: Components com markup do sub menu 1;
- `Layouts/Menu/CartIcon.vue`: Components com markup do sub menu 2;
- `Newsletter.vue`: Components com markup do formulário de newsletter, chamado dentro do `Layouts/Footer.vue`;


Segue a lista dos componetes renderizados na página principal com os produtos:
- `BannersDestaques.vue`: Components com markup dos 3 primeiros banners da página;
- `VueSlickCarousel`: Componente do plugin: "vue-slick-carousel", para fazer o carousel do produtos, diferente dos demais componente, esse componente não tem um arquivo .vue dele, porque ele é um plugin para fazer o carousel, está sendo chamando no componente: `ListPosts/SlickProducts.vue`;
- `ListPosts/SlickProducts.vue`: Componente com lista dos produtos da loja, dentro desse componente chama o componente: `ListPosts/CartProduct.vue` que renderiza o card de cada produto;
- `ListPosts/CartProduct.vue`: Componente que renderiza o card do produto, com foto, titulo e preço, além do botão de adicionar no carrinho;
- `Preload/Index.vue`: Componente que exibe um preload enquanto não finaliza a promisse que requisita os produtos, depois que finaliza a promisse ele para de ser renderizado e renderiza o `ListPosts/SlickProducts.vue`;

Segue a lista dos componetes renderizados na página de carrinho:
- `ListCart/ListCart.vue`: Componente com markup da do carrinho como os itens dos produtos inclusos no carrinho, botões de voltar para o site, limpar carrinho e ir para o checkout;
- `ListCart/CartProduct.vue`: Componente com markup da linha do produto incluso no carrinho, chamado no componente: `ListCart/ListCart.vue`, nesse componente é renderizado as informações do produto como: Nome, Categoria, preço. Tem as acções de alterar quantidade do produto, remover o mesmo e calculo total do item;
- `ListCart/EmptyCart.vue`: Componente com markup básico com mensagem que o carrinho está vázio;

Segue a lista dos componetes renderizados na página de checkout:
- `ModalSuccess.vue`: Componente com markup do modal que abre quando o usuario faz o submit do formulário do checkout;

### `pages`

Esse diretório contém as exibições e rotas do aplicativo. O Nuxt lerá todos os arquivos `*.vue` dentro deste diretório e configurará o Vue Router automaticamente.

Segue a lista das rotas disponiveis:
- `index.vue`: Componente da principal da página de listagem dos produtos;
- `cart.vue`: Componente da principal da página do carrinho;
- `checkout.vue`: Componente da principal da página de checkout;

### `static`

Este diretório contém seus arquivos estáticos. Cada arquivo dentro deste diretório é mapeado para `/`.

Exemplo: `/static/robots.txt` é mapeado como `/robots.txt`.

### `store`
Este diretório contém seus arquivos de armazenamento Vuex. Criar um arquivo neste diretório ativa automaticamente o Vuex.

Segue os stores:
- `api.js`: Geralmente, deixo só para tratar as requisições como este caso, só para retornar as promisses.
- `cart.js`: Tem o state: cart, tem as mutações para: modificar o state (update_state); Adicionar no carrinho (push_cart); editar quantidade do produto (edit_productQtd); remover um produto (removeProd); 
Tem as ações: 'action_clean_cart': que chama a mutação de limpar o carrinho; 'action_add_cart': que verifica se tem o produto no carrinho, caso não tenha: adiciona o produto no carrinho chamando a mutação: push_cart, se não só altera a quantidade do produto chamando a mutação: edit_productQtd; 'action_remove': que chama a mutação 'removeProd'; 'action_change_qtd': que chama a mutação: edit_productQtd; 'action_localStorage' que é chamada nas ações citadas anteriomente, para fazer a alteração no localStorage 'cart' de acordo com cada mudança no carrinho;
- `products.js`: Tem o state: products. A mutação: update_state para alterar o state products. A ação: request_products: nessa ação executa outra ação api/get_products (que requisita os produtos na api) para depois chamar a mutação: update_state.

### `plugins`
Este diretórios contem arquivos que chamam o plugin instalado: Como no arquivo mask.js, que chama o plugin 'VueTheMask' para fazer as mascaras nos inputs.

