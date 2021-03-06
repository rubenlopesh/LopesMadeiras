//mock de data store,  sem usar JSON server

export interface Madeiras {
  id: number;
  nome: string;
  isDisponivel: number;
  preco: number;
  descricao: string;
  imagem: string;
}

export const madeiras = [
    {
      "id": 1,
      "nome": 'Eucalipto',
      "isDisponivel": 1,
      "preco": 100,
      "descricao": "Árvore mais comum em Portugal",
      "imagem": "https://img.clasf.pt/2020/04/23/LenhaFirewood-20200423094551.5269100015.jpg"
    },
    {
      "id": 2,
      "nome": "Carvalho",
      "isDisponivel": 1,
      "preco": 120,
      "descricao": "Madeira altamente durável e de grande qualidade e resistencia. Demora o dobro do tempo a queimar",
      "imagem": "https://www.boletosdeorum.pt/wp-content/uploads/2019/12/madeira-de-carvalho-inoculado.jpg"

    },
    {
      "id": 3,
      "nome": "Pinheiro",
      "isDisponivel": 1,
      "preco": 110,
      "descricao": "Madeira resistente á humidade e temperatura, muito usada para decoração",
      "imagem": "https://photos1.blogger.com/blogger/450/464/1600/Pinus-pinaster-Tibaes-0311-2.1.jpg"
    },
    {
      "id": 4,
      "nome": "Mistura",
      "isDisponivel": 1,
      "preco": 100,
      "descricao": "Mistura entre eucalipto e árvores selvagens (austrália, mimosa, plátano). Ideal para recuperadores de calor e lareiras comuns",
      "imagem": "https://www.anpm.org.br/wp-content/uploads/2018/03/pexels-photo-128639.jpeg"
    },
    {
      "id": 5,
      "nome": "Rolos",
      "isDisponivel": 1,
      "preco": 100,
      "descricao": "Ideal para salamandras e Fornos tradicionais",
      "imagem": "https://media.jardinitis.com/product/bordura-rollo-de-madera-tratada-en-autoclave-iv-800x800.jpeg"
    },
    {
      "id": 6,
      "nome": "Nogueira",
      "isDisponivel": 0,
      "preco": 130,
      "descricao": "Madeira lisa, elegante e resistente",
      "imagem": "https://www.jlm.com.pt/wp-content/uploads/2016/06/NOGUEIRA.jpg"
    },
  ]


