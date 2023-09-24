import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:'Usuarios'})
export class UsuarioEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({name:'nome',length:100,nullable:false})
  nome: string;
  @Column({name:'email',length:70,nullable:false})
  email: string;
  @Column({name:'senha',length:255,nullable:false})
  senha: string;
  @CreateDateColumn({name:'create_at'})
  create_at: string;
  @UpdateDateColumn({name:'update_at'})
  update_at:string;
  @DeleteDateColumn({name:'delete_at'})
  delete_at:string;
}
