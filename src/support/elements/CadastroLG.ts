import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class CadastroLGElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getCampoNome(): Locator {
    return this.page.locator('input[id="firstName"]');
  }

  getCampoSobrenome(): Locator {
    return this.page.locator('input[id="lastName"]');
  }

  getCampoEmail(): Locator {
    return this.page.locator('input[id="email"]');
  }

  getBotaoConfirmarEmail(): Locator {
    return this.page.locator('text=Verificar e-mail');
  }

  getCampoCelular(): Locator {
    return this.page.locator('input[id="mobileNumber"]');
  }

  getCampoDia(): Locator {
    return this.page.locator('input[id="day"]');
  }

  getCampoMes(): Locator {
    return this.page.locator('select[id="month"]');
  }

  getCampoAno(): Locator {
    return this.page.locator('input[id="year"]');
  }

  getCampoSenha(): Locator {
    return this.page.locator('input[id="password"]');
  }

  getCampoConfirmarSenha(): Locator {
    return this.page.locator('input[id="confirmPassword"]');
  }

  getCampoCheckTermos(): Locator {
    return this.page.getByLabel('Concordo com os Termos de Utilização. ');
  }

  getCampoCheckPolitica(): Locator {
    return this.page.locator('#privacyPolicy');
  }

  getBotaoCadastrar(): Locator {
    return this.page.locator('#button__signup--submit');
  }

  getMessageOK(): Locator {
    return this.page.locator('text=Verifique Sua Conta LG.com');
  }
}
