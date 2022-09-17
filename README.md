# Dashboard de Clientes

Este desafio faz parte do processo seletivo para desenvolvedores FullStack da **Predialize**.
<p align="center">
<a href="https://insomnia.rest/run/?label=Teste%20Dashboard%20de%20Clientes&uri=https%3A%2F%2Fraw.githubusercontent.com%2FReygis%2Fpredialize_test%2Fmain%2Fdocs%2FInsomnia_2022-09-17.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia" align='center'></a>
</p>

Finalizado todas as rotas da API.

Porem front-end não finalizado, não foi possivel consumir todas as rotas.

Erros encontrados
```
Erros no app: {

1 -
npm ERR! ERESOLVE unable to resolve dependency tree (na instalação de jasmine-core pois existe incompatibilidade na versão das dependencias)
instalado com $ npm install -save --legacy-peer-deps
possivelmente dependencia não irá funcionar, porem como jasmine trata de testes será ignorado por hora.

2 - 
no arquivo => src/app/pages/client/client.component.ts não estava chamando a função ngOnInit(): necessária para implementação da classe OnInit segundo documentação do angular => https://angular.io/api/core/OnInit

3 
no arquivo => src/app/navigation/navbar.component.ts - dentro do componente a templateUrl não está funcionando pois path está como navbarS.component.html ao invez de navbar.component.html

4 - 
no arquivo => src/app/pages/pages.module.ts - EnterpriseModule não foi importado dentro do @NgModule

*** a partir desse ponto o app já consegue ser executado ***

5 - 
no arquivo => src/app/pages/client/client.module.ts - dentro do @NgModule ñ foi declarado o provider com o consumo da api, o que iria causar erro depois da implementação da API

6 - 
no arquivo => src/app/app-routing.module.ts - não foi importado ClientRoutes 

7 -
porta da API incorreta, em APP estava como porta 3001 e na API porta 3000, alterado na API

}

```



