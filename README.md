

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

1. Clonar el repositorio:
   ```bash
   git clone <url-del-repo>
   cd retailcompass-challenge
   ```

  2. Instalar las dependencias:
		```bash
		npm install
		```

3. Crear un archivo .env en la raíz del proyecto basado en el archivo .template.env provisto

4. Completar el archivo .env con tu API key o credenciales necesarias:
	```bash
	VITE_API_KEY=tu-api-key-aqui
	```

5. Ejecutar el proyecto en desarrollo
   ```bash
   npm run dev
      ```

6. Podes descomentar las devtools en el componente main.tsx para testear estado de carga, error y fetching de la aplicación

## 📝 Comentarios

### 🔍 SEO y Metadata

Últimamente he estado aprendiendo acerca de SEO y decidí implementar algunas de ellas en index.html para **mejorar la indexación en motores de búsqueda**.

---

### ♿ Accesibilidad

He realizado un curso en Linkedin y en este momento estoy realizando otro en edx (https://learning.edx.org/course/course-v1:W3Cx+WAI0.1x+3T2019/home) aunque no entra en el scope
de esta prueba técnica y por tanto decidí no implementarlo.

---

### 🧪 Testing

Honestamente, hasta el día de hoy **no me ha tocado testear profesionalmente**, pero tengo **muchas ganas e interés en aprender** a hacerlo correctamente.

De todos modos, dejo algunos **tests básicos** que pude realizar leyendo la documentación de **React Testing Library**.





