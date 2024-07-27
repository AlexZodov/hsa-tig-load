import { IsString } from 'class-validator';

export class CreateUnit1Dto {
  @IsString()
  unit1_id: string;

  @IsString()
  type: string;
}
