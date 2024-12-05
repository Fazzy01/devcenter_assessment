import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';


@Schema()
export class User {
  @Prop({ required: true })
  surname: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  pin: number;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.methods.comparePassword = async function(password: string): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};

UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
