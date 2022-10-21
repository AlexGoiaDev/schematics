import { ApiProperty } from '@nestjs/swagger';

export class Create<%= singular(classify(name)) %>Dto {
    @ApiProperty({
        required: false,
    })
    id: number;
}
