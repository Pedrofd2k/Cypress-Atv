/// <reference types="cypress" />

describe('Teste de login do usuário', () => {
    it('Realizar login com sucesso', () => {
        const username = 'testuser';
        const password = 'test123';

        cy.request({
            method: 'GET',
            url: `https://petstore.swagger.io/v2/user/login?username=${username}&password=${password}`,
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.headers).to.have.property('x-expires-after');
            expect(response.headers).to.have.property('x-rate-limit');
        });
    });
});
