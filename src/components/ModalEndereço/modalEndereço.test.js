import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import BuscarEndereço from './index';

describe('BuscarEndereço', () => {
    it('retorna dados quando BuscarEndereço é chamado', done => {
        var mock = new MockAdapter(axios);
        const data = { response: true };
        const estado = 'CE';
        const municipio = 'crateús';
        const logradouro = 'francisco';

        mock.onGet(`https://viacep.com.br/ws/${estado}/${municipio}/${logradouro}/json`).reply(200, data);

      BuscarEndereço(0, 'any').then(response => {
            expect(response).toEqual(data);
            done();
        });
    });
});