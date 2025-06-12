import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';

const ViewPath = './src/views/';

function getTemplate(name: string): string {
  const templatePath = path.join(ViewPath, name);
  if (!existsSync(templatePath)) {
    throw new Error(`Template ${name} not found`);
  }
  const content = readFileSync(templatePath);
  return content.toString('utf-8');
}

export default getTemplate;
