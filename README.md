# Grupo 06 "LOS BERLINI"
### PUC IIC2513 - Tecnologías y Aplicaciones Web - Repositorio de Proyecto de Curso
## Integrantes

| Nombre                | Email       | Usuario de Github |
|:--------------------- |:-------------|:-------------|
| Santiago Errázuriz | seerrazuriz@uc.cl | [seerrazuriz](https://www.github.com/seerrazuriz) |
| Borja Figueroa | bfigueroa1@uc.cl | [bfigueroa1](https://www.github.com/bfigueroa1) |
| Juan Pablo Ramírez | jpramirez5@uc.cl | [jprampad](https://www.github.com/jprampad) |

## (read me Tarea 3 al final :)

## Descripción de la distribución del repositorio
En la carpeta __documents__ se puede encontrar un pdf que corresponde a las reglas del juego y sus características (entrega 1), un archivo pdf llamado __ER__ que corresponde al diagrama entidad-relación actualizado y un archivo pdf llamado __UML__ que corresponde al diagrama de clases actualizado.

También en el repositorio se encuentra una carpeta llamada __app__ donde están todos los archivos correspondientes a la aplicación, es decir, los html, css e imágenes que utilizamos para implementar la interfaz. Dentro de __app__ está la carpeta con los logos y algunos íconos junto a otras carpetas correspondientes a las vistas de la applicación web con sus respectivos html y css. Algunas de estas carpetas contienen otras carpetas adentro que corresponden a ventanas secundarias. Además, hay dos archivos html y css sueltos que corresponden al index y su respectivo estilo para cuando el usuario está logueado y no logueado (esto es sólo ahora que no podemos utilizar js, luego se dejará como un solo archivo).

## Descripción del proyecto
Durante el semestre trabajaremos en la implementación de un juego que sigue una base de tipo 1: Dominio de territorios y recursos. El juego consiste en un mapa del mundo, donde los jugadores poseeran territorios en los cuales recolectarán recursos, juntaran tropas y construiran armas, vehículos y murallas. Para ganar el juego, cada jugador intentará cumplir un objetivo distinto mediante la conquista de territorios enemigos. Se podrá jugar de 2 a 5 jugadores.

## Tecnologías empleadas
Se ha empleado css y html. Para el mapa se utilizó svg (en forma de coordenadas dentro del html) para que tome forma y que cada territorio se pueda manipular como un elemento por separado.

## ¿Cómo ejecutar la aplicación?
Para ejecutar la aplicación se debe correr el archivo __index.html__ de la carpeta __app__.

## Otros
El recorrido básico que está implementado por ahora en la app es el siguiente:

Se debe ingresar mediante __index.html__, esto lleva al usuario a una página de bienvenida donde se muestra el logo en grande y un pequeño texto de bienvenida. Esta es la interfaz de un usuario no logueado, aquí el usuario podrá leer las reglas del juego en la sección _Rules_ de la _navbar_, leer sobre nosotros en la sección _About Us_, enviarnos un mensaje en _Contact Us_ y registrarse o iniciar sesión. Para volver a la página de bienvenida o index basta con presionar el logo en la esquina superior izquierda.

Para entrar a la interfaz de usuario logueado se debe ir a la vista _Log In_ y presionar el botón _Log In_ que se encuentra en esta página. Este botón redireccionará al usuario a la vista __index logued.html__ donde se mantiene la vista de bienvenida pero se modifica la _navbar_, la forma de volver a la interfaz de usuario no logueado es mediante el botón _Logout_.

En la interfaz de usuario logueado, se puede acceder a los datos del usuario en la sección _Player_, ingresar o crear una sesión de juego en la sección _Game Session_ y ver los datos de la partida en las pestañas _Army_ y _Territories_ (las cuales más adelante
estarán bloqueadas en el caso de que el usuario no se encuentre en una partida). Dentro de la sección _Territories_ el usuario puede seleccionar un territorio e ir a la tienda a comprar recursos para ese territorio y desde la tienda entrar a ver los recursos que ya tiene en el territorio.

La idea es que cuando un usuario es parte de una partida pueda ingresar al mapa para realizar sus jugadas a través de la pestaña _Game Session_. Por ahora, para ingresar a la vista del mapa se debe ingresar a _Game Session_, entrar a _Join Game Session_ y presionar el botón _Join Game_, el cual redireccionará a la ventana del mapa. En mapa, se muestran todos los usuarios con sus nombres en el color de ejército que les tocó o eligieron y la cantidad de territorios actuales que poseen. Cada territorio del mapa es del color del ejército que lo domina. Al realizar hover sobre un territorio este se pondrá en negro y más adelante la idea es que al realizar el hover se muestre bajo el mapa un menú que muestre el nombre del territorio, el usuario que lo domina y la cantidad de aviones, buques y tropas en el territorio; colocamos un menú no funcional como ejemplo (para hover con svg se debe implementar js si se quiere hacer aparecer un div). Al presionar un territorio, se direcciona al usuario hacia la pestaña de territorios, la idea es que más adelante esto lleve directamente a los recursos de este territorio o que marque los posibles territorios a atacar y el usuario pueda realizar su jugada (quizás dejar alguna de estas opciones para el doble click). Finalmente, la vista _Mapa_ hay un botón para enviar la ronda llamado _Send Move_.

Pd: No se modificaron reglas ni características del juego. 

### READ_ME Tarea 3

## Funcionamiento de una jugada

ASPECTOS IMPORTANTES: 
- la jugada esta programado para funcionar SOLO si Egipto ataca a Medio Oriente. 
- ESTA TODA LA INFORMACION DENTRO DEL LOCAL STORAGE
- NO ALCANZAMOS A HABILITAR TODOS LO TERRITORIOS (no es tan necesario pues mas adelante se implementara una base de datos mas amplia).
- LAS MURALLAS SE ACTUALIZAN CUANDO SE RECARGA LA PAGINA.

1) Inicio de sesion: 
   - Al ingresar al index de la pagina se puede acceder a la opcion de "Log In" o de "Sign Up". En el "Sign Up", se solicita la informacion de jugador para crear una cuenta, esta queda almacenada en LocalStorage. Esto te permite ingresar a la vista de "Loged". 
   - Detecta errores y el senisble a mayusculas.

2) Shop: 
   - Al iniciar el juego el la seccion de "Territories" se puede acceder a la Shop donde puedes comprar si tienes los recursos. 
   - SOLO se habilitaron la compra de AVIONES, BUQUES y MURALLAS. 
   - En shop puedes acceder a ver tus recursos, se actualizan correctamente.

3) Mapa:
   - SOLO EGIPTO puede atacar a MEDIO ORIENTE, los otros territorios no estan habilitados.
   - Se puede atacar con tropas, aviones o buques.
   - Las murallas resistes el equivalente al ataque de una tropa.
   - Los aviones y buques atacan el equivaente a 5 tropas.
   - Las murallas aumentan segun se vayan mejorando, se actuliza cuando se refresca la pagina. (asumimos que no es un problema, dado que para cada turno se deberia actualizar la pagina)
   - La funcion de RECOLECTAR esta habilitada y actualiza las tablas de las vistas.
 




