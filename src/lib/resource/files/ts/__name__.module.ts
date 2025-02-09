import { Module } from '@nestjs/common';
import { <%= classify(name) %>Service } from './<%= name %>.service';
<% if (type === 'rest' || type === 'microservice') { %>import { <%= classify(name) %>Controller } from './<%= name %>.controller';<% } %><% if (type === 'graphql-code-first' || type === 'graphql-schema-first') { %>import { <%= classify(name) %>Resolver } from './<%= name %>.resolver';<% } %><% if (type === 'ws') { %>import { <%= classify(name) %>Gateway } from './<%= name %>.gateway';<% } %>
import { TypeOrmModule } from '@nestjs/typeorm';
import { <%= singular(classify(name)) %> } from './entities/<%= lowercased(singular(classify(name))) %>.entity';

@Module({
  <% if (type === 'rest' || type === 'microservice') { %>controllers: [<%= classify(name) %>Controller],
  providers: [<%= classify(name) %>Service]<% } else if (type === 'graphql-code-first' || type === 'graphql-schema-first') { %>providers: [<%= classify(name) %>Resolver, <%= classify(name) %>Service]<% } else { %>providers: [<%= classify(name) %>Gateway, <%= classify(name) %>Service]<% } %>,
  imports: [TypeOrmModule.forFeature([<%= singular(classify(name)) %>])],
})
export class <%= classify(name) %>Module {}
