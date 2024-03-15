import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
 textoPesquisa: string | undefined;
listaProdutos = [
  {
    imagem:"assets/produto.png", 
    descricao: 'ProdutoA',
    
    },
    {
      imagem:"assets/produto.png", 
      descricao: 'ProdutoB',
      
      },
      {
        imagem:"assets/produto.png", 
        descricao: 'ProdutoC',
        
        }


]
listaProdutosFiltro =this.listaProdutos;

pesquisar(){
if(!this.textoPesquisa){
  this.listaProdutosFiltro = this.listaProdutos;
}
else{  
  this.listaProdutosFiltro = this.listaProdutos.filter(item=>item.descricao === this.textoPesquisa)
}
 

}

}
