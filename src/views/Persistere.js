import PessoasService from '../services/PessoasService';

export default class Home {
  
  // Utilize a variável state para controlar o estado da aplicação.
  constructor(props) {
    super(props)
    this.state = {
      message: '',
      name: '',
      people: [],
      show: false,
    }
  }
  
  async save() {
    try {
      this.setState({ show: true});
      const result = await PessoasService.saveOne(this.state.name)
      this.setState({ message: result.ok });
    } catch (e) {
      console.error(e);
      this.setState({ message: `Ops! Algo saiu errado: ${e.message}` });
    } finally {
      this.setState({ show: false, people: []});
    }
  }

  async findAll() {
    try {
      this.setState({ show: true});
      const {ok, people} = await PessoasService.findAll()
      this.setState({ message: ok , people });
    } catch (e) {
      console.error(e);
      this.setState({ message: `Ops! Algo saiu errado: ${e.message}` });
    }finally{
      this.setState({ show: false});
    }
  }

  onchange(value) {
    this.setState({ name: value})
  }
}
