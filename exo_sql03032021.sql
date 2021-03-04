mySql -u root -p;

create database ex03_03_2021;
use ex03_03_2021;

create table departements( DNO int not null auto_increment, DNOM varchar(70), DIR varchar (70), Ville varchar(100));

create table employes(ENO int not null auto_increment, ENOM varchar(70), PROF varchar (50), DATEEMB date, COM int,
SAL int, DNO int, constraint fk_DNO_EMP foreign key DNO_EMP references departements(DNO));

select departements.DNOM, employes.ENOM from departements, employes;

select employes.ENO, departements.DNOM from employes, departements join (employes ENO, departements DNO); 

select employes.nom from employes where employes.ville = 'Boston';

select employes.ENOM, departements.DIR, from employes, departements join (employes.ENO, departements.DNOM) 
where departements.DNO= '1' or '3';

select employes.DNOM, employes.PROF, departements.DNOM, departements.DIR from employes, departements 
join (employes.ENO, departements DNO) where departements.DIR = departements.DNO and departements.DIR='ingénieur';

select employes.SAL, employes.ENOM, employes.PROF from employes where employes.PROF != 'ingénieur' and employes.SAL >
MIN(employes.SAL) order by employe.PROF='ingénieur';
 select employes.SAL, employes.ENOM from employes where sum(employes.SAL) having employes.PROF != 'ingenieur'
 > employes.SAL order by employes.PROF = 'ingénieur';
Select employes.ENOM, departements.DIR from employes, departements join (employes.ENO, departement.DNO)where 
employes.NOM='Jim';

select employes.ENOM, departements.DIR from employes, departements join (employes.ENO, departements.DNO);
select employes.ENOM, employes.DATEEMB, departements.DIR from employes, departements 
Where employes.DATEEMB < employes.DATEEMB and employes,prof != departements.DIR;
select departement.DNO, departement.DNOM, employes.DNO from departement, employes join (departement.DNO, employes.DNO



Donnez les départements qui n'ont pas d'employés
Requête 12:
Donnez les noms des employés du département commercial embauchés le même 
jour qu'un employé du département Production
Requête 13:
Donnez les noms des employés embauchés avant tous les employés du
département 1.
Requête 14:
Donnez les noms des employés ayant le même emploi et le même directeur que
JOE.
