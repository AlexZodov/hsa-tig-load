import { IsString, IsOptional } from 'class-validator';

export class UpdateUnit1Dto {
  @IsString()
  @IsOptional()
  unit_id?: string;

  @IsString()
  type: string;
}
