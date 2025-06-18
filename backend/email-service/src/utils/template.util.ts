import Handlebars from 'handlebars';
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

const emailTemplate = Handlebars.compile(getTemplate('template.view.hbs'));

function getEmailTemplate(name: string) {
  Handlebars.registerPartial('body', getTemplate(name));
  return emailTemplate;
}

export default getEmailTemplate;
