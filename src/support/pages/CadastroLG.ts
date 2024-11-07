import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import CadastroLGElements from '../elements/CadastroLG';
import BasePage from './BasePage';

export default class CadastroLG extends BasePage {
  readonly cadastroElements: CadastroLGElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.cadastroElements = new CadastroLGElements(page);
  }

  async preencherFormulario(): Promise<void> {
    await this.cadastroElements.getCampoCheckTermos().click({ force: true });
    await this.cadastroElements.getCampoCheckPolitica().click({ force: true });
    await this.cadastroElements.getCampoEmail().fill('a@b.com.br');
    await this.cadastroElements.getBotaoConfirmarEmail().click();
    await this.cadastroElements.getCampoNome().fill(faker.person.firstName());
    await this.cadastroElements
      .getCampoSobrenome()
      .fill(faker.person.lastName());
    await this.cadastroElements.getCampoCelular().fill('33223745050');
    await this.cadastroElements.getCampoDia().fill('4');
    await this.cadastroElements.getCampoMes().selectOption('Janeiro');
    await this.cadastroElements.getCampoAno().fill('2000');
    await this.cadastroElements.getCampoSenha().fill('Teste4403!');
    await this.cadastroElements.getCampoConfirmarSenha().fill('Teste4403!');

    await new Promise(resolve => setTimeout(resolve, 4000));
    await this.cadastroElements.getBotaoCadastrar().click({ force: true });
  }

  async validarCadastro(): Promise<void> {
    await expect(this.cadastroElements.getMessageOK()).toBeVisible();
  }
}
