import './App.css'
import CadastroTarefa from './CadastroTarefa'
import CadastroUsuario from './CadastroUsuario'
import axios from 'axios'

function App() {

  return (
    
    <>
    <div id="root">
  <img class="logo" src="/Imagens projeto VS/Bd_icone-removebg-preview.png" alt="Logo" />
</div>

    <h2>Realize o login: </h2> 
    
      <div>
        <CadastroUsuario/>
        <h2>Cadastre a tarefa:</h2>
        <CadastroTarefa/>
      </div>
    
      
    </>
  )
}

export default App