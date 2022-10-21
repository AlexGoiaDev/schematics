import { Injectable } from '@nestjs/common';<% if (crud && type !== 'graphql-code-first' && type !== 'graphql-schema-first') { %>
import { Create<%= singular(classify(name)) %>Dto } from './dto/create-<%= singular(name) %>.dto';
import { Update<%= singular(classify(name)) %>Dto } from './dto/update-<%= singular(name) %>.dto';<% } else if (crud) { %>
import { Create<%= singular(classify(name)) %>Input } from './dto/create-<%= singular(name) %>.input';
import { Update<%= singular(classify(name)) %>Input } from './dto/update-<%= singular(name) %>.input';<% } %>
import { <%= singular(classify(name)) %> } from './entities/<%= lowercased(singular(classify(name))) %>.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate, Paginated, PaginateQuery } from 'nestjs-paginate';


@Injectable()
export class <%= classify(name) %>Service {<% if (crud) { %>

  constructor(
    @InjectRepository(<%= singular(classify(name)) %>)
    private readonly <%= lowercased(singular(classify(name))) %>Repository: Repository<<%= singular(classify(name)) %>>,
  ) {}

  create(<% if (type !== 'graphql-code-first' && type !== 'graphql-schema-first') { %>create<%= singular(classify(name)) %>Dto: Create<%= singular(classify(name)) %>Dto<% } else { %>create<%= singular(classify(name)) %>Input: Create<%= singular(classify(name)) %>Input<% } %>) {
    return this.<%= lowercased(singular(classify(name))) %>Repository.save(create<%= singular(classify(name)) %>Dto);
  }

   findAll(query: PaginateQuery): Promise<Paginated<<%= singular(classify(name)) %>>>{
    return paginate(query,this.<%= lowercased(singular(classify(name))) %>Repository, { 
      sortableColumns: ['id'],
    });
  }

  findOne(id: number) {
    return this.<%= lowercased(singular(classify(name))) %>Repository.findOneBy({ id });
  }

  update(id: number, <% if (type !== 'graphql-code-first' && type !== 'graphql-schema-first') { %>update<%= singular(classify(name)) %>Dto: Update<%= singular(classify(name)) %>Dto<% } else { %>update<%= singular(classify(name)) %>Input: Update<%= singular(classify(name)) %>Input<% } %>) {
    return this.<%= lowercased(singular(classify(name))) %>Repository.update({ id }, update<%= singular(classify(name)) %>Dto);
  }

  remove(id: number) {
    return this.<%= lowercased(singular(classify(name))) %>Repository.delete({ id });
  }
<% } %>}
