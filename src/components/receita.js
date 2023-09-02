class CardReceita extends HTMLElement {
    constructor() {
      super();
  
      const shadow = this.attachShadow({ mode: 'open' });
  
      const style = document.createElement('style');
      style.textContent = `
        .receita{
          max-width: 100%;
          display: grid;
          grid-template-rows: 1fr 1fr;
          border-radius: 1rem;
          margin: 10px;
          box-shadow: 6px 6px 7px -1px rgba(0,0,0,0.38);
          -webkit-box-shadow: 6px 6px 7px -1px rgba(0,0,0,0.38);
          -moz-box-shadow: 6px 6px 7px -1px rgba(0,0,0,0.38);
          background-color: lightgrey;
          height: 250px;
          background-image: url(${this.getAttribute("bg-imagem")} );
          background-size: cover;
          background-repeat: no-repeat;
        }
        .receita .receita_top img{
          width: calc(100% - 20px);
          max-width: calc(100% - 20px);
          margin: 10px; 
          border-radius: 1rem;
          object-fit: cover;
          height: calc(100% - 20px);
          max-height: calc(100% - 20px);
        }
        .receita .receita_bottom .titulo{
          max-width: calc(100% - 20px);
          margin: 0 10px; 
          display: flex;
          justify-content: center;
          border-radius: 1rem;
          text-align: center;
          color: red;
          
        }
        .titulo a{
          text-decoration: none;
          color:chocolate;
          background-color: rgba(255, 255, 255, 0.6);
          border-radius: 1rem;
          padding: 5px;
        }
  
        .receita .receita_bottom p{
          max-width: calc(100% - 20px);
          margin: 0 10px 10px; 
          display:flex;
          justify-content:center;
          border-radius:1rem;
          text-align:center;
          color:blue;
          background-color: rgba(255, 255, 255, 0.6);
        }
      `;
      shadow.appendChild(style);
  
      const receita = document.createElement('div');
      receita.className = 'receita';
      
  
      const receitaTop = document.createElement('div');
      receitaTop.className = 'receita_top';
  
      const receitaBottom = document.createElement('div');
      receitaBottom.className = 'receita_bottom';
      
      const titulo = document.createElement('span');
      titulo.className = 'titulo';
      receitaBottom.appendChild(titulo);
      
      const link = document.createElement('a');
      link.href = this.getAttribute("link-src");
      link.textContent = this.getAttribute("link-content") || "Titulo";
      titulo.appendChild(link);
      
      const br = document.createElement('br');
      
      const p = document.createElement('p');
      p.textContent = this.getAttribute("content");
      
      
      receitaBottom.appendChild(br);
      receitaBottom.appendChild(p);
  
      receita.appendChild(receitaTop);
      receita.appendChild(receitaBottom);
  
      shadow.appendChild(receita);
    }
  }
  
  customElements.define('c-receita', CardReceita);
  