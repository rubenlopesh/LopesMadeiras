export class madeirasclass
{
  id: number;
  nome: string;
  isDisponivel: number;
  preco: number;
  descricao: string;
  imagem: string;

  constructor(id: number, nome: string, isDisponivel: number, preco: number, descricao: string, imagem: string) {
    this.id = id;
    this.nome = nome;
    this.isDisponivel = isDisponivel;
    this.preco = preco;
    this.descricao = descricao;
    this.imagem = imagem;

  }
}
