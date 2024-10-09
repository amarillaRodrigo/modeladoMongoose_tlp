## Descripción

Este utiliza Mongoose para interactuar con una base de datos MongoDB y almacenar datos sobre las ventas de un comercio de suministros de limpieza

El objetivo es que cada empleado pueda agregar las ventas que realiza de manera individual.

El esquema principal es el de `Employee`, que incluye información sobre el empleado y sus ventas, ademas de las fechas en que se realizaron.

Cabe destacar que las relaciones son embebidas, esto permite que los datos relacionados sean obtenidos en una sola consulta.

Para comprender mejor las relaciones, por favor revisar la imagen que se encuentra en el directorio raiz


## Instalación

Para instalar las dependencias del proyecto, ejecutar el siguiente comando:

```sh
npm install
