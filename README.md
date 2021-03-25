# Structure Design Theory

Structure design components follow [React Atomic Design](https://github.com/danilowoz/react-atomic-design)

## Structure components Folder

Project directory components includes:

### atoms

Atoms are the smallest possible components, such as buttons, titles, inputs or event color pallets, animations, and fonts.

They can be applied on any context, globally or within other components and templates, besides having many states, such as this example of button: disabled, hover, different sizes, etc.

### molecules

They are the composition of one or more components of atoms. Here we begin to compose complex components and reuse some of those components. Molecules can have their own properties and create functionalities by using atoms, which don’t have any function or action by themselves.

### organisms

Organisms are the combination of molecules that work together or even with atoms that compose more elaborate interfaces. At this level, the components begin to have the final shape, but they are still ensured to be independent, portable and reusable enough to be reusable in any content.

### templates

In this state we stop composing components and begin to set their context. Moreover, the templates create relationships between the organisms and others components through positions, placements and patterns of the pages but it doesn’t have any style, color or component rendered. That’s why it looks like a wireframe.

### pages

Pages are the navigate parts of the application and it’s where the components are distributed in one specific template. The components get real content and they’re connected with the whole application. At this stage, we can test the efficiency of the design system to analyse if all the components are independent enough or if we need to split them in smaller parts.

## Other folders

### assets

Contain `fonts`, `images` and `styles` for project

### endpoints

Define API endpoints

### i18n

Contain internationalization

### lib

Contain all shared logic, helper

### redux

Contains all files that relates to redux management state

It includes `actions`, `contants`, `lib` (shared logic for redux), `reducers` folders

### typings

If your project uses `typescript`, this folder use to define entity

EX:

```
export interface Model {
  id: number;
  title: string;
}
```
