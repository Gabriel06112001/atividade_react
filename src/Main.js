function Main(){
    return(
        <div className="main ">
        <div className="center">
        <div className="menu">
          <div className="logo">
    <h3>Atividade JavaScript-react</h3>
          </div>
          <div className="item-menu">
            <a href="#">LOGIN </a>
          </div>
          </div>
          <div className="form">
          <h2>cadastro</h2>
            <form>
              
              <div className="itens-form">
                <input placeholder="Seu nome..." type="text" />
                <input placeholder="Seu E-mail..." type="text" />
                <input placeholder="Sua idade..."type="text" />
                <input placeholder="Sua cidade..." type="text" />
                <input  type="submit" value="Enviar"/>
              </div>
            </form>
          </div>
        </div>
      </div>  
    )
}
export default Main;