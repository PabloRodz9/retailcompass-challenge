

# 🚀 RetailCompass Challenge

Este proyecto fue desarrollado como parte del proceso de entrevista para RetailCompass. Se trata de una aplicación construida con **React**, **Vite** y **TypeScript**, que utiliza una arquitectura moderna, gestión de estado con Zustand y consumo de APIs con React Query.

## 🛠 Tecnologías principales

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zustand](https://github.com/pmndrs/zustand) para manejo de estado
- [React Query](https://tanstack.com/query/latest) para manejo de asincronía
- [MUI](https://mui.com/) como framework de componentes UI
- [i18next](https://www.i18next.com/) para internacionalización (i18n)
- [Axios](https://axios-http.com/) para realizar solicitudes HTTP
- [MUI X Data Grid](https://mui.com/x/react-data-grid/): Componente para tablas con soporte de paginación, sorting, etc. (Pensando en si fuese necesario extender la funcionalidad de la tabla con, por ejemplo, sorting u otro tipo de filtros que integra la tabla. De otro modo, hubiese usado la tabla nativa de MUI sin instalar otra dependencia)

## 📱 Responsividad

El proyecto está diseñado para ser **100% responsive** y se adapta correctamente a distintos tamaños de pantalla (desktop, tablet, mobile).

## ⚙️ Configuración del entorno

3. Clonar el repositorio:
   ```bash
   git clone <url-del-repo>
   cd retailcompass-challenge
   ```

  4. Instalar las dependencias:
		```bash
		npm install
		```

5. Crear un archivo .env en la raíz del proyecto basado en el archivo .template.env provisto

6. Completar el archivo .env con tu API key o credenciales necesarias:
	```bash
	VITE_API_KEY=tu-api-key-aqui
	```

7. Ejecutar el proyecto en desarrollo
   ```bash
   npm run dev
      ```
