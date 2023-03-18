# backend-comfortPImongodb
Este repositorio cuenta con un backend para el proyecto de Materia Integradora de Telemática de la Escuela Superior Politécnica del Litoral.
A continuación se darán las instrucciones respectivas para aquellas personas que deseen hacer uso de la API y/o agregar funcionalidad para la continuidad del proyecto integrador.

## Instrucciones
Este backend cuenta con 3 rutas distintas que cumplen con el proposito del proyecto: Guardar la data de los estados y acciones que brinda el modulo de RL, las votaciones de los usuarios y el estado del AC en tiempo real.

### Deploy del servidor

Primero se procede a instalar las dependencias declaradas en el package.json ya que se encuentran ignoradas al momentos de subir cualquier modificación al repositorio

```
npm install
```

Para levantarla en modo desarrollador:

```
npm run dev
```

Para levantar la pagina en modo de producción:

```
npm start
```
### Rutas API y modelos json a enviar:

Ruta API para la realización de la votación:

```
http://[localhost | dominio]:[puerto]/api/v1/votacionComfortRL/votacionComfort
```
