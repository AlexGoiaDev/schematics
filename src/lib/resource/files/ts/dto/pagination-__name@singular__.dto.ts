import { ApiProperty } from '@nestjs/swagger';
import { Create<%= singular(classify(name)) %>Dto } from './create-<%= singular(name) %>.dto';
import { Pagination } from 'src/core/models/paginated.model';

export class Pagination<%= singular(classify(name)) %> extends Pagination {
  @ApiProperty({
    isArray: true,
    type: Create<%= singular(classify(name)) %>Dto,
  })
  data: Create<%= singular(classify(name)) %>Dto[];
}
