# Pokémon API Project (Frontend)

Este proyecto consume una api custom de django que se encuentra en un EC2:
- [API Backend](http://18.208.163.231:8000/)
- [Repositorio](https://github.com/devsoriano/pokeapi-django)

## Características

- **Listado de pokemons**
- **Paginación de pokemons**
- **Búsqueda por sección paginada**
- **Uso de Tailwind, Context, Hooks, Axios, entre otras herramientas**

---

## Tecnologías utilizadas

- **Backend**: Django (Separado)
- **Base de datos**: PostgreSQL
- **Caché**: Django Cache (LocMemCache o Redis, según configuración)
- **Docker**: Contenedores para el despliegue
- **Frontend**: Vite + React (separado)

---

## Instalación y configuración

### Requisitos previos

- Node más reciente en el equipo local

### Clonar el repositorio

```bash
git clone https://github.com/devsoriano/pokeapi-react.git
```

### Correr el proyecto

```bash
 npm run dev
```

### Probar en local 
- [Home (Local)](http://localhost:5173/)

  ![image](https://github.com/user-attachments/assets/2f413491-6794-46c9-a177-663359dd1d48)

  ![image](https://github.com/user-attachments/assets/657d90a7-0d1e-4367-ade2-81c5d2dc3b54)

  ![image](https://github.com/user-attachments/assets/12d96ac0-dfec-467b-95ad-12860cac3f65)


### Probar en producción (AWS Cloudfront)
- [Home (Producción)](http://d1z6mn6zxzxr2c.cloudfront.net/)

  ![image](https://github.com/user-attachments/assets/65da3e37-77bd-4bbb-a381-8e22d031283f)

  ![image](https://github.com/user-attachments/assets/01d1a25f-2368-43a5-9c31-046e5b7d6991)

  ![image](https://github.com/user-attachments/assets/9d650df6-63a5-4ad8-9096-698270809d50)



### Mejoras por hacer

- Loading en interacciones de paginado
- Detalles de responsive mínimos
- Certificado ssh 


