/// <reference types="cypress" />

describe('Teste de criar usuário', () => {
    it('Criar um novo usuário com sucesso', () => {
        const user = {
            id: 1,
            username: 'testuser',
            firstName: 'Test',
            lastName: 'User',
            email: 'testuser@example.com',
            password: 'test123',
            phone: '1234567890',
            userStatus: 1,
        };

        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/user',
            body: user,
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });
});
