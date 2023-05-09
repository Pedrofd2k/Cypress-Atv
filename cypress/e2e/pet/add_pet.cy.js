/// <reference types="cypress" />

describe('Teste de adicionar um pet', () => {
    it('Adicionar um novo pet com sucesso', () => {
        const pet = {
            id: 1,
            name: 'TestPet',
            status: 'available',
            photoUrls: ['https://example.com/pet1.jpg'],
            category: { id: 1, name: 'Dogs' },
            tags: [{ id: 1, name: 'testTag' }],
        };

        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/pet',
            body: pet,
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id', pet.id);
            expect(response.body).to.have.property('name', pet.name);
            expect(response.body).to.have.property('status', pet.status);
        });
    });
});
