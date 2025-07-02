import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export function setupSwagger(app: INestApplication): void {
  const config = new DocumentBuilder()
    .setTitle('API BARBERSHOP')
    .setDescription(
      'API dedicada à gestão das informações de agendamento de serviços da barbearia.',
    )
    .setVersion('1.0')
    .addTag('Rotas')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('Api', app, document);
}
