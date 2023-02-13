import { Column, Entity,OneToMany,OneToOne,JoinColumn  } from 'typeorm'
import { BaseEntity } from './base.entity'

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
  @Column({ name: 'email', type: 'varchar'})
  email: string;
  @Column({ name: 'name', type: 'varchar','length': 128})
  name: string;
  @Column({ name: 'user_code', type: 'varchar','length': 6,comment:'unique auto generated 6 alphanumeric'})
  user_code: string;
  @Column({ name: 'type', type: 'varchar','length': 128})
  type: string;
  @Column({ name: 'contact_no', type: 'varchar','length': 15})
  contact_no: string;
  @Column({ name: 'password', type: 'varchar','length': 255})
  password: string;
  @Column({ name: 'salt', type: 'varchar','length': 128,comment:'generated by system, random for hashing'})
  salt: string;
  @Column({ name: 'locale', type: 'varchar','length': 255})
  locale: string;
  @Column({type: "enum", enum: ["A", "D"],})
  status: "A" | "D";
  @Column({ name: 'password_updated_at', type: 'timestamp'})
  password_updated_at: string;
  @Column({ name: 'access_token', type: 'varchar','length': 255,comment:'bear token_type'})
  access_token: string;
  @Column({ name: 'last_login', type: 'timestamp',comment:'can implement later'})
  last_login: string;
  @Column({ name: 'last_login_ip', type: 'varchar','length': 20})
  last_login_ip: string;
  @Column({ name: 'is_company_profile_completed', type: 'boolean',default: false,comment:'0: Not yet, 1: Yes'})
  is_company_profile_completed: boolean;
  @Column({ name: 'profile_picture', type: 'varchar','length': 255})
  profile_picture: string;
  @Column({ name: 'google_id', type: 'varchar','length': 255})
  google_id: string;

  @OneToMany(type => UserEntity, user => user.creator)
  createdUsers: UserEntity[];

  @OneToOne(type => UserEntity)
  @JoinColumn({ name: 'creator_id' })
  creator: UserEntity;

  @OneToOne(type => UserEntity)
  @JoinColumn({ name: 'updater_id' })
  updater: UserEntity;
}