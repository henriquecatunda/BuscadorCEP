import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import ModalCEP from './index';

describe('ModalCEP', () => {
    it('retorna dados quando ModalCEP é chamado',  done => {
        var mock = new MockAdapter(axios);
        const data = { response: true };
        const cep = 63700290;
        mock.onGet(`https://viacep.com.br/ws/${cep}/json`).reply(200, data);

      ModalCEP(0, 'any').then(response => {
            expect(response).toEqual(data);
            done();
        });
    });

});

