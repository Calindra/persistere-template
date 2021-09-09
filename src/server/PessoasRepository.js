export default class PessoasRepository {

    async save(req) {
        console.debug(`Inserindo ... ${req.body}!"`)

        await db.Pessoas.insertOne(req.body)

        return { ok: `Dado salvo com sucesso` }
    }

    async findAll(req) {
        console.debug(`Buscando ... ${req.body}!"`)

        const result = await db.Pessoas.find({})
        const people = result.map((doc) => doc.name)
        return { ok: `Nomes obtidos com sucesso` , people }
    }
}