import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import CadastroLG from '../support/pages/CadastroLG';

test.describe('Cadastro de usuário', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let cadastroLG: CadastroLG;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.LG_QA')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    cadastroLG = new CadastroLG(page);
    await page.goto(BASE_URL);
  });

  test('Preencher formulário de cadastro', async () => {
    await cadastroLG.preencherFormulario();
    await cadastroLG.validarCadastro();
  });
});
