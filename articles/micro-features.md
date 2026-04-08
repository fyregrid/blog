# Arquitetura Baseada em Funcionalidades

Aplicações crescem. Estruturas organizadas por tipo técnico como `components`, `services` e `utils` começam simples, mas rapidamente viram um sistema difícil de navegar.

A Arquitetura Baseada em Funcionalidades muda esse eixo. O código passa a ser organizado pelo que o sistema faz. Cada funcionalidade vira um bloco isolado, contendo interface, lógica e acesso a dados.

Isso reduz dispersão e melhora a leitura do projeto.

## Estrutura por domínio

Em vez de separar por tecnologia, a divisão é por funcionalidade.

`auth`, `cart`, `search`. Cada uma dessas partes existe como um módulo próprio. Nada fica espalhado entre várias pastas técnicas.

Você entra em uma feature e encontra tudo ali. Isso reduz o esforço de entendimento e limita o impacto de mudanças.

## Estrutura no front-end

Uma forma comum de aplicar isso é usando uma hierarquia previsível de pastas:

`app`  
Responsável pela inicialização da aplicação, providers globais e configuração geral.

`pages`  
Representa as rotas. Cada página organiza e compõe funcionalidades.

`widgets`  
Blocos maiores de interface que combinam múltiplas features.

`features`  
Onde vivem as funcionalidades reais. Cada pasta representa uma ação ou regra de negócio. Ex: `features/auth`, `features/add-to-cart`.

`entities`  
Modelos centrais do sistema. Representam dados como `user`, `product`, `order`.

`shared`  
Código genérico. Componentes base, utilitários, helpers. Não deve conter regra de negócio.

## Regra de dependência

Existe uma regra simples e rígida:

Camadas de cima só podem depender das de baixo.

`pages` pode usar `features`.  
`features` pode usar `entities` e `shared`.  
Mas o inverso não acontece.

Isso evita dependências circulares e mantém o isolamento.

## Organização interna da feature

Dentro de uma feature, a estrutura costuma seguir um padrão:

`ui`  
Componentes visuais

`model`  
Estado, regras e lógica

`api`  
Chamadas externas

`lib`  
Funções auxiliares internas

Tudo que pertence à feature fica encapsulado aqui.

## Back-end no mesmo modelo

No back-end, a lógica é a mesma.

Cada funcionalidade pode ser tratada como uma unidade isolada. Um handler, função ou serviço independente.

`auth-service`  
`comment-service`  
`payment-service`

Cada um recebe requisições, processa e responde sem depender diretamente dos outros.

Isso permite escalar partes do sistema de forma independente.

## Benefícios

Menos código espalhado.

Leitura mais direta.

Mudanças mais seguras.

Escalabilidade mais previsível.

Times conseguem trabalhar em paralelo sem conflito constante.

## Limitações

Exige disciplina na estrutura.

A pasta `shared` pode virar bagunça se não houver controle.

Comunicação entre features precisa ser bem definida.

Para projetos pequenos, pode ser excesso.

## Conclusão

Organizar por funcionalidade reduz complexidade estrutural real.

Pastas como `app`, `pages`, `features`, `entities` e `shared` deixam de ser só organização e passam a refletir o sistema.

Quando o projeto cresce, isso evita o colapso comum de código espalhado e difícil de manter.