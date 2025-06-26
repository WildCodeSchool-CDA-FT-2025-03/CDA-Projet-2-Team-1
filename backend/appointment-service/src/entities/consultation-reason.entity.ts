import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import ConsultationEntity from './consultation.entity';

@Entity('reason_consultation')
export class ConsultationReason extends BaseEntity {
  // ← AJOUTE extends BaseEntity
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 128, unique: true })
  name: string;

  @OneToMany(() => ConsultationEntity, (consultation) => consultation.reasonConsultation)
  consultations: ConsultationEntity[];
}
