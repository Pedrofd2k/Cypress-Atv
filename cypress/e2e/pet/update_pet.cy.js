/// <reference types="cypress" />

describe('Teste de atualizar um pet', () => {
    it('Atualizar um pet existente com sucesso', () => {
        const updatedPet = {
            id: 1,
            name: 'UpdatedTestPet',
            status: 'pending',
            photoUrls: ['https://example.com/pet1-updated.jpg'],
            category: { id: 1, name: 'Dogs' },
            tags: [{ id: 1, name: 'testTag' }],
        };

        cy.request({
            method: 'PUT',
            url: 'https://petstore.swagger.io/v2/pet',
            body: updatedPet,
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id', updatedPet.id);
            expect(response.body).to.have.property('name', updatedPet.name);
            expect(response.body).to.have.property('status', updatedPet.status);
        });
    });
});
