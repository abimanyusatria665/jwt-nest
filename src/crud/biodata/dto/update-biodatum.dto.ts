import { PartialType } from '@nestjs/swagger';
import { CreateBiodatumDto } from './create-biodatum.dto';

export class UpdateBiodatumDto extends PartialType(CreateBiodatumDto) {}
