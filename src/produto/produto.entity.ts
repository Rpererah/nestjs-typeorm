import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";





@Entity({ name: 'produtos' })
export class ProdutoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ name: 'usuario_id', length: 100, nullable: false })
  usuarioId: string;
  @Column({ name: 'nome', length: 100, nullable: false })
  nome: string;
  @Column({ name: 'valor', nullable: false })
  valor: number;
  @Column({ name: 'quantidade', nullable: false })
  quantidade: number;
  @Column({ name: 'descricao', length: 255, nullable: false })
  descricao: string;
  @Column({ name: 'categoria', length: 100, nullable: false })
  categoria: string;
  @CreateDateColumn({name:'create_at'})
  create_at: string;
  @UpdateDateColumn({name:'update_at'})
  update_at:string;
  @DeleteDateColumn({name:'delete_at'})
  delete_at:string;
  //caracteristicas: CaracteristicaProduto[];
  //imagens: ImagemProduto[];
}
