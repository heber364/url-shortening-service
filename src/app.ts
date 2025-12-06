import 'dotenv/config'; 
import fastify from 'fastify';
import { shortenRoutes } from './routes/shorten.routes';
import { serializerCompiler, validatorCompiler, ZodTypeProvider } from 'fastify-type-provider-zod';

export const app = fastify({ logger: true }).withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(shortenRoutes, { prefix: '/shorten' });
