# Anexo Android XML · Express MiniMarket

Este directorio contiene la adaptación a Android de las pantallas de la maqueta:
**inicio de sesión**, **registro de producto** y **estado de error del registro**.
Es un anexo de maquetación: los layouts y recursos están listos para copiarse en un
proyecto de Android Studio, pero **no incluyen la lógica Java/Kotlin** de las actividades.

## Archivos

```text
android/
├── layout/
│   ├── activity_login.xml
│   ├── activity_registro_producto.xml
│   └── activity_registro_producto_error.xml
├── values/
│   ├── colors.xml
│   ├── strings.xml
│   ├── dimens.xml
│   ├── themes.xml
│   └── arrays.xml
└── drawable/
    ├── bg_card.xml
    ├── bg_error.xml
    ├── bg_nav_active.xml
    └── logo_express.png
```

## Cómo integrarlo en Android Studio

1. Crear un proyecto **Empty Views Activity** (Kotlin o Java) con **Material Components**.
2. Copia `layout/*.xml` en `app/src/main/res/layout/`.
3. Copia `values/*.xml` en `app/src/main/res/values/`.
4. Copia `drawable/*` en `app/src/main/res/drawable/`.
5. En `AndroidManifest.xml`, aplica el tema:

   ```xml
   android:theme="@style/Theme.ExpressMiniMarket"
   ```

6. En las actividades, carga los layouts:

   ```kotlin
   setContentView(R.layout.activity_login)
   setContentView(R.layout.activity_registro_producto)
   // Variante con errores visibles:
   setContentView(R.layout.activity_registro_producto_error)
   ```

7. Dependencias necesarias (versiones de referencia):

   ```kotlin
   implementation("com.google.android.material:material:1.12.0")
   implementation("androidx.constraintlayout:constraintlayout:2.1.4")
   implementation("androidx.appcompat:appcompat:1.7.0")
   ```

## Decisiones de adaptación

- **Medidas:** todos los tamaños usan `dp` y `sp`; no hay píxeles fijos.
- **Objetivos táctiles:** botones, campos y elementos de navegación tienen `48dp` de alto mínimo.
- **Textos:** todos los textos visibles están en `strings.xml`; la lista de categorías está en `arrays.xml`.
- **Accesibilidad:** el logo tiene `contentDescription`; los campos usan `TextInputLayout` con `hint`; el botón tiene texto.
- **Navegación:** la barra lateral de la maqueta web se adapta a una navegación horizontal desplazable, más apropiada para móvil. "Productos" queda resaltado en verde.
- **Formulario:** la maqueta web usa dos columnas; en Android el formulario se apila en una columna para evitar campos demasiado estrechos.
- **Estado de error:** `activity_registro_producto_error.xml` muestra el banner rojo general y el error en línea bajo Categoría, igual que la pantalla de referencia.
- **Logo:** `logo_express.png` es el logo real entregado en la carpeta `Material`. Para producción conviene generar versiones `mipmap` en varias densidades.

## Nota

La maqueta HTML es la evidencia principal y funciona en 360, 768 y 1280 px.
Este anexo Android cumple el plus opcional de la guía: layouts XML, `strings.xml`,
`dp`/`sp`, objetivos de 48dp y `contentDescription`.
