# LibraryProject 0.1

Proyecto hecho por José Carlos Delgado Ramos como parte del proceso de aplicación para Inka Labs.
El proyecto está enteramente hecho como parte FrontEnd, y se realizó con angular, angular-cli y bootstrap.

# Requerimientos
Únicamente angular-cli. Es necesario instalar node (a partir de versión 8.1.4) y npm (a partir de versión 5.0.4). La versión de angular-cli es 1.3.2 y la de angular es 4.3.6.
Se desarrolló en un sistema Arch Linux x64 actualizado a la última en versiones de paquetes y se probó en FreeBSD 11.0 con las versiones anteriormente indicadas. 

# Ejecución
git clone https://github.com/jcdelgadoramos/libraryproject.git
cd libraryproject
npm install
ng build
ng serve
Navegar a http://localhost:4200/.

# Información de la aplicación
Usuario: user
Contraseña: user

# Funcionalidades:
-Autenticación básica de usuario.
-Creación, edición y modificación de información de los libros.
-Búsqueda por autor/título.
-Filtrado por autor/año de publicación.

# Known issues
Login no impide usar el resto de funcionalidades.
Portadas de libros por defecto, la funcionalidad de subida de portadas no está desarrollada.
No existe paginación para los resultados.
Se desactivó el filtro de búsqueda automático por autor/titulo por comportamiento no esperado. Se puede emplear con el botón de búsqueda.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
