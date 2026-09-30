import  botao from './Botao.css'

const Botao = (props) => {
  return (<button className='botao'>
    {props.children}
  </button>
  )
}

export default Botao
