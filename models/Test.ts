import { getModelForClass, prop } from '@typegoose/typegoose';

class Test {
  @prop()
  public field?: string;
}

export default getModelForClass(Test);
