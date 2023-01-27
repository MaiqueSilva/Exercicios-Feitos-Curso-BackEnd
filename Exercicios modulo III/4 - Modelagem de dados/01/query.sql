-- Criando Banco de dados
create database ecommerce;

--Criando tabela produtos
create table produtos (
  id serial primary key,
  nome varchar(100),
  descricao text,
  preco integer,
  quantidade_em_estoque integer,
	categoria_id integer ); 
  
-- criando chave estrangeira fazer referencia a id da tabela categoria na coluna categoria_id da tabela produtos  
alter table produtos add constraint id_categoria_id foreign key (categoria_id) references categorias(id);
-- criando chave estrangeira fazer referencia ao cpf  da tabela clientes na coluna cliente_cpf da tabela pedidos  
alter table pedidos add constraint id_cpf_id foreign key (cliente_cpf) references clientes(cpf);
-- criando chave estrangeira fazer referencia ao cpf da tabela vendedores na coluna cliente_cpf da tabela pedidos  
alter table pedidos add constraint id_cpf foreign key (vendedor_cpf) references vendedores(cpf);
-- criando chave estrangeira fazer referencia a id da tabela pedidos na coluna pedidos_id da tabela itens_do_pedido  
alter table itens_do_pedido add constraint id_pedido foreign key (pedido_id) references pedidos(id);
-- criando chave estrangeira fazer referencia a id da tabela produtos na coluna produto_id da tabela itens_do_pedido  
alter table itens_do_pedido add constraint id_produto foreign key (produto_id) references produtos(id);



  --Criando tabela itens_do_pedido
  create table itens_do_pedido (
  id serial primary key,
 	pedido_id integer,
  quantidade integer,
	produto_id integer); 

  --Criando tabela pedidos
  create table pedidos (
  id serial primary key,
  valor integer,
  cliente_cpf char(11),
	vendedor_cpf char(11)
  ); 
  
  --Criando tabela clientes
  create table clientes(
    cpf char(11) unique,
    nome varchar(150)
  );
  
  --Criando tabela vendedores
  create table vendedores(
    cpf char(11) unique,
    nome varchar(150)
  );
  
  --Criando tabela categorias
  create table categorias(
    id serial primary key,
    nome varchar(50)
  );
  
  --Criando tabela categoria_id
create table categoria_id (
		categoria_id integer references categorias(id)
);

-- Alimentar a tabela categorias com as seguintes informações.

insert into categorias(nome) values ('frutas'), ('verduras'),('massas'), ('bebidas'), ('utilidades');

-- Alimentar a tabela produtos com as seguintes informações:

-- nome	descricao	preco	quantidade_em_estoque	categoria_id

insert into produtos(nome, descricao,	preco,	quantidade_em_estoque,	categoria_id)
values ('Mamão',	'Rico em vitamina A, potássio e vitamina C',	300,	123,	1), 
('Maça',	'Fonte de potássio e fibras.',	90,	34,	1),
('Cebola',	'Rico em quercetina, antocianinas, vitaminas do complexo B, C.',	50,	76,2	),
('Abacate',	'NÃO CONTÉM GLÚTEN.',	150,	64,	1),
('Tomate',	'Rico em vitaminas A, B e C.',	125,	88,	2),
('Acelga',	'NÃO CONTÉM GLÚTEN.',	235,	13,	2),
('Macarrão parafuso',	'Sêmola de trigo enriquecida com ferro e ácido fólico, ovos e corantes naturais',	690,	5,3),
('Massa para lasanha',	'Uma reunião de família precisa ter comida boa e muita alegria.',	875,	19,	3),
('Refrigerante coca cola lata',	'Sabor original',	350,	189,	4),
('Refrigerante Pepsi 2l',	'NÃO CONTÉM GLÚTEN. NÃO ALCOÓLICO.',	700,	12,	4),
('Cerveja Heineken 600ml',	'Heineken é uma cerveja lager Puro Malte, refrescante e de cor amarelo-dourado',	1200,	500,4),
( 'Agua mineral sem gás',	'Smartwater é água adicionado de sais mineirais (cálcio, potássio e magnésio) livre de sódio e com pH neutro.',	130,	478, 4),
('Vassoura',	'Pigmento, matéria sintética e metal.',	2350,	30,	5),
('Saco para lixo',	'Reforçado para garantir mais segurança',	1340,	90,	5),
('Escova dental',	'Faça uma limpeza profunda com a tecnologia inovadora',	1000,	44,	5),
('Balde para lixo', '50l	Possui tampa e fabricado com material reciclado',	2290,	55,5),
('Manga',	'Rico em Vitamina A, potássio e vitamina C',	198,	176,	1),
('Uva',	'NÃO CONTÉM GLÚTEN.',	420,	90,1);

-- 3 - Alimentar a tabela clientes com as seguintes informações

-- cpf	nome
-- 803.713.500-42	José Augusto Silva
-- 676.428.690-61	Antonio Oliveira
-- 631.933.100-34	Ana Rodrigues
-- 756.705.050-18	Maria da Conceição

insert into clientes(cpf,nome) values ('80371350042',	'José Augusto Silva'),
('67642869061',	'Antonio Oliveira'),
('63193310034',	'Ana Rodrigues'),
('75670505018',	'Maria da Conceição');

-- 4 - Alimentar a tabela vendedores com as seguintes informações

-- cpf	nome
-- 825.398.410-31	Rodrigo Sampaio
-- 232.625.460-03	Beatriz Souza Santos
-- 280.071.550-23	Carlos Eduardo

insert into vendedores(cpf,nome) values ('82539841031', 'Rodrigo Sampaio'),
('23262546003', 'Beatriz Souza Santos'),
('28007155023', 'Carlos Eduardo');

-- 5 - Agora que o banco de dados está alimentado, vamos realizar algumas vendas. Sendo assim, segue um relatórios para que as vendas sejam lançadas.

-- Obs.: Sempre que lançar uma venda, será necessário abater as quantidades no estoque dos produtos vendidos antes de uma nova venda.

-- a) José Algusto comprou os seguintes itens com o vendedor Carlos Eduardo:

-- - 1 Mamão, 1 Pepsi de 2l, 6 Heinekens de 600ml, 1 Escova dental e 5 Maçãs.


insert into pedidos (valor, cliente_cpf, vendedor_cpf) values (9650,80371350042,28007155023)

insert into itens_do_pedido(pedido_id,quantidade,produto_id) values (1, 1,1), (1,1,10), (1,6,11), (1,1,15), (1,5,2);

update produtos set quantidade_em_estoque = quantidade_em_estoque-1 where id = 1;
update produtos set quantidade_em_estoque = quantidade_em_estoque-1 where id = 10;
update produtos set quantidade_em_estoque = quantidade_em_estoque-6 where id = 11;
update produtos set quantidade_em_estoque = quantidade_em_estoque-1 where id = 15;
update produtos set quantidade_em_estoque = quantidade_em_estoque-5 where id = 2;


-- b) Ana Rodrigues comprou os seguintes itens com a vendedora Beatriz Souza Santos

-- - 10 Mangas, 3 Uvas, 5 Mamões, 10 tomates e 2 Acelgas.

insert into pedidos (valor, cliente_cpf, vendedor_cpf) values (6460,63193310034,23262546003)

insert into itens_do_pedido(pedido_id,quantidade,produto_id) values (2, 10,17),(2,3,18),(2,5,1),(2,10,5),(2,2,6);

update produtos set quantidade_em_estoque = quantidade_em_estoque-10 where id = 17;
update produtos set quantidade_em_estoque = quantidade_em_estoque-3 where id = 18;
update produtos set quantidade_em_estoque = quantidade_em_estoque-5 where id = 1;
update produtos set quantidade_em_estoque = quantidade_em_estoque-10 where id = 5;
update produtos set quantidade_em_estoque = quantidade_em_estoque-2 where id = 6;


-- c) Maria da Conceição comprou os seguintes itens com a vendedora Beatriz Souza Santos

-- - 1 Vassoura, 6 Águas sem gás e 5 Mangas.

insert into pedidos (valor, cliente_cpf, vendedor_cpf) values (4120,75670505018,23262546003)

insert into itens_do_pedido(pedido_id,quantidade,produto_id) values (3, 1,13),(3,6,12),(3,5,17);

update produtos set quantidade_em_estoque = quantidade_em_estoque-1 where id = 13;
update produtos set quantidade_em_estoque = quantidade_em_estoque-6 where id = 12;
update produtos set quantidade_em_estoque = quantidade_em_estoque-5 where id = 17;


-- d) Maria da Conceição comprou os seguintes itens com o vendedor Rodrigo Sampaio

-- - 1 Balde para lixo, 6 Uvas, 1 Macarrão parafuso, 3 Mamões, 20 tomates e 2 Acelgas.

insert into pedidos (valor, cliente_cpf, vendedor_cpf) values (9370,75670505018,82539841031)

insert into itens_do_pedido(pedido_id,quantidade,produto_id) values (4, 1,16),(4,6,18),(4,1,7),(4,3,1),(4,20,5),(4,2,6);

update produtos set quantidade_em_estoque = quantidade_em_estoque-1 where id = 16;
update produtos set quantidade_em_estoque = quantidade_em_estoque-6 where id = 18;
update produtos set quantidade_em_estoque = quantidade_em_estoque-1 where id = 7;
update produtos set quantidade_em_estoque = quantidade_em_estoque-3 where id = 1;
update produtos set quantidade_em_estoque = quantidade_em_estoque-20 where id = 5;
update produtos set quantidade_em_estoque = quantidade_em_estoque-2 where id = 6;

-- e) Antonio Oliveira comprou os seguintes itens com o vendedor Rodrigo Sampaio

-- - 8 Uvas, 1 Massa para lasanha, 3 Mangas, 8 tomates e 2 Heinekens 600ml.

insert into pedidos (valor, cliente_cpf, vendedor_cpf) values (8229,67642869061,82539841031)

insert into itens_do_pedido(pedido_id,quantidade,produto_id) values (5, 8,18), (5,1,8),(5,3,17),(5,8,5),(5,2,11);

update produtos set quantidade_em_estoque = quantidade_em_estoque-8 where id = 18;
update produtos set quantidade_em_estoque = quantidade_em_estoque-1 where id = 8;
update produtos set quantidade_em_estoque = quantidade_em_estoque-3 where id = 17;
update produtos set quantidade_em_estoque = quantidade_em_estoque-8 where id = 5;
update produtos set quantidade_em_estoque = quantidade_em_estoque-2 where id = 11;









