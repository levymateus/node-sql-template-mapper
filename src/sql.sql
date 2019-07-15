create database people;

create table country (
    id integer not null auto_increment,
    country varchar(256),
    primary key (id) 
);

create table address (
    id integer not null auto_increment,
    zip integer,
    countryId integer not null,
    primary key (id),
    FOREIGN KEY (countryId)
        REFERENCES country(id)
        ON DELETE CASCADE
);

create table people (
    id integer not null auto_increment,
    firstName varchar(256),
    lastName varchar(256),
    addressId integer not null,
    primary key (id),
    FOREIGN KEY (addressId)
        REFERENCES address(id)
        ON DELETE CASCADE
);

insert into country (country) values ('Brasil');
insert into country (country) values ('Portugal');
insert into country (country) values ('Englaterra');
insert into address (zip, countryId) values (98312000, 1);
insert into people (firstName, lastName, addressId) values ('Joao', 'Silva', 1);
insert into address (zip, countryId) values (13882900, 2);
insert into people (firstName, lastName, addressId) values ('Cristiano', 'Ronaldo', 2);
insert into address (zip, countryId) values (88443300, 3);
insert into people (firstName, lastName, addressId) values ('Jhon', 'Smith', 3);