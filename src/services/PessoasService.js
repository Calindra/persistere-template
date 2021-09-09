import Ame from 'ame-super-app-client';

export default class PessoasService {

    static saveOne = async (name) => {
        const data = { name }
        return await Ame.server.exec('PessoasRepository.save', data)
    }

    static findAll = async () => {
        return await Ame.server.exec('PessoasRepository.findAll')
    }

}