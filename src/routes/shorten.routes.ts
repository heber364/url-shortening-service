// src/routes/shorten.routes.ts
import { FastifyInstance } from 'fastify';
import { ShortenService } from '../services/shorten.service';
import { ShortenController } from '../controllers/shorten.controller';
import { prismaClient } from '../db/prisma-client';
import { createShortenSchema } from '../validators/shorten.validator';
import { ZodTypeProvider } from 'fastify-type-provider-zod';

export async function shortenRoutes(app: FastifyInstance) {

  const shortenService = new ShortenService(prismaClient);
  const shortenController = new ShortenController(shortenService);

  const fastify = app.withTypeProvider<ZodTypeProvider>();

  fastify.post('/', {
    schema: createShortenSchema
  }, shortenController.create);

  app.patch('/:shortCode', shortenController.update);
  app.get('/:shortCode', shortenController.redirect);
  app.get('/:shortCode/stats', shortenController.getStats);
  app.delete('/:shortCode', shortenController.delete)
}
