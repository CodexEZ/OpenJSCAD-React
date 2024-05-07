# Interactive 3D CAD Renderer with React

To build an interactive 3D renderer using OpenJSCAD with react, to perform the following operations

* Importing primitives for e.g Cube, Cuboid and Sphere
* Changing width, height and depth of the selected shape
* Performing boolean operations on the shapes, such as Union, Subtract and Intersect

## Dependencies
* React
* jscad
* jscad-react

## File Structure
``` my-react-app/```
```├── public/```
```│   ├── index.html```
```│   └── favicon.ico```
```├── src/```
```│   ├── components/```
```│  │   ├── Modify/```
```│   │   │   ├── Modify.css```
```│   │   │   └── Modify.js```
```│   │   ├── Shapes/```
```│   │   │   ├── Shapes.css```
```│   │   │   └── Shapes.js```
```│   │   └── ...```
```│   ├── App.js```
```│   └── index.js```
```├── package.json```
```├── README.md```
```└── ... ```

## Deployment Process

Due to most of jscad libraries having dependency resolution errors deployment requires for the need of force install

1.  ```npm install --force```
2.  ```npm start```

## Component Heirarchy

* App : Top level component responsible for rendering other components
* Env : Contains the components in the 3D rendering environment
* Modify : Input form to modify the various attributes of a shape such as Scale, Rotation and Translation.
* Shapes : Keeps track of the shapes present in the rendering environment, also enables user to select a shape based on its index.

## State Management

* React State is used for state management as it is a single page application




