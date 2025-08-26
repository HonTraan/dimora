import { IsString, IsNotEmpty } from 'class-validator';

export class GeocodeDto {
  @IsString()
  @IsNotEmpty()
  address: string;
}
