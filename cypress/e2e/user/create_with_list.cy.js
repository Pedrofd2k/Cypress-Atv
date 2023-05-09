/// <reference types="cypress" />

describe('Teste de criar lista de usuários', () => {
    it('Cria uma lista de usuários com sucesso', () => {
        const users = [
            {
                id: 1,
                username: 'testuser1',
                firstName: 'Test1',
                lastName: 'User1',
                email: 'testuser1@example.com',
                password: 'test123',
                phone: '1234567890',
                userStatus: 1,
            },
            {
                id: 2,
                username: 'testuser2',
                firstName: 'Test2',
                lastName: 'User2',
                email: 'testuser2@example.com',
                password: 'test456',
                phone: '0987654321',
                userStatus: 0,
            }
        ];

        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/user/createWithList',
            body: users,
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });
});