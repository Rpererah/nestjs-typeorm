import { Column, Entity } from "typeorm";

@Entity({name:"produto-imagens"})
export class ImagemProduto {
    @Column({name:"url",length:100,nullable:false})
    url: string;
    descricao: string;
  }