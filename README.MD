#### Hack to use psql without installation  ####

==>  PostgreSQL setup for docker  => docker run --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres

==>  To Use PostgreSQL  => docker exec -it my-postgres1 psql -U postgres -d postgres     (my-postgres1 => is your database name , change it accordingly, This command we use to get our running database)

==> docker ps (shows your running container)

==> docker exec -it ff95a41e5764 /bin/bash  (The ff95... , is yout container id , past it when you change container)

==> psql -h localhost -d postgres -U postgres (after -d is your database,  after -U username)

==> \dt;  (After creating a table this command shows all the tables)